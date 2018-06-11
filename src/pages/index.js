import React from 'react'
import Link from 'gatsby-link'

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
   
    <section name="posts" className="grid-recent-posts">
      <div className="container">
        {data.posts.edges.map(post => (
          <Link className="card" key={post.node.id} to={post.node.frontmatter.path} style={ { backgroundImage: `url(${post.node.frontmatter.image.childImageSharp.resolutions.src})` } }>
            <span className="tag">{post.node.frontmatter.tags}</span>
            <h2 className="title">{post.node.frontmatter.title}</h2>
            <span className="date">{post.node.frontmatter.date}</span>
            <span className="readMore">Read More →</span>
          </Link>
        ))}
        <div className="archive">
          <Link className="black" to="/archive">Visit the Archive →</Link>
        </div>
      </div>
    </section>

    <section name="creator" className="typography-bg grid-section">
        <div className="container">
          <div className="content">
            <span className="headline">featured creator</span>
            <h2 className="title">Jared Dines</h2>
            <p className="excerpt">Jared Dines is a YouTuber best known for his covers and music-related comedy videos. In additon to his YouTube career, Jared Dines is also a musician. He is the former vocalist for the band Dissimulator, and is formerly the drummer for the band Rest, Repose, he took over on guitar after a lineup change.</p>
          <a className="link" href="https://www.youtube.com/channel/UCJcYRr8rpsxVPfWA5vkuxFw" target="_blank" rel="noopener noreferrer">Jared Dines YouTube →</a>
          </div>
          <div className="featured">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hYrN7EIeXmY?rel=0" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
    </section>

    <section name="gear" className="grid-gear">
      <div className="container">
        {data.gear.edges.map(gear => (
          <div className="gear">
            <img className="image" src={gear.node.gear.image} alt=""/>
            <h3>{gear.node.gear.title}</h3>
            <p>{gear.node.gear.desc}</p>
            <a href={gear.node.gear.url}>Learn More</a>
          </div>
        ))}
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
    gear: allGearYaml {
      edges {
        node {
          gear {
            name
            desc
            image
            url
          }
        }
      }
    }
  }
`

export default IndexPage