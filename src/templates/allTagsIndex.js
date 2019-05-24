import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'

const AllTagsIndexTemplate = ({ data, pageContext }) => {
    const { tags } = pageContext
    return (
        <Layout>
            <h3>Tags</h3>
            <div>
                <ul>
                    { tags.map(( tag, index ) => {
                        return (
                            <li key={ index }>
                                <Link to={ `tags/${ tag }` }>
                                    { tag }
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default AllTagsIndexTemplate
