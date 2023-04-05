import Navbar from "./../../components/navbar/Navbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import './ServiceWorkers.css'
import Posts from "../../components/worker-post/post";
import { fetchApprovedPosts } from "../../actions/posts";
import React, { useState, useEffect } from 'react';


const ServiceWorkers = () =>{
    const [currentId, setCurrentId] = useState(0);

    return (
        <>
       <Navbar />
       <Breadcrumb title="List of Maids Available" />
       <h2 className='Find-Service-Header'>Hire who you need</h2>

       <Posts setCurrentId = {setCurrentId } name = "Maid"></Posts>
       <Footer />
        </>
    );
}


export default ServiceWorkers;