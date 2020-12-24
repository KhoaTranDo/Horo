import React from "react";
import { withRoomConsumer } from "./context";

import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

function RoomContainer({ context }) {
  const {rooms} = context;

  return (
    <>
    <div style={style1}>
      <div className='col-3 mt-3'>
      <RoomsFilter rooms={rooms} />
      </div>
      <div className='col-9'>
      <RoomsList rooms={rooms} />
      </div>
      </div>
    </>
  );
}
const style1={
  display: 'flex',
  marginTop:'20px'
}

export default withRoomConsumer(RoomContainer);
