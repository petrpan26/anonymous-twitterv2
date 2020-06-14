import React, {Component} from 'react';

class TagList extends Component{
    constructor(props){
        super(props)
        this.state = {
            tags: [
                {
                    tag: 'blacklifematter',
                    num: 10000,
                },
                {
                    tag: 'lgbt',
                    num: 8000,
                },
                {
                    tag: 'depression',
                    num: 7000,
                },
                {
                    tag: 'comeout',
                    num: 6000,
                },
                {
                    tag: 'imgaybutilikegirls',
                    num: 5000,
                },
                {
                    tag: 'ilikemysister',
                    num: 4000,
                },
                {
                    tag: 'feminism',
                    num: 3000,
                },
                
            ]
        }
    }

    render(){
        return <>
            this.state.tags
            ?{
                this.state.tags.map(
                    (tag, index) => {
                        tag
                    }
                )
            }
            : <h1>No tags </h1>
        </>
    }
}