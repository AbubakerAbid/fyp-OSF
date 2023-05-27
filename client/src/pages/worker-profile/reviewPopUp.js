import "../../components/sign-in/SignIn.css";
import './worker-profile.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createFeedback } from "../../actions/feedback";
import {useNavigate} from "react-router-dom"

import { useLocation } from 'react-router-dom'

const ReviewPopUp = () => {

  const location = useLocation()
  const { from } = location.state
  const history = useNavigate();
  console.log(from)
  const [postData, setPostData] = useState({

    description: '',
    post: from._id

});
    
const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createFeedback(postData))
    history("/FindService");
  };

  const onClose = () => {
    history("/FindService");
  }

  return (
      <>
      <div id="myModal" className="popup">
   
        <div className="modal-content">
          <div className="modal-header">
          <span className="close"><button className="close" onClick={onClose}>&times;</button></span>
            <h2 className='feedbackh'>Leave your Feedback</h2>
              <form onSubmit = {handleSubmit} >
              <div className="form feedback-form-css" style={{padding:'padding: 20px 10px !important;',width:'100%' }}>
  
                    <div className="form-body feedback-form-body-css">
                        
                        <div className="description" style={{margin: '10px 0px'}}>
                            
                      
                            <textarea style={{padding:'5px', marginLeft:'35px', width:'80%'}} rows = "4" cols = "40" name="description" 
                            id="description"  
                            className="form__input" value={postData.description} 
                            onChange={(e) => setPostData( {...postData, description: e.target.value })}>
                           
                            </textarea>
                            </div>
                    </div>
                    </div>
                <button style={{marginBottom:'15px'}} type="submit" class="login-btn" >Submit</button>
               </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewPopUp;

