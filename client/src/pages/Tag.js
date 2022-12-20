
import PageHeading from "../components/PageHeading"
import PostExcerpt from "../components/PostExcerpt"
import { useParams } from "react-router-dom"
import useTags from "../utils/useTags"

export default function Tag() {

  const { tag } = useParams()
  const { posts } = useTags({tag : tag})

  return(
    <section className="min-h-screen">

      <PageHeading>Posts tagged: {tag}</PageHeading>

      <div className="flex flex-col gap-4">

        {
        posts.map( post => <PostExcerpt post={ post } key={ post._id } /> )
        }

      </div>

    </section>
  )
}