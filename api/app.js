/*

MERN CMS

a practice portfolio project
by josh kaye


*/

import express from "express";
import * as dotenv from "dotenv"
import connectDB from "./utils/db.js";
import {
  getAllPosts,
  createPost,
  getSinglePost,
  updateSinglePost,
  destroySinglePost
} from "./controllers/posts.js"

// Environment variables
dotenv.config()

// Express
const app = express()
const port = 3000


// Routes
const router = express.Router()

router.route('/').get(  getAllPosts)
                 .post( createPost )

router.route('/post/:id').get( getSinglePost )
                         .put( updateSinglePost )
                         .delete( destroySinglePost )

app.use('/api/', router)

try {
  connectDB(process.env.MONGO_URI)
  app.listen(port, console.log('listening'))
} catch (err) {
  console.log(err)
}