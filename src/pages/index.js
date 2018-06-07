import React from 'react'
import Link from 'gatsby-link'

import mention1 from '../images/mentions/flippaq.jpg'
import mention2 from '../images/mentions/guitarzerotohero.jpg'
import mention3 from '../images/mentions/knowyourgear.jpg'
import mention4 from '../images/mentions/musiciswin.jpg'
import mention5 from '../images/mentions/rachelf.jpg'

const mentionLink1 = 'https://www.youtube.com/channel/UCCSjxH_Fi_F9_QHwy-wmDlA';
const mentionLink2 = 'https://www.youtube.com/channel/UCasFZzbM8JJ6dqSVEgL9VVg';
const mentionLink3 = 'https://www.youtube.com/channel/UCEzJtFWNg7d7TZW7K9JyXmw';
const mentionLink4 = 'https://www.youtube.com/channel/UCshiNtfJ7Dj3nlh41a6M-kg';
const mentionLink5 = 'https://www.youtube.com/channel/UC_UQOj6d7RevVGVt6ZhDqKg';

const IndexPage = ({data}) => (
  <div>
    <section name="hero">
      {data.featured.edges.map(feature => (
        <div className="container">
          <div key={feature.node.id} className="content">
            <span className="featuredTag">{feature.node.frontmatter.tags}</span>
            <h1 className="postTitle">{feature.node.frontmatter.title}</h1>
            <p className="postExcerpt">{feature.node.excerpt}</p>
            <Link className="postLink" to={feature.node.frontmatter.path}>Read More →</Link>
          </div>
          <div className="featuredImage">
            <img key={feature.node.frontmatter.image.childImageSharp.id} src={feature.node.frontmatter.image.childImageSharp.resolutions.src} alt="" />
          </div>
        </div>
      ))}
    </section>
   
    <section name="posts">
      <div className="container">
        {data.posts.edges.map(post => (
          <Link className="card" key={post.node.id} to={post.node.frontmatter.path} style={ { backgroundImage: `url(${post.node.frontmatter.image.childImageSharp.resolutions.src})` } }>
            <span className="tag">{post.node.frontmatter.tags}</span>
            <h2 className="title">{post.node.frontmatter.title}</h2>
            <span className="date">{post.node.frontmatter.date}</span>
            <span className="readMore">Read More →</span>
          </Link>
        ))}
      </div>
    </section>

    <section name="archive">
      <div className="container text-right">
        <Link className="black" to="/archive">Visit the Archive →</Link>
      </div>
    </section>

    <section name="featured creator">
        <div className="container">
          <div className="content">
            <span className="tag">Featured Creator 🤘</span>
            <h2 className="title">Jared Dines</h2>
            <p className="excerpt">Jared Dines is a YouTuber best known for his covers and music-related comedy videos. In additon to his YouTube career, Jared Dines is also a musician. He is the former vocalist for the band Dissimulator, and is formerly the drummer for the band Rest, Repose, he took over on guitar after a lineup change.</p>
          <a className="link" href="https://www.youtube.com/channel/UCJcYRr8rpsxVPfWA5vkuxFw" target="_blank" rel="noopener noreferrer">Jared Dines YouTube →</a>
          </div>
          <div className="featuredVideo">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hYrN7EIeXmY?rel=0" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
    </section>

    <section name="honorable mentions">
      <div className="container">
        <h2 className="title">Honorable Mentions</h2>
        <div className="creators">
          <a href={mentionLink1} className="creator first" target="_blank" rel="noopener noreferrer" style={{backgroundImage: `url(${mention1})`}}></a>
          <a href={mentionLink2} className="creator second" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${mention2})` }}></a>
          <a href={mentionLink3} className="creator third" target="_blank" rel="noopener noreferrer" style={{backgroundImage: `url(${mention3})`}}></a>
          <a href={mentionLink4} className="creator fourth" target="_blank" rel="noopener noreferrer" style={{backgroundImage: `url(${mention4})`}}></a>
          <a href={mentionLink5} className="creator fifth" target="_blank" rel="noopener noreferrer" style={{backgroundImage: `url(${mention5})`}}></a>
        </div>
      </div>
    </section>
  </div>
)

export const pageQuery = graphql`
  query IndexQueryAndFeatureQuery {
    featured: allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            title
            path
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
            tags
            published
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            path
            date(formatString: "MMMM DD, YYYY")
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
          }
        }
      }
    }
  }
`

export default IndexPage