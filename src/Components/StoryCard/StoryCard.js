import React from 'react';
import './StoryCard.css';
import {Button} from 'react-bootstrap';

const StoryCard = (props) => {
    return <div className='story-card shadow' onClick={props.expandStory}>
        <p className='tag-text'>#{props.story.tag}</p>
        <div className='story-card-header'>
            <p className='card-title'>{props.story.title}</p>
            
        </div>
        <hr></hr>
        <p className='story-card-content'>{props.story.content}</p>
        
    </div>
}

export default StoryCard;