import React, { createContext, Component } from "react";
import items from "./data";
const reducer =(state,action)=>{
  switch(action.type){
    case 'SEARCH_TRACKS':
    return {
      rooms: action.payload,
      type: 'Search Results'
    };
    default:
      return state;
  }
}

// Call Data
const RoomContext = createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    dispath: action =>this.setState(state=> reducer(state,action)),
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    MayLanh: false,
    TiVi: false,
    MayGiat: false,
    ChoDeXe: false,
    CuaSo: false,
    BanCong: false,
    MayLocNuoc: false,
    LoViSong: false,
    BepGa: false,
    GacLung: false,
    TuLanh: false,
  };

  componentDidMount() {
    // this.getData();
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);

    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,

      price: maxPrice,
      maxPrice,
      maxSize,
    });
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

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    console.log(name, value, target.type);

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
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
      GacLung,
      TuLanh,
    } = this.state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    //extras
    if (MayLanh) {
      tempRooms = tempRooms.filter((room) => room.MayLanh === true);
    }

    if (TiVi) {
      tempRooms = tempRooms.filter((room) => room.TiVi === true);
    }

    if (MayGiat) {
      tempRooms = tempRooms.filter((room) => room.MayGiat === true);
    }

    if (ChoDeXe) {
      tempRooms = tempRooms.filter((room) => room.ChoDeXe === true);
    }
    if (CuaSo) {
      tempRooms = tempRooms.filter((room) => room.CuaSo === true);
    }
    if (BanCong) {
      tempRooms = tempRooms.filter((room) => room.BanCong === true);
    }
    if (MayLocNuoc) {
      tempRooms = tempRooms.filter((room) => room.MayLocNuoc === true);
    }
    if (LoViSong) {
      tempRooms = tempRooms.filter((room) => room.LoViSong === true);
    }
    if (BepGa) {
      tempRooms = tempRooms.filter((room) => room.BepGa === true);
    }
    if (GacLung) {
      tempRooms = tempRooms.filter((room) => room.GacLung === true);
    }
    if (TuLanh) {
      tempRooms = tempRooms.filter((room) => room.TuLanh === true);
    }

    this.setState({
      sortedRooms: tempRooms,
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
