import React, { Component } from 'react';

import './form.scss'

class SingleForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {  }
    }
    render() { 
        return (
            <div className='singleForm'>
                <div className='title'><h5>{this.props.title}</h5></div>
                <div className='body'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default SingleForm;