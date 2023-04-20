import { combineReducers } from 'redux';

import posts from './posts';
import orders from './orders';
import auth from './auth';
import users from "./users";
import approvedPosts from "./approvedPosts";

export const reducers = combineReducers({ posts, orders, auth, users, approvedPosts});
