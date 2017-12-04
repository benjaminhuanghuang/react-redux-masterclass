import React, { Component } from 'react';
import ee from '../../eventEmitter';

const Button = ({ text, buttonClass, clickHandler }) => (
    <button className={buttonClass} 
    onClick={()=>clickHandler ? clickHandler.call(null, text):null}>
    <span className="title">{text}</span>
    </button>
);

/*
class Button extends Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        if (this.props.clickHandler) {
            this.props.clickHandler.call(null, this.props.text);
        }
    }

    render() {
        return (
             <button className={this.props.buttonClass} onClick={this.onClickHandler}>
                <span className="title">{this.props.text}</span>
            </button>
        );
    }
}*/
export default Button;