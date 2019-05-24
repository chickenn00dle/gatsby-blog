import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Title from '../components/Title'

const AllTagsIndexTemplate = ({ data, pageContext }) => {
    const { tags } = pageContext
    return (
        <Layout>
            <h3>All Tags</h3>
            <div>
                { tags.map(( tag, index ) => {
                    return (
                        <div key={ index }>
                            <Title 
                                title={ tag }
                                to={ `tags/${ tag }` }
                            />
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default AllTagsIndexTemplate
