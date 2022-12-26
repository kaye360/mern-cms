
// Post Model
import { Post } from "../models/Post.js"

// Async + Try/Catch wrapper function
import { tryAsync } from "../utils/async.js"




export const getAllPosts = tryAsync( async (req, res) => {
  const posts = await Post.find({}).sort({ "date" : "desc" })
  res.status(200).json({ posts })
})




export const getPublishedPosts = tryAsync( async (req, res) => {

  const page = parseInt(req.query.page || 0)
  const total = await Post.countDocuments({})

  const posts = await Post.find({ published : true })
    .sort({ "date" : "desc" })
    .limit(5)
    .skip(5 * page)
  res.status(200).json({ 
    totalPages : Math.ceil(total / 5),
    posts 
  })
})




export const getDraftPosts = tryAsync( async (req, res) => {
  const posts = await Post.find({ published : false }).sort({ "date" : "desc"})
  res.status(200).json({ posts })
})




export const getTaggedPosts = tryAsync( async (req, res) => {
  const tag = req.params.tag
  const posts = await Post.find({ tags : tag })

  if (!posts) return res.status(404).json({ msg : `No post found with tag: ${ tag }` })

  res.status(200).json({ posts })
} )



export const createPost = tryAsync( async (req, res) => {
  const urlSlugExists = await Post.exists({ slug : req.body.slug })
  if(urlSlugExists) return res.status(500).json({ 
    input : 'slug',
    message : `There is already a post with the slug: ${req.body.slug}` 
  })
  
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




