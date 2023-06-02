import './SignIn.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from "../../actions/auth";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignIn = () => {
  const [form, setForm] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();


  const switchMode = () => {
    setForm(initialState);
    setIsSignUp((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
    // handleShowPassword(false);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const [error, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    var errors = validate(form)
    setErrors(validate(form));
    if(Object.keys(errors).length === 0 && errors.constructor === Object){
      if (isSignUp) {
        dispatch(signup(form, history));
      }
    }else{
      if(!isSignUp){

        dispatch(signin(form, history));
      }
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName){
        errors.firstName = "First Name is required!"
    }else if (typeof values.firstName !== 'string' || /\d/.test(values.firstName)) {
      errors.firstName = "First Name should be a string!";
    }
    
    if (!values.lastName){
        errors.lastName = "Last Name is required!"
    }else if (typeof values.lastName !== 'string' || /\d/.test(values.lastName)) {
      errors.lastName = "Last Name should be a string!";
    }
    if (!values.email){
        errors.email = "Email is required!"
    }else if (!regex.test(values.email)){
        errors.email = "Not a valid email format!"
    }
    if (!values.password){
        errors.password = "Password is required!"
    }else if (values.password.length < 4){
        errors.password = "Password must be more than 4 characters!"
    }
    if (!values.confirmPassword){
        errors.confirmPassword = "Please confirm password!"
    }else if (values.confirmPassword !== values.password){
      errors.password = "Password does not match!"
    }

    return errors
  }

  const onClose = () => {
    history("/");
  }

  return (
      <>
      <div id="myModal" className="popup">

        <div className="modal-content">
          <div className="modal-header">
          <span className="close"><button className="close" onClick={onClose}>&times;</button></span>
            <h2 className='Sign-In'>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
              <form onSubmit = {handleSubmit} >
                        {
                              isSignUp &&(
                              <>
                                  <label className='lable'>First Name:
                                  <input className='lable-input' name="firstName" type="text" onChange={handleChange}/>
                                  </label>
                                  <p style={{marginLeft: '20px',color: 'red',marginTop: '-15px',fontSize: '14px', marginBottom:'15px'}}>{error.firstName}</p>
                                  <label className='lable'>Last Name:
                                    <input className='lable-input' name="lastName" type="text" onChange={handleChange}/>
                                  </label>
                                  <p style={{marginLeft: '20px',color: 'red',marginTop: '-15px',fontSize: '14px', marginBottom:'15px'}}>{error.lastName}</p>
                              </>)
                          }
                          <label className='lable'>Email:
                          <input className='lable-input' name="email" type="email" onChange={handleChange}/>
                        </label>
                          <p style={{marginLeft: '20px',color: 'red',marginTop: '-15px',fontSize: '14px'}}>{error.email}</p>
                        <label className='lable'>Password:
                          <input className='lable-input' name="password" type={showPassword ? 'text' : 'password'} onChange={handleChange} handleShowPassword={handleShowPassword}/>
                        </label>
                        <p style={{marginLeft: '20px',color: 'red',marginTop: '-15px',fontSize: '14px', marginBottom:'15px'}}>{error.password}</p>
                        
                        {isSignUp && 
                        <label className='lable'>Repeat Password:
                        <input className='lable-input' name="confirmPassword" type="password" onChange={handleChange}/>
                        <p style={{marginLeft: '0px',color: 'red',marginTop: '5px',fontSize: '14px', marginBottom:'15px'}}>{error.confirmPassword}</p>
                        </label>
                        }
                        
                <button style={{marginBottom:'15px'}} type="submit" class="login-btn" >{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                <div style={{cursor:'pointer', color:'#127DA1'}} onClick={switchMode} class="login-btn">{isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}</div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;

