import React from 'react'
import { graphql, Link } from 'gatsby'

const AllTagsIndexTemplate = ({ data, pageContext }) => {
    const { tags } = pageContext
    return (
        <div>
            <h3>Tags</h3>
            <div>
                <ul>
                    { tags.map(( tag, index ) => {
                        return (
                            <li key={ index }>
                                <Link to={ `tags/${ tag }` }>
                                    { tag }
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default AllTagsIndexTemplate
