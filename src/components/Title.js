import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledTitle = styled.h2`
    font-weight: 700;
    color: #F1B783;
`

const Title = ({ title, to }) => {
    return (
        <Link to={ to }>
            <StyledTitle>
                { title }
            </StyledTitle>
        </Link>
    )
}

export default Title
