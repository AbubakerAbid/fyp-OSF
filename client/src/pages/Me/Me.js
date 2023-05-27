import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import {Link} from 'react-router-dom';
const Me = () =>{
    const [users, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const user = {
        name: users?.result?.name,
        email: users?.result?.email,
        _id: users?.result?._id,
        status: 'me'
    }
    return (
        <>
       <Navbar />
       <Breadcrumb title="Edit My Profile" />
       <br></br>
       <p style={{textAlign:"center"}}>Note: You will have to LogIn again to see the updates</p>
       <br></br>
       <table>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Update</th>
            
                </tr>
                
         

                    
                    <tr >
                    <td>{user.name}</td>
                    <td> {user.email}</td>
                    
                    <td><Link to="/updateUser" state={user}><button >U</button></Link></td>

                    </tr>
                
      
            </table>
            <br></br>

       <Footer />
        </>
    );
}

export default Me;