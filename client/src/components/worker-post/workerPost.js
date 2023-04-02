import './WorkerCard.css'
import "./workerPost.css"
import {Link} from 'react-router-dom';

const Post = ({post, setCurrentId, name})=> {
    const user = JSON.parse(localStorage.getItem('profile'));


    if(post.work === name){

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
                        {user?.result?.name ? (<button id = "dn" className='service-btn '>Hire Now</button>):  ( <Link to="/auth"><button  id = "dn" className='service-btn '>Hire Now</button></Link>)}
                           
                         
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Post;
