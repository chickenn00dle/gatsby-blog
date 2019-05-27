import React from "react"
import { StaticQuery, Link } from 'gatsby'
import Social from './Social'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    background: linear-gradient( to bottom, #e4e4e3, #FAF7F3);
    margin-bottom: 1rem;
`

const Inner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
`

const StyledLink = styled( props => <Link { ...props } /> )`
    text-decoration: none;
    margin-bottom: 0;
`

const SiteTitle = styled.h1`
    margin-right: 1rem;
    margin-bottom: 0;
    text-decoration: none;
    font-weight: 900;
    font-size: 3rem;
    color: #000;
    opacity: 1;
    cursor: pointer;
`

const SocialContainer = styled.div`
    margin-bottom: -1rem;

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
            <StyledLink to='/'>
                <SiteTitle>{ title }</SiteTitle>
            </StyledLink>
            <SocialContainer>
                <Social />
            </SocialContainer>
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
