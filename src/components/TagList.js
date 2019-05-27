import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TagContainer = styled.div`
    display: flex;
`

const Tag = styled.p`
    margin-right: .5rem;
    color: #fff;
    font-size: .9rem;
    font-weight: 500;
    background: #eb9d57;
    padding: 3px;
    border-radius: 5px;
`

const StyledLink = styled( props => <Link { ...props } /> )`
    text-decoration: none;
`

const TagList = ({ tags }) => {
    return (
        <TagContainer>
            { tags.map(( tag, index ) => {
                return (
                    <StyledLink to={ `/tags/${ tag }` }>
                        <Tag key={ index }>
                            { tag }
                        </Tag>
                    </StyledLink>
                )
            })}
        </TagContainer>
    )
}

export default TagList
