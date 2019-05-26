import React from 'react'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'
import { FaTwitter, FaCodepen, FaGithub, FaEnvelope } from 'react-icons/fa'

const SocialBar = styled.p`
    margin-top: -.5rem;
    margin-bottom: .5rem;
    align-self: flex-end;
    font-weight: 900;
    font-size: 1.75rem;
    color: #000;
    opacity: .1;
`

const StyledLink = styled.a`
    color: #000 !important; 
    margin-right: 1rem;
`

const SocialIcons = ({ data }) => {
    const { codepen, email, github, twitter } = data.site.siteMetadata
    return (
        <SocialBar>
            <StyledLink 
                href={ github } 
                target='blank'
            >
                <FaGithub />
            </StyledLink>
            <StyledLink 
                href={ codepen } 
                target='blank'
            >
                <FaCodepen />
            </StyledLink>
            <StyledLink 
                href={ twitter } 
                target='blank'
            >
                <FaTwitter />
            </StyledLink>
            <StyledLink 
                href={ `mailto:${ email }?subject=Mail from blog.rzmy` }
            >
                <FaEnvelope />
            </StyledLink>
        </SocialBar>
    )
}

const Social = () => {
    return (
        <StaticQuery
            query={
                graphql`
                    {
                      site {
                        siteMetadata {
                            github
                            codepen
                            twitter
                            email
                        }
                      }
                    }
                `
            }
            render = { data => <SocialIcons data={ data } /> }
        />
    )
}

export default Social
