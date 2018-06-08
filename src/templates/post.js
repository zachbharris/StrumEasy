import React from 'react'
import Helmet from 'react-helmet'

export default function Template({data}) {
  const { markdownRemark: post } = data;
  return (
    <section name="post">
      <div className="container">
        <div className="featured">
          <img src={post.frontmatter.image.childImageSharp.resolutions.src} alt=""/>
        </div>
        <div className="content">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </section>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        date
        keywords
        tags
        image {
          childImageSharp {
            id
            resolutions {
              width
              height
              src
              srcSet
            }
          }
        }
        imageCredit
        imageCreditURL
      }
    }
  }
`