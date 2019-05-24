import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Template = ( { data, pageContext } ) => {
    console.log(pageContext)
    const { next, prev } = pageContext
    const { markdownRemark } = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html

    return (
        <Layout>
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

