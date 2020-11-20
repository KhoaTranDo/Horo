import React,{ useContext } from "react";
import { RoomContext } from "./context";
import Title from "./Title";
import  NumberFormat from 'react-number-format';

const formatter =new Intl.NumberFormat('en');

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  
  const context= useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    MayLanh,
    TiVi,
    MayGiat,
    ChoDeXe,
    CuaSo,
    BanCong,
    MayLocNuoc,
    LoViSong,
    BepGa,
    TuLanh,
    GacLung
  } = context;

  //types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
 
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        
        {/* room price */}

      


        <div className="form-group">
          <label htmlFor="price">room price {formatter.format(price)} VNĐ</label>  
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            step={500000}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              min={0}
              step={10}
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              step={10}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="MayLanh"
              id="MayLanh"
              checked={MayLanh}
              onChange={handleChange}
            />
            <label htmlFor="MayLanh">Air-Conditioner</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="TiVi"
              id="TiVi"
              checked={TiVi}
              onChange={handleChange}
            />
            <label htmlFor="TiVi">Television</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="MayGiat"
              id="MayGiat"
              checked={MayGiat}
              onChange={handleChange}
            />
            <label htmlFor="MayGiat">Washing Machine</label>
          </div>
          
          <div className="single-extra">
            <input
              type="checkbox"
              name="ChoDeXe"
              id="ChoDeXe"
              checked={ChoDeXe}
              onChange={handleChange}
            />
            <label htmlFor="ChoDeXe">Parking Space</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="CuaSo"
              id="CuaSo"
              checked={CuaSo}
              onChange={handleChange}
            />
            <label htmlFor="CuaSo">Window</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="BanCong"
              id="BanCong"
              checked={BanCong}
              onChange={handleChange}
            />
            <label htmlFor="BanCong">Balcony</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="MayLocNuoc"
              id="MayLocNuoc"
              checked={MayLocNuoc}
              onChange={handleChange}
            />
            <label htmlFor="MayLocNuoc">Water Purifier</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="LoViSong"
              id="LoViSong"
              checked={LoViSong}
              onChange={handleChange}
            />
            <label htmlFor="LoViSong">Microwave</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="BepGa"
              id="BepGa"
              checked={BepGa}
              onChange={handleChange}
            />
            <label htmlFor="BepGa">Gas stove</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="GacLung"
              id="GacLung"
              checked={GacLung}
              onChange={handleChange}
            />
            <label htmlFor="GacLung">Mezzanine</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="TuLanh"
              id="TuLanh"
              checked={TuLanh}
              onChange={handleChange}
            />
            <label htmlFor="TuLanh">Fridge</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
