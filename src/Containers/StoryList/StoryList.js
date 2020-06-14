import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StoryCard from '../../Components/StoryCard/StoryCard';
import StoryModal from '../../Components/StoryModal/StoryModal';
class StoryList extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            stories: props.stories,
            modalContentIndex: -1,
            showModal: false
        }
        this.expandStory = this.expandStory.bind(this)
        this.collapseStory = this.collapseStory.bind(this)
    }

    componentDidMount(){
        
        this.setState({stories: this.props.stories})
    }

    expandStory = (index) => {
        this.setState({ modalContentIndex: 0, showModal: true })
    }

    collapseStory = () => {
        this.setState({ showModal: false })
    }

    render() {
        return <>
            {this.props.stories
                ? this.props.stories.map(
                    (story, index) => {
                        return <Row>
                            <StoryCard
                                story={story}
                                expandStory={() => { this.expandStory(index) }}
                                collapseStory={this.collapseStory}
                            />
                        </Row>

                    }
                )
                : null
            }
            {this.state.modalContentIndex !== -1
                ? <StoryModal
                    collapseStory={this.collapseStory}
                    showModal={this.state.showModal}
                    story={this.state.stories[this.state.modalContentIndex]}
                ></StoryModal>
                : null
            }

        </>
    }
}

export default StoryList;