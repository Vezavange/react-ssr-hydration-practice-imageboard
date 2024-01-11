import { Post } from '../../db/models'

export const checkUser = async (req, res, next) => {
    const post = await Post.findByPk(req.params.id);
    if (post.user_id === req.session?.user?.id) return next();
    return res.sendStatus(403);
  };