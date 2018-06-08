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
    <section name="hero" className="typography-bg grid-section">
      {data.featured.edges.map(feature => (
        <div className="container">
          <div key={feature.node.id} className="content">
            <span className="tag">{feature.node.frontmatter.tags}</span>
            <h1 className="title">{feature.node.frontmatter.title}</h1>
            <p className="excerpt">{feature.node.excerpt}</p>
            <Link className="link" to={feature.node.frontmatter.path}>Read More →</Link>
          </div>
          <div className="featured">
            <img key={feature.node.frontmatter.image.childImageSharp.id} src={feature.node.frontmatter.image.childImageSharp.resolutions.src} alt={`image provided by ${feature.node.frontmatter.imageCredit}`} />
          </div>
        </div>
      ))}
    </section>
   
    <section name="posts" className="grid-posts">
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

    <section name="featured creator" className="typography-bg grid-section">
        <div className="container">
          <div className="content">
            <span className="tag">featured creator</span>
            <h2 className="title">Jared Dines</h2>
            <p className="excerpt">Jared Dines is a YouTuber best known for his covers and music-related comedy videos. In additon to his YouTube career, Jared Dines is also a musician. He is the former vocalist for the band Dissimulator, and is formerly the drummer for the band Rest, Repose, he took over on guitar after a lineup change.</p>
          <a className="link" href="https://www.youtube.com/channel/UCJcYRr8rpsxVPfWA5vkuxFw" target="_blank" rel="noopener noreferrer">Jared Dines YouTube →</a>
          </div>
          <div className="featured">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hYrN7EIeXmY?rel=0" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
    </section>

    <section name="honorable mentions" className="secondary-bg">
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

    <section name="discord" className="discord-bg">
      <a href="" target="_blank" rel="noopener noreferrer">
        <div className="container">
          <svg className="icon large" viewBox='0 0 15 16' xmlns='http://www.w3.org/2000/svg'><path d='M13.106 0c.959 0 1.732.758 1.777 1.65V16l-1.825-1.515-1.002-.892-1.094-.932.457 1.47H1.848c-.956 0-1.732-.71-1.732-1.651V1.653C.116.761.893.002 1.85.002h11.25L13.106 0zM8.935 3.789h-.02l-.139.133c1.414.4 2.098 1.025 2.098 1.025a7.542 7.542 0 0 0-2.553-.758c-.593-.09-1.186-.043-1.688 0h-.136c-.32 0-1.002.133-1.916.49-.318.135-.501.224-.501.224s.683-.668 2.189-1.025l-.092-.09s-1.14-.043-2.371.847c0 0-1.23 2.096-1.23 4.68 0 0 .681 1.16 2.551 1.204 0 0 .273-.356.55-.668-1.05-.312-1.46-.936-1.46-.936s.091.044.228.133h.041c.02 0 .03.01.041.02v.004c.011.01.02.02.041.02.225.09.45.18.634.267.318.134.726.268 1.228.357a7.16 7.16 0 0 0 2.188 0c.41-.09.818-.178 1.227-.357.266-.133.594-.266.953-.491 0 0-.41.624-1.503.936.225.31.542.667.542.667 1.87-.04 2.597-1.2 2.638-1.151 0-2.58-1.237-4.68-1.237-4.68-1.115-.81-2.158-.84-2.342-.84l.038-.013v.002zm.114 2.942c.48 0 .866.4.866.89 0 .493-.389.893-.866.893a.88.88 0 0 1-.866-.89c.002-.493.39-.891.866-.891V6.73zm-3.097 0c.477 0 .863.4.863.89 0 .493-.389.893-.866.893a.88.88 0 0 1-.866-.89.88.88 0 0 1 .866-.891l.003-.002z' fill='#FFF' /></svg>
          <h3>Join the Discussion on Discord!</h3>
        </div>
      </a>
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
            imageCredit
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