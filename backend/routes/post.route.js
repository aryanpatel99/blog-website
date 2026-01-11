const express = require("express");
const { getPosts, getPost, createPost, deletePost, uploadAuth, featurePost } = require("../controllers/post.controller");
const { increaseVisit } = require("../middlewares/increaseVisit");
const postRouter = express.Router();


postRouter.get('/upload-auth', uploadAuth)
postRouter.get('/',getPosts)
postRouter.get('/:slug', increaseVisit,getPost)
postRouter.post('/', createPost)
postRouter.delete('/:id', deletePost)
postRouter.patch('/feature', featurePost)




module.exports = {postRouter}