import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

const BlogPage = () => {
  const blogPosts = useStaticQuery(graphql`
    query BlogQuery {
      data: allGraphCmsBlogPost(filter: {}) {
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
  `);

  return (
    <section>
      <Helmet>
        <title>CoCoo Studio - 设计博客</title>
      </Helmet>
      <div className="relative text-center bg-white pt-28 pb-20 px-4 sm:px-6 lg:pt-36 lg:pb-28 lg:px-8 min-h-screen">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            CoCoo Blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4 mb-12">
            CoCoo 团队热衷于分享 B
            端体验设计的经验心得与行业洞察。欢迎关注我们的公众号「Cocoo
            Stuido」，及时获取更新通知。
          </p>
          <div className="max-w-4xl mx-auto grid gap-5 text-left">
            {console.log(blogPosts)}
            {blogPosts.data.nodes.map((post) => {
              let d = new Date(post.postDate);
              let friendyDate = `${d.getFullYear()} 年 ${d.getMonth()} 月 ${d.getDay()} 日`;

              return (
                <Link to={post.weChatPostLink}>
                  <div
                    key={post.title}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="flex-shrink-0">
                      <GatsbyImage
                        className=" max-h-128 w-full object-cover"
                        image={getImage(post.cover)}
                        alt={post.title}
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <a href={post.href} className="block mt-2">
                          <p className="text-2xl font-semibold text-gray-900">
                            {post.title}
                          </p>
                          <p className="mt-3 text-sm text-gray-500 leading-6">
                            {post.brief}
                          </p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          {post.authors.map((author) => (
                            <GatsbyImage
                              className="h-10 w-10 rounded-full float-left mr-2"
                              image={getImage(author.avatar)}
                              alt={author.name}
                            />
                          ))}
                        </div>
                        <div className="ml-1">
                          <p className="text-sm font-medium text-gray-900">
                            {post.authors
                              .map((author) => author.name)
                              .join(", ")}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
