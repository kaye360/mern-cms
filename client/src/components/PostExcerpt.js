
import { Link } from "react-router-dom"
import Icon from "./Icon"


export default function PostExcerpt({ post }) {

  console.log(post)
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

      <Link to={`/post/${ slug }`}>Read More</Link>
    </article>
  )
}