import axios from 'axios';
import qs from 'qs';
import {appConstant} from "../constants/constant";

export const login = user => {
    const loginPromise = axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        qs.stringify(user),
        {withCredentials: true}
    );
    return {
        type: appConstant.LOGIN,
        payload: loginPromise
    };
}
