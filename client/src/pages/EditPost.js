import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import Icon from "../components/Icon"
import {FlashContext} from "../App"
import { APIURL } from "../utils/config";

export default function EditPost() {

  const { slug: uri } = useParams()

  const [, setFlash] = useContext(FlashContext)

  const [id, setId] = useState(false)
  const [post, setPost] = useState([])
  const [title, setTitle] = useState(false)
  const [date, setDate] = useState(false)
  const [slug, setSlug] = useState(uri)
  const [published, setPublished] = useState(false)
  const [body, setBody] = useState(false)
  const [postTags, setPostTags] = useState(false)

  useEffect( () => {

    async function getPost() {

      try {
        
        const res = await fetch(`${APIURL}/post/${uri}`)
        if(!res.ok) return
        const data = await res.json()

        // Convert tags to comma separated list
        const tags = data.singlePost.tags.map( tag => ` ${tag}`).toString().substring(1)

        setId(data.singlePost._id)
        setPost(data.singlePost)
        setTitle(data.singlePost.title)
        setDate(data.singlePost.date.slice(0,-1))
        setSlug(data.singlePost.slug)
        setPublished(data.singlePost.published)
        setBody(data.singlePost.body)
        setPostTags(tags)

      } catch (err) {

        setFlash({ message : err.message, type : 'fail' })
      }
    }

    getPost()
  },[uri, setFlash])

  async function handleSubmit(e) {
    e.preventDefault()

    const tags = postTags.split(',').map(tag => tag = tag.trim())

    try {
      const res = await fetch(`${APIURL}/post/${id}`, {
        method : 'PUT',
        headers : { 'Content-Type' : 'application/json; charset=UTF-8' },
        body : JSON.stringify({ title, date, slug, published, body, tags })
      })
  
      const data = await res.json()
      console.log(data)
  
      setFlash({
        message: `Successfully Updated post: ${ data.updatedPost.title }`, 
        type : 'success'
      })
      
    } catch (error) {
      setFlash({ message: error.message, type : 'fail' })
    }

  }

  return(
    <section className="min-h-screen">

      {
      post.length !== 0 && <>
        <form onSubmit={ handleSubmit }>
        <div className="flex flex-col gap-6"> 

        <PageHeading>
          <label>
            Edit Post:
            <input 
              type="text" 
              className="p-2 w-full border border-gray-200" 
              value={ title }
              onChange={ (e) => setTitle(e.target.value) }
            />
          </label>
        </PageHeading>

        <div>
          <label>
            Post Status:
            <select
              className="ml-4"
              defaultValue={ published ? 'true' : 'false' }
              onChange={ (e) => { setPublished(e.target.value) }}
            >
              <option value="false">Draft</option>
              <option value="true">Published</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Publish Date:
            <input
              type="datetime-local"
              className="ml-4"
              value={ date }
              onChange={ (e) => setDate(e.target.value) }
            />
          </label>
        </div>

        <div>
          <label>
            URL Slug:
            <input 
              type="text" 
              className="ml-4 p-2 border border-gray-200"
              value={ slug }
              onChange={ (e) => setSlug(e.target.value) }
            />
          </label>
        </div>

        <div>
          <label>
            Tags:
            <input 
              type="text" 
              className="ml-4 p-2 border border-gray-200"
              value={ postTags }
              onChange={ (e) => setPostTags(e.target.value) }
            />
          </label>
        </div>

        <div>
          <label>
            Post:
            <textarea
              className="rounded block border border-gray-400 w-full h-[75vh] p-2"
              defaultValue={body}
              onChange={ (e) => setBody(e.target.value) }
            ></textarea>
          </label>
        </div>

        <button 
          type="submit"
          className="
            rounded inline-flex items-center gap-2 px-6 py-3 w-fit
            bg-sky-200 hover:bg-sky-400 text-black font-medium text-lg"
        >
          Update Post
        </button>

        </div>
        </form>
      </>
      }


      {
      post.length === 0 && 
        <div className="py-8 font-medium text-lg text-center">
          <p className="my-4">
            This post doesn't exist
          </p>
          <p>
            <Link 
              to="/admin"
              className="
                rounded inline-flex items-center gap-1 w-fit px-3 py-1
                bg-sky-200 hover:bg-sky-800 hover:text-white"
            >
              <Icon>undo</Icon>
              Back to admin panel
            </Link>
          </p>
        </div>
      }

      </section>
  )

}