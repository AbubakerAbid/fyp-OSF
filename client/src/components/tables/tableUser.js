import "./table.css"
import { useSelector } from 'react-redux';
import React, {useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getUsers } from "../../actions/auth";

const TableUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const users = useSelector((state) => state.users);

    return(
        <>
            <div className="App">
            <table>
                <tr>
                <th>Name</th>
                <th>Email</th>
                </tr>
                
                {users.map((val, key) => {
                return (
                    <tr key={key}>
                    <td>{val.name}</td>
                    <td> {val.email}</td>
                    </tr>
                )
                })}
            </table>
            </div>

        </>
    );
}

export default TableUser;
