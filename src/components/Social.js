import React from 'react'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'
import { FaTwitter, FaCodepen, FaGithub, FaEnvelope } from 'react-icons/fa'

const SocialBar = styled.p`
    color: #000;
    opacity: .15;
    margin-bottom: 0;
`

const StyledLink = styled.a`
    color: #000 !important; 
    margin-right: 1rem;
    font-weight: 900;
    font-size: ${ props => props.size == 'large' ? '2rem' : '1.75rem' };

    &:last-child {
        margin-right: 0;
    }
`

const SocialIcons = ({ data, size }) => {
    const { codepen, email, github, twitter } = data.site.siteMetadata
    return (
        <SocialBar>
            <StyledLink 
                href={ github } 
                target='blank'
                size={ size }
            >
                <FaGithub />
            </StyledLink>
            <StyledLink 
                href={ codepen } 
                target='blank'
                size={ size }
            >
                <FaCodepen />
            </StyledLink>
            <StyledLink 
                href={ twitter } 
                target='blank'
                size={ size }
            >
                <FaTwitter />
            </StyledLink>
            <StyledLink 
                href={ `mailto:${ email }?subject=Mail from blog.rzmy` }
                size={ size }
            >
                <FaEnvelope />
            </StyledLink>
        </SocialBar>
    )
}

const Social = ({ size = 'small' }) => {
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
            render = { data => {
                return (
                    <SocialIcons 
                        size={ size }
                        data={ data } 
                    /> 
                )}
            }

        />
    )
}

export default Social
