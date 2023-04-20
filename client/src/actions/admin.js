
import { AUTH3} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signInAdmin = (formData, router) => async (dispatch) => {
  try {
    const cred = { username: formData[0], password: formData[1]};
    const { data } = await api.signInAdmin(cred);

    dispatch({ type: AUTH3, data });

    router('/dashboard');
  } catch (error) {
    console.log(error);
  }
};