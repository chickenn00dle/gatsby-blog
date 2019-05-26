import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Title from '../components/Title'
import More from '../components/More'

const Section = styled.div`
    display: flex;
    align-items: center;
`

const SingleTagIndexTemplate = ({ data, pageContext }) => {
    const { posts, tagName } = pageContext
    return (
        <Layout>
            <h3>{ tagName.charAt(0).toUpperCase() + tagName.slice(1) } Posts</h3>
            <div>
                { posts.map(( post, index ) => {
                    return (
                        <Section key={ index }>
                            <Title 
                                title={ post.frontmatter.title }
                                to={ post.frontmatter.path }
                            />
                        </Section>
                    )
                })}
                <More
                    to='/tags'
                    text='All Tags'
                />
            </div>
        </Layout>
    )
}

export default SingleTagIndexTemplate
