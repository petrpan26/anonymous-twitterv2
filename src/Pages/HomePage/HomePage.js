import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class HomePage extends Component{

        constructor(props){
        super(props)
        this.toNewStory = this.toNewStory.bind(this)
    }

    toNewStory(){
        this.props.history.push('/newstory');
    }

    render(){
        return <>
            <h1>Something that introduce the website and have button(s) to redirect</h1>
            <button onClick={this.toNewStory}>Write new story</button>
        </>
    }
}

export default withRouter(HomePage);