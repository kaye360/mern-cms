
// Slug Model
import { PostId } from "../models/PostId.js";

// Async + Try/Catch wrapper function
import { tryAsync } from "../utils/async.js";

export const getPostIdFromSlug = tryAsync( async (req, res) => {
  const slug = req.params.slug
  const postData = await PostId.findOne({ slug : slug })

  if(!postData) return res.status(404).json({ msg : 'Post data not found' })

  res.status(200).json({ postData})
})