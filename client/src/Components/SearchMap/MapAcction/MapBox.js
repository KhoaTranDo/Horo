import React from "react";
// import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./Mapstyle.css";
import data from '../ListRoom/data'
// import context from "react-bootstrap/esm/AccordionContext";
// import Room from "../ListRoom/Room";

import markerIcon from '../img/marker.png'
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
   
    // Load ban do mac dih
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(5),
        lat: map.getCenter().lat.toFixed(5),
        zoom: map.getZoom().toFixed(3),
      });
    });
  
    // Search map
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        countries: "vn", //Vietnam only
        mapboxgl: mapboxgl,
      }),
      "top-left"
    );
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
      console.log("A click event has occurred at " + e.lngLat);
    });
    
    // data
    data.map((Room)=>{

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
              features: [
                {
                  type: "Feature",
                  properties: {
                    description:
                    data[0].fields.description[4],
                  },
                  geometry: 
                    data[0].fields.geometry
                   
                  
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                    data[1].fields.description[4],
                  },
                  geometry: 
                    data[1].fields.geometry
                   
                  
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                    data[2].fields.description[4],
                  },
                  geometry: 
                    data[2].fields.geometry
                   
                  
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                    data[3].fields.description[4],
                  },
                  geometry: 
                    data[3].fields.geometry
                  
                  
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                    data[4].fields.description[4],
                  },
                  geometry: 
                    data[4].fields.geometry
                   
                  
                },
              ],
            },
          });
          map.addLayer({
            id: "places",
            type: "symbol",
            source: "places",
            layout: {
              "icon-image": "custom-marker",
              "icon-allow-overlap": true,
            },
          });
        }
      );
    });
  })
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
    console.log( data[0].fields.properties)
    return (
      <div className="container">
        <div>
          Longitude: {this.state.lng}|Latitude: {this.state.lat}|Zoom:{" "}
          {this.state.zoom}
        </div>
        <div>
          <button
            type="text"
            placeholder="Dau la dau"
            onClick={this.currentPoint}
          ></button>
        </div>

        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
