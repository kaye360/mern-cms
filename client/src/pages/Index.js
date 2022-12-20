import PostExcerpt from "../components/PostExcerpt"
import PageHeading from "../components/PageHeading"
import usePosts from "../utils/usePosts"

export default function Index() {

  const { posts } = usePosts({type : 'index'})

  return(
    <section>

      <PageHeading>Recent Posts</PageHeading>

      <div className="flex flex-col gap-4">

        {
        posts.map( post => <PostExcerpt post={ post } key={ post._id } /> )
        }

      </div>

    </section>

  )

}