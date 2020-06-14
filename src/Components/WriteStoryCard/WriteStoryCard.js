import React from 'react';
import './WriteStoryCard.css';
import { Button } from 'react-bootstrap';

const WriteStoryCard = (props) => {
    return <div className='write-story-card shadow'>
        <p>Share your own stories?</p>
        <Button>Write</Button>
    </div>
}

export default WriteStoryCard