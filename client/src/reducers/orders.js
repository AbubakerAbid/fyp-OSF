import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';

export default (orders = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...orders, action.payload];
    case DELETE:
      return orders.filter((order) => order.id !== action.payload);
    default:
      return orders;
  }
};

