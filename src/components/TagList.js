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
    background: #ff8f2f;
    padding: .25rem .5rem;
    border-radius: 5px;
    opacity: 1;
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
