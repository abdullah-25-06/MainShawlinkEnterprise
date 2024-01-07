import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const Loginpg = () => {

  const navigate = useNavigate();

  return (

    // <div className="home">
    //   <div className="homeContainer">
    //     <div className="listContainer">
    //       <Form>
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control type="email" placeholder="Enter email" />
    //           <Form.Text className="text-muted">
    //             We'll never share your email with anyone else.
    //           </Form.Text>
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control type="password" placeholder="Password" />
    //         </Form.Group>
    //         <br></br>
    //         <Button variant="primary" type="submit">
    //           Submit
    //         </Button>
    //       </Form>
    //     </div>
    //   </div>

    // </div>
    <MDBContainer fluid>

    <MDBRow className='d-flex justify-content-center align-items-center ' style={{height:"100vh", opacity:"5"}}>
      <MDBCol col='12'>

        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '5rem', maxWidth: '600px' ,height:"50vh"}}>
          <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'  >

            <h2 className="fw-bold mb-6 text-uppercase">LOGIN :)</h2>
            <p className="text-white-50 mb-5">Please enter your Email & Password!</p>
            {/* <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email' id='formControlLg' type='email' style={{ fontSize: "30px" }} /> */}
            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"  style={{ fontSize: "30px" }}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Pin' id='formControlLg' type='password' style={{ fontSize: "25px" }} />
            
            <Stack direction="row" spacing={2}>
              <Button variant="contained" style={{backgroundColor:"#007FFF" ,color:"black" , fontSize:"23px",fontWeight:"bold",  width:"150px", height:"4vh"}}>Login</Button>
              <Button variant="contained"   onClick={() => navigate(-1)} style={{backgroundColor:"white" ,color:"black" , fontSize:"23px",  width:"150px", height:"4vh"}}>Back</Button>
             
            </Stack>
          </MDBCardBody>
        </MDBCard>

      </MDBCol>
    </MDBRow>

  </MDBContainer>
  );
};

export default Loginpg;
