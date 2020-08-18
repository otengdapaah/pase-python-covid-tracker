import React from 'react'
import PropTypes from 'prop-types'

function Article(props) {
    return (
        <div>
            <article className="wallpaper">
                <img src={props.src} alt={props.alt} className="wallpaper" />
            </article>
        </div>
    )
}

export default Article

