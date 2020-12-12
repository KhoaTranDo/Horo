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
  const [fullAddress,setFullAddress]= useState();
  // handle change event of the country dropdown
  const handleCountryChange = (obj) => {
    setCountry(obj);
    setcityList(obj.huyen);
    setcity(null);
    setResult({ ...result, country: obj.name });
     setFullAddress(obj.name);
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
    setFullAddress(obj.name+', '+fullAddress);
  };
  const handleXaChange = (obj) => {
    setXa(obj);
    setLocation(obj.location);
    setResult({ ...result, xa: obj.name });
    setFullAddress(obj.name+', '+fullAddress);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setResult({ ...result, address: e.target.value });
   // setFullAddress(address+', '+fullAddress);
  };
 
  const getPosition = (item) => {
    setPosition(item);
  };

  return (
    <>
    <div className="row">
      <h1>Address:</h1>
        <div className=' col-md-12'>
        <b>Province:</b>
        <Select
          value={country}
          options={data}
          onChange={handleCountryChange}
          getOptionLabel={(x) => x.name}
          getOptionValue={(x) => x.name}
        />
        </div>
        <br />
        <div className='col-md-12'>
        <b>City:</b>
        <Select
          placeholder="Select City"
          value={city}
          options={cityList}
          onChange={handleCityChange}
          getOptionLabel={(x) => x.name}
          getOptionValue={(x) => x.name}
        />
        </div>
        <div className='col-md-12'>
        <b>Dictric:</b>
        <Select
          placeholder="Select Area"
          value={xa}
          options={xaList}
          onChange={handleXaChange}
          getOptionLabel={(x) => x.name}
          getOptionValue={(x) => x.name}
        />
        </div>
      <div className='col-md-12'>
        <span>Address:</span>
        <input type="text" className="form-control" onChange={handleAddress}></input>
        </div>
        <div className='col-md-12'>
        <span>Full Address:</span>
        <input type="text" value={fullAddress} className="form-control" onChange={handleAddress} disabled></input>
        </div>
       
    </div>
      <div className="row">
        <div className="container">
          <AddMap getLocation={location} position={getPosition.bind(this)} />
        </div>
      </div>
      </>
  );
}

export default Address;
