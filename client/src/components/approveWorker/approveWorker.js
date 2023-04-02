import Posts from "../worker-post/post";

import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getPosts } from "../../actions/posts";
const ApproveWorker = () =>{
    const [currentPostId, setCurrentPostId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentPostId, dispatch]);

    return (
        <>
       <Posts setCurrentPostId = {setCurrentPostId } currentPostId = {currentPostId} purpose = "approve"></Posts>
        </>
    );
}

export default ApproveWorker;