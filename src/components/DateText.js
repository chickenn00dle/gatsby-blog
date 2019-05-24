import React from 'react'
import styled from 'styled-components'

const formatDate = date => {
    const textDate = new Date( date ).toString();
    const splitDate = textDate.split(' ') 
    return `${ splitDate[ 1 ]} ${ splitDate[ 2 ] }, ${ splitDate[ 3 ] }`
}

const FormattedDate = styled.p`
    font-weight: 700;
    opacity: .15;
    margin-bottom: 0;
`

const DateText = ({ date }) => {
    const formattedDate = formatDate( date );
    return (
        <FormattedDate>
            { formattedDate }
        </FormattedDate>
    )
}

export default DateText
