import { useDispatch} from 'react-redux';
import { getOrders, deleteOrder} from '../../actions/orders';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './order.css'


const Order = () => {
  const dispatch = useDispatch();
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
        dispatch(getOrders(user.result._id));
    }, [dispatch]);

  const orders = useSelector((state) => state.orders);

  return (
    <div className='order-div-main-div'>
      {
          orders.map((order) => (                            
              <div className='order-main-div' key={order._id}>
                  <h3 className='line-space' >{order.work}</h3>
                  <h3 className='line-space' >{order.firstName} {order.lastName}</h3>
                  <p  className='line-space' >Schedule: {order.date.slice(0, 10)} {order.time}</p>
                  <p className='line-space' >Mob: {order.contact}</p>
                  <p  className='line-space'>Order No: {order._id}</p>
                  <p  className='line-space'>Status: {order.status}</p>
                  <button onClick={() => {
                    dispatch(deleteOrder(order._id))
                    window.location.reload();
                    }} className='line-space' style={{marginTop:'20px'}}>Cancel Order</button>
                  <br></br>
              </div>
          ))
      }
    </div>
  )
}

export default Order;