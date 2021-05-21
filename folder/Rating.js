import React, {Component} from 'react';
import { IoIoStar} from "@react-icons/all-files/IoIoStar";
import {IoIoStarOutline} from "@react-icons/all-files/IoIoStarOutline";

class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {rating: this.props.rating};
    }

    render() {
        return (
            <div style={styles.starStyle}> 
                <h1> Rating: {this.state.rating} </h1>
                {this.state.rating >= 1? (
                    <IoIoStar onClick={this.handleClick.bind(this,1)} />
                ) : (
                    <IoIoStarOutline onClick={this.handleClick.bind(this,1)} />
                )}
                {this.state.rating >= 2 ? (
                    <IoIoStar onClick={this.handleClick.bind(this,2)} />
                ) : (
                    <IoIoStarOutline onClick={this.handleClick.bind(this,2)} />
                )}
                {this.state.rating >= 3 ? (
                    <IoIoStar onClick={this.handleClick.bind(this,3)} />
                ) : (
                    <IoIoStarOutline onClick={this.handleClick.bind(this,3)} />
                )}
                {this.state.rating >= 4 ? (
                    <IoIoStar onClick={this.handleClick.bind(this,4)} />
                ) : (
                    <IoIoStarOutline onClick={this.handleClick.bind(this,4)} />
                )}
                {this.state.rating >= 5 ? (
                    <IoIoStar onClick={this.handleClick.bind(this,5)} />
                ) : (
                    <IoIoStarOutline onClick={this.handleClick.bind(this,5)} />
                )}
            </div>
        );
    }
}

export default Rating;

const styles = {
    starStyle:{
        color: 'pink'
    }
}