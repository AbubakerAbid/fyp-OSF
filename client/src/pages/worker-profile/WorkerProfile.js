import React from 'react';
import './worker-profile.css'
import Navbar from "./../../components/navbar/Navbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";

const WorkerProfile = (props) =>{

  // Retrieve worker data from props
  // const { name, service, image, salary, description, area } = props.workerData;

  return (
    <>
<Navbar />
       <Breadcrumb title="Worker Profile" />
       <div className='main-div'>
        <div className='main-div-div-1'>
        <img src='www.abc.com/img.png'></img>
        <p>Availability: </p>
        <p>Total Expereince:</p>
        <p>Reviews: </p>
        <p>Contact No:</p>
        <p>CNIC: </p>
        </div>
        <div className='main-div-div-2'>
        <p>Name: </p>
      <p>Service: </p>
      <p>About: </p>
      <p>Address: </p>
      <p>Service Area: </p>
      <p>Expecting Salary /month: </p>
        </div>
       </div>


    {/* // <div>
    //   <h2>{name}</h2>
    //   <img src={image} alt={name} />
    //   <p>Service: {service}</p>
    //   <p>Salary: {salary}</p>
    //   <p>Description: {description}</p>
    //   <p>Area: {area}</p>
    // </div> */}
    <Footer />
    </>
  );
}

export default WorkerProfile;
