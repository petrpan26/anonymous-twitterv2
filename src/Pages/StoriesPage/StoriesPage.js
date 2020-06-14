import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import StoryList from '../../Containers/StoryList/StoryList';


class StoriesPage extends Component{
    render(){
        return <Container>
            <Row>
                <Col xs={4}>

                </Col>
                <Col xs={8}>
                    <StoryList></StoryList>
                </Col>
            </Row>
        </Container>
    }
}

export default StoriesPage;