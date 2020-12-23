import React, { useContext } from "react";
import { RoomContext } from "./context";
import Extras from "./Extras";
import NumberFormat from "react-number-format";
import './Sliderbar.css'
import {TypeRoom} from "../../typeRoom";
import {Capacity} from "../../typeRoom";
const formatter = new Intl.NumberFormat("en");

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
  } = context;

  //types
  let types = getUnique(rooms, "type");

  types = TypeRoom.map((item, index) => (
    <option key={index} value={item.value}>
      {item.name}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = Capacity.map((item, index) => (
    <option key={index} value={item.value}>
      {item.value}
    </option>
  ));
  return (
    <>
    {/* <section className="filter-container"> */}
 
      <form>
        {/* select type */}
        <div>
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
            <label htmlFor="capacity">Capacity</label>
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
            <label htmlFor="price">
              room price {formatter.format(price)} VNĐ
            </label>
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
        </div>
        {/* extras */}
        <Extras />
        {/* end of extras type */}
      </form>
    {/* </section> */}
    
    </>
  );
};

export default RoomsFilter;
