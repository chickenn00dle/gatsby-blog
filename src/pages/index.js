import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Title from '../components/Title'
import DateText from '../components/DateText'
import TagList from '../components/TagList'
import More from '../components/More'

const Article = styled.div`
    width: 65%;
    
    @media ( max-width: 700px ) {
        width: 100%;
    }
`

const Section = styled.div`
    margin-bottom: 2rem;
`

const Excerpt = styled.p`
    margin-bottom: .5rem;
`
const Index = ( { data } ) => {
    const { edges } = data.allMarkdownRemark
    return (
        <Layout>
            <Article>
                { edges.map(( edge, index ) => {
                    const { frontmatter } = edge.node
                    return (
                        <Section key={ `${ index }-${ frontmatter.title }` }>
                            <DateText date={ frontmatter.date } />
                            <Title 
                                title={ frontmatter.title }
                                to={ frontmatter.path }
                            />
                            <Excerpt>
                                { frontmatter.excerpt }
                            </Excerpt>
                            <TagList
                                tags={ frontmatter.tags }
                            />
                        </Section>
                    )

                })}
                <More 
                    to='/tags/'
                    text='All Tags'
                />
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
                        tags
                    } 
                }
            }
        }
    }
    
`

export default Index 
