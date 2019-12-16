import React, { Component } from 'react';
import styled from 'styled-components';

class Keterangan extends Component {
    state = {  }
    render() { 
        return (
            <Div {...this.props}>
                <p className='this_title'>Catatan :</p>
                <p className='this.body'>
                    {this.props.children}
                </p>
            </Div>
        );
    }
}
 
export default Keterangan;

const Div = styled.div`
    display: block;
    margin-top: .5rem;

    & p {
        font-size: 12px;
        font-style: italic;
        line-height: 20px;
        margin-bottom: 0rem;
        max-width: 85%;
    }

    & .this_title {
        font-weight: 600;   
    }
`