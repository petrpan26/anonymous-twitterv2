import React, { Component } from 'react';

import './SideBar.css';

import PopularTags from '../PopularTags/PopularTags'
import WriteStoryCard from '../../Components/WriteStoryCard/WriteStoryCard';


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

    render() {
        return <div className='sidebar'>
            <WriteStoryCard></WriteStoryCard>
            <PopularTags
                tags={this.state.tags}
            ></PopularTags>
        </div>
    }
}

export default SideBar;