import express from 'express';
import { Post } from '../../db/models'

const router = express.Router();

router.get('/', async (req, res) => {
    try { 
        const posts = await Post.findAll();
        const initState = { posts };
        res.render('Layout', initState);
    } catch (e) {
        console.log(e);
    }
});

router.get('/signup', (req, res) => {
    try {
      res.render('Layout', {});
    } catch (e) {
      console.log(e);
    }
  });
  
router.get('/login', (req, res) => {
    try {
      res.render('Layout', {});
    } catch (e) {
      console.log(e);
    }
  });

export default router;