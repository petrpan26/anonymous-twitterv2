import React, {Component} from 'react';

import './PopularTags.css';
import TagList from '../TagList/TagList'
class PopularTags extends Component{
    constructor(props){
        super(props)
        this.state = {
            tags: [
                {
                    name: 'blacklifematter',
                    num_post: 10000,
                },
                {
                    name: 'lgbt',
                    num_post: 8000,
                },
                {
                    name: 'depression',
                    num_post: 7000,
                },
                {
                    name: 'comeout',
                    num_post: 6000,
                },
                {
                    name: 'imgaybutilikegirls',
                    num_post: 5000,
                },
                {
                    name: 'ilikemysister',
                    num_post: 4000,
                },
                {
                    name: 'feminism',
                    num_post: 3000,
                },
                
            ]
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