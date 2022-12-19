
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { FlashContext } from "../App"
import Icon from "./Icon"


export default function AdminPostExcerpt({ post, getPosts }) {


  const [, setFlash] = useContext(FlashContext)
  const [isDeleteValidated, setDeleteIsValidated] = useState(false)

  let {
    title,
    date,
    body,
    slug,
    _id,
  } = post

  date = date.slice(0, 10)
  body = body.slice(0, 100) + '...'

  const btnCSS = `
    flex items-center gap-2 w-max px-1 py-1
    font-medium 
    hover:outline outline-1 outline-slate-300`

  
  async function handleDelete(id) {

    if(!isDeleteValidated) {
      setDeleteIsValidated(true)
      return
    }

    try {
      
      const res = await fetch(`http://localhost:3001/api/post/${id}`, {
        method : 'DELETE',
        headers : {
          'Content-Type' : 'application/json; charset=UTF-8'
        }
      })

      const data = await res.json()

      setFlash({
        type : 'success',
        message : `Successfully deleted post: ${data.destroyPost.title}`
      })

      getPosts()

    } catch (error) {
      
      setFlash({
        type : 'fail',
        message : error.message
      })
    }
  }

  return(

    <div className="grid grid-cols-[2fr_1fr] items-center gap-4">
    
      <article className="rounded p-4 border border-slate-200">

        <h2 className="my-2 text-xl font-medium">{ title }</h2>

        <div>
          { slug }
        </div>

        <div className="text-sm text-gray-400">
          <Icon css='text-xs mr-1'>calendar_today</Icon>
          { date }
        </div>

        <div className="my-4">
          { body }
        </div>

      </article>

      <div className="flex flex-col gap-2">

        <Link to={`/post/${ slug }`} className={`${ btnCSS } text-slate-600`}>
          <Icon css="text-base">article</Icon>
          View
        </Link>

        <Link to={`/admin/edit/${ slug }`} className={`${ btnCSS } text-slate-600`}>
          <Icon css="text-base">edit</Icon>
          Edit
        </Link>

        <button  
          className={`${ btnCSS } text-red-400`}
          onClick={ () => handleDelete(_id) }
        >
          <Icon css="text-base">delete</Icon>

          { isDeleteValidated ? 'Are you sure?' : 'Delete'}
        </button>

      </div>

    </div>
  )
}