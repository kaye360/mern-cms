
// Post Model
import { Post } from "../models/Post.js"

// Async + Try/Catch wrapper function
import { tryAsync } from "../utils/async.js"




export const getAllPosts = tryAsync( async (req, res) => {
  const allPosts = await Post.find({}).sort({ "date" : "desc" })
  res.status(200).json({ allPosts })
})




export const createPost = tryAsync( async (req, res) => {
  const newPost = await Post.create(req.body)
  res.status(201).json({ newPost })
})




export const getSinglePost = tryAsync( async (req, res) => {
  const slug = req.params.slug
  const singlePost = await Post.findOne({ slug : slug })

  if (!singlePost) return res.status(404).json({ msg : `No post found with URI: ${ slug }` })

  res.status(200).json({ singlePost })
})






export const updateSinglePost = tryAsync( async (req, res) => {
  const id = req.params.id
  const updatedPost = await Post.findByIdAndUpdate(
    { 
      _id : id 
    },
    req.body,
    {
      new : true,
      runValidators : true
    }
  )

  if(!updatedPost) return res.status(404).json({ msg : `No post found with id ${ id }` })

  res.status(200).json({ updatedPost })
})




export const destroySinglePost = tryAsync( async (req, res) => {
  const id = req.params.id
  const destroyPost = await Post.findByIdAndDelete(id)

  if(!destroyPost) return res.status(404).json({ msg : `No post found with id ${ id }` })

  res.status(200).json({ destroyPost })
})




