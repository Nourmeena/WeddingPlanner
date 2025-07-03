import Cookies from "js-cookie";
import axios from "axios";
import { baseURL } from "./constant";

// Set a cookie
export const setCookie = (key, value) => {
    Cookies.set(key, value, { expires: 1 });
};

// Remove a cookie
export const removeCookie = (key) => {
    Cookies.remove(key);
};

// Get a cookie
export const getCookie = (key) => {
    return Cookies.get(key);
};

// Set authentication token
export const setAuthentication = (token) => {
    setCookie("token", token);
};

// Log out
export const logOut = () => {
    removeCookie("token");
};

// Check if user is logged in
export const isLogin = async () => {
    const token = getCookie("token");

    if (token) {
        try {
            const res = await axios.post(`${baseURL}/auth`, { token });
            return res.data; // Assuming the response indicates validity
        } catch (error) {
            console.error("Token validation failed:", error);
            return false;
        }
    }
    return false;
};