import React, { Component } from 'react';

import './TagList.css';
import TagListItem from '../../Components/TagListItem/TagListItem';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';

class TagList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: props.tags
        }
        this.tagClickHandler=this.tagClickHandler.bind(this);
    }

    tagClickHandler = (index) => {
        this.props.history.push({pathname: '/stories', search: queryString.stringify({tag: this.state.tags[index].name})});
    }

    render() {
        return <>
            {this.state.tags
                ? <>{this.state.tags.map(
                        (tag, index) => {
                            return <TagListItem tag={tag} tagClickHandler={() => {this.tagClickHandler(index)}}></TagListItem>

                        }
                    )
                    
                }</>
                : <h1>No tags </h1>
            }
        </>
    }
}

export default withRouter(TagList);