import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../Hero'
import Banner from '../Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../RoomContext'
import StyleHero from '../StyleHero'


export default class SingleRoom extends Component {
    constructor(props)
    {
        super(props);
        console.log(this.props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType =RoomContext;

    render() {
        const {getRoom} =this.context;
        const room=getRoom(this.state.slug);
        console.log(room);
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
        const {name,description,size,price,images,extras,capacity}=room;
        return 
        (
        <>
        <StyleHero img={images[0]|| this.state.defaultBcg}>
            <Banner title={`${name} VNĐ room`}>
                <Link to='/rooms'className="btn-primary"> 
                    Back to rooms
                </Link>
            </Banner>
        </StyleHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          </section>
        </>
        );
    }
}
