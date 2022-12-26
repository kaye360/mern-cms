import PostExcerpt from "../components/PostExcerpt"
import PageHeading from "../components/PageHeading"
import usePosts from "../utils/usePosts"
import { useState } from "react"
import Icon from "../components/Icon"

export default function Index() {

  const { posts, totalPages, loadMorePosts } = usePosts({type : 'published'})
  const [ page, setPage ] = useState(1)
  const [isAtEnd, setIsAtEnd] = useState(false)

  function handleLoadMorePosts() {
    const lastPage = totalPages - 1

    loadMorePosts(page)
    setPage(page + 1)

    if(page === lastPage)  setIsAtEnd(true)
  }

  return(
    <section className="min-h-screen">

      <PageHeading>Recent Posts</PageHeading>

      <div className="flex flex-col gap-4">

        {
        posts.error
          ? <p>{posts.error}</p>
          : posts.map( post => <PostExcerpt post={ post } key={ post._id } /> )
        }

      </div>

      <div
        className="flex flex-col items-center gap-4 my-6 py-8 text-center bg-slate-100"
      >
          Page {page}/{totalPages}<br />

        {
        !isAtEnd &&
          <button  
            onClick={ handleLoadMorePosts } 
            className="flex items-center gap-2 max-w-fit p-4 border border-slate-400"
          >
            <Icon>keyboard_double_arrow_down</Icon>
            Load More 
          </button>
        }

      </div>

    </section>

  )

}