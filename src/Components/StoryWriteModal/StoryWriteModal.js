import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const StoryWriteModal = (props) => {
    return <Modal
        show={props.show}
        onHide={props.hideModal}
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title>Write a story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="tag">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control type="text" placeholder="#" onChange={props.onChange} name='tag' value={props.tag} />
                </Form.Group>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="This is my story.." onChange={props.onChange} name='title' value={props.title} />
                </Form.Group>
                <Form.Group controlId="content">
                    <Form.Label>Story</Form.Label>
                    <Form.Control as="textarea" rows="5" onChange={props.onChange} name='content' value={props.content} />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.hideModal}>
                Close
      </Button>
            <Button variant="primary" onClick={props.submitStory}>Submit</Button>
        </Modal.Footer>
    </Modal>
}

export default StoryWriteModal;