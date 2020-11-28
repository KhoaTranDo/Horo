import React, { useState, useEffect } from "react";
import Select from "react-select/creatable";
import data from './DataAddress.json'
import AddMap from './AddMap'
function Address() {
  const [country, setCountry] = useState(null);
  const [city, setcity] = useState(null);
  const [cityList, setcityList] = useState([]);
  const [xa, setXa] = useState(null);
  const [xaList, setXaList] = useState([]);
 
  // handle change event of the country dropdown
  const handleCountryChange = (obj) => {
    setCountry(obj);
    setcityList(obj.huyen);
    setcity(null); 
  };
 
  // handle change event of the language dropdown
  const handleLanguageChange = (obj) => {
    setcity(obj);
    setXaList(obj.xa);
    setXa(null);
    console.log(obj)
  };
  const handleXaChange = (obj) => {
    setXa(obj);
   
  };
  const handleResult =() => {
   const result ={
     'country':country.name,
     'city':city.name,
     'xa':xa.name,
   }
   console.log(result)
  }
  return (
      <div className='row'>
      <div className="column">
        <b>Province:</b>
        <Select style={{width:'50%'}}
          value={country}
          options={data}
          onChange={handleCountryChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.name}
        />
       
        <br />
        <b>City:</b>
        <Select
          placeholder="Select Language"
          value={city}
          options={cityList}
          onChange={handleLanguageChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.name}
        />
        <b>Dictric:</b>
        <Select
          placeholder="Select Language"
          value={xa}
          options={xaList}
          onChange={handleXaChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.name}
        />
        <button onClick={handleResult}>luu</button>
        <span>Address:</span>
            <input type="text"></input>
      </div>
      <div className='column'>
        <div className='container'>
      <AddMap geo={xa}/>
      </div>
      </div>
    </div>
      
  );
}
 
export default Address;