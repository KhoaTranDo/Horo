import React, { useState, useEffect } from "react";
import Select from "react-select/creatable";
import data from "./DataAddress.json";
import AddMap from "./AddMap";
function Address(props) {
  const [country, setCountry] = useState(null);
  const [city, setcity] = useState(null);
  const [cityList, setcityList] = useState([]);
  const [xa, setXa] = useState(null);
  const [xaList, setXaList] = useState([]);
  const [location, setLocation] = useState(null);
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState(null);
  const [result, setResult] = useState(null);
  // handle change event of the country dropdown
  const handleCountryChange = (obj) => {
    setCountry(obj);
    setcityList(obj.huyen);
    setcity(null);
    setResult({ ...result, country: obj.name });
  };
  useEffect(() => {
    setResult({ ...result, location: position });
    props.address(result);
  }, [position,address]);
  // handle change event of the language dropdown
  const handleCityChange = (obj) => {
    setcity(obj);
    setXaList(obj.xa);
    setXa(null);
    setResult({ ...result, City: obj.name });
  };
  const handleXaChange = (obj) => {
    setXa(obj);
    setLocation(obj.location);
    setResult({ ...result, xa: obj.name });
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setResult({ ...result, address: e.target.value });
    console.log(address);
  };
 
  const getPosition = (item) => {
    setPosition(item);
  };

  return (
    <div className="row">
      <div className="column">
        <b>Province:</b>
        <Select
          style={{ width: "50%" }}
          value={country}
          options={data}
          onChange={handleCountryChange}
          getOptionLabel={(x) => x.name}
          getOptionValue={(x) => x.name}
        />

        <br />
        <b>City:</b>
        <Select
          placeholder="Select City"
          value={city}
          options={cityList}
          onChange={handleCityChange}
          getOptionLabel={(x) => x.name}
          getOptionValue={(x) => x.name}
        />
        <b>Dictric:</b>
        <Select
          placeholder="Select Area"
          value={xa}
          options={xaList}
          onChange={handleXaChange}
          getOptionLabel={(x) => x.name}
          getOptionValue={(x) => x.name}
        />
        <span>Address:</span>
        <input type="text" className="form-control" onChange={handleAddress}></input>
      </div>
      <div className="column">
        <div className="container">
          <AddMap getLocation={location} position={getPosition.bind(this)} />
        </div>
      </div>
    </div>
  );
}

export default Address;
