/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
    {
      resolve:'gatsby-source-filesystem',
      options:{
        name:'projects',
        path:`${__dirname}/src/projects/`
      }
    },
    {
      resolve:'gatsby-source-filesystem',
      options:{
        name:'images',
        path:`${__dirname}/src/images/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`
  ],
  siteMetadata:{
    title:"Web Warrios",
    description:'Web Dev Portfolio',
    cophyright:'This website is cophyright 2021 Web Warrior',
    contact:'me@gmail.com'
  },
}
