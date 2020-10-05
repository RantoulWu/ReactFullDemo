import React, {Component} from 'react';
import {Field, Form, Formik} from "formik";
import {appConstant} from "../../constants/constant";
import {connect} from "react-redux";
import {getProducts} from "../../actions/products.action";
import * as Yup from 'yup';

const EditProductValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Product Name is required!'),
    brand: Yup.string()
        .required('Product Brand is required!'),
    price: Yup.number()
        .min(0, 'Product Price has to be positive')
        .required('Product Price is required!')
});

class EditProduct extends Component {

    constructor(props) {
        super(props);
        this.h2Ref = React.createRef();
    }

    // {field: {value, onChange, ...}, form: {}, type: '', label: ''}
    renderField = ({field, form: {errors, touched}, ...props}) => (
        <div>
            <label htmlFor={props.label}>{props.label}</label>
            {/*value=field.value, onChange=field.onChange, ...*/}
            <input
                id={props.label}
                {...field}
                {...props}
            />
            {
                touched[field.name] && <p style={ {color: 'orangered'} }>{errors[field.name]}</p>
            }
        </div>
    );

    componentDidMount() {
        this.props.product === undefined && this.props.getProducts();
    }

    // formik already called event.preventDefault for us
    handleSubmit = (values) => {
        // values is our form data
        console.log(values);
        this.h2Ref.current.style.color = 'lightgreen';
    };

    render() {
        return (
            <div>
                <h2 ref={this.h2Ref}>Edit Product {this.props.match.params.id}</h2>
                {
                    this.props.product !== undefined &&
                    <Formik
                        initialValues={this.props.product}
                        onSubmit={this.handleSubmit}
                        validationSchema={EditProductValidationSchema}
                    >
                        <Form>
                            {
                                appConstant.PRODUCT_FIELD.map(field => (
                                    <Field
                                        key={field.name}
                                        name={field.name}
                                        type={field.type}
                                        label={field.label}
                                        component={this.renderField}
                                    />
                                ))
                            }
                            <button type="submit">Edit</button>
                        </Form>
                    </Formik>
                }
            </div>
        );
    }
}
function mapStateToProps({products}, ownProps) {
    const id = +ownProps.match.params.id;
    if (products) {
        const product = products.find(p => p.id === id);
        return {product: product || null};
    } else {
        return {product: undefined};
    }
}

export default connect(mapStateToProps, {getProducts})(EditProduct);
