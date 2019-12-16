import React, { Component } from 'react';
import './tab.scss';

class SidebarTab extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            active : ''
        }
    }

    setActiveTab = (event) => {
        
        const {id} = event.target
        console.log(id)

        this.setState({active : id}, () => console.log(this.state.active));
        
    }

    static List = (props) => {
        return  <li 
                    className={`tab-list ${props.active ? 'active' : ''}`}
                    id={props.id}
                    onClick={props.onClick}
                >
                    <p>{props.children}</p>
                </li>
    }

    
    render() { 
        const { children } = this.props
        
        return (
            <div className='tab side-tab'>
                <ul>
                    {
                        React.Children.map(children, (child, props) => {
                            return React.cloneElement(child, {
                                onCLick : this.setActiveTab,
                                id : props.id,
                                ...props
                            })
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default SidebarTab;