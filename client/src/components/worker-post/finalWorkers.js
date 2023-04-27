import './WorkerCard.css'
import "./workerPost.css"
import { useDispatch} from 'react-redux';
import React, { useState} from 'react';
import { deletePost } from '../../actions/posts';
import { workerSignup, getWorker } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Worker = ({post, currentPostId, setCurrentPostId})=> {

    // const clickedPost = useSelector((state) => (currentPostId ? state.posts.find((message) => message._id === currentPostId) : null));

    const dispatch = useDispatch();

    function generateP() {
        var pass = '';
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz0123456789@#$';
          
        for (let i = 1; i <= 8; i++) {
            var char = Math.floor(Math.random()
                        * str.length + 1);
              
            pass += str.charAt(char)
        }
          
        return pass;
    }

    const pass = generateP()

    const [postData, setPostData] = useState({ 
        password: pass,
        firstName: post.firstName,
        username: post.firstName+'osf',
        lastName: post.lastName,
        cnic: post.cnic,
        work: post.work,
        contact: post.contact,
        salary: post.salary,
        description: post.description,
        address: post.address,
        email: post.email
    });

    
    const history = useNavigate();

    const Approve = async () => {
        dispatch(workerSignup(postData, history));
        setCurrentPostId(post._id)
        dispatch(deletePost(post._id))
        const response = await axios.post('http://localhost:5000/api/sendMail', postData)
        window.location.reload(false);
    }

    return(
        <div className='worker-card'>
            <div className="wcards">
                <div className="wcard">
                    {/* <img src={props.imgsrc} alt="Service-Pic" className="card__img"></img> */}
                    <div className="wcard__info">
                        <h3 className="wcard__title">{post.work}</h3>
                        <h3 className="wcard__name">{post.firstName} {post.lastName}</h3>
                        <h3 className="wcard__salary">Starting from : {post.salary}</h3>
                        <p className="wcard__des">{post.description}</p>
                        <p className='dv' id = "dv">{post.contact}</p>
                        <a href={post.link}>
                        <button onClick = {Approve} id = "dn" className='service-btn '>Approve</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Worker;

