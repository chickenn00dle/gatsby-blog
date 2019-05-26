import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Social from './Social'

const Container = styled.div`
    width: 100%;
`

const Main = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
`

const Footer = styled.div`
    display: flex;
    justify-content: center;

    @media ( min-width: 700px ) {
        display: none;
    }
`

const Layout = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <Main>
                { children }
            </Main>
            <Footer>
                <Social />
            </Footer>
        </Container>
    )
}

export default Layout
