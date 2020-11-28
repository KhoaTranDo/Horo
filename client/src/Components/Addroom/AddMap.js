import React from "react";
import ReactDOM from "react-dom";
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
    };
  }

  componentDidMount() {
    let map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
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

    function onDragEnd() {
      var lngLat = marker.getLngLat();
      console.log(lngLat);
    }

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
    map.on("click", function (e) {
      marker.setLngLat(e.lngLat);
      console.log(e.lngLat);
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
  }

  render() {
    return (
      <>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </>
    );
  }
}
