import usePosts from "../utils/usePosts"

import PageHeading from "../components/PageHeading"
import AdminPostExcerpt from "../components/AdminPostExcerpt"


export default function Admin() {


  const posts = usePosts()

  return(
    <section>

      <PageHeading>Admin</PageHeading>

      <div className="flex flex-col gap-4">
        {
        posts.map( post => <AdminPostExcerpt post={ post } /> )
        }
      </div>

    </section>
  )
}