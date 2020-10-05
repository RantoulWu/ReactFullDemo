import React from 'react';

/* functional component
* Before 16.8: a functional component doesn't have state, it's stateless. We use functional
* component to display data. Hence, it's also called dumb component/presentational component.
*
* Starting from 16.8, react introduced react hooks, which allows functional components to
* use state and to simulate life cycle hook methods. React official team recommends developers
* to use functional components to replace class components
* */
const Name = (props) => {
    // props is readonly
    // props.n = 'my data';

    /* p -> c
    *  in child, receive data from props
    *  */
    return (
        // props.children is similar to ng-content
        <p>{props.n} {props.children}</p>
    );
}
export default Name;
