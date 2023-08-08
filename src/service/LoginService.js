import axios from 'axios'


const LOGIN_URL = "http://localhost:5299/api/auth/login/user"

const ValidateUser = async (userInput) => {
    try {

        const UserLoginDto = {
            username: userInput.username,
            password: userInput.password,
        };

        const response = await axios.post(LOGIN_URL, UserLoginDto);
        const responseData = response.data.data

        return {
            username: responseData.username,
            token: responseData.token,
            user_id: responseData.user_id,
            success: true
        };

    } catch (error) {
        return {
            error,
            success: false
        }
    }
}

export default ValidateUser;
