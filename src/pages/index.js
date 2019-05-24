import React from "react"
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Title from '../components/Title'

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

const Article = styled.div`
    width: 65%;
    
    @media ( max-width: 700px ) {
        width: 100%;
    }
`

const Section = styled.div`
    margin-bottom: 2rem;
`

const Layout = ( { data } ) => {
    const { edges } = data.allMarkdownRemark
    return (
        <Container>
            <Navbar />
            <Main>
                <Article>
                    { edges.map(( edge, index ) => {
                        const { frontmatter } = edge.node
                        console.log( frontmatter )
                        return (
                            <Section key={ `${ index }-${ frontmatter.title }` }>
                                <Title 
                                    title={ frontmatter.title }
                                    to={ frontmatter.path }
                                />
                                <div>
                                    <p>
                                        { frontmatter.excerpt }
                                    </p>
                                </div>
                            </Section>
                        )

                    })}
                    <Link to='/tags/'>
                        View all tags
                    </Link>
                </Article>
            </Main>
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
