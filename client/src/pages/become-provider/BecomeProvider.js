import Navbar from "./../../components/navbar/Navbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import SignUp from "./../../components/sign-up/SignUp";
import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getPosts } from "../../actions/posts";
// import {Link} from 'react-router-dom';


const BecomeProvider = () =>{
    // const user = JSON.parse(localStorage.getItem('profile'));
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    // if (!user?.result?.name) {
    //     return (
    //         <div>
    //             <Navbar />
    //             <Breadcrumb title="Become a Provider" />
    //             <Link to="/auth"><button >Provide Services Now</button></Link>
    //             <Footer />
            
    //         </div>
    //     );
    //   }
    
    return (
        <>
       <Navbar />
       <Breadcrumb title="Become a Worker" />
       <p style={{textAlign:'center', fontSize:'40px', fontWeight: '700', margin:'40px 0px 20px 0px', lineHeight:'60px'}}>Fill out the Registration Form<br></br> & <br></br>Get instant Job</p>
       <SignUp currentId={currentId} setCurrentId={setCurrentId}/>
       <Footer />
        </>
    );
}

export default BecomeProvider;