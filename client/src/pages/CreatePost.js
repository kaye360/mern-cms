import { useContext, useState } from "react";
import PageHeading from "../components/PageHeading";
import {FlashContext} from "../App"
import { useNavigate } from "react-router-dom";
import { APIURL } from "../utils/config";
import { validateForm } from "../utils/forms"





export default function EditPost() {

  // Flash Message
  const [, setFlash] = useContext(FlashContext)

  // Redirect function
  const navigate = useNavigate()

  // Array of form validation errors
  const [formErrors, setFormErrors] = useState([])

  // Current Date
  const currentDate = new Date().toISOString().slice(0, -1)

  // Form Validation Errors
  // inputTitle must match key in validateForm
  function showError(inputTitle) {
    return (formErrors.filter( error => error.input === inputTitle ).map( (error, index) => {
      return <span className="inline-block ml-4 text-red-500"  key={index}>{error.message}</span>
    } ))
  }
  
  // Form validate and submit
  async function handleSubmit(e) {
    e.preventDefault()

    const postData = validateForm({

      title : {
        value : e.target[0].value,
        required : true,
        requiredErrorMsg : 'Post title is required'
      },

      published : {
        value : e.target[1].value,
        required : true,
        requiredErrorMsg : 'Post must be have a published status'
      },

      date : {
        value : e.target[2].value,
        required : true,
        requiredErrorMsg : 'Post must have date'
      },

      slug : {
        value : e.target[3].value,
        required : true,
        requiredErrorMsg : 'Post must have URL slug',
        allowedChars : /^[a-zA-Z0-9_-]*$/,
        allowedCharsErrorMsg : 'Only numbers, letters dashes and underscores are allowed'
      },

      tags : {
        value : e.target[4].value.split(',').map(tag => tag = tag.trim())
      },

      body : {
        value : e.target[5].value,
        required : true,
        requiredErrorMsg : 'Post content is required'
      },

      likes : {
        value : 0
      },
    })

    // If form not validated, stop and show errors
    if(!postData.isValidated) {
      setFormErrors(postData.errors)
      setFlash({
        message : 'There was a problem validating your post. Please review.',
        type : 'fail'
      })
      return
    }
    
    // Attempt to submit post data
    try {
      const res = await fetch(`${APIURL}/post`, {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json; charset=UTF-8' },
        body : JSON.stringify( postData.success )
      })

      if(!res.ok) throw new Error(res.status)
      const data = await res.json()

      setFlash({ message: `Successfully created post: ${ data.newPost.title }`, type : 'success' })
      navigate(`/post/${data.newPost.slug}`)
      
    } catch (error) {
      console.log(error)
      setFlash({ message: `Please make sure all required fields are filled out. Error: ${error.message}`, type : 'fail' })
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
            Post Title:* 
            { showError('title') }
            <input 
              type="text" 
              className=" p-2 border border-gray-200 w-full"
            />
          </label>
        </div>

        <div>
          <label>
            Post Status:*
            { showError('published') }
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
            Publish Date:*
            { showError('date') }
            <input
              type="datetime-local"
              step="any"
              className="ml-4"
              defaultValue={ currentDate }
            />
          </label>
        </div>

        <div>
          <label>
            URL Slug:*
            { showError('slug') }
            <input 
              type="text" 
              className="ml-4 p-2 border border-gray-200"
            />
          </label>
        </div>

        <div>
          <label>
            Tags:
            { showError('tags') }
            <input 
              type="text" 
              className="ml-4 p-2 border border-gray-200"
            />
          </label>
        </div>

        <div>
          <label>
            Post:*
            { showError('body') }
            <textarea
              className="rounded block border border-gray-400 w-full h-[5vh] p-2"
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