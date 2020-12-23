import React from 'react'
import Listphoto from './listphoto'

const GalleryGrid = ({gallery,handleClick}) =>{
// Load Gallery

    return(
        <div className='grid-image'>
            {
               gallery.map((galleri,index) => {
                   return(
                       <Listphoto
                        key={index}
                        imgUrl = {`http://localhost:6001/${galleri}`}
                        handleClick = {handleClick}
                        index={index}
                        max={gallery.length}
                       />
                   )
               })
            }
        </div>
    )
}


export default GalleryGrid