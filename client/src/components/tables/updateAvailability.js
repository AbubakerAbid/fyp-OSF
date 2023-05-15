import "../sign-in/SignIn.css"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWorker } from "../../actions/auth";
import { useLocation } from 'react-router-dom'
import Adata from '../sign-up/Avdata';
import "./table.css"

const UpdateAvailability = () => {
  const location = useLocation()
  const from  = location.state
  const history = useNavigate();
  
  const [postData, setPostData] = useState({
    availability: from.availability

});
    
const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateWorker(from._id, postData))
    history("/Availability");
  };

  const onClose = () => {
    history("/Availability");
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
                            <label className="form__label" for="a">Availability : </label>
                            <select style={{padding:'5px', marginLeft:'65px'}} id = "a" onChange={(e) => {
                                var val = document.getElementById("a").value;
                                setPostData( {...postData, availability: val })
                                }}>
                                {Adata.map((category) => (
                                <option value={category.sname} name="availability">{category.sname}</option>
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

export default UpdateAvailability;

