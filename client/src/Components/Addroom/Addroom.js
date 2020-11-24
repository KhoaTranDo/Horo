import Axios from 'axios';
import React, { Component } from 'react'
import './Addstyle.css'
class Addroom extends Component{
    state={
        selectedFile : null
    }
    fileSelectedHandler = e =>{
        console.log(e.target.file[0]);
    }
    fileUpload =()=>{
            Axios.post
    }
    render(){
        return(
            // Div Main
            <div>
                {/* div navbar left */}
                <div>
                <div class="sidenav">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>


                </div>
                {/* div containt */}
                <div>
                    {/* Add image */}
                    <div>
                        <input type='file' onChange={this.fileSelectedHandler}></input>
                        <button onClick={this.fileUpload}>Upload</button>
                    </div>
                    {/* Add address */}
                    <div>

                    </div>
                    {/* Add place detail */}
                    <div>

                    </div>
                    {/* Rental conditions */}
                    <div>

                    </div>
                    {/* Add address on Map */}
                    <div>

                    </div>
                    {/* Rules */}
                    <div>

                    </div>
                    {/* price:*/}
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Addroom