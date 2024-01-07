import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./Profile.scss";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
// import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import React from "react";


const Profile = () => {
          const [validated, setValidated] = useState(false);

          const handleSubmit = (event) => {
                    const form = event.currentTarget;
                    if (form.checkValidity() === false) {
                              event.preventDefault();
                              event.stopPropagation();
                    }

                    setValidated(true);
          };

          return (
                    <div className="home">
                              <Sidebar />
                              <div className="homeContainer">
                                        {/* <Navbar /> */}
                                        <div className="charts">
                                                  
                                                  <div className="chart" style={{ lineHeight: "80px", fontSize:"27px" }}>
                                                            <div className="title">
                                                                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                                                <h2 style={{fontSize:"45px", color:"white"}}>Regstration</h2>
                                                                                <hr />
                                                                                <Row className="mb-6">
                                                                                          <Form.Group as={Col} md="12" controlId="validationCustom01" style={{}}>
                                                                                                    <Form.Label>Name</Form.Label>
                                                                                                    <Form.Control
                                                                                                              required
                                                                                                              type="text"
                                                                                                              placeholder="First name"
                                                                                                              style={{
                                                                                                                        height:"4vh",
                                                                                                                        color:"white"
                                                                                                              }}

                                                                                                    />
                                                                                                    
                                                                                          </Form.Group>
                                                                                          <Form.Group as={Col} md="12" controlId="validationCustom02">
                                                                                                    <Form.Label>Last Name</Form.Label>
                                                                                                    <Form.Control
                                                                                                              required
                                                                                                              type="text"
                                                                                                              placeholder="Last name"
                                                                                                              style={{
                                                                                                                        height:"4vh",
                                                                                                                        color:"white"
                                                                                                              }}

                                                                                                    />
                                                                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                                                          </Form.Group>
                                                                                          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                                                    <Form.Label>Speciality</Form.Label>
                                                                                                    <InputGroup hasValidation>
                                                                                                              <Form.Control
                                                                                                                        type="text"
                                                                                                                        aria-describedby="inputGroupPrepend"
                                                                                                                        required
                                                                                                                        style={{
                                                                                                                                  height:"4vh",
                                                                                                                                  color:"white"
                                                                                                                        }}
                                                                                                              />

                                                                                                    </InputGroup>
                                                                                          </Form.Group>
                                                                                          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                                                    <Form.Label>SKill</Form.Label>
                                                                                                    <InputGroup hasValidation>
                                                                                                              <Form.Control
                                                                                                                        type="text"
                                                                                                                        aria-describedby="inputGroupPrepend"
                                                                                                                        required
                                                                                                                        style={{
                                                                                                                                  height:"4vh",
                                                                                                                                  color:"white"
                                                                                                                        }}
                                                                                                              />

                                                                                                    </InputGroup>
                                                                                          </Form.Group>
                                                                                          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                                                    <Form.Label>Gender</Form.Label>
                                                                                                    <InputGroup hasValidation>
                                                                                                              <Form.Control
                                                                                                                        type="text"
                                                                                                                        aria-describedby="inputGroupPrepend"
                                                                                                                        required
                                                                                                                        style={{
                                                                                                                                  height:"4vh",
                                                                                                                                  color:"white"
                                                                                                                        }}
                                                                                                              />

                                                                                                    </InputGroup>
                                                                                          </Form.Group>
                                                                                          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                                                    <Form.Label>Birth</Form.Label>
                                                                                                    <InputGroup hasValidation>
                                                                                                              <Form.Control
                                                                                                                        type="text"
                                                                                                                        aria-describedby="inputGroupPrepend"
                                                                                                                        required
                                                                                                                        style={{
                                                                                                                                  height:"4vh",
                                                                                                                                  color:"white"
                                                                                                                        }}
                                                                                                              />

                                                                                                    </InputGroup>
                                                                                          </Form.Group>
                                                                                          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                                                    <Form.Label>Country</Form.Label>
                                                                                                    <InputGroup hasValidation>
                                                                                                              <Form.Control
                                                                                                                        type="text"
                                                                                                                        aria-describedby="inputGroupPrepend"
                                                                                                                        required
                                                                                                                        style={{
                                                                                                                                  height:"4vh",
                                                                                                                                  color:"white"
                                                                                                                        }}
                                                                                                              />

                                                                                                    </InputGroup>
                                                                                          </Form.Group>
                                                                                          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                                                    <Form.Label>City</Form.Label>
                                                                                                    <InputGroup hasValidation>
                                                                                                              <Form.Control
                                                                                                                        type="text"
                                                                                                                        aria-describedby="inputGroupPrepend"
                                                                                                                        required
                                                                                                                        style={{
                                                                                                                                  height:"4vh",
                                                                                                                                  color:"white"
                                                                                                                        }}
                                                                                                              />

                                                                                                    </InputGroup>
                                                                                          </Form.Group>
                                                                                          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                                                    <Form.Label>Phone</Form.Label>
                                                                                                    <InputGroup hasValidation>
                                                                                                              <Form.Control
                                                                                                                        type="text"
                                                                                                                        aria-describedby="inputGroupPrepend"
                                                                                                                        required
                                                                                                                        style={{
                                                                                                                                  height:"4vh",
                                                                                                                                  color:"white"
                                                                                                                        }}
                                                                                                              />

                                                                                                    </InputGroup>
                                                                                          </Form.Group>
                                                                                          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                                                                                    <Form.Label>Email Address</Form.Label>
                                                                                                    <InputGroup hasValidation>
                                                                                                              <Form.Control
                                                                                                                        type="text"
                                                                                                                        aria-describedby="inputGroupPrepend"
                                                                                                                        required
                                                                                                                        style={{
                                                                                                                                  height:"4vh",
                                                                                                                                  color:"white"
                                                                                                                        }}
                                                                                                              />

                                                                                                    </InputGroup>
                                                                                          </Form.Group>

                                                                                </Row>
                                                                                <hr />

                                                                                <Button style={{ backgroundColor: "teal", borderColor: "teal", fontSize:"25px", fontWeight:"bold" }} type="update">Register</Button>
                                                                      </Form>

                                                            </div>

                                                  </div>

                                        </div>

                              </div>
                    </div>
          );
};

export default Profile;







