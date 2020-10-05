import {appConstant} from "../constants/constant";

export const productsReducer = (state = null, action) => {
    switch (action.type) {
        case appConstant.GET_PRODUCTS:
            return action.payload.data;
        case appConstant.ADD_PRODUCT:
            /*if (action.payload.data.success) {
                return null;
            } else {
                return state;
            }*/
            return action.payload.success ? null : state;
        default:
            return state;
    }
};
