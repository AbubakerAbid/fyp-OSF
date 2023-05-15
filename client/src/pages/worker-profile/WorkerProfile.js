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
        <img src='https://abubakerabid.com/wp-content/uploads/2023/04/images-removebg-preview-2.png'></img>
        {/* <p>Availability: </p> */}
        {/* <p>Total Expereince:</p> */}
        
        {/* <p>Contact No: {post.contact}</p> */}
        <table>
          <tr>
            <td><b>Worker Name</b></td>
            <td>{post.firstName} {post.lastName}</td>
          </tr>
          <tr>
            <td><b>Service Provide</b></td>
            <td>{post.work}</td>
          </tr>
          <tr>
            <td><b>Working Area</b></td>
            <td> {post.address}</td>
          </tr>
          <tr>
            <td><b>Gender</b></td>
            <td> Male</td>
          </tr>
          <tr>
            <td><b>Age</b></td>
            <td> 24</td>
          </tr>
          <tr>
            <td><b>Expecting Salary</b> </td>
            <td> {post.salary} Per Month</td>
          </tr>
          <tr>
            <td><b>CNIC</b></td>
            <td> {post.cnic}</td>
          </tr>
          <tr>
            <td><b>Availability</b></td>
            <td> {post.availability}</td>
          </tr>
          <tr>
            <td><b>About</b></td>
            <td> {post.description}</td>
          </tr>
          
          
        </table>
        <h2 className='hire-workers-heading' style={{textAlign:'center', width:'90%'}}>Want to Contact the Worker <br></br>Get them Hired</h2>
        {/* <p><b>Worker Name:</b> {post.firstName} {post.lastName}</p>
        <p><b>Service Provide:</b> {post.work}</p> */}
        {/* <p>Reviews: </p> */}
        {/* <div>{
        feedbacks.map((feedback) => ( 
          (feedback.post === post._id ?(
            <div>
              {feedback.description}
            </div>):null)
        ))}
        </div> */}
        </div>

        <div className='main-div-div-2'>
        <img src='https://abubakerabid.com/wp-content/uploads/2023/04/Untitled.png' style={{width:'90%', textAlign:'center'}}></img>
        <h3>CNIC Verified.</h3>
        <table className='worker-profile-details-right' style={{marginTop:'25px'}}>
        
          <tr>
            <td><b>Reviews:</b></td>
            <td>
            <div>{
        feedbacks.map((feedback) => ( 
          (feedback.post === post._id ?(
            <div>
              {feedback.description}
            </div>):null)
        ))}
        </div>
            </td>
          </tr>
          <tr >
          <td ><Link to="/ReviewPopUp" state={{from: post}} ><button >Add Review</button></Link></td>
          </tr>
          
          
          
         
        </table>
        {/* <p>CNIC: {post.cnic}</p>
        <p>About: {post.description}</p>
        <p>Working Area: {post.address}</p> 
        <p>Expecting Salary /month: {post.salary}</p> */}
        </div>
       </div>


      {/* <div>
        {Object.keys(error).length === 0 && isSubmit ? (<div className='success'>WORKER BOOKED. Check My Orders!</div> ): null}
      </div> */}
      {/* <td><Link to="/ReviewPopUp" state={{from: post}}><button >Add Review</button></Link></td> */}
      
      <div className='hire-workers'>
      {post.availability === 'Not Available' ? (
        <div></div>
      ) : (<form onSubmit={handleSubmit}> 
    
        <h2 className='hire-workers-heading'>Hire This Worker</h2>
        <div className="address" style={{margin: '10px 0px', textAlign:'center'}}>
        <table style={{width:'50%', margin:'auto'}}>
          <tr>
            <td><label className="form__label" for="address">Enter your Address: </label></td>
            <td>
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
            </td>
          </tr>
        </table>
            
          
        </div>
  
        <div className="userContact" style={{margin: '10px 0px'}}>
        <table style={{width:'50%', margin:'auto'}}>
          <tr>
            <td><label className="form__label" for="userContact">Enter your Number: </label></td>
            <td>
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
            </td>
          </tr>
        </table>
        </div>
  
  
        <div  style={{margin: '10px 0px'}}>
        <table style={{width:'50%', margin:'auto'}}>
          <tr>
            <td>Enter Meeting Date</td>
            <td>
            <label>
          Date: 
          <input
            type="date"
            value={orderData.date}
            onChange={(e) => setOrderData( {...orderData, date: e.target.value })}
            required
          />
        </label>
            </td>
          </tr>
        </table>
        </div>
  
  
        <div  style={{margin: '10px 0px'}}>
        <table style={{width:'50%', margin:'auto'}}>
          <tr>
            <td>Enter Meeting Time:</td>
            <td>
            <label>
          Time:
          <input
            type="time"
            value={orderData.time}
            onChange={(e) => setOrderData( {...orderData, time: e.target.value })}
            required
          />
        </label>
            </td>
          </tr>
        </table>
        </div>
  
          
        <br />
        
  
        <button style={{marginLeft:'10px', marginBottom:'20px'}} type="submit" class="btn">Hire Worker</button>
      </form>) }
    

    <div style={{marginBottom:'40px'}}>
        {Object.keys(error).length === 0 && isSubmit ? (<div className='success'>WORKER HIRED SUCCESSFULLY ! <br></br>Check My Orders Page to Contact the Worker.</div> ): null}
      </div>
       
      </div>
    <Footer />
    </>
  );
}

export default WorkerProfile;
