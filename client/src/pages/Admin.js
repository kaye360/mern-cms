import { Link } from "react-router-dom"

import usePosts from "../utils/usePosts"

import PageHeading from "../components/PageHeading"
import AdminPostExcerpt from "../components/AdminPostExcerpt"
import Icon from "../components/Icon"
import { useState } from "react"


export default function Admin() {

  const [ showPosts, setShowPosts ] = useState('all')

  const { posts, getPosts } = usePosts({ type : showPosts })


  return(
    <section className="min-h-screen">

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

      <div className="flex items-center gap-4 mb-2">

        <button
          className={`
            inline-flex items-center gap-2 px-3 py-1 rounded text-lg border border-slate-300 hover:border-slate-600
            ${ showPosts === 'all' && 'bg-sky-200 font-medium' }
          `}
          onClick={ () => setShowPosts('all') }
        >
          <Icon>view_list</Icon>
          All Posts

        </button>

        <button
          className={`
            inline-flex items-center gap-2 px-3 py-1 rounded text-lg border border-slate-300 hover:border-slate-600
            ${ showPosts === 'published' && 'bg-sky-200 font-medium' }
          `}
          onClick={ () => setShowPosts('published') }
          >
          <Icon>published_with_changes</Icon>
          Published Posts
        </button>

        <button
          className={`
            inline-flex items-center gap-2 px-3 py-1 rounded text-lg border border-slate-300 hover:border-slate-600
            ${ showPosts === 'drafts' && 'bg-sky-200 font-medium' }
          `}
          onClick={ () => setShowPosts('drafts') }
        >
          <Icon>unpublished</Icon>
          Draft Posts
        </button>

      </div>

      <div className="flex flex-col gap-4">
        {
        posts.map( post => <AdminPostExcerpt post={ post } getPosts={ getPosts } key={ post._id } /> )
        }
      </div>

    </section>
  )
}