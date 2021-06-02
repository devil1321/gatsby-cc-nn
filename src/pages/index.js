import React from "react"
import Layout from '../components/Layout'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import  Img  from 'gatsby-image'

const Home = ({data}) =>{ 
  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className="btn" to="/projects">My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
      {/* <p>{title} - {description}</p> */}
    </Layout>
  )
}
export const query = graphql`
 query Banner {
   file(relativePath: {eq: "banner.png"}) {
     id
     childImageSharp {
       fluid {
         ...GatsbyImageSharpFluid
       }
     }
   }
}

`

export default Home

