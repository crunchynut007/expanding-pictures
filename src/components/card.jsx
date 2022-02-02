import React from "react";
import './card.css';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //clears all values in the array and assigns a single active class. Passed to the parent state object
        let newActive = this.props.activePanel;
        for (let x=0; x<newActive.length;x++) {
            newActive[x]='';
        }
        newActive[this.props.index] = 'active';
        this.props.onClickHandler(newActive)
    }

    render() {
        return (
            <div className={'panel ' + this.props.activePanel[this.props.index]} style={{ backgroundImage:`url(${this.props.url})` }} onClick={this.handleClick}>
                <h3>{this.props.text}</h3>
            </div>
        );
    }
}

export default Card