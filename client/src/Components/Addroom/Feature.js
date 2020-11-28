import React from 'react';
import chroma from 'chroma-js';
//npm i chroma-js
import Select from 'react-select';
 const colourOptions = [
    { value: 'ocean', label: 'Air-Conditioner', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Television', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Washing Machine', color: '#5243AA' },
    { value: 'red', label: 'Television', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];
  const extend = [
    { id: 1, name: "Wifi" },
    { id: 2, name: "Show" },
    { id: 3, name: "Kitchen" },
    { id: 4, name: "Dorm" },
    { id: 5, name: "Flat" },
  ];
const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

export default () => (
  <Select
    closeMenuOnSelect={false}
   
    isMulti
    options={colourOptions}
    styles={colourStyles}
  />
);
