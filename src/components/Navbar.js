import React from "react"
import { StaticQuery, Link } from 'gatsby'
import Logo from './Logo'
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

const SocialContainer = styled.div`
    margin-bottom: -1rem;

    @media ( max-width: 700px ) {
        display: none;
    }
`

const SiteMeta = ( { data } ) => {
    const title = data.site.siteMetadata.title

    return (
        <Container>
            <Inner>
            <StyledLink to='/'>
                <Logo title={ title } />
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
