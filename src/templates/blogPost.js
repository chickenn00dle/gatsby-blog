import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`
    width: 100%;
`

const Main = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
`

const Template = ( { data, pageContext } ) => {
    console.log(pageContext)
    const { next, prev } = pageContext
    const { markdownRemark } = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html

    return (
        <Container>
            <Navbar />
            <Main>
                <h2>{ title }</h2>
                <div 
                    className = 'blogpost'
                    style={{ opacity: .8 }}
                    dangerouslySetInnerHTML={ { __html: html } }
                />
                <div 
                    style={{
                        display: 'flex',
                        alignItems: 'spaceBetween',
                    }}
                >
                { prev && 
                    <Link to={ prev.frontmatter.path }>
                        Prev 
                    </Link>
                }
                { next && 
                    <Link to={ next.frontmatter.path }>
                        Next
                    </Link>
                }
                </div>
            </Main>
        </Container>
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

