import { useContext } from "react";
import PageHeading from "../components/PageHeading";
import {FlashContext} from "../App"
import { useNavigate } from "react-router-dom";

export default function EditPost() {

  const [, setFlash] = useContext(FlashContext)
  const navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault()

    const postData = {
      title : e.target[0].value,
      published : e.target[1].value,
      date : e.target[2].value,
      slug : e.target[3].value,
      body : e.target[4].value,
      likes : 0,
    }

    try {
      const res = await fetch(`http://localhost:3001/api/`, {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json; charset=UTF-8' },
        body : JSON.stringify( postData )
      })

      if(!res.ok) throw new Error(res.status)

      const data = await res.json()

      setFlash({
        message: `Successfully created post: ${ data.newPost.title }`, 
        type : 'success'
      })

      navigate(`/post/${data.newPost.slug}`)
      
    } catch (error) {
      console.log(error)
      setFlash({
        message: error.message, 
        type : 'fail'
      })
    }
  }

  return(
    <section>

      <form onSubmit={ handleSubmit }>
      <div className="flex flex-col gap-6"> 

        <PageHeading>
          Create a new post
        </PageHeading>

        <div>
          <label>
            Post Title:
            <input 
              type="text" 
              className=" p-2 border border-gray-200 w-full"
            />
          </label>
        </div>

        <div>
          <label>
            Post Status:
            <select
              className="ml-4"
              >
              <option value="false" defaultChecked>Draft</option>
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
            />
          </label>
        </div>

        <div>
          <label>
            URL Slug:
            <input 
              type="text" 
              className="ml-4 p-2 border border-gray-200"
            />
          </label>
        </div>

        <div>
          <label>
            Post:
            <textarea
              className="rounded block border border-gray-400 w-full h-[75vh] p-2"
            ></textarea>
          </label>
        </div>

        <button 
          type="submit"
          className="
            rounded inline-flex items-center gap-2 px-6 py-3 w-fit
            bg-sky-200 hover:bg-sky-400 text-black font-medium text-lg"
        >
          Create Post
        </button>

        </div>
        </form>

      </section>
  )

}