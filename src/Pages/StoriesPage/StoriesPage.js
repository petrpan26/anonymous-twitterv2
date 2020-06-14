import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StoryList from '../../Containers/StoryList/StoryList';
import SideBar from '../../Containers/SideBar/SideBar';
import $ from 'jquery';
class StoriesPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stories: [],
            cursor: null
        }
        this.fetchStories = this.fetchStories.bind(this)
    }
    
    componentDidMount(){
        this.fetchStories()
        const container = $(window);
        container.on('scroll', () => {
            if(container.scrollTop() + container.height() === $(document).height()){
                this.fetchStories()
            }
        })
    }


    // componentWillReceiveProps(props) {
    //     console.log('props')
    //     this.fetchStories()
    // }

    componentWillUnmount(){
        const container = $('body');
        container.off();
    }

    fetchStories = () => {
        let response = {
            stories: [
                {
                    id: 10,
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    id: 9,
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    id: 8,
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    id: 7,
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    id: 6,
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    id: 5,
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    id: 4,
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    id: 3,
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    id: 2,
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    id: 1,
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                }
            ]
        }
        this.setState({
            stories: this.state.stories.concat(response.stories),
            cursor: response.stories.length !== 0 ? response.stories[response.stories.length - 1].id : null
        })
    }

    render() {
        let stories = this.state.stories

        return  <Container>
                <h1>#blacklifematter</h1>
                <hr></hr>
                <Row>
                    <Col xs md={4}>
                        <SideBar></SideBar>
                    </Col>
                    <Col xs md={8}>
                        <StoryList
                        stories={stories}
                        />
                    </Col>
                </Row>
            </Container>
    }
}

export default StoriesPage;