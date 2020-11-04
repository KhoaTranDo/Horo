// src/DisplayMapClass.js
import * as React from "react";
const H = window.H;

class DisplayMapClass extends React.Component {
  mapRef = React.createRef();

  state = {

    map: null,
  };
  componentDidMount() {
    const platform = new H.service.Platform({
      apikey: "YNatC-8PGm5sqPTHare0Ut66C_cGmirpLC22eJXlckY",
    });

    //var myPosition
    var myPosition = { lat: 16.07465, lng: 108.22363 };

    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        // This map is centered over Europe
        center: myPosition,
        zoom: 14,
      }
    );
    map.getViewModel().setLookAtData({
      tilt: 20, //Goc nghien
      heading: 180, //Phuong huong
    });
    //Get icon when tap on map
    let imagIcon = new H.map.icon('./img/marker.png', {
      size: { w: 36, h: 36 },
    });
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    // This variable is unused and is present for explanatory purposes
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components to allow the user to interact with them
    // This variable is unused
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    this.setState({ map });
  
  const getBrowserPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        //print position
        //console.log(position.coords);

        //get icon current location
        var currentLocation = './img/Positon.png';

        //get current position
        let browserPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        //Call Icon
        let posIcon = new H.map.Icon(currentLocation, {
          size: { w: 56, h: 56 },
        });
        //Create a point on map
        let marker = new H.map.Marker(browserPosition, { icon: posIcon });
        //add this location to a map
        Map.addObject(marker);
        //Move map to this location
        Map.setCenter(browserPosition);

        //drawcircle
        var circle = new H.Map.Circle(browserPosition, 1000, {
          style: circleStyle,
        });
        Map.addObject(circle);
      });
    } else {
      alert("Geolocation is not supported by this browser!");
    }
    //   function click
    function clickToMark() {
      // Add event listener:
      Map.addEventListener("tap", function (evt) {
        // Tap on a map event
        // Log 'tap' and 'mouse' events
        //console.log(evt);

        //if have market show information
        if (evt.target instanceof H.Map.Marker) {
          // Create an info bubble object at a specific geographic location:
          var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
            content: evt.target.getData(),
          });

          // Add info bubble to the UI:
          ui.addBubble(bubble);
        } else {
          //Get lat and lng a location tap on map
          let pointer = evt.currentPointer;
          console.log(Map.screenToGeo(pointer.viewportX, pointer.viewportY));
          let pointerPosition = Map.screenToGeo(
            pointer.viewportX,
            pointer.viewportY
          );
          let pointerMarker = new H.Map.Marker(pointerPosition, {
            icon: imagIcon,
            volatility: true,
          });
          //Apply move this position
          pointerMarker.draggable = true;

          pointerMarker.setData(
            '<h1>Room1</h1><img src="http://t0.gstatic.com/images?q=tbn:ANd9GcTciklwLOm3a61C04yphfi9W34xt2UJvvGwcS73mqClLfuTIXniA1ZiO_SdxycNrCt6gl9e6ZApB7PNDpn4t_4" alt="Girl in a jacket" width="100" height="110">'
          );

          Map.addObject(pointerMarker);
        }
      });
    }
    //drag position
    function clickDragMarkers() {
      // disable the default draggability of the underlying map
      // and calculate the offset between mouse and target's position
      // when starting to drag a marker object:
      Map.addEventListener(
        "dragstart",
        function (ev) {
          var target = ev.target,
          pointer = ev.currentPointer;
          if (target instanceof H.Map.Marker) {
            var targetPosition = map.geoToScreen(target.getGeometry());
            target["offset"] = new H.math.Point(
              pointer.viewportX - targetPosition.x,
              pointer.viewportY - targetPosition.y
              );
              behavior.disable();
            }
          },
          false
          );
          
      // re-enable the default draggability of the underlying map
      // when dragging has completed
      Map.addEventListener(
        "dragend",
        function (ev) {
          var target = ev.target;
          if (target instanceof H.Map.Marker) {
            // //drawcircle
            //   var circle = new H.map.Circle(ev.target.getGeometry(),1000,{style: circleStyle});
            //   map.addObject(circle);
            
            behavior.enable();
          }
        },
        false
        );
        
        // Listen to the drag event and move the position of the marker
        // as necessary
      Map.addEventListener(
        "drag",
        function (ev) {
          var target = ev.target,
          pointer = ev.currentPointer;
          if (target instanceof H.Map.Marker) {
            target.setGeometry(
              Map.screenToGeo(
                pointer.viewportX - target["offset"].x,
                pointer.viewportY - target["offset"].y
                )
                );
              }
        },
        false
        );
        
      }
      getBrowserPosition();
      
    };
    //   this.clickToMark();
    //   this.clickDragMarkers();
// }
}
componentWillUnmount() {
  // Cleanup after the map to avoid memory leaks when this component exits the page
  this.state.map.dispose();
  
}

  render() {
    return (
      // Set a height on the map so it will display
      <div ref={this.mapRef} style={{ height: "500px" }} />
    );
  }
}

var circleStyle = {
  fillColor: "RGBA(153, 233, 242, 0.5)",
  strokeColor: "RGB(11, 114, 133)",
  lineWidth: 3,
};
export default DisplayMapClass;
