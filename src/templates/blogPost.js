import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const Article = styled.div`
    width: 65%;
    
    @media ( max-width: 700px ) {
        width: 100%;
    }
`
const Section = styled.div`
    margin-bottom: 2rem;
`

const PostNavigation = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const StyledLink = styled(props => <Link {...props} />)`
    text-decoration: none;
    font-weight: 500;
`

const Template = ( { data, pageContext } ) => {
    console.log(pageContext)
    const { next, prev } = pageContext
    const { markdownRemark } = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html

    return (
        <Layout>
            <Article>
                <Section>
                    <h2>{ title }</h2>
                    <div 
                        dangerouslySetInnerHTML={ { __html: html } }
                    />
                </Section>
                <PostNavigation>
                    { prev && 
                        <StyledLink to={ prev.frontmatter.path }>
                            <FaArrowLeft /> { prev.frontmatter.title }
                        </StyledLink>
                    }
                    { next && 
                        <StyledLink to={ next.frontmatter.path }>
                            { next.frontmatter.title } <FaArrowRight />
                        </StyledLink>
                    }
                </PostNavigation>
            </Article>
        </Layout>
    )
}

export const query = graphql`
    query( $pathSlug: String! ) {
        markdownRemark( frontmatter: { path: { eq: $pathSlug } } ) {
            html
            frontmatter {
                title
            }
        }
    }
`

export default Template

