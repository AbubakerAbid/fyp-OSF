import "../sign-in/SignIn.css"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {UpdateOrder} from '../../actions/orders';
import { useLocation } from 'react-router-dom'
import Sdata from '../sign-up/Statusdata';
import "./table.css"

const UpdateOrders = () => {
  const location = useLocation()
  const from  = location.state
  const history = useNavigate();
  
  const [postData, setPostData] = useState({
    status: from.status

});
    
const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateOrder(from._id, postData))
    history("/CheckOrders");
  };

  const onClose = () => {
    history("/CheckOrders");
  }

  return (
      <>
      <div id="myModal" className="popup">
   
        <div className="modal-content">
          <div className="modal-header">
          <span className="close"><button className="close" onClick={onClose}>&times;</button></span>
            <h2 className='Sign-In'>Update Availability</h2>
              <form onSubmit = {handleSubmit} >
              <div className="form form-update-worker-css" style={{padding:'padding: 20px 0px !important;'}}>
                    <div className="form-body">
{/*                         
                        <div className="a" style={{margin: '10px 0px'}}>
                            <label className="form__label" for="a">Availability :    </label>
                            <input style={{padding:'5px', marginLeft:'67px'}}  
                            type="text" 
                            name="a" 
                            id="a"  
                            className="form__input"
                            placeholder="availability"
                            value={postData.availability} 
                            onChange={(e) => setPostData( {...postData, availability: e.target.value })}
                            />
                             </div> */}

                             <div className="a" style={{margin: '10px 0px'}}>
                            <label className="form__label" for="o">Status : </label>
                            <select style={{padding:'5px', marginLeft:'65px'}} id = "o" onChange={(e) => {
                                var val = document.getElementById("o").value;
                                setPostData( {...postData, status: val })
                                }}>
                                {Sdata.map((category) => (
                                <option value={category.sname} name="status">{category.sname}</option>
                                ))}
                            </select>
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

export default UpdateOrders;

