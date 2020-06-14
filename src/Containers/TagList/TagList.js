import React, { Component } from 'react';

import './TagList.css';
import TagListItem from '../../Components/TagListItem/TagListItem';
class TagList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: props.tags
        }
    }

    render() {
        return <>
            {this.state.tags
                ? <>{this.state.tags.map(
                        (tag, index) => {
                            return <TagListItem tag={tag}></TagListItem>

                        }
                    )
                    
                }</>
                : <h1>No tags </h1>
            }
        </>
    }
}

export default TagList