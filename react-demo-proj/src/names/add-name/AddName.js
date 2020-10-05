import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addName} from "../../actions/names.action";

class AddName extends Component {

    state = {
        newName: 'default'
    };

    handleAddNewName = (event) => {
        // asynchronous
        this.setState({
            newName: event.target.value
        });
        // do not use state this way
        // console.log(this.state.newName);
    };

    handleClick = () => {
        /* c -> p:
        * in child, we will receive the function passed from parent through props.
        * we then call the function and pass data through argument(s)
        * */
        this.props.addName(this.state.newName);
    };
    render() {
        return (
            <section>
                <input onChange={this.handleAddNewName} value={this.state.newName} type="text"/>
                <button onClick={this.handleClick}>Add</button>
            </section>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({addName}, dispatch);
}
export default connect(null, mapDispatchToProps)(AddName);
