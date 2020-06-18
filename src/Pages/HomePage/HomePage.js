import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import './HomePage.css'
import queryString from 'query-string'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            position: 0,
            tag: '',
            title: '',
            content: '',
        }
        this.submitTag = this.submitTag.bind(this)
        this.submitTitle = this.submitTitle.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitTag = (event) => {
        event.preventDefault()
        this.setState({ position: 2 })
    }

    submitTitle = (event) => {
        event.preventDefault()
        this.setState({ position: 3 })
    }

    submit = (event) => {
        event.preventDefault()
        this.props.history.push({pathname:'/stories', search :queryString.stringify({tag:this.state.tag})})
    }

    render() {
        return <div className='background'>
            <button
                onClick={() => { this.setState({ position: Math.min(0, this.state.position - 1) }) }}
                className={this.state.position > 0 ? 'absolute-top-left custom-button show' : 'absolute-top-left custom-button hide'} >
                    Back
                </button>

            <div className="content" style={{ left: (50 - this.state.position * 100) + "%", transition: '1s' }}>
                <p className='title'>Tell us your deepest story</p>
                <p className='title hidden' onClick={() => { this.setState({ position: 1 }) }}>Start writting</p>
            </div>
            <div className="content" style={{ left: (150 - this.state.position * 100) + "%", transition: '1s' }}>

                <p className='title'>Choose a tag</p>
                <form onSubmit={this.submitTag}>
                    <div className='flex-column'>
                        <input type='text' className="search-txt" value={this.state.tag} onChange={this.onChange} name='tag' />
                        <div className='submit-container'>
                            <button type='submit' className={this.state.tag === '' ? 'custom-button hide' : 'custom-button show'} >next</button>
                        </div>
                    </div>

                </form>

            </div>
            <div className="content" style={{ left: (250 - this.state.position * 100) + "%", transition: '1s' }}>
                <p className='title'>Choose your title</p>
                <form onSubmit={this.submitTitle}>
                    <div className='flex-column'>
                        <input type='text' className="search-txt" value={this.state.title} onChange={this.onChange} name='title' />
                        <div className='submit-container'>
                            <button type='submit' className={this.state.title === '' ? 'custom-button hide' : 'custom-button show'} >Next</button>
                        </div>
                    </div>

                </form>

            </div>
            <div className="content" style={{ left: (350 - this.state.position * 100) + "%", transition: '1s' }}>
                <p className='title'>Write your story here</p>
                <form onSubmit={this.submit}>
                    <div className='flex-column'>
                        <textarea rows="6" className="content-txt" value={this.state.content} onChange={this.onChange} name='content'></textarea>
                        <div className='submit-container'>
                            <button type='submit' className={this.state.content === '' ? 'custom-button hide' : 'custom-button show'} >Next</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    }
}

export default withRouter(HomePage);