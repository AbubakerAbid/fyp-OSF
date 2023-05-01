import "./table.css"
import React from 'react';
import { useDispatch} from 'react-redux';
import {deleteWorker} from "../../actions/auth";
import {Link} from 'react-router-dom';
const TableWorker = ({post}) => {
    
    const dispatch = useDispatch();
    return(
        <>
            <div className="App">
            <table>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>CNIC</th>
                <th>Work</th>
                <th>Contact</th>
                <th>Salary</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
                
        
            
                    <tr >
                    <td>{post.firstName}</td>
                    <td> {post.lastName}</td>
                    <td> {post.cnic}</td>
                    <td> {post.work}</td>
                    <td> {post.contact}</td>
                    <td> {post.salary}</td>
                    <td> {post.description}</td>
                    
                    <td><Link to="/update" state={post}><button >U</button></Link></td>
                    <td><button onClick={() => dispatch(deleteWorker(post._id), window.location.reload(false))}>D</button></td>
                    </tr>
                
            </table>
            </div>

        </>
    );
}

export default TableWorker;
