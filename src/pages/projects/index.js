import React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
const MainProject = ({data}) =>{
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className="portfolio">
        <h2>Portfolio</h2>
        <h3>Projects & Websites I`ve Created</h3>
        <div className="projects">
          {projects.map(project=>{
            const { id } = project
            const { title, stack , slug } = project.frontmatter
            const { fluid } = project.frontmatter.thumb.childImageSharp
            return <Link to={`/projects/${slug}`} key={id}>
                      <div>
                        <Img fluid={fluid} />
                        <h3>{title}</h3>
                        <p>{stack}</p>
                      </div>
                   </Link>
          })}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
    )
  }
export const query = graphql`
query ProjectsPage {
  contact: site {
    siteMetadata {
      contact
    }
  }
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}


`

export default MainProject
