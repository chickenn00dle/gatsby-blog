import React from 'react'
import svg from '../images/RZMYlong.svg';
import styled from 'styled-components'

const Container = styled.div`
    margin-right: 1rem;
    margin-bottom: 0;
`

const LogoObject = styled.object`
    width: 115px;
    pointer-events: none;
    color: #000;
    opacity: .9;
`

const SiteTitle = styled.h1`
    margin-right: 1rem;
    margin-bottom: 0;
    font-weight: 900;
    font-size: 3rem;
    color: #000;
    opacity: 1;
    cursor: pointer;
`

const Logo = ({ title }) => {
    return (
        <Container>
            <LogoObject type="image/svg+xml" data={ svg }>
                <SiteTitle>
                    { title }
                </SiteTitle>
            </LogoObject>
        </Container>
    )
}

export default Logo
