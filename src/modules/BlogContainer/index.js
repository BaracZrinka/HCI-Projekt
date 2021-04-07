import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./style.module.css"
import ProfileImage1 from "../../components/Images/ProfileImage1"
import BlogRating from "../../components/Images/BlogRating"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"

import { library } from "@fortawesome/fontawesome-svg-core"

library.add(
  faBookmark

  // more icons go here
)

const BlogContainer = ({ tags }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogFeed(limit: 20) {
        nodes {
          summary {
            internal {
              content
            }
          }
          body {
            raw
          }
          title
          slug
          tags
          authorsName
          updatedAt
          coverImage {
            fluid(quality: 90, maxWidth: 1920) {
              src
              srcSet
              srcSetWebp
              srcWebp
              base64
              aspectRatio
            }
          }
        }
      }
    }
  `)
  let filtered = (
    <>
      {data.allContentfulBlogFeed.nodes.map(node => {
        return (
          <div className={styles.container}>
            <div className={styles.post}>
              <div className={styles.imageDiv}>
                <Link to={`/blogPosts/${node.slug}`}>
                  <Img fluid={node.coverImage.fluid} className={styles.image} />
                </Link>
              </div>
              <div className={styles.body}>
                <div className={styles.tags}> #{node.tags}</div>
                <Link to={`/blogPosts/${node.slug}`}>
                  <h2>{node.title}</h2>
                </Link>
                <div className={styles.rating}>
                  <BlogRating />
                </div>
                <section className={styles.blog2}>
                  <div className={styles.text}>
                    <div> {node.summary.internal.content} </div>
                  </div>
                  <div className={styles.author}>
                    <div className={styles.profileImage}>
                      {<ProfileImage1 />}
                    </div>
                    <h4 className={styles.name}>{node.authorsName}</h4>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )

  if (tags) {
    //console.log("exist")

    filtered = data.allContentfulBlogFeed.nodes.map(node => {
      if (node.tags.startsWith(tags)) {
        return (
          <div className={styles.container}>
            <div className={styles.post}>
              <div className={styles.imageDiv}>
                <Link to={`/blogPosts/${node.slug}`}>
                  <Img fluid={node.coverImage.fluid} className={styles.image} />
                </Link>
              </div>
              <div className={styles.body}>
                <div className={styles.tags}> #{node.tags}</div>
                <h2>{node.title}</h2>

                <div className={styles.rating}>
                  <BlogRating />
                </div>
                <section className={styles.blog2}>
                  <div className={styles.text}>
                    <div> {node.summary.internal.content} </div>
                  </div>
                  <div className={styles.author}>
                    <div className={styles.profileImage}>
                      {<ProfileImage1 />}
                    </div>
                    <h4 className={styles.name}>{node.authorsName}</h4>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )
      }
    })
  }
 

  return <>{filtered}</>
}

export default BlogContainer
