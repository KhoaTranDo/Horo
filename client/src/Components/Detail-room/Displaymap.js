import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken =
  "pk.eyJ1Ijoia2hvYXRyYW5kbyIsImEiOiJja2VjYjVwaXcwYTRzMnFwM2F1ajRubTZqIn0.lNjQnHcGloiZU3dZ9E_1-w";
// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });
export default class DisplayMapClass extends React.Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {
        lng: 108.22363,
        lat: 16.07465,
        zoom: 13
        };
        }
        componentDidMount() {
            let map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
            });
            // Load ban do mac dih
            map.on('move', () => {
                this.setState({
                lng: map.getCenter().lng.toFixed(5),
                lat: map.getCenter().lat.toFixed(5),
                zoom: map.getZoom().toFixed(3)
                });
                });   
            }
        currentPoint=()=>{
            // Bat chuwc nawng quet
                navigator.geolocation.getCurrentPosition((position) => {
                  let map = new mapboxgl.Map({
                    container: this.mapContainer,
                    style: "mapbox://styles/mapbox/streets-v11",
                    center: [position.coords.longitude, position.coords.latitude],
                    zoom: 15,
                  });
                
                  var marker = new mapboxgl.Marker()
                    .setLngLat([position.coords.longitude, position.coords.latitude])
                    .addTo(map);
                });
    
        }
    render(){
        return(
            <div style={{width:'50%',height:'500px'}}>
            <div className='sidebarStyle'>
            <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
            <div><button type='text' placeholder='Dau la dau' onClick={this.currentPoint}></button></div>
            </div>
            <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
            )
    }
=======
  constructor(props) {
    super(props);
    this.state = {
      lng: 108.22363,
      lat: 16.07465,
      zoom: 13,
    };
>>>>>>> 8233be0a16398ad03e25436c422052742a3f4962
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
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
