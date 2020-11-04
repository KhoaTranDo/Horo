import React from 'react'
import Listphoto from './listphoto'

const GalleryGrid = ({gallery,handleClick}) =>{
    return(
        <div style={styles}>
            {
               gallery.map((galleri,index) => {
                   return(
                       <Listphoto
                        key={galleri.imgUrl}
                        imgUrl = {galleri.imgUrl}
                        handleClick = {handleClick}
                        index={index}
                       />
                   )
               })
            }
        </div>
    )
}

const styles = {
    "display": "flex",
    "flexWrap": "wrap",
    height: '40%',
    width: '40%',
    background: 'yellow',
    flexDirection:'row',
    flex:'1',
}

export default GalleryGrid