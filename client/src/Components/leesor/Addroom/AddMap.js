import React from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2hvYXRyYW5kbyIsImEiOiJja2VjYjVwaXcwYTRzMnFwM2F1ajRubTZqIn0.lNjQnHcGloiZU3dZ9E_1-w";

export default class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 108.22363,
      lat: 16.07465,
      zoom: 13,
      center: [108.22363, 16.07465],
      location: [],
    };
  }
  //Update data after render componen
  componentWillReceiveProps(nextProps) {
    // this.setState({center:this.props.geo})
    if (nextProps.getLocation != null) {
      //Cut lng lat of data location
      var a = nextProps.getLocation.toString();
      var b = a.slice(0, a.indexOf(","));
      var c = a.slice(a.indexOf(",") + 1);

      //set new value
      this.setState({ center: [c, b] });
      this.setState({ lng: c, lat: b });
      //  this.setState({center:nextProps.geo})
    }
  }
  //set condition if have update
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.getLocation == null) return false;
    if (nextProps.getLocation !== this.props.getLocation) {
      return true;
    }
    return false;
  }

  ControlMap = (map) => {
    var marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([this.state.lng, this.state.lat])
      .addTo(map);

    // Load ban do mac dih
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(5),
        lat: map.getCenter().lat.toFixed(5),
        zoom: map.getZoom().toFixed(3),
      });
    });
    // drag marker
    const onDragEnd = () => {
      var lngLat = marker.getLngLat();
      this.setState({ location: [lngLat.lng, lngLat.lat] });
      this.props.position(this.state.location);
    };

    marker.on("dragend", onDragEnd);
    // Get Current Position
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showAccuracyCircle: false,
      })
    );
    map.on("click", (e) => {
      marker.setLngLat(e.lngLat);
      this.setState({ location: [e.lngLat.lng, e.lngLat.lat] });
      this.props.position(this.state.location);
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        countries: "vn", //Vietnam only
        mapboxgl: mapboxgl,
      }),
      "top-left"
    );
    // Marker
    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    map.on("mouseenter", "places", function (e) {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = "pointer";

      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

    map.on("mouseleave", "places", function () {
      map.getCanvas().style.cursor = "";
      popup.remove();
    });
    //Marker End
    // Add controll
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
  };

  componentDidUpdate() {
    const removeElements = (elms) => elms.forEach((el) => el.remove());

    // Remove Old Map after Load new
    removeElements(document.querySelectorAll(".mapboxgl-canary"));
    removeElements(document.querySelectorAll(".mapboxgl-canvas-container"));
    removeElements(document.querySelectorAll(".mapboxgl-control-container"));

    let map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: this.state.center,
      zoom: this.state.zoom,
    });

    this.ControlMap(map);
  }
  componentDidMount() {
    let map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: this.state.center,
      zoom: this.state.zoom,
    });
    document.getElementsByClassName("mapContainer").ref = (el) =>
      (this.mapContainer = el);
    this.ControlMap(map);
  }
  render() {
    return (
      <>
        <div
          ref={(el) => (this.mapContainer = el)}
          id="mapContainer"
          className="mapContainer"
        />
      </>
    );
  }
}
