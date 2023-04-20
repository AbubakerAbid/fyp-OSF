import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const createFeedback = (post) => async (dispatch) => {
    try {
      const { data } = await api.createFeedback(post);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getFeedbacks = () => async (dispatch) => {
    try {
      const { data } = await api.getFeedbacks();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
  