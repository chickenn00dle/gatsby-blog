/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'BLOG.RZMY',
        description: 'A blog about things that I learn, see, or do. Mostly dedicated to web junk.',
        email: 'rtnguyen87@gmail.com',
        twitter: 'https://twitter.com/ChickenN00dle', 
        github: 'https://github.com/chickenn00dle',
        codepen: 'https://codepen.io/chickenn00dle',
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        }
    ]
}
