import React, { Component } from 'react';
import './WriteStoryCard.css';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import StoryWriteModal from '../../Components/StoryWriteModal/StoryWriteModal';
import queryString from 'query-string';
class WriteStoryCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false,
            tag: '',
            title: '',
            content: ''
        }
        this.toWriteStoryPage = this.toWriteStoryPage.bind(this)
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.onChange = this.onChange.bind(this)
        this.submitStory = this.submitStory.bind(this)
    }

    toWriteStoryPage = () => {
        this.props.history.push('/home')
    }

    showModal = () => {
        this.setState({
            show: true,
        })
    }

    hideModal = () => {
        this.setState({ 
            show: false,
            tag: '',
            title: '',
            content: ''
         })
    }

    onChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    submitStory = (event) => {
        event.preventDefault()
        this.props.history.push({pathname:'/stories', search :queryString.stringify({tag:this.state.tag})})
    }

    render() {
        return <div className='write-story-card shadow'>
            <p>Share your own stories?</p>
            {/* <Button onClick={this.toWriteStoryPage}>Write</Button> */}
            <Button onClick={this.showModal}>Write</Button>
            <StoryWriteModal
                show={this.state.show}
                hideModal={this.hideModal}
                tag={this.state.tag}
                title={this.state.title}
                content={this.state.content}
                onChange={this.onChange}
                submitStory={this.submitStory}
            ></StoryWriteModal>
        </div>
    }

}

export default withRouter(WriteStoryCard);