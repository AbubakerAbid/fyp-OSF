import React, { useState, useEffect }  from 'react';
import './worker-profile.css'
import Navbar from "./../../components/navbar/Navbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import { useLocation } from 'react-router-dom'
import { createOrder } from '../../actions/orders';
import { useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { getFeedbacks } from '../../actions/feedback';
import { useSelector } from 'react-redux';

const WorkerProfile = () =>{
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation()
  const { post } = location.state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  const feedbacks = useSelector((state) => state.posts);


  const [orderData, setOrderData] = useState({
    userName: user.result.name,
    userContact: '',
    user: user.result._id,
    worker: post._id,
    firstName: post.firstName,
    lastName:  post.lastName,
    contact:  post.contact,
    work:  post.work,
    address: '',
    date: '',
    time: '',
    status: 'Not Completed'
  });

  const clear = () => {

    setOrderData({
      userName: '',
      userContact: '',
      user: user.result._id,
      worker: post._id,
      firstName: post.firstName,
      lastName:  post.lastName,
      contact:  post.contact,
      work:  post.work,
      address: '',
      date: '',
      time: ''
    });

  }

  const [error, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    const errors = {}

    if (!values.address){
        errors.address = "Your valid address is required!"
    }
    if (!values.userContact){
      errors.userContact = "Contact is required!"
    }else if (values.userContact.length !== 11){
        errors.userContact = "Contact Number should be of length 11!"
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var errors = validate(orderData)
    setErrors(validate(orderData));
    clear();
    setIsSubmit(true);
    if(Object.keys(errors).length === 0 && errors.constructor === Object){
      dispatch(createOrder(orderData))
    }
    
  };
  
  return (
    <>
      <Navbar />
      
       <Breadcrumb title="Worker Profile" />
       <div className='main-div'>
        <div className='main-div-div-1'>
        {/* <img src='www.abc.com/img.png'></img> */}
        {/* <p>Availability: </p> */}
        {/* <p>Total Expereince:</p> */}
        
        {/* <p>Contact No: {post.contact}</p> */}
        <p>CNIC: {post.cnic}</p>
        <p>Reviews: </p>
        <div>{
        feedbacks.map((feedback) => ( 
          (feedback.post === post._id ?(
            <div>
              {feedback.description}
            </div>):null)
        ))}
        </div>
        </div>

        <div className='main-div-div-2'>
        <p>Name: {post.firstName} {post.lastName}</p>
        <p>Service: {post.work}</p>
        <p>About: {post.description}</p>
        <p>Working Area: {post.address}</p> 
        <p>Expecting Salary /month: {post.salary}</p>
        </div>
       </div>


      <div>
        {Object.keys(error).length === 0 && isSubmit ? (<div className='success'>WORKER BOOKED. Check My Orders!</div> ): null}
      </div>
      <td><Link to="/ReviewPopUp" state={{from: post}}><button >Add Review</button></Link></td>
    <form onSubmit={handleSubmit}> 
    
      <div className="address" style={{margin: '10px 0px'}}>
          <label className="form__label" for="address">Enter your Address: </label>
          <input style={{padding:'5px', marginLeft:'20px'}} 
          className="form__input" 
          type="text" 
          name="address"
          id="address" 
          placeholder="Address"
          value={orderData.address}
          onChange={(e) => setOrderData( {...orderData, address: e.target.value })}
          />
          <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.address}</p>
      </div>

      <div className="userContact" style={{margin: '10px 0px'}}>
          <label className="form__label" for="userContact">Enter your Contact Number: </label>
          <input style={{padding:'5px', marginLeft:'25px'}} 
          type="text" 
          name="userContact" 
          id="userContact"  
          className="form__input"
          placeholder="contact no"
          value={orderData.userContact} 
          onChange={(e) => setOrderData( {...orderData, userContact: e.target.value })}
          />
          <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.userContact}</p>
      </div>

        <label>
        Date:
        <input
          type="date"
          value={orderData.date}
          onChange={(e) => setOrderData( {...orderData, date: e.target.value })}
          required
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="time"
          value={orderData.time}
          onChange={(e) => setOrderData( {...orderData, time: e.target.value })}
          required
        />
      </label>

      <button style={{marginLeft:'10px'}} type="submit" class="btn">Book</button>
    </form>
       
    <Footer />
    </>
  );
}

export default WorkerProfile;
