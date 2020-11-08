import React from 'react'
import Listphoto from './listphoto'

const GalleryGrid = ({gallery,handleClick}) =>{
<<<<<<< HEAD

    return(
        <div className='grid-image'>
            {
                
=======
    return(
        <div style={styles}>
            {
>>>>>>> demo1
               gallery.map((galleri,index) => {
                   return(
                       <Listphoto
                        key={galleri.imgUrl}
                        imgUrl = {galleri.imgUrl}
                        handleClick = {handleClick}
                        index={index}
<<<<<<< HEAD
                        max={gallery.length}
=======
>>>>>>> demo1
                       />
                   )
               })
            }
        </div>
    )
}

<<<<<<< HEAD
=======
const styles = {
    "display": "flex",
    "flexWrap": "wrap",
    height: '40%',
    width: '40%',
    background: 'yellow',
    flexDirection:'row',
    flex:'1',
}
>>>>>>> demo1

export default GalleryGrid