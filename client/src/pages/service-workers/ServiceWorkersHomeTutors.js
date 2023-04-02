import Navbar from "./../../components/navbar/Navbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import './ServiceWorkers.css'
import Posts from "../../components/worker-post/post";
import { getPosts } from "../../actions/posts";
import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';

const ServiceWorkersHomeTutors = () =>{
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <>
       <Navbar />
       <Breadcrumb title="List of Home Tutors Available" />
       <h2 className='Find-Service-Header'>Hire who you need</h2>

       <Posts setCurrentId = {setCurrentId } name="Home Tutors"></Posts>
       <Footer />
        </>
    );
}

export default ServiceWorkersHomeTutors;