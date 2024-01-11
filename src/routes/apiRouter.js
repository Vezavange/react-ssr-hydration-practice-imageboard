import express from 'express';
import { Post } from "../../db/models"
import { checkUser } from '../middlewares';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });

//post-model-api

router.post('/addpost', upload.single('image'), async (req, res) => {
    try {
        const { id } = req.session.user;
        const { title, text } = req.body;
        const img = req.file.filename;
        await Post.create({
            title,
            img,
            text,
            user_id: id,
        });
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.status(500).send('Error while adding post');
    }
});

router.patch('/editpost/:id', checkUser, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, text } = req.body;
        await Post.update({ title, text }, { where: { id } });
        const data = await Post.findByPK(req.params.id);
        res.json({
            ...data.toJSON()
        })
    } catch (e) {
        console.log(e);
        res.status(500).send('Error while editing post');
    }
})

router.delete('/removepost/:id', checkUser, async (req, res) => {
    try {
        const { id } = req.params;
        await Post.destroy({where: { id }});
        res.sendStatus(200);
    } catch (e) {
        console.log(e)
        res.status(500).send('Error while deleting post');
    }
})

export default router;