
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

      {
      post.length !== 0 && <>
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
      </>
      }
      
      {
      post.length === 0 && <>
        <div className="flex flex-col items-center gap-4 py-24 text-center">
          <p>
            Sorry, this post doesn't exist.
          </p>
          
          <Link 
            to="/" 
            className="rounded inline-block px-3 py-1 bg-emerald-400 text-white font-medium hover:bg-slate-200 hover:text-slate-600"
          >
            Back to the homepage
          </Link>

        </div>


      </>
      }
      

    </section>
  )

}