import React from 'react';

const TagListItem = (props) => {
    return <div className='tag-item'>
        <p><b>#{props.tag.name}</b></p>
        <p>{props.tag.num_post}</p>
    </div>
}

export default TagListItem