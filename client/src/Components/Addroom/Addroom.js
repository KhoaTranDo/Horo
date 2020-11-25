
import React, { Component } from 'react'
import './Addstyle.css'
class Addroom extends Component{
    state={
        selectedFile : null
    }
    fileSelectedHandler = e =>{
       
    }
    fileUpload =(files)=>{
        console.log(files[0])
    }
    render(){
        return(
            // Div Main
            <div>
                {/* div navbar left */}   
                <div class="sidenav">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>
                {/* div containt */}
                <div className="containt">
                    {/* Add image */}
                    <div>
                        {/* <input type='file' onChange={this.fileSelectedHandler}></input>
                        <button onClick={this.fileUpload}>Upload</button> */}
                        <input type='file' onChange={(e)=>{this.fileUpload(e.target.files)}}></input>
                        <button onClick={this.fileUpload}>Upload</button>
                    </div>
                     {/* Add place detail */}
                     <div>
                        {/* Tyle of room */}
                        <ul>
                            <li>Ky tuc xa</li>
                            <li>Ky tuc xa</li>
                            <li>Ky tuc xa</li>
                            <li>Ky tuc xa</li>
                        </ul>
                        {/* Number of room */}
                        <span>Number of Room</span>
                        <input type='number'></input>
                        {/* People */}
                        <span>Persion/room</span>
                        <input type='number'></input>
                        <span>Area</span>
                        <input type='text'></input>
                    </div>
                   
                    {/* Rental conditions */}
                    <div>
                        <span>Gender</span>
                        <form>
  <input type="radio" id="male" name="gender" value="male"/>
  <label for="male">Male</label><br/>
  <input type="radio" id="female" name="gender" value="female"/>
  <label for="female">Female</label><br/>
  <input type="radio" id="other" name="gender" value="other"/>
  <label for="other">Other</label>
  </form>
                        <span>Feature</span>
                        <radio>dsf</radio>
                    </div>
                    {/* Add address */}
                    <div>
                        <h1>Address</h1>
                        <input type='text'></input>
                        <h2>City</h2>
                        <input type='text'></input>
                        <h2>Quan Huyen</h2>
                        <input type='text'></input>
                        <h2>Phuong Xa</h2>
                        <input type='text'></input>
                        <h2>Ten Duong</h2>
                        <input type='text'></input>
                        <h2>So Nha</h2>
                        <input type='text'></input>
                    </div>
                    {/* Add address on Map */}
                    <div>
                            
                    </div>
                
                    {/* price:*/}
                    <div>
                        <span>Prices</span>
                        {/* Radio button free */}
                        <span>Prices</span>
                        <span>Prices</span>
                        <span>Prices</span>
                        <span>First Prices</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Addroom