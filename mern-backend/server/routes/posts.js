import express from 'express';
import { getPosts } from '../controller/posts.js'
import { createPost } from '../controller/posts.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;
