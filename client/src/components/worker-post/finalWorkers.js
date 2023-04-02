import './WorkerCard.css'
import "./workerPost.css"
import { createApprovedPost } from '../../actions/posts';
import { useDispatch} from 'react-redux';
import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import { deletePost } from '../../actions/posts';

const Worker = ({post, currentPostId, setCurrentPostId})=> {

    const clickedPost = useSelector((state) => (currentPostId ? state.posts.find((message) => message._id === currentPostId) : null));


    const [postData, setPostData] = useState({
        firstName: post.firstName,
        lastName: post.lastName,
        cnic: post.cnic,
        work: post.work,
        contact: post.contact,
        salary: post.salary,
        description: post.description

    });

    const dispatch = useDispatch();

    const approve = () => {
        dispatch(createApprovedPost(postData))
        setCurrentPostId(post._id)
        dispatch(deletePost(post._id))
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
                        <button onClick = {approve} id = "dn" className='service-btn '>Approve</button>
                           
                         
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Worker;
