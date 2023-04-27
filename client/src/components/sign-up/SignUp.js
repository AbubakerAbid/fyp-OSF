import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SignUp.css'
import { createPost , updatePost} from '../../actions/posts';
import Wdata from "./Wdata"
import Adata from "./Adata"

const SignUp = ({currentId, setCurrentId}) => {

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId ) : null);

    useEffect(()=>{
        if(post) setPostData(post);
    }, [post])

    const [postData, setPostData] = useState({
        firstName: '',
        lastName: '',
        cnic: '',
        work: '',
        contact: '',
        salary: '',
        description: '',
        address: '',
        email: ''

    });

    const [error, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // useEffect(()=>{
    //     if(Object.keys(error).length === 0 && isSubmit) {
    //         console.log(error)
    //     }
    // }, [error]);

    const dispatch = useDispatch();

    const clear = () => {

        setCurrentId(null);

        setPostData({
            firstName: '',
            lastName: '',
            cnic: '',
            work: '',
            contact: '',
            salary: '',
            description: '',
            address: '',
            email: ''
        });

    }
    
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName){
            errors.firstName = "First Name is required!"
        }
        if (!values.lastName){
            errors.lastName = "Last Name is required!"
        }
        if (!values.cnic){
            errors.cnic = "CNIC is required!"
        }else if (values.cnic.length !== 13){
            errors.cnic = "CNIC should be of length 13!"
        }
        if (!values.contact){
            errors.contact = "Contact is required!"
        }else if (values.contact.length !== 11){
            errors.contact = "Contact Number should be of length 11!"
        }
        if (!values.salary){
            errors.salary = "Salary is required!"
        }
        if (!values.description){
            errors.description = "Description is required!"
        }
        if (!values.address){
            errors.address = "Address is required!"
        }
        if (!values.email){
            errors.email = "Email is required!"
        }
        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var errors = validate(postData)
        setErrors(validate(postData));
        clear();
        setIsSubmit(true);
        if(Object.keys(errors).length === 0 && errors.constructor === Object){
            if(currentId){
                dispatch(updatePost(currentId, postData));
            }else {
                dispatch(createPost(postData))
            }
        }
    }

    return(
        <>
        <div>
        {Object.keys(error).length === 0 && isSubmit ? (<div className='success'>Successfully Registered</div> ): null}
        </div>
        <form onSubmit={handleSubmit}>
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
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.firstName}</p>
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
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.lastName}</p>
                </div>

                <div className="email" style={{margin: '10px 0px'}}>
                    <label className="form__label" for="email">Email : </label>
                    <input style={{padding:'5px', marginLeft:'20px'}}
                    className="form__input"  
                    type="email" 
                    name="email" 
                    id="email"  
                    placeholder="email" 
                    value={postData.email} 
                    onChange={(e) => setPostData( {...postData, email: e.target.value })}
                />
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.email}</p>
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
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.cnic}</p>
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
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.contact}</p>
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
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.salary}</p>
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
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.description}</p>                    
                </div>

                <div className="address" style={{margin: '10px 0px'}}>
                    <label className="form__label" for="address">Working Place : </label>
                    <select style={{padding:'5px', marginLeft:'65px'}} id = "cats" onChange={(e) => {
                        var val = document.getElementById("cats").value;
                        setPostData( {...postData, address: val })
                        }}>
                        {Adata.map((category) => (
                        <option value={category.sname} name="address">{category.sname}</option>
                        ))}
                    </select>
                    {/* <input  style={{padding:'5px', marginLeft:'13px'}}
                    type="text" 
                    name="address" 
                    id="address"  
                    className="form__input"
                    placeholder="address"
                    value={postData.address} 
                    onChange={(e) => setPostData( {...postData, address: e.target.value })}
                    /> */}
                    {/* <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.address}</p>                     */}
                </div>
                {/* <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                </div> */}
            </div>
            <div class="footer" style={{textAlign:'center'}}>
                <button style={{marginLeft:'10px'}} type="submit" class="btn">Register</button>
            </div>
        </div>
      </form>  
        </>
    );
}

export default SignUp;