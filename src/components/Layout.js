import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

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

const Layout = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <Main>
                { children }
            </Main>
        </Container>
    )
}

export default Layout
