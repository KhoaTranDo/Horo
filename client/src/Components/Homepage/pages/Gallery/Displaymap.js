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
      location:[]
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location !== nextProps.location;    
  }
  componentWillUpdate(nextProps){
    // this.setState({location:nextProps.location})
    let map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: nextProps.location,
      zoom: this.state.zoom,
    });
    const getStore = () => {
      // Render on Map
      const stores = [
        {
          link: "",
          type: "Feature",
          properties: {
            description: "",
          },
          geometry: {
            type: "Point",
            coordinates: [this.props.location[0], this.props.location[1]],
          },
        },
      ];

      return stores;
    };
    map.on("load", function () {
      map.loadImage(markerIcon, function (error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        map.addSource("places", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: getStore(),
          },
        });
        map.addLayer({
          id: "points",
          type: "symbol",
          source: "places",
          layout: {
            "icon-image": "custom-marker",
            "icon-allow-overlap": true,
            "icon-size": 0.1,
          },
        });
      });
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
