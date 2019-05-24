import React from "react"
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Title from '../components/Title'

const Article = styled.div`
    width: 65%;
    
    @media ( max-width: 700px ) {
        width: 100%;
    }
`

const Section = styled.div`
    margin-bottom: 2rem;
`

const Index = ( { data } ) => {
    const { edges } = data.allMarkdownRemark
    return (
        <Layout>
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
        </Layout>
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

export default Index 
