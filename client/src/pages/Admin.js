import usePosts from "../utils/usePosts"

import PageHeading from "../components/PageHeading"
import AdminPostExcerpt from "../components/AdminPostExcerpt"


export default function Admin() {


  const { posts, getPosts } = usePosts()

  return(
    <section>

      <PageHeading>Admin</PageHeading>

      <div className="flex flex-col gap-4">
        {
        posts.map( post => <AdminPostExcerpt post={ post } getPosts={ getPosts } key={ post._id } /> )
        }
      </div>

    </section>
  )
}