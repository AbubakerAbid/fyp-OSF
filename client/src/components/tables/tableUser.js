import "./table.css"
import React from 'react';
import { useDispatch} from 'react-redux';
import {deleteUser} from "../../actions/auth";
import {Link} from 'react-router-dom';

const TableUser = ({user}) => {
    const dispatch = useDispatch();


    return(
        <>
            <div className="App">
            <table>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
                
         

                    
                    <tr >
                    <td>{user.name}</td>
                    <td> {user.email}</td>
                    
                    <td><Link to="/updateUser" state={user}><button >U</button></Link></td>
                    <td><button onClick={() => dispatch(deleteUser(user._id), window.location.reload(false))}>D</button></td>
                    </tr>
                
      
            </table>
            </div>

        </>
    );
}

export default TableUser;

