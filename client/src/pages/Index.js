import PostExcerpt from "../components/PostExcerpt"
import PageHeading from "../components/PageHeading"
import usePosts from "../utils/usePosts"
import { useState } from "react"
import Icon from "../components/Icon"
import { useParams } from "react-router-dom"

export default function Index() {

  let { page } = useParams()
  page = !page ? 1 : parseInt(page)
  
  const { posts, totalPages, loadMorePosts } = usePosts({
    type : 'published',
    page : page
  })
  const [ currentPage, setCurrentPage ] = useState(page)

  function handleLoadMorePosts() {
    window.history.replaceState(null, "", `/page/${currentPage+1}`)
    loadMorePosts(currentPage + 1)
    setCurrentPage(currentPage + 1)
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
          Page {currentPage}/{totalPages}<br />

        {
        currentPage <= totalPages - 1 &&
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