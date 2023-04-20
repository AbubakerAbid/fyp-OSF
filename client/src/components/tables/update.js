import "../sign-in/SignIn.css"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWorker } from "../../actions/auth";
import { useLocation } from 'react-router-dom'
import Wdata from '../sign-up/Wdata';

const Update = () => {
  const location = useLocation()
  const from  = location.state
  const history = useNavigate();
  
  const [postData, setPostData] = useState({
    firstName: from.firstName,
    lastName: from.lastName,
    cnic: from.cnic,
    work: from.work,
    contact: from.contact,
    salary: from.salary,
    description: from.description

});
    
const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateWorker(from._id, postData))
    history("/WorkerDetailDashboard");
  };

  const onClose = () => {
    history("/WorkerDetailDashboard");
  }

  return (
      <>
      <div id="myModal" className="popup">
   
        <div className="modal-content">
          <div className="modal-header">
          <span className="close"><button className="close" onClick={onClose}>&times;</button></span>
            <h2 className='Sign-In'>Update Worker</h2>
              <form onSubmit = {handleSubmit} >
              <div className="form" style={{padding:'padding: 20px 110px !important;'}}>
                    <div className="form-body">
                        <div className="username" style={{margin: '10px 0px'}}>
                            <label className="form__label" for="firstName">First Name : </label>
                            <input style={{padding:'5px', marginLeft:'20px'}} 
                            className="form__input" 
                            type="text" 
                            name="firstName"
                            id="firstName" 
                            placeholder="First Name"
                            value={postData.firstName}
                            onChange={(e) => setPostData( {...postData, firstName: e.target.value })}
                            />
                             </div>
                        <div className="lastname" style={{margin: '10px 0px'}}>
                            <label className="form__label" for="lastName">Last Name : </label>
                            <input style={{padding:'5px', marginLeft:'20px'}}
                            className="form__input"  
                            type="text" 
                            name="lastName" 
                            id="lastName"  
                            placeholder="LastName" 
                            value={postData.lastName} 
                            onChange={(e) => setPostData( {...postData, lastName: e.target.value })}
                        />
                             </div>
                        <div className="cnic" style={{margin: '10px 0px'}}>
                            <label className="form__label" for="cnic">CNIC :    </label>
                            <input style={{padding:'5px', marginLeft:'67px'}}  
                            type="text" 
                            name="cnic" 
                            id="cnic"  
                            className="form__input"
                            placeholder="cnic"
                            value={postData.cnic} 
                            onChange={(e) => setPostData( {...postData, cnic: e.target.value })}
                            />
                             </div>
                        
                        <div className="work" style={{margin: '10px 0px'}}>
                            <label className="form__label" for="work">Work : </label>
                            <select style={{padding:'5px', marginLeft:'65px'}} id = "cat" onChange={(e) => {
                                var val = document.getElementById("cat").value;
                                setPostData( {...postData, work: val })
                                }}>
                                {Wdata.map((category) => (
                                <option value={category.sname} name="work">{category.sname}</option>
                                ))}
                            </select>
                            {/* <input  
                            type="text" 
                            name="work" 
                            id="work"  
                            className="form__input"
                            placeholder="work"
                            value={postData.work} 
                            onChange={(e) => setPostData( {...postData, work: e.target.value })}
                            /> */}
                        </div>
                        <div className="contact" style={{margin: '10px 0px'}}>
                            <label className="form__label" for="contact">ContactNo: </label>
                            <input style={{padding:'5px', marginLeft:'25px'}} 
                            type="text" 
                            name="contact" 
                            id="contact"  
                            className="form__input"
                            placeholder="contact no"
                            value={postData.contact} 
                            onChange={(e) => setPostData( {...postData, contact: e.target.value })}
                            />
                             </div>
                        <div className="salary" style={{margin: '10px 0px'}}>
                            <label className="form__label" for="salary">Salary Range : </label>
                            <input  style={{padding:'5px'}}
                            type="text" 
                            name="salary" 
                            id="salary"  
                            className="form__input"
                            placeholder="Salary Range"
                            value={postData.salary} 
                            onChange={(e) => setPostData( {...postData, salary: e.target.value })}
                            />
                             </div>

                        <div className="description" style={{margin: '10px 0px'}}>
                            <label className="form__label" for="description">Description : </label>
                            <input  style={{padding:'5px', marginLeft:'13px'}}
                            type="text" 
                            name="description" 
                            id="description"  
                            className="form__input"
                            placeholder="description"
                            value={postData.description} 
                            onChange={(e) => setPostData( {...postData, description: e.target.value })}
                            />
                            </div>
                    </div>
                    </div>
                <button style={{marginBottom:'15px'}} type="submit" class="login-btn" >Update</button>
               </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;

