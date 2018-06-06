import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({data}) => (
  <div>
    <section name="hero">
      <div className="container">
        <div className="content">
          <span className="featuredTag">Featured</span>
          <h1 className="postTitle">Picking your strings</h1>
          <p className="postExcerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor dapibus lacinia. Sed maximus mauris eu consectetur porttitor. Maecenas efficitur, velit vitae tempus porta, purus.</p>
          <Link className="postLink" to="/">Read More →</Link>
        </div>
        <div className="featuredImage"></div>
      </div>
    </section>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <Link 
        key={post.node.id} 
        to={post.node.frontmatter.path}>
        {post.node.frontmatter.title}
      </Link>
    ))};
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 6) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            postDate
          }
        }
      }
    }
  }
`;

export default IndexPage;