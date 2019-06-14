import { GLOBAL_API } from '../actionsTypes/types';
import Axios from "axios";


export const logIn = async (obj) => {
    return Axios.post(`${GLOBAL_API}/auth/login`, obj).then((response) => {
        return response
    })
    .catch((error) => {
        console.log(error);
    });
}

export const signUpStepOne = async (obj) => {
    return Axios.post(`${GLOBAL_API}/auth/signup`, obj).then((response) => {
        return response
    })
    .catch((error) => {
        console.log(error);
    });
}
export const signUpStepTwo = async (obj) => {
    return Axios.post(`${GLOBAL_API}/user/update`, obj).then((response) => {
        return response
    })
    .catch((error) => {
        console.log(error);
    });
}
export const forgotPasswordApi = async (obj) => {
    return Axios.post(`${GLOBAL_API}/auth/gen-reset-token`, obj).then((response) => {
        return response
    })
    .catch((error) => {
        console.log(error);
    });
}
export const checkResetTokenApi = async (obj) => {
    return Axios.post(`${GLOBAL_API}/auth/reset-token`, obj).then((response) => {
        return response
    })
    .catch((error) => {
        console.log(error);
    });
}

export const resetPasswordApi = async (obj) => {
    return Axios.post(`${GLOBAL_API}/auth/reset-password`, obj).then((response) => {
        return response
    })
    .catch((error) => {
        console.log(error);
    });
}