import React from "react"
import { StaticQuery, Link } from 'gatsby'

const SiteMeta = ( { data } ) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description

    return (
        <div>
            <Link to='/'>
                <h1>{ title }</h1>
            </Link>
            <h2>{ description }</h2>
        </div>
    )
}

const Navbar = () => {
    return (
        <StaticQuery
            query={
                graphql`
                    {
                      site {
                        siteMetadata {
                          title
                          description
                        }
                      }
                    }
                `
            }
            render = { data => <SiteMeta data={ data } /> }
        />
    )
}

export default Navbar 
