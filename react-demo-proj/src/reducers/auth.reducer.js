import {appConstant} from "../constants/constant";

export const authReducer = (state = null, action) => {
    switch (action.type) {
        case appConstant.LOGIN:
            return action.payload.data.success ?
                action.payload.data.user : null;
        case appConstant.LOGOUT:
            return action.payload.success ? null : state;
        default:
            return state;
    }
};
