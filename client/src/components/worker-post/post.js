import Post from './workerPost';
import Worker from './finalWorkers';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { fetchApprovedPosts } from '../../actions/posts';
import React, {useEffect } from 'react';
const Posts = ({setCurrentPostId, name, purpose, currentPostId, currentId, setCurrentId})=> {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApprovedPosts());
    }, [currentId, dispatch]);

    const posts = useSelector((state) => state.posts);
    const approvedPosts = useSelector((state) => state.approvedPosts);

    if (purpose) {
        return (!posts.length ?null: (
          <div >
                      {
                          posts.map((post) => (                            
                              <div key={post._id}>
                                   <Worker currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} post = {post}></Worker>
                              </div>
                          ))
                      }
          </div>))
    }
    return (!approvedPosts.length ?null: (
        <div >
                    {
                        approvedPosts.map((post) => (  
                            <div key={post._id}>
                                 <Post post = {post} name = {name} currentId = {currentId} setCurrentId = {setCurrentId}></Post>                          
                            </div>
                        ))
                    }
        </div>)
    )
}

export default Posts;