import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./container/App";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {appConstant} from "./constants/constant";
import Names from "./names/Names";
import AddName from "./names/add-name/AddName";
import Products from "./products/Products";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/root.reducer";
import reduxPromise from 'redux-promise';
import AddProduct from "./products/add-product/AddProduct";
import EditProduct from "./products/edit-product/EditProduct";
import Login from "./auth/login/Login";
import {authGuard} from "./auth/auth.hoc";


const root = document.querySelector('#root');
/*
const text = document.createTextNode('Hello World!');
const h1 = document.createElement('h1');
h1.appendChild(text);
root.appendChild(h1);


const reactH1 = React.createElement('h1', null, 'Hello React');
ReactDOM.render(reactH1, root);

const user = 'alice';
const myStyle = {color: 'red'};
// JSX: JavaScript XML, html like syntax, transpiler Babel will compile JSX to above code
const reactH2 = <h2 style={myStyle}>{user} - Hello React again!</h2>;
ReactDOM.render(reactH2, root);
*/

const names = ['alex', 'bob', 'charlie'];
const addName = (newName) => {
    names.push(newName);
};

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <App>
                <Switch>
                    {/*<Route path={appConstant.namesRoute}>
                        <Names names={names}/>
                    </Route>*/}
                    <Route path={appConstant.namesRoute} component={Names} />
                    <Route path={appConstant.productsRoute} component={Products} />
                    <Route path={appConstant.addNameRoute} component={AddName} />
                    <Route path={appConstant.addProductRoute} component={authGuard(AddProduct)} />
                    <Route path={appConstant.loginRoute} component={Login} />
                    <Route path={`${appConstant.editProductRoute}/:id`} component={EditProduct} />
                    {/*<Route path={appConstant.addNameRoute} component={() => <AddName addName={addName}/>} />*/}
                    {/*<Route path={appConstant.productsRoute} component={() => <Products products={products}/>} />*/}
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
    ,
    root
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
