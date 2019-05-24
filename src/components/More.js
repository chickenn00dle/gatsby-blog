import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaTags } from 'react-icons/fa'

const MoreContainer = styled.div`
    display: flex;
    align-items: center;
`

const StyledIcon = styled( props => <Link { ...props } /> )`
    color: #F1B783;
    text-decoration: none;
    padding-bottom: 0;
    margin-bottom: 0;
`

const StyledLink = styled( props => <Link { ...props } /> )`
    color: #F1B783;
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
