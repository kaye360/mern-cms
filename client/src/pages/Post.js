
import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import PageHeading from "../components/PageHeading";



export default function Post() {

  const { slug } = useParams()


  const [post, setPost] = useState([])


  useEffect( () => {

    async function getPost() {
      try {

        const res = await fetch(`http://localhost:3001/api/post/${slug}`)
        if(!res.ok) throw new Error(res.status)
        const data = await res.json()
        setPost(data.singlePost)
      } catch (err) {
        console.log(err)
      }
    }

    getPost()
  }, [slug])



  return(
    <section>
      <PageHeading>
        <Link to={`/post/${slug}`}>
          {post.title}
        </Link>
      </PageHeading>

      <div>
        {post.date}
      </div>

      <div>
        {post.likes} likes
      </div>

      <div className="my-4">
        {post.body}
      </div>

    </section>
  )

}