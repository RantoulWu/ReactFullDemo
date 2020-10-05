import {appConstant} from "../constants/constant";

const names = ['alice', 'bob', 'charlie'];
export const namesReducer = (state = names, action) => {
    if (action.type === appConstant.ADD_NAME) {
        // immutable way of updating data
        const newState = [...state];
        newState.push(action.payload);
        return newState;
    }
    return state;
};
