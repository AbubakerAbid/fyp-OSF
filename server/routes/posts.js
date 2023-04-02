import express from 'express';
import { getPosts, createPosts, deletePost} from '../controllers/posts.js';
import { getApprovedPosts, createApprovedPosts } from '../controllers/approvedPosts.js';

const router = express.Router()

router.get('/', getPosts);
router.post('/', createPosts);
router.delete('/:id', deletePost);

router.get('/approved', getApprovedPosts);
router.post('/approved', createApprovedPosts);

export default router;