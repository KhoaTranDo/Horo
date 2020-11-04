import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import {Carousel} from 'react-bootstrap'

export function Gallery (){
    const [data, setData] = useState([]);
  
    //Get Ads from Json Nodejs
    useEffect(() => {
      axios
      .get('http://localhost:6001/Add')
      .then((res) => {
         setData(res.data)
       })
       .catch((err) => console.log(err));
      },[]);
    return (
        <Carousel >
        {
          data.map((i,index)=>{
            return (
              <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={i.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{i.title}</h3>
                <p>{i.describe}</p>
              </Carousel.Caption>
            </Carousel.Item>
            )
          })
        }
</Carousel>
    )
}