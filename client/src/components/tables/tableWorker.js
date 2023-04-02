import "./table.css"
import { useSelector } from 'react-redux';
import React, {useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchApprovedPosts } from "../../actions/posts";

const TableWorker = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchApprovedPosts());
    }, [dispatch]);

    const posts = useSelector((state) => state.approvedPosts
    );

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
                </tr>
                
                {posts.map((val, key) => {
                return (
                    <tr key={key}>
                    <td>{val.firstName}</td>
                    <td> {val.lastName}</td>
                    <td> {val.cnic}</td>
                    <td> {val.work}</td>
                    <td> {val.contact}</td>
                    <td> {val.salary}</td>
                    <td> {val.description}</td>
                    </tr>
                )
                })}
            </table>
            </div>

        </>
    );
}

export default TableWorker;
