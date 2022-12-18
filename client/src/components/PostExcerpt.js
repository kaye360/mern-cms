

export default function PostExcerpt({ post }) {

  const {
    title,
    date,
    body,
    _id,
  } = post

  return(
    <article className="p-4 border border-blue-100">

      <h2 className="text-xl font-medium">{ title }</h2>

      <div className="text-sm text-blue-400">
        { date }
      </div>

      <div className="my-4">
        { body }
      </div>

      <button>{ _id }</button>
    </article>
  )
}