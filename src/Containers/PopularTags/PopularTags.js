import React, {Component} from 'react';

import './PopularTags.css';
import TagList from '../TagList/TagList'
class PopularTags extends Component{
    constructor(props){
        super(props)
        this.state = {
            tags: props.tags
        }
    }

    render(){
        return <div className='popular-tags-card shadow'>
            <h3>Popular tags</h3>
            <hr></hr>
            {this.state.tags 
            ?<TagList
            tags={this.state.tags}
        ></TagList>
        : null
        }
            
        </div>
    }
}

export default PopularTags;