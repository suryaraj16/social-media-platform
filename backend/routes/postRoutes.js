const express = require("express");

const router = express.Router();

const {
    createPost,
    getPosts,
    likePost,
    commentPost,
    deletePost
} = require("../controllers/postController");


router.post("/", createPost);

router.get("/", getPosts);

router.put("/like/:id", likePost);

router.put("/comment/:id", commentPost);

router.delete("/:id", deletePost);


module.exports = router;