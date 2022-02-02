import React from "react";
import './card.css';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePanel: '',
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.state.activePanel === 'active' ? this.setState({activePanel: ''}) : this.setState({activePanel: "active"});
    }

    render() {
        return (
            <div className={'panel ' + this.state.activePanel} style={{ backgroundImage:`url(${this.props.url})` }} onClick={this.handleClick}>
                <h3>{this.props.text}</h3>
            </div>
        );
    }
}

export default Card