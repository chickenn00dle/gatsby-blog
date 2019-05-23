import React from "react"
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`
    margin: 0;
    padding: 0;
    background-color: #FAF7F3;
`

const Layout = ( { data } ) => {
    const { edges } = data.allMarkdownRemark
    return (
        <Container>
            <div>
                <Navbar />
                <div>
                    { edges.map( edge => {
                        const { frontmatter } = edge.node
                        return (
                            <div key = { frontmatter.title }>
                                <Link to = { frontmatter.path } >
                                    <h2>{ frontmatter.title }</h2>
                                </Link>
                            </div>
                        )

                    })}
                    <Link to='/tags/'>
                        View all tags
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export const query = graphql`
    query HomepageQuery {
        allMarkdownRemark(
            sort: {
                order: DESC,
                fields: [
                    frontmatter___date
                ]
            }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date
                        excerpt
                    } 
                }
            }
        }
    }
    
`

export default Layout
