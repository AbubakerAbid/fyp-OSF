import './Navbar.css'
import React, { useState, useEffect } from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';

import * as actionType from "../../constants/actionTypes"

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useNavigate();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history('/');
        setUser(null);
        };

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
        
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
        }, [location]);

    return(
        <>
        <header>
        <h1>OSF.Pk</h1>
        <nav>
            <ul>
            <li className="nav__links"><a href="./">Home</a></li>
            <li className="nav__links"><a href="./About">About</a></li>
            <li className="nav__links"><a href="/FindService">Find a Worker</a></li>
            <li className="nav__links"><a href="/BecomeProvider">Become a Worker</a></li>                        
            <li className="nav__links"><a href="/ContactUs">Contact Us</a></li>
            {user?.result?.name ? (<li className="nav__links"><a href="/MyOrders">My Orders</a></li>):  (<div></div>)}
            {user?.result?.name ? (<li className="nav__links"><a href="/Me">Me</a></li>):  (<div></div>)}
            </ul>
        </nav>
        <div>
            {user?.result ? (
                    <div>
                    <button onClick={logout}>Logout <span style={{padding:'5px 10px',
    background: 'white',
    border: '1px solid',
    borderRadius: '25px',
    fontSize: '18px' ,
    marginLeft: '10px',
    color:'#000'}}>{user?.result.name.charAt(0)}</span></button>
                    {/* <img alt={user?.result.name} ></img> */}
                    {/* <img src="https://w7.pngwing.com/pngs/58/482/png-transparent-computer-icons-user-login-icon-miscellaneous-monochrome-black.png"></img> */}
                    {/* <span style={{padding:'8px 14px',
    background: 'white',
    border: '1px solid',
    borderRadius: '25px',
    fontSize: '22px' ,
    margin: '10px'}}>{user?.result.name.charAt(0)}</span> */}
                    {/* <h4>{user?.result.name}</h4> */}
                    </div>
                ) : (
                   <Link to="/auth"><button >Sign In</button></Link>
                    
                )}
         </div>

    </header>
        </>
    );
}

export default Navbar;