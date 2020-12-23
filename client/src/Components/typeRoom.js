import img1 from "./images/haichau.jpg";
import img2 from "./images/nguhanhson.jpg";
import img3 from './images/details-4.jpeg';
import img4 from './images/details-1.jpeg'
import img5 from './images/details-3.jpeg';
import img6 from './images/details-2.jpeg'

export const TypeRoom=[
 { id: 0, image:img1,  value: "all", name: "All of Type" },
 { id: 1,  image:img2, value: "room", name: "Apartment" },
 { id: 2,  image:img3, value: "Full House", name: "Full House" },
 { id: 3,  image:img4, value: "Bedsit", name: "Bedsit" },
 { id: 4,  image:img5, value: "Dorm", name: "Dorm" },
 { id: 5,  image:img6, value: "Flat", name: "Flat" },
];
export const Capacity=[
    { id: 0 , value:1},
    {id: 1, value:2},
    { id: 3 , value:3},
    { id: 4 , value:'>4 people'},
]

export const extend = [
    { id: 1, name: "Wifi" },
    { id: 2, name: "Air-Conditioner" },
    { id: 3, name: "Washing Machine" },
    { id: 4, name: "Television" },
    { id: 5, name: "Parking Space" },
    { id: 4, name: "Balcony" },
    { id: 5, name: "Water Purifier" },
    { id: 4, name: "Microwave" },
    { id: 5, name: "Fridge" },
  ];

export const GenderRules = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];