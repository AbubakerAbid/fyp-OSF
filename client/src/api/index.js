import axios from 'axios';

const API = axios.create({ baseURL: 'https://osfbackend-jb4u.onrender.com/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const createFeedback = (newPost) => API.post('/feedback', newPost);

export const fetchOrders = (id) => API.get(`/order/${id}`);
export const fetchAppointments = (id) => API.get(`/order/Appointments/${id}`);

export const getFeedbacks = () => API.get('/feedback/');
export const allOrders = () => API.get('/order/');
export const createOrder = (newOrder) => API.post('/order', newOrder);
export const deleteOrder = (id) => API.delete(`/order/${id}`);

export const fetchApprovedPosts = () => API.get('/worker/approved');
// export const createApprovedPost = (newPost) => API.post('/posts/approved', newPost);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const UpdateOrder = (id, updatedPost) => API.patch(`/order/${id}`, updatedPost);

export const signInAdmin = (formData) => API.post('/admin/signin', formData);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const workerSignIn = (formData) => API.post('/worker/signin', formData);
export const workerSignUp = (formData) => API.post('/worker/signup', formData);
export const getWorker = () => API.get(`/worker/`);

export const fetchUsers = () => API.get('/user');

export const updateUser = (id, updatedPost) => API.patch(`/user/${id}`, updatedPost);
export const updateWorker = (id, updatedPost) => API.patch(`/worker/${id}`, updatedPost);
export const deleteUser = (id) => API.delete(`/user/${id}`);
export const deleteWorker = (id) => API.delete(`/worker/${id}`);

////////
// import axios from 'axios';

// const url = 'http://localhost:5000/posts';

// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);


