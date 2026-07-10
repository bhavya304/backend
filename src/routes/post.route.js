import express from "express";
import {createPost,getPosts} from "../controller/post.controller.js";
const router=express.Router();
router.post("/create",createPost);
router.get("/getPosts",getPosts);
export default router;
