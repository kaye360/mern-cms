/*

DB connection function

*/


import mongoose from "mongoose"


export default function connectDB(url) {

  mongoose.set('strictQuery', true)

  mongoose.connect(url, {})
    .then( () => {
      console.log('connected to the db')
    } ).catch( err => {
      console.log(err)
    } )
}

