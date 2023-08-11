import axios from "axios";

export const RemoveFileWithFileId = async (fileId) => {

    try {
        const user_id = localStorage.getItem('user_id')
        const token = localStorage.getItem('token')
        const URL = `http://localhost:5299/api/file/remove?id=${fileId}&&uid=${user_id}`;
        const response = await axios.delete(URL, {headers: {"Authorization": `Bearer ${token}`}})
        return response.data.data
    }
    catch (error){

    }
}


export const RemoveFolderWithFolderId = async (folderId) => {
    try {
        const user_id = localStorage.getItem('user_id');
        const token = localStorage.getItem('token');
        const URL = `http://localhost:5299/api/folder/remove/dir?id=${folderId}&uid=${user_id}`;
        const response = await axios.delete(URL, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data.data;
    } catch (error) {
        console.error("An error occurred:", error);
        throw error; // You might want to re-throw the error to propagate it further
    }
};
