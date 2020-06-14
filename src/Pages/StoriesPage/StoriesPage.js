import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StoryList from '../../Containers/StoryList/StoryList';
import PopularTags from '../../Containers/PopularTags/PopularTags';

class StoriesPage extends Component {
    render() {
        return <>

            <Container>
                <h1>#blacklifematter</h1>
                <hr></hr>
                <Row>
                    <Col xs={4}>
                        <PopularTags></PopularTags>
                    </Col>
                    <Col xs={8}>
                        <StoryList></StoryList>
                    </Col>
                </Row>
            </Container>
        </>

    }
}

export default StoriesPage;