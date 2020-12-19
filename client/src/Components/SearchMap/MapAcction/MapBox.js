import React from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./Mapstyle.css";
import axios from "axios";

import markerIcon from "../img/marker.png";
mapboxgl.accessToken =
  "pk.eyJ1Ijoia2hvYXRyYW5kbyIsImEiOiJja2lsN2RuOXQwMmlzMndwM250eDd6cXQ5In0.pHcPyhmSVW8Uh3WVGepnBA";
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
   
   };
export default class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 108.22363,
      lat: 16.07465,
      zoom: 13,
      Stores: "",
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:6001/room/PostAllRoom")
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => console.log(err));

    const getStore = () => {
      const stores = this.state.data.map((room) => {
        return {
          link: room.id,
          type: "Feature",
          properties: {
            description:
              `<img src="http://localhost:6001/${room.properties.image[0]}"  width="100%"></img>` +
              `<a href='/rooms/detail/${room.properties.slug}' class='Link-detail-news''><h3>${room.properties.address.address}</h3></a>` +
              formatNumber(room.properties.prices) +
              " VND",
          },
          geometry: {
            type: "Point",
            coordinates: [
              room.properties.address.location[0],
              room.properties.address.location[1],
            ],
          },
        };
      });
      return stores;
    };
    // console.log(getStore());
    let map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    // Search on Map

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        countries: "vn", //Vietnam only
        mapboxgl: mapboxgl,
      }),
      "top-left"
    );
    // document.getElementById("search").appendChild(search.onAdd(map));
    // Action move on map
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(5),
        lat: map.getCenter().lat.toFixed(5),
        zoom: map.getZoom().toFixed(3),
      });
    });

    // Get Current Position
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showAccuracyCircle: true,
      })
    );
    // Load room on database
    map.on("load", function () {
      map.loadImage(
        markerIcon,
        // Add an image to use as a custom marker
        function (error, image) {
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
            id: "places",
            type: "symbol",
            source: "places",
            layout: {
              "icon-image": "custom-marker",
              "icon-allow-overlap": true,
              "icon-size": 0.1,
            },
          });
        }
      );
    });
    // Marker
    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: true,
    });
    //Hover Marker
    map.on("click", "places", function (e) {
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
    map.on("click", function (e) {});

    //Marker End
    // Add controll
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
  }

  render() {
    return (
      <>
        <div className="container">
          <div
            ref={(el) => (this.mapContainer = el)}
            className="mapContainer"
          />
        </div>
      </>
    );
  }
}
