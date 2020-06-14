import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StoryCard from '../../Components/StoryCard/StoryCard';

class StoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: [
                {
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                },
                {
                    created_at: '30/09/1999',
                    tag: 'blacklifematter',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tortor vitae purus faucibus ornare suspendisse. Netus et malesuada fames ac turpis egestas integer. Scelerisque in dictum non consectetur a erat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Ut pharetra sit amet aliquam id. Ultrices neque ornare aenean euismod elementum nisi quis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Massa sed elementum tempus egestas sed sed. Eleifend mi in nulla posuere.'
                }
            ]
        }
    }

    render() {
        return <>
        { this.state.stories.map(
                (story, index) => {
                    return <Row>
                        <StoryCard
                            story={story}
                        />
                    </Row>

                }
            )
        }
        </>
    }
}

export default StoryList;