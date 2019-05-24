import React from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'

const SingleTagIndexTemplate = ({ data, pageContext }) => {
    const { posts, tagName } = pageContext
    return (
        <Layout>
            <h3>{ tagName.charAt(0).toUpperCase() + tagName.slice(1) } Posts</h3>
            <div>
                { posts.map(( post, index ) => {
                    return (
                        <div key={ index }>
                            <Title 
                                title={ post.frontmatter.title }
                                to={ post.frontmatter.path }
                            />
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default SingleTagIndexTemplate
