import React, { Component } from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import ReactTooltip from 'react-tooltip';

// import '../FontAwesome';
import './form.scss'

class Input extends Component {
    state = {  }
    render() { 
        // const hint = <FontAwesomeIcon icon={['fas', 'question-circle']}/>

        return (
            <div className='input'>
                <label htmlFor={this.props.name}>{this.props.label}</label> <br/>
                <input {...this.props}/>
            </div>
        );
    }
}
 
export default Input;