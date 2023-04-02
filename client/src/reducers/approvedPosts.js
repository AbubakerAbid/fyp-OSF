import { FETCH, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (approvedPosts = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    case LIKE:
      return approvedPosts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...approvedPosts, action.payload];
    case UPDATE:
      return approvedPosts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return approvedPosts.filter((post) => post._id !== action.payload);
    default:
      return approvedPosts;
  }
};

