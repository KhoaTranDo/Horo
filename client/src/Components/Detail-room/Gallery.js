import React, { Component } from 'react'
import ActiveGallery from './ActiveGallery'
import GalleryGrid from './galleryGrid'
import axios from 'axios'

export default class Gallery extends Component{
    state = {
        gallery: [],
        activeIndex: 0
    }
    componentDidMount(){
        axios.get('https://gist.githubusercontent.com/DZuz14/56b7f363e9787fb4c0240eb145bc2b9f/raw/e0b67d18352704d155929b7e27e0dae08cc383b6/data.json')
        .then(res =>{
            this.setState({gallery: res.data.thumbnails})    
        })
       
    }
    renderGallery = () => {
        const {gallery,activeIndex,wait} = this.state
        setTimeout(() => {
            if(activeIndex <gallery.length-1){
            this.setState({activeIndex: activeIndex+1 });
            console.log(activeIndex)
            }
            else if(activeIndex === gallery.length-1){
            this.setState({activeIndex: 0});
            console.log(activeIndex)
            }
          }, 1000);
        if(gallery.length){
            return(
                <>
                <ActiveGallery  
                activeGallery = {gallery[activeIndex]}
                />
                
                <GalleryGrid
                gallery = {gallery}
                handleClick={this.handleClick}
                
            />
            </>

            )
        }
        return null
    }

    renderTextContext = () => {
        const {gallery,activeIndex} = this.state

        if(gallery.length){
            return(
                <>
                    {/* <h1>{gallery[activeIndex].title}</h1>
                    <p>{gallery[activeIndex].body}</p> */}
                    <h1>{gallery[activeIndex].title}</h1><br></br>
                    <p>{gallery[activeIndex].body}</p>
                </>
            )
        }
    }

    handleClick = (e) =>{
      
        const newActiveIndex=e.target.getAttribute('data-index')
        this.setState({activeIndex:newActiveIndex})
    }

    render(){
        return(
            
            <div style={GalleryStyles}>
                {/* Left Side */}
               
                     {this.renderGallery()}                   
            </div>
        )
    }
}

const GalleryStyles ={
    background: '#ddd',
    height: '500px',
    width:'1024px',
    margin:'40px auto',
    marginTop:'150px',
    display: 'flex'
}