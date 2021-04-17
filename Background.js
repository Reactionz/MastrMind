import React, {Component} from 'react';
import {SketchPicker} from 'react-color';

class BackgroundColor extends Component {
    state={
        background: '#1344E4',
    };

    handleChangeComplete = (color, event) => {
        this.setState({background: color.hex});
    };

    render() {
        return (
            <SketchPicker
                color={this.state.background}
                onChangeComplete={this.handleChangeComplete}
            />
        );
    }
}

export default BackgroundColor;