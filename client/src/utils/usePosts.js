/**
 * 
 * usePosts custom hook
 * returns list of posts from DB
 * 
 * Param type = what type of posts to query
 * Check validTypes array for all possible types
 */


import { APIURL } from "./config"
import { useState, useEffect } from "react"

export default function usePosts({ type }) {

  const [posts, setPosts] = useState([])

  const validTypes = [
    'all', // All posts, ordered by Date ASC
    'index', // Published posts, ordered by Date ASC
  ]

  
  async function getPosts() {

    if( !validTypes.includes(type)) return
    
    try {

      const res = await fetch(`${APIURL}/posts/${type}`)
      if(!res.ok) throw new Error(res.status)
      const data = await res.json()
      setPosts(data.posts)
      
    } catch (err) {
      console.log(err)
    }
  }

  useEffect( () => {
    getPosts()
  }, [])

  return { posts, getPosts}
}