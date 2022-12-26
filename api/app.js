/*

MERN CMS

a practice portfolio project
by josh kaye


*/

// Dependencies
import express from "express";
import cors from "cors"
import * as dotenv from "dotenv"

// Utils
import connectDB from "./utils/db.js";

// Models
import {
  getAllPosts,
  getPublishedPosts,
  getDraftPosts,
  getTaggedPosts,
  createPost,
  getSinglePost,
  updateSinglePost,
  destroySinglePost,
  // getPublishedPostsNoSkip
} from "./controllers/posts.js"

// Environment variables
dotenv.config()

// Express
const port = 3001
const app = express()
app.use(cors())
app.use(express.json())


// Routes
const router = express.Router()

router.route('/posts/all')      .get( getAllPosts )
router.route('/posts/published').get( getPublishedPosts )
router.route('/posts/drafts')   .get( getDraftPosts )

// router.route('/posts/noskip')   .get( getPublishedPostsNoSkip )

router.route('/tag/:tag').get( getTaggedPosts )

router.route('/post')      .post( createPost )
router.route('/post/:slug').get( getSinglePost )
router.route('/post/:id')  .put( updateSinglePost )
                           .delete( destroySinglePost )

app.use('/api/', router)

try {
  connectDB(process.env.MONGO_URI)
  app.listen(port, console.log('listening'))
} catch (err) {
  console.log(err)
}