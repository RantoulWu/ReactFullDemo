import React from 'react';
import Name from "../component/Name";
import {connect} from "react-redux";

const Names = props => {
    /*const names = ['alice', 'bob', 'charlie'];*/
    return (
        props.names.map((name, index) => {
            return (
                <Name key={name + index} n={name}>{index}</Name>
            );
        })
    );
};

function mapStateToProps(reduxState) {
    // returned object will be merged with your component props
    return {
        names: reduxState.names
    };
}

export default connect(mapStateToProps)(Names);

/*
function connect() {
    return function(component) {
        //
    }
}*/
