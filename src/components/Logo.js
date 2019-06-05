import React from 'react'
import svg from '../images/RZMYlong.svg'
import styled from 'styled-components'

const LogoObject = styled.object`
    margin-right: .5rem;
    width: 115px;
    color: #000;
    opacity: .9;
`

const SiteTitle = styled.h1`
    margin-bottom: 0;
    font-weight: 900;
    font-size: 3rem;
    color: #000;
    opacity: 1;
    cursor: pointer;
`

const Logo = ({ title }) => {
    return (
        <LogoObject type="image/svg+xml" data={ svg }>
            <SiteTitle>
                { title }
            </SiteTitle>
        </LogoObject>
    )
}

export default Logo
