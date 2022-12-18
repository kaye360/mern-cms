

import { Post } from "../models/Post.js"
import { tryAsync } from "../utils/async.js"



// 
// 
// 
export const getAllPosts = tryAsync( async(req, res) => {
  const posts = await Post.find({})
  res.status(200).json({ posts })
})




// 
// 
// 
export const createPost = () => {

}




// 
// 
// 
export const getSinglePost = () => {

}




// 
// 
// 
export const updateSinglePost = () => {

}




// 
// 
// 
export const destroySinglePost = () => {

}




