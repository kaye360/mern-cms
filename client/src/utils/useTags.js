/**
 * 
 * useTags custom hook
 * returns list of posts from DB with a given tag
 * 
 * Param tag = query parameter
 */


import { APIURL } from "./config"
import { useState, useEffect, useCallback } from "react"

export default function useTags({ tag }) {

  const [posts, setPosts] = useState([])

  const getPosts = useCallback( async () => {

    try {

      const res = await fetch(`${APIURL}/tag/${tag}`)
      if(!res.ok) throw new Error(res.status)
      const data = await res.json()
      setPosts(data.posts)
      
    } catch (err) {
      console.log(err)
    }
  }, [tag])

  useEffect( () => {
    getPosts()
  }, [getPosts])

  return { posts, getPosts}
}