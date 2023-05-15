import { useNavigate } from 'react-router-dom';
import ApproveWorker from '../../components/approveWorker/approveWorker';
import { useDispatch } from 'react-redux';
import * as actionType from "../../constants/actionTypes"
import React, {useState } from 'react';

const ApproveWorkerDashboard = () =>{
    const history = useNavigate();

    const workerDetailPage = () => {
        history("/WorkerDetailDashboard");
      }
    
    const userDetailPage = () => {
        history("/UserDetailDashboard");
      }
    
    const approveWorkerPage = () => {
        history("/ApproveWorkerDashboard");
      }

      const dispatch = useDispatch();
      const [admin, setadmin] = useState(JSON.parse(localStorage.getItem('profile3')));
      
      const logout = () => {
       
        dispatch({ type: actionType.LOGOUT });
        history("/admin");
        setadmin(null);
      }
  

    return (
        <>
         {admin?.result?.name ? (<section style={{display:'block'}}>
        <div style={{width:'100%',backgroundColor:'#1F253F'}}>
        <h3 style={{textAlign: 'center',fontSize: '24px',color: 'white',padding: '20px', borderBottom: '1px solid'}}>ADMIN</h3>
        <div style={{display:'flex'}}>
        <button onClick={workerDetailPage} style={{backgroundColor:'transparent', border:'0px', width: '25%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>View Workers</h3></button>
        <button onClick ={approveWorkerPage} style={{backgroundColor:'transparent', border:'0px', width: '30%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>Approve Worker</h3></button>
        <button onClick={userDetailPage} style={{backgroundColor:'transparent', border:'0px', width: '25%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>View Users</h3></button>
        {/* <button style={{backgroundColor:'transparent', border:'0px', width: '100%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>Add New User</h3></button> */}
        <button onClick={logout} style={{backgroundColor:'transparent', border:'0px', width: '100%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>Logout</h3></button>
        </div>
        
        </div>
        <div style={{width:'100%',backgroundColor:'rgb(156 170 192 / 33%)'}}>
        <h3 style={{textAlign: 'center',fontSize: '24px',color: '#1F253F',padding: '20px', borderBottom: '1px solid #1F253F'}}>Workers Registered (Approval Pending)</h3>
        <ApproveWorker/>
        </div>
       </section>):  (<div></div>)}
       
       
        </>
    );
}

export default ApproveWorkerDashboard;