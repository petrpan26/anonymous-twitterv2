import React from 'react';
import './StoryCard.css';
import {Button} from 'react-bootstrap';

const StoryCard = (props) => {
    return <div className='story-card shadow'>
        <div className='story-card-header'>
            <h3>#{props.story.tag}</h3>
            <Button variant="info" className='like-button'>up</Button>
        </div>
        <hr></hr>
        <p className='story-card-content'>{props.story.content}</p>
        <div className='fading-cover'></div>
    </div>
}

export default StoryCard;