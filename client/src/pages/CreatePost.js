import { useContext, useState } from "react";
import PageHeading from "../components/PageHeading";
import {FlashContext} from "../App"
import { useNavigate } from "react-router-dom";
import { APIURL } from "../utils/config";
import { validateForm, showError } from "../utils/forms"





export default function EditPost() {

  // Flash Message
  const [, setFlash] = useContext(FlashContext)

  // Redirect function
  const navigate = useNavigate()

  // Array of front-end form validation errors
  const [frontEndFormErrors, setFrontEndFormErrors] = useState([])

  // Array of back-end form validation errors
  const [backEndFormErrors, setBackEndFormErrors] = useState([])

  // Current Date
  const currentDate = new Date().toISOString().slice(0, -1)


  
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

    // If form not validated on front end, stop and show errors
    if(!postData.isValidated) {
      setFrontEndFormErrors(postData.errors)
      setFlash({
        message : 'There was a problem validating your post. Please review.',
        type : 'fail'
      })
      return
    }
    setFrontEndFormErrors([])
    
    // Attempt to submit post data
    try {
      const res = await fetch(`${APIURL}/post`, {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json; charset=UTF-8' },
        body : JSON.stringify( postData.success )
      })

      // Back End Validation
      if(!res.ok) {
        const error = await res.json()
        setBackEndFormErrors([...backEndFormErrors, { input : error.input, message : error.message }])
        throw new Error(error.message)
      }
      setBackEndFormErrors([])
      
      const data = await res.json()
      setFlash({ message: `Successfully created post: ${ data.newPost.title }`, type : 'success' })
      navigate(`/post/${data.newPost.slug}`)
      
    } catch (error) {
      setFlash({ message: `There was an error with your post. ${error.message}`, type : 'fail' })
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
            { showError('title', frontEndFormErrors) }
            <input 
              type="text" 
              className=" p-2 border border-gray-200 w-full"
            />
          </label>
        </div>

        <div>
          <label>
            Post Status:*
            { showError('published', frontEndFormErrors) }
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
            { showError('date', frontEndFormErrors) }
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
            { showError('slug', backEndFormErrors) }
            { showError('slug', frontEndFormErrors) }
            <input 
              type="text" 
              className="ml-4 p-2 border border-gray-200"
            />
          </label>
        </div>

        <div>
          <label>
            Tags:
            { showError('tags', frontEndFormErrors) }
            <input 
              type="text" 
              className="ml-4 p-2 border border-gray-200"
            />
          </label>
        </div>

        <div>
          <label>
            Post:*
            { showError('body', frontEndFormErrors) }
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