import { FETCH_ALL, CREATE, DELETE, UPDATE} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getOrders = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOrders(id);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAppointments = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchAppointments(id);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createOrder = (orderData) => async (dispatch) => {
  try {
    const { data } = await api.createOrder(orderData);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteOrder = (id) => async(dispatch) => {
  try{
    await api.deleteOrder(id);
    dispatch({type: DELETE, payload: id});

  }catch(error){
    console.log(error);
  }
}

export const UpdateOrder = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.UpdateOrder(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
