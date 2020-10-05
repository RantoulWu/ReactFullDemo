import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {appConstant} from "../constants/constant";

export const authGuard = (ExistingComponent) => {
    const HOCComponent = (props) => {
        const user = useSelector(({user}) => user);

        // react hooks can simulate many lifecycle hook methods. Research!
        useEffect(() => {
            if (!user) {
                props.history.push(appConstant.loginRoute);
            }
        }, [user, props.history]);

        return (
            <ExistingComponent {...props}/>
        );
    };
    return HOCComponent;
};
