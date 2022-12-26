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

export default function usePosts({ type, page }) {

  const [posts, setPosts] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  const validTypes = useMemo( () => {
    return [
    'all', // All posts, ordered by Date DESC
    'published', // Published posts, ordered by Date DESC
    'drafts', // Draft posts, ordered by Date DESC
  ]}, [])

  
  const getPosts = useCallback( async () => {

    if( !validTypes.includes(type)) return
    
    try {
      let res
      if(page) {
        res = await fetch(`${APIURL}/posts/${type}?page=${page}&skip=false`)
      } else {
        res = await fetch(`${APIURL}/posts/${type}?page=1&skip=true`)
      }

      if(!res.ok) throw new Error(res.status)
      const data = await res.json()
      setPosts(data.posts)
      setTotalPages(data.totalPages)

    } catch (err) {
      setPosts({error : 'Error retrieving posts'})
    }
  }, [type, validTypes, page])


  const loadMorePosts = useCallback( async (page) => {

    if (!page) return

    try {
      const res = await fetch(`${APIURL}/posts/published?page=${page}&skip=true`)
      if(!res.ok) throw new Error(res.status)
      const data = await res.json()
      setPosts([...posts, ...data.posts])
    } catch (error) {
      
    }
  }, [posts])


  useEffect( () => {
    getPosts(0)
  }, [getPosts])

  return { posts, getPosts, loadMorePosts, totalPages}
}