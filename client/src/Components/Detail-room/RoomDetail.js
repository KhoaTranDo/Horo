import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Table,
  Carousel,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Gallery from "./Gallery";

const ImageS = {
  float: "left",
  width: "300px",
  height: "500px",
  objectFit: "cover",
};
export default class main extends Component {
  render() {
    return (
      <div className="App" style={{ width: "100%" }}>
        <header>
          <Navbar expand="lg" variant="dark" bg="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <div className>
          <div className="row">
            {/* Image Show */}
            {/* <Carousel
              style={{
                width: "80%",
                minHeight: "300px",
                margin: "auto",
                marginTop: "80px",
                float: "right",
              }}
            >
              <Carousel.Item style={{ width: "100%", minHeight: "300px" }}>
                <Image
                  className="d-block w-100"
                  src="https://picsum.photos/id/1015/1000/600/"
                  alt="First slide"
                  style={ImageS}
                  rounded
                />
              </Carousel.Item>
              <Carousel.Item style={{ width: "100%", height: "100%" }}>
                <Image
                  className="d-block w-100"
                  src="https://picsum.photos/id/1019/1000/600/"
                  alt="Third slide"
                  style={ImageS}
                  rounded
                />
              </Carousel.Item>
              <Carousel.Item style={{ width: "100%", height: "100%" }}>
                <Image
                  className="d-block w-100"
                  src="https://picsum.photos/id/1018/1000/600/"
                  alt="Third slide"
                  style={ImageS}
                  rounded
                />
              </Carousel.Item>
            </Carousel> */}
            <Gallery/>
          </div>
          <div
            className="row mt-5 mb-5"
            style={{
              border: "2px solid red",
              borderRadius: "10px",
              padding: "20px",
              overflow: "auto",
            }}
          >
            <h3 itemProp="name" className="col-sm-10">
              Căn hộ mini full nội thất - thang máy - giờ tự do ngay Q1 Q3
            </h3>
            <div
              style={{
                border: "2px solid red",  
                borderRadius: "5px",
                padding: "10px",
                float: "right",
              }}
              className="col-sm-2"
            >
              <Button variant="outline-primary" style={{ float: "right" }}>
                <span className="L3u-1">Chia sẻ</span>
              </Button>
            </div>
          </div>
              
        {/* room describe */}
            <div className="col-lg-12 mb-4 grid-margin">
              <div className="card h-100">
            <h4 className='card-header'>Room Detail</h4>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis ipsam eos, nam perspiciatis natus commodi
                    similique totam consectetur praesentium molestiae atque
                    exercitationem ut consequuntur, sed eveniet, magni nostrum
                    sint fuga.
                  </p>
                </div>
              </div>
            </div>

            {/* extention on room */}
           
            <div className="col-lg-12 mb-4 grid-margin">
              <div className="card h-100">
              <h4 className='card-header'>Extention</h4>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                </div>
                <div className="card-footer">
                  <Button variant="btn btn-primary">Learn More</Button>
                </div>
              </div>
            </div>
         
         {/* ROle of room */}
        
          <div className="col-lg-12 mb-4 grid-margin">
              <div className="card h-100">
              <h4 className='card-header'>Extention</h4>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                </div>
                <div className="card-footer">
                  <Button variant="btn btn-primary">Learn More</Button>
                </div>
              </div>
            </div>


          <div className="row mb-4">
            <div className="col-sm-12 grid-margin">
              <div className="card h-100">
                <h4 className="card-header">Table</h4>
                <div className="card-body">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  height: "1000px",
  width: "100%",
  margin: "40px auto",
  marginTop: "80px",
  float: "right",
  display: "flex",
};
