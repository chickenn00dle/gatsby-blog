/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Gatsby Blog',
        description: 'A blog built with Gatsby.',
        email: 'test@example.com',
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
