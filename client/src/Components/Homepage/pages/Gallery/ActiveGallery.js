import React from 'react'
// Click image show to main galerry
const ActiveGallery = ({activeGallery}) =>{
    return(
        <div className='acive-image'>
              <img src={`http://localhost:6001/${activeGallery}`}  className='acive-image' alt=''/>        
        </div>
    )
}

export default ActiveGallery