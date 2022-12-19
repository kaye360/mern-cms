

import { useState, useEffect } from "react"

export default function usePosts() {
  const [posts, setPosts] = useState([])

  async function getPosts() {
    try {

      const res = await fetch('http://localhost:3001/api/')
      if(!res.ok) throw new Error(res.status)
      const data = await res.json()
      setPosts(data.allPosts)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect( () => {
    getPosts()
  }, [])

  return { posts, getPosts}
}