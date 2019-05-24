import React from "react"
import { StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    background: linear-gradient( to bottom, #e4e4e3, #FAF7F3);
`

const Inner = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 1rem;
    display: flex;
    align-items: center;
`

const SiteTitle = styled.h1`
    margin-top: 0;
    margin-right: 10px;
    text-decoration: none;
    font-weight: 900;
    font-size: 3rem;
    color: #000;
    opacity: 1;
    cursor: pointer;
`

const SiteDescription = styled.p`
    margin-top: -.5rem;
    font-weight: 500;
    font-size: 2rem;
    color: #000;
    opacity: .35;

    @media ( max-width: 700px ) {
        display: none;
    }
`

const SiteMeta = ( { data } ) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description

    return (
        <Container>
            <Inner>
            <Link 
                to='/'
                style={{ textDecoration: 'none' }}
            >
                <SiteTitle>{ title }</SiteTitle>
            </Link>
            <SiteDescription>{ description }</SiteDescription>
            </Inner>
        </Container>
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
