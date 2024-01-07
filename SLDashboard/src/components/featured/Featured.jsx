import "./featured.scss";

// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import Image from 'react-bootstrap/Image';
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import 'bootstrap/dist/css/bootstrap.min.css';




const Featured = () => {



  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  return (
        <><div className="featured">
          <h4>Profile</h4>
          <div className="top">
            <div
            
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            div></div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={imageUploader}
              style={{
                display: "none"
              }}
            />
            <div
              style={{
                height: "200px",
                width: "200px",
                border: "1px dashed white",
                borderRadius: "100px",
                marginRight: "40%"
              
              }}
              
              onClick={() => imageUploader.current.click()}
            >
              <img
                ref={uploadedImage}
                style={{
                  height: "200px",
                  width: "200px",
                  border: "1px dashed white",
                  borderRadius: "100px",
                  marginRight: "40%"


                }}
              />
              <br></br>
            </div>
          </div>
          
          <p class="h4">Name</p>
          <br></br>
          <div className="head">
              
          <p class="h4">Joining Date</p>
          <p class="h4">Joining Date</p>
          <p class="h4">Joining Date</p>

            
          </div>
          <div className="head2">
          <p class="h4"></p>
          </div>
          <div>
            
          </div>
        </div>



        </>
  );
};// 
export default Featured;
