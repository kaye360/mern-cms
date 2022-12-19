import usePosts from "../utils/usePosts"

import PageHeading from "../components/PageHeading"
import AdminPostExcerpt from "../components/AdminPostExcerpt"
import Icon from "../components/Icon"
import { Link } from "react-router-dom"


export default function Admin() {


  const { posts, getPosts } = usePosts()

  return(
    <section>

      <PageHeading>Admin</PageHeading>

      <Link
        to="/admin/create"
        className="
          rounded flex items-center gap-2 my-6 px-3 py-2 w-fit
          font-medium text-base text-sky-100 bg-sky-700 hover:text-sky-700 hover:bg-sky-300" 
      >
        <Icon css="text-2xl">post_add</Icon>
        Add New Post
      </Link>

      <div className="flex flex-col gap-4">
        {
        posts.map( post => <AdminPostExcerpt post={ post } getPosts={ getPosts } key={ post._id } /> )
        }
      </div>

    </section>
  )
}