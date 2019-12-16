import React, { Component } from 'react';

class Textarea extends Component {
    state = {  }
    render() { 
        return (
            <div className='textarea'>
                <label htmlFor={this.props.name}>{this.props.label}</label> <br/>
                <textarea {...this.props} />
            </div>
        );
    }
}
 
export default Textarea;