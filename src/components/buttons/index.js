import React from 'react';
import './button.scss'
// import styled from 'styled-components';

const BASE_STAYLE = [
    'primary',
    'accent',
    'danger',
    'primary-outline',
    'accent-outline',
    'danger-outline'
]

const BASE_SIZE = ['lg', 'sm', 'jumbo']

export const Button = ({
    children,
    type,
    onClick,
    set,
    round,
    size,
    stacked,
    disabled,
    active,
    ...props
}) => {

    const setType = type ? type : 'button'
    const setBtnStyle = BASE_STAYLE.includes(set) ? set : 'primary';
    const setBtnSize = BASE_SIZE.includes(size) ? size : '';
    const setDisabled = disabled ? 'disabled' : '';
    const setRound = round ? 'round' : '';
    const setStacked = stacked ? 'stacked' : ''; 
    const setActive = active ? `${setBtnStyle}-active` : '';

    return (
        <button
            type={setType}
            onClick={onClick}
            className={`btn ${setBtnStyle} ${setBtnSize} ${setDisabled} ${setRound} ${setStacked} ${setActive}`}
            {...props}
        >
            {children}
        </button>
    )
}