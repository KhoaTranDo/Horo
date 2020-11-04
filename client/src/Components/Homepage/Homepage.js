import React,{ useState, useEffect } from 'react'
import {logOut} from '../../action/auth'
import { connect } from 'react-redux';
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {Gallery} from './Gallery'
import axios from 'axios';

const Homepage = ({isLoggedIn , logOut}) => {
  const [data, setData] = useState([]);
  
  //Get Ads from Json Nodejs
  useEffect(() => {
    axios
    .get('http://localhost:6001/Add')
    .then((res) => {
       setData(res.data)
     })
     .catch((err) => console.log(err));
    },[]);


    return(
        <>
        {/* Page Content */}

    <div className="row ">
            {/* Gallery */}
            {/* /.col-lg-3 */}
            <div className="col-lg-10 mx-auto ">
        <Gallery/>

<div className="row" style={{float:'left'}}>   
           <div className="col-lg-3 sidebar">
        <div className="list-group">
          <a href="/#" className="list-group-item">Category 1</a>
          <a href="/#" className="list-group-item">Category 2</a>
          <a href="/#" className="list-group-item">Category 3</a>
        </div>
      </div>
      <div className='col-lg-9'>
        <div className="row" >
  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card h-100">
      <a href="/#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="/#">Item One</a>
        </h4>
        <h5>$24.99</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card h-100">
      <a href="/#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="/#">Item Two</a>
        </h4>
        <h5>$24.99</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card h-100">
      <a href="/#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="/#">Item Three</a>
        </h4>
        <h5>$24.99</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card h-100">
      <a href="/#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="/#">Item Four</a>
        </h4>
        <h5>$24.99</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100">
      <a href="/#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="/#">Item Five</a>
        </h4>
        <h5>$24.99</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card h-100">
      <a href="/#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="/#">Item Six</a>
        </h4>
        <h5>$24.99</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>
  </div>
  </div>
  <footer className="py-1 bg-dark">
   
      <p className="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
  </footer>    

{/* ./rowrow */}
            </div>
            {/* /.col-lg-99 */}
            </div>
            {/* /.row */}
            </div>
    

            <h1 >Dashboard</h1>
            <br/>
            {
                
                isLoggedIn ? (
                    <div>
                        <h1>You are Logged in</h1>
                    </div>
                )
                :
                (
                    <div>
                        <h1>You are Not Logged in</h1>
                    </div>
                )
            }
            {/* footer */}

        </>
    )
}

const mapStateToProps= state =>({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps,{logOut})(Homepage)