import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../Hero'
import Banner from '../Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyleHero from '../StyleHero'
import  NumberFormat from 'react-number-format';

const formatter =new Intl.NumberFormat('en');
export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
          slug: this.props.match.params.slug,
          defaultBcg: defaultBcg
        };
      }
      static contextType = RoomContext;
    
      render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
    
        if (!room) {
          return (
            <div className="error">
              <h3> no such room could be found...</h3>
              <Link to="/rooms" className="btn-primary">
                back to rooms
              </Link>
            </div>
          );
        }
        const {
          name,
          description,
          capacity,
          size,
          price,
          extras,
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
          GacLung,
          images
        } = room;
        const [main, ...defaultImages] = images;
        console.log(defaultImages);
    
        return (
          <>
            <StyleHero img={images[0] || this.state.defaultBcg}>
              <Banner title={`${name} `}>
                <Link to="/rooms" className="btn-primary">
                  back to rooms
                </Link>
              </Banner>
            </StyleHero>
            <section className="single-room">
              <div className="single-room-images">
                {defaultImages.map((item, index) => (
                  <img key={index} src={item} alt={name} />
                ))}
              </div>
              <div className="single-room-info">
                <article className="desc">
                
              <h6>Extras</h6>
              <ul className="extras">
                {extras.map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
              </ul>
            
                </article>
                <article className="info">
                  <h3>info</h3>
                  <h6>{formatter.format(price)} VNĐ</h6>
                  <h6>size : {size} M3</h6>
                  <h6>
                    max capacity :
                    {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                  </h6>
                  <h6>{MayLanh && "Air-Conditioner"}</h6>
                  <h6>{TiVi && "Television"}</h6>
                  <h6>{MayGiat && "Washing Machine"}</h6>
                  <h6>{ChoDeXe && "Parking Space"}</h6>
                  <h6>{CuaSo && "Window"}</h6>
                  <h6>{BanCong && "Balcony"}</h6>
                  <h6>{MayLocNuoc && "Water Purifier"}</h6>
                  <h6>{LoViSong && "Microwave"}</h6>
                  <h6>{BepGa && "Gas Stove"}</h6>
                  <h6>{GacLung && "Mezzanine"}</h6>
                  <h6>{TuLanh && "Fridge"}</h6>
          
                </article>
              </div>
            </section>
            <section className="room-extras">
              <h6>Details</h6>
              <ul className="details">
                {description.map((item, index) => (
                  <li key={index}>- {item}</li>
                ))}
              </ul>
            </section>
          </>
        );
      }
}
