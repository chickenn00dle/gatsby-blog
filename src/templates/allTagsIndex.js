import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

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
const AllTagsIndexTemplate = ({ data, pageContext }) => {
    const { tags } = pageContext
    return (
        <Container>
            <Navbar />
            <Main>
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
            </Main>
        </Container>
    )
}

export default AllTagsIndexTemplate
