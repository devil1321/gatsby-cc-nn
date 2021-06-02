import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'
const ProjectDetails = ({data}) => {
    const { html } = data.markdownRemark
    const { fluid } = data.markdownRemark.frontmatter.featuredImg.childImageSharp
    const { title, stack, date } = data.markdownRemark.frontmatter
    console.log(data)
    return (
        <Layout>
            <div className="details">
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <p>{date}</p>
                <div className="featured">
                    <Img fluid={fluid} />
                </div>
                <div className="html" dangerouslySetInnerHTML={{__html:html}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectPage($slug: String!) {
      markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
          date
          stack
          title
          featuredImg {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
`

export default ProjectDetails
