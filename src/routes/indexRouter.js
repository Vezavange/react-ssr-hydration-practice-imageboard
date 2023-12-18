import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    try { 
        const initState = {};
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