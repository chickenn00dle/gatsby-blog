import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'

const SingleTagIndexTemplate = ({ data, pageContext }) => {
    const { posts, tagName } = pageContext
    return (
        <Layout>
            <h3>Posts About { tagName }</h3>
            <div>
                <ul>
                    { posts.map(( post, index ) => {
                        return (
                            <li key={ index }>
                                <Link to={ post.frontmatter.path }>
                                    { post.frontmatter.title }
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default SingleTagIndexTemplate
