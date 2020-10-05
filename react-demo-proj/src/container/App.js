import React from 'react';
/*import Names from "../names/Names";
import AddName from "../names/add-name/AddName";
import Products from "../products/Products";*/
import Header from "../header/Header";

/* class component
*  Before react 16.8: class component can have state, meaning it can be stateful. A stateful class
* component is also called smart component or container
*
*  starting from 16.8: class components are being replaced by functional component since the creation
*  of class component is more complicated than functional component
* */
class App extends React.Component {

    /* state is an object that every class component has.
    * we store the variable that is used in the view into state
    * and call setState when there is a change, so that the view
    * will be updated/re-rendered by react.
    * */
    state = {
        name: 'alice',
        names: ['alex', 'bob', 'charlie']
    };
    handleInput = (event) => {
        // react has strict mode turned on by default
        // hence, this is undefined in es5 function
        // this.state.name = event.target.value;
        this.setState({
            name: event.target.value
        });
        // this.forceUpdate();
    }

    // c -> p: in parent, create a function to pass it down to child.
    addName = (newName) => {
        const newNames = [...this.state.names];
        newNames.push(newName);
        this.setState({
            names: newNames
        });
    };

    render() {
        /* Must satisfy both
        *  1. return multiple lines of jsx, we must use () to enclose them
        *  2. returned jsx must have only one root
        */
        return (
            // React.Fragment is similar to ng-container
            <>
                <Header/>

                <main>
                    {/* similar to router-outlet */}
                    {this.props.children}
                </main>
            </>
            /*<div>
                <input onChange={this.handleInput} type="text"/>
                <h1>{this.state.name} - Hello React</h1>
                {/!* p => c communication
                    in parent, pass data through attribute created under child component
                *!/}
                {/!*<Name n="bob"/>
                <Name n="charlie">15</Name>*!/}
                <AddName addName={this.addName}/>
                <Names names={this.state.names}/>
                <Products/>
            </div>*/
        );
    };
}
export default App;
