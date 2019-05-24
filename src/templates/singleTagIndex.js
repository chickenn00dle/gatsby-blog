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

const SingleTagIndexTemplate = ({ data, pageContext }) => {
    const { posts, tagName } = pageContext
    return (
        <Container>
            <Navbar />
            <Main>
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
            </Main>
        </Container>
    )
}

export default SingleTagIndexTemplate
