
import { Link } from "react-router-dom"
import Icon from "./Icon"


export default function PostExcerpt({ post }) {

  let {
    title,
    date,
    body,
    slug,
    tags,
  } = post

  date = date.slice(0, 10)

  return(
    <article className="flex flex-col gap-8 items-start rounded p-4 border border-blue-100">

      <div>
        <h2 className="text-xl font-medium">
          <Link to={`/post/${ slug }`} className="hover:underline">
            { title }
          </Link>
        </h2>

        <div className="text-sm text-gray-400">
          <Icon css='text-xs mr-1'>calendar_today</Icon>
          { date }
        </div>
      </div>

      <div className="">
        { body }
      </div>

      <Link 
        to={`/post/${ slug }`} 
        className="rounded inline-block px-3 py-1 bg-sky-200 text-sky-800  hover:bg-sky-800 hover:text-sky-200"
      >
        Read More
      </Link>

      {
      tags.length !== 0 && 
        <div className="flex items-center gap-3 text-slate-500">
          Tags:
          {
          tags.map( tag => {
            return(
              <Link 
                to={`/tag/${tag}`} 
                className="text-slate-500 hover:text-slate-900 hover:underline"
                key={tag}
              >{tag}</Link>
            )
          })}
        </div>
      }
    </article>
  )
}