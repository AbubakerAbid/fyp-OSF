import TableAppoinment from '../../components/tables/tableAppointment';
import { useNavigate } from 'react-router-dom';
import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import './myappointments.css'
import * as actionType from "../../constants/actionTypes"


const MyAppointments = () =>{
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

    return (
        <>
         {worker?.result?.firstName ? ( <section style={{display:'flex'}}>
        <div style={{width:'20%',backgroundColor:'#1F253F', height:'100vh'}}>
        <h3 style={{textAlign: 'center',fontSize: '24px',color: 'white',padding: '20px', borderBottom: '1px solid'}}>{worker?.result?.username}</h3>
        <button onClick={appointmentsPage} style={{backgroundColor:'transparent', border:'0px', width: '100%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>View Appointments</h3></button>
        <button onClick={logout} style={{backgroundColor:'transparent', border:'0px', width: '100%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>Logout</h3></button>
        
        </div>
        <div style={{width:'80%',backgroundColor:'rgb(156 170 192 / 33%)'}}>
        <h3 style={{textAlign: 'center',fontSize: '24px',color: '#1F253F',padding: '20px', borderBottom: '1px solid #1F253F'}}>My Dashboard</h3>
        <TableAppoinment />
        </div>
       </section>):  (<div></div>)}
      
        </>
    );
}

export default MyAppointments;