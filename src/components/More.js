import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaTags } from 'react-icons/fa'

const MoreContainer = styled.div`
    display: flex;
    align-items: center;
`

const StyledIcon = styled( props => <Link { ...props } /> )`
    color: #FFAA62 !important;
    text-decoration: none;

	&:hover {
		background: none;
		color: #ffaa62 !important;
	}
`

const StyledLink = styled( props => <Link { ...props } /> )`
    color: #FFAA62 !important;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 1.25rem;

	&:hover {
		background: none !important;
		color: #ffaa62 !important;
	}
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
