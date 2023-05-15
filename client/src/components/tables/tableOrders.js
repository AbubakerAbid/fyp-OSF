import "./table.css"
import React from 'react';
import { useDispatch} from 'react-redux';
import {deleteOrder} from "../../actions/orders";
import {Link} from 'react-router-dom';

const TableOrders = ({post}) => {
    
    const dispatch = useDispatch();
    return(
        <>
            <div className="App">
            <table>
                <tr>
                <th>User Name</th>
                <th>User Contact</th>
                <th>Worker First Name</th>
                <th>WorkerLast Name</th>
                <th>Work</th>
                <th>Worker Contact</th>
                <th>Order Status</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
                
        
            
                    <tr >
                    <td> {post.userName}</td>
                    <td> {post.userContact}</td>
                    <td>{post.firstName}</td>
                    <td> {post.lastName}</td>
                    <td> {post.work}</td>
                    <td> {post.contact}</td>
                    <td> {post.status}</td>
                    
                    
                    <td><Link to="/updateOrder" state={post}><button >U</button></Link></td>
                    <td><button onClick={() => dispatch(deleteOrder(post._id), window.location.reload(false))}>D</button></td>
                    </tr>
                
            </table>
            </div>

        </>
    );
}

export default TableOrders;


