import Navbar from "./../../components/navbar/Navbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import './ServiceWorkers.css'
import Posts from "../../components/worker-post/post";
import React, { useState, useEffect } from 'react';


const ServiceWorkers = () =>{
    const [currentId, setCurrentId] = useState(0);
    const [selectedAddress, setSelectedAddress] = useState('');

    const handleAddressChange = (event) => {
      setSelectedAddress(event.target.value);
    }
    return (
        <>
       <Navbar />
       <Breadcrumb title="List of Maids Available" />
       <h2 className='Find-Service-Header'>Hire who you need</h2>
<div className="SelectLabel">

       <label  for="cars">Select Your Area: </label>
       <select name="address"  onChange={handleAddressChange}>
        <option value=" "> Select </option>
        <option value="Scheme 3">Scheme 3</option>
        <option value="Bahria Town">Bahria Town</option>
        <option value="PWD">PWD</option>
        </select>

</div>
        
       <Posts setCurrentId = {setCurrentId } name = "Maid" address={selectedAddress}></Posts>
       <Footer />
        </>
    );
}


export default ServiceWorkers;