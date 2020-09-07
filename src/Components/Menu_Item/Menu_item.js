import React from 'react'
import './Menu_item.scss';

export default function MenuItem({title, imageUrl, size, history, linkUrl, match}) {
    return (
        <div className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span>Shop Now</span>
            </div>
        </div>
    )
}
