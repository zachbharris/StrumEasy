import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <a key={post.node.id} href={post.node.frontmatter.path}>{post.node.frontmatter.title}</a>
    ))}
  </div>
)

export const pageQuery = graphql`
  query indexQuery {
    allMarkdownRemark(limit: 6) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
