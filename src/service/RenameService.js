import axios from "axios";

export const RenameFileWithFileId = async (fileId, newName) => {
    try {
        const userId = localStorage.getItem('user_id');
        const URL = `http://localhost:5299/api/file/rename?fid=${fileId}&&n=${newName}&&uid=${userId}`
        const token = localStorage.getItem('token')
        try {
            const response = await axios.post(URL, {}, {headers: {"Authorization": `Bearer ${token}`}});
            return response.data.data
        } catch (error) {

        }
    } catch (error) {

    }
}

export const RenameFolderWithFolderId = async (folderId, newName) => {
    try {
        const userId = localStorage.getItem('user_id');
        const URL = `http://localhost:5299/api/folder/rename/dir?id=${folderId}&&n=${newName}&&uid=${userId}`
        try {
            const response = await axios.post(URL, {}, {headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}});
            return response.data.data
        } catch (error) {
        }
    } catch (error) {

    }
}
