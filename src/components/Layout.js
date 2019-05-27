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
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ( min-width: 700px ) {
        display: none;
    }
`

const FooterText = styled.p`
    color: #000;
    opacity: .1;
`

const Layout = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <Main>
                { children }
            </Main>
            <Footer>
                <Social size='large' />
                <FooterText>
                    by Rasmy Nguyen
                </FooterText>
            </Footer>
        </Container>
    )
}

export default Layout
