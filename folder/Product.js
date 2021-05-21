/*
import React, {Component} from 'react';
import Rating from './Rating';
import {Media} from 'react-bootstrap';

class Product extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        const listProducts = this.prducts.map((product) => 
            <Product key={product.productName} data={product} /> );

        return (
            <div>
                {listProducts.length > 0 &&
                    <u1>{listProducts</u1>
                }
                {listProducts.length==0 &&
                    <u1>No Products to Display</u1>
                }

                /* <Media>
                    <img width={64}
                        height={64}
                        className="mr-3"
                        src={this.props.data.imageUrl}
                        alt="Image" 
                    />
                    <Media.Body>
                        <h5>{this.props.data.productName}</h5>
                        {this.props.data.releasedDate}
                        
                        <Rating
                            rating = {this.props.data.rating}
                            numOfReviews={this.props.data.numOfReviews}
                        />
                        <p>{this.props.data.description}</p>
                    </Media.Body>
                </Media> */ /*
            </div>
        );
    }
}

export default Product;
*/