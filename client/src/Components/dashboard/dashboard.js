import React from 'react'
import {logOut} from '../../action/auth'
import { connect } from 'react-redux';
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const Images = [
  {
    image : 'https://www.hotel-lech.eu/assets/images/d/schneekaiserin-hotel-lech-2bf40bad.jpg',
    title: 'First slide label',
    describe:'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    image : 'https://careers.cairnhotelgroup.com/system/branch/942/vacancy-header-image/00065d1b-28ba-4042-b716-109229e277e0/_MG_1477_preview.jpeg?w=900&h=350&mode=crop',
    title: 'First slide label',
    describe:'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    image : 'https://quintessentialsinc.com/wp-content/uploads/2013/08/roomstop.jpg',
    title: 'First slide label',
    describe:'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  }
]
const Dashboard = ({isLoggedIn , logOut}) => {

    return(
        <>
        {/* Page Content */}

    <div class="row ">

   

            {/* /.col-lg-3 */}
            <div class="col-lg-10 mx-auto ">

            <Carousel >
              {
                Images.map((i)=>{
                  return (
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={i.image}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{i.title}</h3>
                      <p>{i.describe}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  )
                })
              }
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://placehold.it/900x350"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://placehold.it/900x350"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://placehold.it/900x350"
      alt="Third slide"
      />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>

<div class="row" style={{float:'left'}}>   
           <div class="col-lg-3 sidebar">
        <div class="list-group">
          <a href="#" class="list-group-item">Category 1</a>
          <a href="#" class="list-group-item">Category 2</a>
          <a href="#" class="list-group-item">Category 3</a>
        </div>
      </div>
      <div class='col-lg-9'>
        <div class="row" >
  <div class="col-lg-3 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">Item One</a>
        </h4>
        <h5>$24.99</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">Item Two</a>
        </h4>
        <h5>$24.99</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">Item Three</a>
        </h4>
        <h5>$24.99</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">Item Four</a>
        </h4>
        <h5>$24.99</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-md-6 mb-4">
      <div class="card h-100">
      <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">Item Five</a>
        </h4>
        <h5>$24.99</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">Item Six</a>
        </h4>
        <h5>$24.99</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>
  </div>
  </div>
  <footer class="py-1 bg-dark">
   
      <p class="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
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

export default connect(mapStateToProps,{logOut})(Dashboard)