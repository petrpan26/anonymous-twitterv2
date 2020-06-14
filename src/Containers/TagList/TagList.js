import React, { Component } from 'react';

import './TagList.css';

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
                            return <div className='tag-item'>
                                    <p><b>#{tag.name}</b></p>
                                    <p>{tag.num_post}</p>
                                </div>

                        }
                    )
                    
                }</>
                : <h1>No tags </h1>
            }
        </>
    }
}

export default TagList