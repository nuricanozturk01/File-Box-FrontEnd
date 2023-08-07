import axios from "axios";

const CHANGE_PASSWORD_REQUEST_URL = "http://localhost:5299/api/change/password?email=%s";
const CHANGE_PASSWORD_URL = "http://localhost:5299/api/change/reset-password?token=%s&&p=%s"
const FIND_USER_BY_RESET_PASSWORD_TOKEN = "http://localhost:5299/api/auth/find/user/token?token=%s"

const ValidatePassword = async (email) => {
    console.log(email)
    const sprintf = require("sprintf-js").vsprintf;
    const formattedUrl = sprintf(CHANGE_PASSWORD_REQUEST_URL, email);
    console.log(formattedUrl);

    try {
        const response = await axios.post(formattedUrl);
        const responseData = response.data.data
        return {
            username: responseData.username,
            user_email: responseData.user_email,
            user_token: responseData.user_token,
            success: true
        };

    } catch (error) {
        return {
            error,
            success: false
        }
    }


}

export const ChangePassword = async (newPassword, token) => {
    try {
        const sprintf = require("sprintf-js").vsprintf;
        const formattedUrl = sprintf(CHANGE_PASSWORD_URL, token, newPassword);
        await axios.post(formattedUrl);
        return true;
    } catch (error) {
        return false;
    }
}


export const ValidateToken = async (token) => {
    try {
        const sprintf = require("sprintf-js").vsprintf;
        const formattedUrl = sprintf(FIND_USER_BY_RESET_PASSWORD_TOKEN, token);
        const response = await axios.get(formattedUrl);
        const responseData = response.data.data

        return responseData.token === token;
    } catch (error) {
        return error.response.data.success
    }

}
export default ValidatePassword;
