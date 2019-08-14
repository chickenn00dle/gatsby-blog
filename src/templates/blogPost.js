import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import DateText from '../components/DateText'
import TagList from '../components/TagList'
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

const PostTitle = styled.h2`
    margin-bottom: .5rem;
`

const PostNavigation = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const StyledLink = styled(props => <Link {...props} />)`
    text-decoration: none;
    font-weight: 500;

	&:hover {
		background: none;
		color: #ff8f2f !important;
`

const Template = ( { data, pageContext } ) => {
    const { next, prev } = pageContext
    const { markdownRemark } = data
    const html = markdownRemark.html
    const frontmatter = markdownRemark.frontmatter

    return (
        <Layout>
            <Article>
                <Section>
                    <DateText date={ frontmatter.date } /> 
                    <PostTitle>{ frontmatter.title }</PostTitle>
                    <TagList tags={ frontmatter.tags } />
                    <div 
                        dangerouslySetInnerHTML={ { __html: html } }
                    />
                </Section>
                <PostNavigation>
                    { prev && 
                        <StyledLink to={ prev.frontmatter.path }>
                            <FaArrowLeft /> 
                        </StyledLink>
                    }
                    { next && 
                        <StyledLink to={ next.frontmatter.path }>
                            <FaArrowRight />
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
                date
                tags
            }
        }
    }
`

export default Template

