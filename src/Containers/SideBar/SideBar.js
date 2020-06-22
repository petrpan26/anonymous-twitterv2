import React, { Component } from 'react';

import './SideBar.css';

import PopularTags from '../PopularTags/PopularTags'
import WriteStoryCard from '../../Containers/WriteStoryCard/WriteStoryCard';
import {withRouter} from 'react-router-dom'

class SideBar extends Component {
    constructor(props) {
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
                    name: 'abuse',
                    num_post: 5000,
                },
                {
                    name: 'darkthoughts',
                    num_post: 4200,
                },
                {
                    name: 'feminism',
                    num_post: 3020,
                },

            ]
        }
        
    }



    

    render() {
        return <div className='sidebar'>
            <WriteStoryCard
                toWriteStoryPage={this.toWriteStoryPage}
            />
            <PopularTags
                tags={this.state.tags}
            ></PopularTags>
        </div>
    }
}

export default withRouter(SideBar);