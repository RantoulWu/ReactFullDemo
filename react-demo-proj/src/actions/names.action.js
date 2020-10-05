import {appConstant} from "../constants/constant";

export const addName = (newName) => {
    return {
        type: appConstant.ADD_NAME,
        payload: newName
    };
};
