import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import users from "./users";
import approvedPosts from "./approvedPosts";

export const reducers = combineReducers({ posts, auth, users, approvedPosts});
