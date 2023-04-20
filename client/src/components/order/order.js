import { useDispatch} from 'react-redux';
import { getOrders, deleteOrder} from '../../actions/orders';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const Order = () => {
  const dispatch = useDispatch();
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
        dispatch(getOrders(user.result._id));
    }, [dispatch]);

  const orders = useSelector((state) => state.orders);

  return (
    <div>
      {
          orders.map((order) => (                            
              <div key={order._id}>
                  <h3 >{order.work}</h3>
                  <h3 >{order.firstName} {order.lastName}</h3>
                  <p >Schedule: {order.date.slice(0, 10)} {order.time}</p>
                  <p >Mob: {order.contact}</p>
                  <p >Order No: {order._id}</p>
                  <p >Status:</p>
                  <button onClick={() => {
                    dispatch(deleteOrder(order._id))
                    window.location.reload();
                    }}>Cancel Order</button>
                  <br></br>
              </div>
          ))
      }
    </div>
  )
}

export default Order;