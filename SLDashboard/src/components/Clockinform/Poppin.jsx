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
import "./Poppin.scss";
import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Poppin() {
  
    const navigate = useNavigate();
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center ' style={{height:"100vh", opacity:"5"}}>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '5rem', maxWidth: '600px' ,height:"50vh"}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'  >

              <h2 className="fw-bold mb-6 text-uppercase">PIN :)</h2>
              <p className="text-white-50 mb-5">Please enter your pin!</p>

              {/* <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" /> */}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Pin' id='formControlLg' type='password' style={{ fontSize: "30px" }} />
              <Stack direction="row" spacing={2}>
                <Button variant="contained" style={{backgroundColor:"white" ,color:"black" , fontSize:"23px", fontWeight:"bold", width:"150px", height:"4vh"}}>ENTER</Button>
                <Button variant="contained" onClick={() => navigate(-1)} style={{backgroundColor:"white" ,color:"black" , fontSize:"23px", fontWeight:"bold", width:"150px", height:"4vh"}}>EXIT</Button>
               
              </Stack>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Poppin;