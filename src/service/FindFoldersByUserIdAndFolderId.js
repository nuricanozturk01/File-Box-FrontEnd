import axios from "axios";

export const FindFilesOnFolder = async (folderId) => {

    try {
        const userId = localStorage.getItem("user_id");
        const token = localStorage.getItem('token');

        const findFilesOnFolderUrl = `http://localhost:5299/api/file/find/all/folder?fid=${folderId}&&uid=${userId}`
        const response = await axios.get(findFilesOnFolderUrl, {headers: {"Authorization": `Bearer ${token}`}});
        return response.data.data.files
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
export const FindFoldersByUserIdAndFolderId = async (folderId) => {
    try {
        const user_id = localStorage.getItem('user_id');
        const token = localStorage.getItem('token');
        const URL = `http://localhost:5299/api/folder/find/all/folder?fid=${folderId}&&id=${user_id}`;
        const response = await axios.get(URL, {headers: {"Authorization": `Bearer ${token}`}});
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const FindRootFolderByUserId = async () => {
    try {
        const user_id = localStorage.getItem('user_id');
        const URL = `http://localhost:5299/api/folder/find/root/uuid?uid=${user_id}`;
        const response = await axios.get(URL);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
