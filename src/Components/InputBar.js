import React from 'react';
import './InputBar.css';

class InputBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodPlace: ""

        }
    }

    render() {

        return (
            <div>
                <p>Input Bar Here</p>
            </div>
        )
    }
}

export default InputBar;