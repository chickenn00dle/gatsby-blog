import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledTitle = styled.h2`
    margin-bottom: .5rem;
    font-weight: 700;
    color: #eb9d57;
    opacity: 1;
`

const Title = ({ title, to }) => {
    return (
        <Link 
            to={ to }
            style={{ textDecorationColor: '#000' }} 
        >
            <StyledTitle>
                { title }
            </StyledTitle>
        </Link>
    )
}

export default Title
