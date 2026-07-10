import express from "express";
import {createPost,getPosts,updatePost,deletePost} from "../controller/post.controller.js";
const router=express.Router();

router.post("/create",createPost);
router.get("/getPosts",getPosts);
router.put("/update/:id",updatePost);
router.delete("/delete/:id",deletePost);

export default router;
