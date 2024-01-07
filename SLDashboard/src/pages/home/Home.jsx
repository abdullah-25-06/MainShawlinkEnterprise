import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Widget2 from "../../components/widget/Widget2";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import StaticDateTimePickerLandscape from "../../components/celender/Calender";
// import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import moment from "moment";


const Home = () => {
  const currtime = moment().format('MMMM Do YYYY, h:mm a');
  return (

    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        {/* <Navbar /> */}
        <p class="h1" >DASHBOARD</p>
       
        {/* <StaticDateTimePickerLandscape/> */}
        <div className="widgets">

          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" /> 
           <Widget type="balance" />
        </div>
        <div className="widgets" >
          <Widget2 className="fb"/>
        </div>



        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        

        <div className="listContainer">
          <div className="listTitle">Lattest Transactions</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
