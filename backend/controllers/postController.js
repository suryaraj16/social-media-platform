const Post = require("../models/Post");


exports.createPost = async (req, res) => {

    try {

        const newPost = await Post.create(req.body);

        res.status(201).json(newPost);

    } catch (error) {

        res.status(500).json(error);
    }
};


exports.getPosts = async (req, res) => {

    try {

        const posts = await Post.find().sort({ createdAt: -1 });

        res.json(posts);

    } catch (error) {

        res.status(500).json(error);
    }
};


exports.likePost = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        post.likes += 1;

        await post.save();

        res.json(post);

    } catch (error) {

        res.status(500).json(error);
    }
};


exports.commentPost = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        post.comments.push({
            text: req.body.text,
        });

        await post.save();

        res.json(post);

    } catch (error) {

        res.status(500).json(error);
    }
};


exports.deletePost = async (req, res) => {

    try {

        await Post.findByIdAndDelete(req.params.id);

        res.json({
            message: "Post deleted",
        });

    } catch (error) {

        res.status(500).json(error);
    }
};