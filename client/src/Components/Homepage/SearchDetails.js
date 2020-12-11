import React, { Component } from 'react';
import { RoomConsumer } from "./context";
import { Link } from "react-router-dom";
import items from "./data";

class SearchDetails  extends Component {
    state={
        roooms: ''
    };
    findTrack =(dispatch,e) => {
        e.preventDefault();

    let rooms = this.formatData(items);
    this.setState({
      rooms,
    });
    this.setState({rooms:''});
    }
    formatData(items) {
        let tempItems = items.map((item) => {
          let id = item.sys.id;
          let images = item.fields.images.map((image) => image.fields.file.url);
          let room = { ...item.fields, images, id };
          return room;
        });
        return tempItems;
      }
      handleChange = (event) => {
        const target = event.target;
        const name = event.target.name;
        console.log(name, target.type);
    
        
      };
      filterRooms = () => {
        let {
          rooms,} = this.state;

          let tempRooms = [...rooms];
        };
    

    render() {
        return (
            
                <RoomConsumer>
                    {value => {
                       const {dispatch}=value;
                        return (      
                            <form className="searchform cf" style={{ display: "flex" }} on onSubmit={this.findTrack.bind(this,dispatch)}>
                                <input type="text" placeholder="Is it me you’re looking for?" 
                                name="rooms"
                                />
                                <Link to="/searchmap">
                                <button type="submit">Search</button>
                                </Link>
                            </form>      
                        );
                    }
                    }
                </RoomConsumer>  
        );
    }
}
export default SearchDetails;
