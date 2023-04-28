import Navbar from "./../../components/navbar/Navbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import './ServiceWorkers.css'
import Posts from "../../components/worker-post/post";
import { getPosts } from "../../actions/posts";
import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';

const ServiceWorkersCookChef = () =>{
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const [selectedAddress, setSelectedAddress] = useState('');

    const handleAddressChange = (event) => {
      setSelectedAddress(event.target.value);}

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <>
       <Navbar />
       <Breadcrumb title="List of Cook/Chefs Available" />
       <h2 className='Find-Service-Header'>Hire who you need</h2>
       <div className="SelectLabel">
       <label for="cars">Select Your Area: </label>
       <select name="address"  onChange={handleAddressChange}>
       <option value=" "> Select </option>
        <option value="Scheme 3">Scheme 3</option>
        <option value="Bahria Town">Bahria Town</option>
        <option value="PWD">PWD</option>
        </select>
        </div>
       <Posts setCurrentId = {setCurrentId } address={selectedAddress} name="Cook / Chef"></Posts>
       <Footer />
        </>
    );
}

export default ServiceWorkersCookChef;