import { publicRequest } from "../requestMethods";
import { loginStart, loginSuccess,loginFailure,logout } from "./userRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure(err.response?.data?.message || "An unexpected error occurred")); 
    }
};
