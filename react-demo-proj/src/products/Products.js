import React from 'react';
import {appConstant} from "../constants/constant";
import {connect} from "react-redux";
import {getProducts} from "../actions/products.action";
import {NavLink, Link} from "react-router-dom";

class Products extends React.Component {

    componentDidMount() {
        !this.props.products && this.props.getProducts();
    }

    render() {
        return (
            <div>
                <h2>Products</h2>
                <table>
                    <thead>
                        <tr>
                        {
                            appConstant.PRODUCT_FIELD.map(field => (
                                <th key={field.name}>{field.label}</th>
                            ))
                        }
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.products && this.props.products.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <Link
                                        to={`${appConstant.editProductRoute}/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        width="240"
                                        height="160"
                                    />
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

// fn({products}) es6 new feature let {products} = {names: [], products: []}
function mapStateToProps({products}) {
    // es6 syntax sugar for {products: products}
    return {products};
}
export default connect(mapStateToProps, {getProducts})(Products);
