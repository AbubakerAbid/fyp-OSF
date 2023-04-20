import { AUTH, AUTH2, FETCH_ALL, DELETE, UPDATE} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router('/');
  } catch (error) {
    console.log(error);
    //error.response.data
    
  }
};

export const workerSignin = (formData, router) => async (dispatch) => {
  try {
    const cred = { username: formData[0], password: formData[1]};
    const { data } = await api.workerSignIn(cred);

    dispatch({ type: AUTH2, data });

    router('/WorkerDashboard');
  } catch (error) {
    console.log(error);
  }
};

export const workerSignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.workerSignUp(formData);
    
    dispatch({ type: AUTH2, data });

    router('/ApproveWorkerDashboard');
  } catch (error) {
    console.log(error);
    
  }
};


export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getWorker = () => async (dispatch) => {
  try {

    const { data } = await api.getWorker();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteUser = (id) => async (dispatch) => {
  try {
    await await api.deleteUser(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const deleteWorker = (id) => async (dispatch) => {
  try {
    await await api.deleteWorker(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateWorker = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateWorker(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};