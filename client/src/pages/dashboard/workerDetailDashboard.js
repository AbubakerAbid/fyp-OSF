import TableWorker from '../../components/tables/tableWorker';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { fetchApprovedPosts } from '../../actions/posts';
import * as actionType from "../../constants/actionTypes"
import React, {useState, useEffect } from 'react';

const WorkerDetailDashboard = () =>{
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
  
    useEffect(() => {
        dispatch(fetchApprovedPosts());
    }, [dispatch]);

    const [admin, setadmin] = useState(JSON.parse(localStorage.getItem('profile3')));

    const logout = () => {
      history("/admin");
      dispatch({ type: actionType.LOGOUT });
      setadmin(null);
    }

    const posts = useSelector((state) => state.approvedPosts
    );

    return (
        <>
       <section style={{display:'flex'}}>
        <div style={{width:'20%',backgroundColor:'#1F253F', height:'100vh'}}>
        <h3 style={{textAlign: 'center',fontSize: '24px',color: 'white',padding: '20px', borderBottom: '1px solid'}}>ADMIN</h3>
        <button onClick={workerDetailPage} style={{backgroundColor:'transparent', border:'0px', width: '100%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>View Workers</h3></button>
        <button onClick ={approveWorkerPage} style={{backgroundColor:'transparent', border:'0px', width: '100%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>Approve Worker</h3></button>
        <button onClick={userDetailPage} style={{backgroundColor:'transparent', border:'0px', width: '100%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>View Users</h3></button>
        {/* <button style={{backgroundColor:'transparent', border:'0px', width: '100%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>Add New User</h3></button> */}
        <button onClick={logout} style={{backgroundColor:'transparent', border:'0px', width: '100%'}}><h3 style={{textAlign: 'center',fontSize: '16px',color: 'white',padding: '20px', borderBottom: '1px solid', fontWeight:'400'}}>Logout</h3></button>
       
        </div>
        <div style={{width:'80%',backgroundColor:'rgb(156 170 192 / 33%)'}}>
        <h3 style={{textAlign: 'center',fontSize: '24px',color: '#1F253F',padding: '20px', borderBottom: '1px solid #1F253F'}}>Dashboard</h3>
        {posts.map((post) => (
        <TableWorker post={post}/>
        ))}
        </div>
       </section>
        </>
    );
}

export default WorkerDetailDashboard;