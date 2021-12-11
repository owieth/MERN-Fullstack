import Post from '../model/post.js';

export const getPosts = async (req, res) => {
    try {
        const post = await Post.find();

        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const body = req.body;

    const post = new Post(body);

    try {
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}