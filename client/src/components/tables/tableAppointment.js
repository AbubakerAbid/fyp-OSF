import "./table.css"
import { useDispatch} from 'react-redux';
import { getAppointments, deleteOrder, UpdateOrder} from '../../actions/orders';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const TableAppoinment = () => {
    const dispatch = useDispatch();
    

    const [worker] = useState(JSON.parse(localStorage.getItem('profile2')));

    useEffect(() => {
          dispatch(getAppointments(worker.result._id));
      }, [dispatch]);
  
    const orders = useSelector((state) => state.orders);

    const [postData, setPostData] = useState({
      status: "Completed"
  
  });

  const [text, setText] = useState({
    stat: "Complete"

});

    return (
      <div>
        {
            orders.map((order) => (                            
                <div key={order._id} className="appointments-table-css">
                    <h3 className="appointment-space">Service : {order.work}</h3>
                    <h3 className="appointment-space" >{order.userName}</h3>
                    <p className="appointment-space" >Schedule: {order.date.slice(0, 10)} {order.time}</p>
                    <p  className="appointment-space">Mob: {order.userContact}</p>
                    <p className="appointment-space" >Order No: {order._id}</p>
                    <p  className="appointment-space">Status: {order.status}</p>
               
                    <button onClick={() => {
                      dispatch(deleteOrder(order._id))
                      window.location.reload();
                      }} className="cancel-order-worker-button">Cancel Request</button>

                    <button onClick={() => {
                    //  setText( {stat: "Completed"})
                  
                    dispatch(UpdateOrder(order._id, postData))
                    window.location.reload();
                    
                    }} className="cancel-order-worker-button">{text.stat}</button>
                    <br></br>
                </div>
            ))
        }
      </div>
    )
  }

export default TableAppoinment;
