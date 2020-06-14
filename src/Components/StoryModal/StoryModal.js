import React from 'react';
import { Modal, Button } from 'react-bootstrap'

const StoryModal = (props) => {
    console.log(props)
    return <Modal
        centered
        show={props.showModal}
        onHide={props.collapseStory}
    >
        <Modal.Header closeButton>
            <Modal.Title>#{props.story.tag}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className='story-card-content'>{props.story.content}</p>
        </Modal.Body>

    </Modal>
}

export default StoryModal;