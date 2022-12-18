
import { Link } from "react-router-dom"
import Icon from "./Icon"


export default function PostExcerpt({ post }) {

  let {
    title,
    date,
    body,
    slug,
  } = post

  date = date.slice(0, 10)

  return(
    <article className="rounded p-4 border border-blue-100">

      <h2 className="my-2 text-xl font-medium">
        <Link to={`/post/${ slug }`} className="hover:underline">
          { title }
        </Link>
      </h2>

      <div className="text-sm text-gray-400">
        <Icon css='text-xs mr-1'>calendar_today</Icon>
        { date }
      </div>

      <div className="my-4">
        { body }
      </div>

      <Link 
        to={`/post/${ slug }`} 
        className="rounded inline-block px-3 py-1 bg-sky-200 text-sky-800  hover:bg-sky-800 hover:text-sky-200"
      >
        Read More
      </Link>
    </article>
  )
}