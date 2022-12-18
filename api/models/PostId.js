


import mongoose from "mongoose";

const PostIdSchema = new mongoose.Schema({

  slug : {
    type : String,
  },

  postId : {
    type: String
  }

})

export const PostId = mongoose.model('PostId', PostIdSchema)