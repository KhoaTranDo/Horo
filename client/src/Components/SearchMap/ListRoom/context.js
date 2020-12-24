import React, {createContext, Component } from 'react'
import items from './data'
import TypeRoom from "../../typeRoom";
const RoomContext= createContext()

export default class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 100,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        MayLanh: false ,
        TiVi: false ,
        MayGiat: false ,
        ChoDeXe: false ,
        CuaSo: false ,
        BanCong: false , 
        MayLocNuoc: false ,
        LoViSong: false ,
        BepGa: false ,
        GacLung: false,
        TuLanh: false 
    
    };

    componentDidMount() {
        // this.getData();
        let rooms = this.formatData(items);
        
        let maxPrice = 5000000;
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
          rooms,       
          sortedRooms: rooms,
          loading: false,
          price: maxPrice,
          maxPrice,
          maxSize
        });
      }
    formatData(items)
    {
        let tempItems =items.map(item => {
            let id=item.sys.id
            let images= item.fields.images.map(image => image.fields.file.url);
            let room={...item.fields,images,id}
            return room;
        });
        return tempItems;
    }

    getRoom =(slug) =>{
        let tempRooms =[...this.state.rooms];
        const room=tempRooms.find(room =>room.slug===slug);
        return room;
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
        console.log(name, value,target.type);
    
        this.setState(
          {
            [name]: value
          },
          this.filterRooms
        );
      };
      
      filterRooms = () => {
        let {
          rooms,
          capacity,
          price,
          minSize,
          maxSize,       
        } = this.state;
    
        let tempRooms = [...rooms];
        // transform values
        // get capacity
        capacity = parseInt(capacity);
        price = parseInt(price);

        this.setState({
          sortedRooms: tempRooms
        });
      };
      render() {
        return (
          <RoomContext.Provider
            value={{
              ...this.state,
              getRoom: this.getRoom,
              handleChange: this.handleChange
            }}
          >
            {this.props.children}
          </RoomContext.Provider>
        );
      }
    }
        const RoomConsumer=RoomContext.Consumer;
        export { RoomProvider, RoomConsumer, RoomContext };
        export function withRoomConsumer(Component) {
        return function ConsumerWrapper(props) {
          return (
            <RoomConsumer>
              {value => <Component {...props} context={value} />}
            </RoomConsumer>
          );
        };
}


