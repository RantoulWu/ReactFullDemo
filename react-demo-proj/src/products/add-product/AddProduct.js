import React, {Component} from 'react';
import {appConstant} from "../../constants/constant";
import {connect} from "react-redux";
import {addProduct} from "../../actions/products.action";

class AddProduct extends Component {

    constructor(props) {
        super(props);
        const state = {
            newProduct: {},
            error: {}
        };
        appConstant.PRODUCT_FIELD.forEach(field => {
            // react input default value '' for both string and number
           state.newProduct[field.name] = '';
           state.error[field.name] = '';
        });

        this.state = state;
    }

    handleFormControl = (event) => {
        // what is syntheticEvent in react?
        // console.log(event);
        this.setState({
            newProduct: {
                ...this.state.newProduct,
                [event.target.id]: event.target.value
            },
            error: {
                ...this.state.error,
                [event.target.id]: event.target.value === '' ?
                `${event.target.name} can't be empty!` : null
            }
        });
    };

    addProduct = (event) => {
        event.preventDefault();
        this.props.addProduct(this.state.newProduct);
    };

    isThereError = () => {
        return !Object.values(this.state.error).every(val => val === null);
    }
    render() {
        return (
            <div>
                <h2>Add Product</h2>
                <form>
                    {
                     appConstant.PRODUCT_FIELD.map(field => (
                         <div key={field.name} className="form-control">
                             <label htmlFor={field.name}>{field.label}</label>
                             <input
                                 name={field.label}
                                 id={field.name}
                                 type={field.type}
                                 value={this.state.newProduct[field.name]}
                                 onChange={this.handleFormControl}
                             />
                             <p style={ {color: 'orangered'} }>{this.state.error[field.name]}</p>
                         </div>
                     ))

                    }
                    <button disabled={this.isThereError()} onClick={this.addProduct}>Add Product</button>
                </form>
            </div>
        );
    }
}
export default connect(null, {addProduct})(AddProduct);
