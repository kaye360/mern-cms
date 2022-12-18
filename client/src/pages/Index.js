import { useEffect, useState } from "react"
import PostExcerpt from "../components/PostExcerpt"


export default function Index() {

  const [posts, setPosts] = useState([])

  useEffect( () => {

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

    getPosts()
  }, [])

  return(
    <section>

      <h1 className="my-4 text-2xl font-medium text-blue-800">Recent Posts</h1>

      <div className="flex flex-col gap-4">

        {
        posts.map( post => <PostExcerpt post={ post } key={ post._id } /> )
        }

      </div>

    </section>

  )

}