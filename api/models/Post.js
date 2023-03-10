


import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({

  title : {
    type : String,
    required : true,
    trim : true,
    maxLength : [255, 'Title must not exceed 255 characters'],
  },

  date : {
    type : Date,
    required : true,
  },

  published : {
    type : Boolean,
    required : true,
  },

  body : {
    type : String,
    required : true,
  },

  likes : {
    type : Number,
    required : true,
  },

  slug : {
    type : String,
    required : true,
    // unique : true,
  },

  tags : [{
    type : String
  }],

})

export const Post = mongoose.model('Post', PostSchema)