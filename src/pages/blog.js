
import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPage = ({ data: { blogPosts } }) => {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 min-h-screen">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3 max-h-[500px]" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">CoCoo Studio Blog</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto grid gap-5">
          {blogPosts.nodes.map((post) => {
            let d = new Date(post.postDate)
            let friendyDate = `${d.getFullYear()} 年 ${d.getMonth()} 月 ${d.getDay()} 日`

            return(
            <Link to={post.weChatPostLink}>
              <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <GatsbyImage className=" max-h-128 w-full object-cover" image={getImage(post.cover)} alt={post.title} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href={post.href} className="block mt-2">
                      <p className="text-2xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-sm text-gray-500 leading-6">{post.brief}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      {post.authors.map(author => (
                        <GatsbyImage className="h-10 w-10 rounded-full float-left mr-2" image={getImage(author.avatar)} alt={author.name} />
                      ))}
                    </div>
                    <div className="ml-1">
                      <p className="text-sm font-medium text-gray-900">
                        {post.authors.map(author => author.name).join(", ")}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={d}>{friendyDate}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )})}
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query BlogQuery {
    blogPosts: allGraphCmsBlogPost(
      filter: {}
    ) {
      nodes {
        title
        weChatPostLink
        postDate
        brief
        readingTime
        cover {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        authors {
          name
          avatar {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }

      }
    }
  }
`

export default BlogPage