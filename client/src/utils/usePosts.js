/**
 * 
 * usePosts custom hook
 * returns list of posts from DB
 * 
 * Param type = what type of posts to query
 * Check validTypes array for all possible types
 */


import { APIURL } from "./config"
import { useState, useEffect, useCallback, useMemo } from "react"

export default function usePosts({ type }) {

  const [posts, setPosts] = useState([])

  const validTypes = useMemo( () => {
    return [
    'all', // All posts, ordered by Date DESC
    'published', // Published posts, ordered by Date DESC
    'drafts', // Draft posts, ordered by Date DESC
  ]}, [])

  
  const getPosts = useCallback( async () => {

    if( !validTypes.includes(type)) return
    
    try {

      const res = await fetch(`${APIURL}/posts/${type}`)
      if(!res.ok) throw new Error(res.status)
      const data = await res.json()
      setPosts(data.posts)
      
    } catch (err) {
      console.log(err)
    }
  }, [type, validTypes])

  useEffect( () => {
    getPosts()
  }, [getPosts])

  return { posts, getPosts}
}