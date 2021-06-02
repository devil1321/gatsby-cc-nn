import React from 'react'
import Link from 'gatsby-link'
import { useStaticQuery, graphql } from "gatsby"

const Navbar = () => {

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const { title } = data.site.siteMetadata

    return(
        <nav>
            <h1>{title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar
