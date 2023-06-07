import Toggle from '../../components/tables/toggle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './myappointments.css'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchApprovedPosts } from "../../actions/posts";
import * as actionType from "../../constants/actionTypes"
import './myappointments.css'

const Availability = () =>{

    const history = useNavigate();
    const [worker, setWorker] = useState(JSON.parse(localStorage.getItem('profile2')));

    const dispatch = useDispatch();
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history('/WorkerLogin');
        setWorker(null);
    };

    const appointmentsPage = () => {
        history("/MyAppointments");
      }

    const availabilityPage = () => {
        history("/Availability");
      }


      useEffect(() => {
          dispatch(fetchApprovedPosts());
      }, [ dispatch]);

      const approvedPosts = useSelector((state) => state.approvedPosts);

    return (
        <>
         {worker?.result?.firstName ? ( <section className='workerdashboardpage' style={{display:'flex'}}>
        <div style={{width:'20%',backgroundColor:'#1F253F', height:'100vh'}}>
        <h3 style={{textAlign: 'center',fontSize: '24px',color: 'white',padding: '20px', borderBottom: '1px solid'}}>{worker?.result?.username}</h3>
        <button onClick={appointmentsPage} style={{backgroundColor:'transparent', border:'0px', width: '100%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>View Appointments</h3></button>
        <button onClick={availabilityPage} style={{backgroundColor:'transparent', border:'0px', width: '100%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>Availability</h3></button>
        <button onClick={logout} style={{backgroundColor:'transparent', border:'0px', width: '100%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>Logout</h3></button>
        
        </div>
        <div style={{width:'80%',backgroundColor:'rgb(156 170 192 / 33%)'}}>
        <h3 style={{textAlign: 'center',fontSize: '24px',color: '#1F253F',padding: '20px', borderBottom: '1px solid #1F253F'}}>My Dashboard</h3>
        <div >
                    {
                        approvedPosts.map((post) => (  
                            <div key={post._id}>
                                 <Toggle post = {post} ></Toggle>                          
                            </div>
                        ))
                    }
        </div>

        </div>
       </section>):  (<div></div>)}
      
        </>
    );
}

export default Availability;