import React from "react";
import mapboxgl from "mapbox-gl";
import markerIcon from "../../images/img/marker.png";
mapboxgl.accessToken =
  "pk.eyJ1Ijoia2hvYTgxMiIsImEiOiJja2ltamhmc3owdHQ2MnlxaXpzNzVzczQ0In0.lunzbuC8Lii8pl_Ktfv3UA";
export default class DisplayMapClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 108.22363,
      lat: 16.07465,
      zoom: 13,
    };
  }
  componentWillReceiveProps(){
    console.log(this.props.location[0])
    //this.setState={lng:this.props.location[0]}
    
  }
  componentDidMount() {
    console.log(this.state)
    let map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    map.on("load", function () {
      map.loadImage(
        markerIcon,
        function (error, image) {
          if (error) throw error;
          map.addImage("marker", image);
          map.addSource("point", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [108.22363,16.07465]
                  },
                },
              ],
            },
          });
          map.addLayer({
            id: "points",
            type: "symbol",
            source: "point",
            layout: {
              "icon-image": "marker",
              "icon-size": 0.1,
            },
          });
        }
      );
    });
  
    // Load ban do mac dih
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(5),
        lat: map.getCenter().lat.toFixed(5),
        zoom: map.getZoom().toFixed(3),
      });
    });
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }

  render() {
    return (
      <div style={{ width: "30%", height: "500px" }}>
        <div className="sidebarStyle"></div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
