import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Title from '../components/Title'
import { FaTags } from 'react-icons/fa'

const Section = styled.div`
    display: flex;
    align-items: center;
`

const TagIcon = styled.div`
    margin-bottom: 1rem;
    margin-right: .5rem;
`

const AllTagsIndexTemplate = ({ data, pageContext }) => {
    const { tags } = pageContext
    return (
        <Layout>
            <h3>All Tags</h3>
            <div>
                { tags.map(( tag, index ) => {
                    return (
                        <Section key={ index }>
                            <TagIcon>
                                <FaTags />  
                            </TagIcon>
                            <Title 
                                title={ tag }
                                to={ `tags/${ tag }` }
                            />
                        </Section>
                    )
                })}
            </div>
        </Layout>
    )
}

export default AllTagsIndexTemplate
