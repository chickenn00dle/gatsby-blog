import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaTags } from 'react-icons/fa'

const MoreContainer = styled.div`
    display: flex;
    align-items: center;
`

const StyledIcon = styled( props => <Link { ...props } /> )`
    color: #FFAA62;
    text-decoration: none;
`

const StyledLink = styled( props => <Link { ...props } /> )`
    color: #FFAA62;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 1.25rem;
`

const More = ({ to, text }) => {
    return (
        <MoreContainer>
            <StyledIcon
                to={ to }
            >
                <FaTags />
            </StyledIcon>
            &nbsp;
            <StyledLink
                to={ to }
            >
                { text }
            </StyledLink>
        </MoreContainer>
    )
} 

export default More
