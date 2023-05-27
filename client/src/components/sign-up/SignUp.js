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
        email: '',
        availability: 'Available'

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
            email: '',
            availability: ''
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
       
        
        <form onSubmit={handleSubmit}>
            <div className="form" style={{padding:'padding: 20px 110px !important;'}}>
            <p style={{textAlign:'center',  fontSize:'28px', fontWeight:'600'}}>
            Worker Registration
        </p>
            <div className="form-body">
                <div className="username" style={{margin: '10px 0px'}}>
                <table className='workerregistration'>
                    <tr>
                        <td>  
                        <label className="form__label" for="firstName">First Name  </label>
                        </td>
                        <td>
                        <input style={{padding:'5px', marginLeft:'0px'}} 
                    className="form__input" 
                    type="text" 
                    name="firstName"
                    id="firstName" 
                    placeholder="Enter Your First Name"
                    value={postData.firstName}
                    onChange={(e) => setPostData( {...postData, firstName: e.target.value })}
                    />
                        </td>
                    </tr>
                </table>
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.firstName}</p>
                </div>
                <div className="lastname" style={{margin: '10px 0px'}}>
                <table className='workerregistration'>
                    <tr>
                        <td> <label className="form__label" for="lastName">Last Name </label></td>
                        <td>
                        <input style={{padding:'5px', marginLeft:'0px'}}
                    className="form__input"  
                    type="text" 
                    name="lastName" 
                    id="lastName"  
                    placeholder="Enter Your Last Name" 
                    value={postData.lastName} 
                    onChange={(e) => setPostData( {...postData, lastName: e.target.value })}
                />
                        </td>
                    </tr>
                </table>
                   
                   
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.lastName}</p>
                </div>

                <div className="email" style={{margin: '10px 0px'}}>
                <table className='workerregistration'>
                    <tr>
                        <td>
                        <label className="form__label" for="email">Email  </label>
                        </td>
                        <td>
                        <input style={{padding:'5px', marginLeft:'0px'}}
                    className="form__input"  
                    type="email" 
                    name="email" 
                    id="email"  
                    placeholder="Enter Your Email" 
                    value={postData.email} 
                    onChange={(e) => setPostData( {...postData, email: e.target.value })}
                />
                        </td>
                    </tr>
                </table>
                    
                    
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.email}</p>
                </div>

                <div className="cnic" style={{margin: '10px 0px'}}>

                <table className='workerregistration'>
                    <tr>
                        <td>
                        <label className="form__label" for="cnic">CNIC     </label>
                        </td>
                        <td>
                        <input style={{padding:'5px', marginLeft:'0px'}}  
                    type="text" 
                    name="cnic" 
                    id="cnic"  
                    className="form__input"
                    placeholder="Enter Your CNIC No"
                    value={postData.cnic} 
                    onChange={(e) => setPostData( {...postData, cnic: e.target.value })}
                    />
                        </td>
                    </tr>
                </table>
                    
                   
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.cnic}</p>
                </div>
                
                <div className="work" style={{margin: '10px 0px'}}>

                <table className='workerregistration'>
                    <tr>
                        <td>
                        <label className="form__label" for="work">Work Service  </label>
                        </td>
                        <td>
                        <select style={{padding:'5px', marginLeft:'0px'}} id = "cat" onChange={(e) => {
                        var val = document.getElementById("cat").value;
                        setPostData( {...postData, work: val })
                        }}>
                        {Wdata.map((category) => (
                        <option value={category.sname} name="work">{category.sname}</option>
                        ))}
                    </select>
                        </td>
                    </tr>
                </table>
                    
                    
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

                <table className='workerregistration'>
                    <tr>
                        <td>
                        <label className="form__label" for="contact">Contact No</label>
                        </td>
                        <td>
                        <input style={{padding:'5px', marginLeft:'0px'}} 
                    type="text" 
                    name="contact" 
                    id="contact"  
                    className="form__input"
                    placeholder="Enter Your Phone No"
                    value={postData.contact} 
                    onChange={(e) => setPostData( {...postData, contact: e.target.value })}
                    />
                        </td>
                    </tr>
                </table>
                   
                    
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.contact}</p>
                </div>
                <div className="salary" style={{margin: '10px 0px'}}>

                <table className='workerregistration'>
                    <tr>
<td>
<label className="form__label" for="salary">Salary Range  </label>
</td>
<td>
  
<input  style={{padding:'5px'}}
                    type="text" 
                    name="salary" 
                    id="salary"  
                    className="form__input"
                    placeholder="Expected Salary Range"
                    value={postData.salary} 
                    onChange={(e) => setPostData( {...postData, salary: e.target.value })}
                    />
</td>
                    </tr>
                </table>
                  
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.salary}</p>
                </div>

                <div className="description" style={{margin: '10px 0px'}}>

                <table className='workerregistration'>
                    <tr>
                        <td>
                        <label className="form__label" for="description">Description  </label>
                        </td>
                        <td>
                        <input  style={{padding:'5px', marginLeft:'0px'}}
                    type="text" 
                    name="description" 
                    id="description"  
                    className="form__input"
                    placeholder="Something About You"
                    value={postData.description} 
                    onChange={(e) => setPostData( {...postData, description: e.target.value })}
                    />
                        </td>
                    </tr>
                </table>
                
                  
                    <p style={{fontSize: '14px',color: 'red',marginTop: '5px',marginBottom: '5px'}}>{error.description}</p>                    
                </div>

                <div className="address" style={{margin: '10px 0px'}}>

                <table className='workerregistration'>
                    <tr>
                        <td>
                        <label className="form__label" for="address">Working Area  </label>
                        </td>
                        <td>
                        <select style={{padding:'5px', marginLeft:'0px'}} id = "cats" onChange={(e) => {
                        var val = document.getElementById("cats").value;
                        setPostData( {...postData, address: val })
                        }}>
                        {Adata.map((category) => (
                        <option value={category.sname} name="address">{category.sname}</option>
                        ))}
                    </select>
                        </td>
                    </tr>
                </table>
                   
                  
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
      <div style={{margin:'10px 0px 40px 0px'}}>
        {Object.keys(error).length === 0 && isSubmit ? (<div className='success'>Successfully Registered <p>Wait for the Confirmation Email <br></br> Admin Approves your Profile after Verification</p></div> ): null}
        </div>
        </>
    );
}

export default SignUp;