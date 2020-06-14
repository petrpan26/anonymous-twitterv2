import React from 'react';
import './StoryCard.css'


const StoryCard = (props) => {
    return <div className='story-card shadow'>
        <div className='story-card-header'>
            <h3>#{props.story.tag}</h3>
            <p>{props.story.created_at}</p>
        </div>
        <hr></hr>
        <p className='story-card-content'>{props.story.content}</p>
        <div className='fading-cover'></div>
    </div>
}

export default StoryCard;