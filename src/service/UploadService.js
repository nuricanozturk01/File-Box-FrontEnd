import axios from "axios";
export const UploadFiles = async (folderId, selectedFiles) => {
    try {

        const userId = localStorage.getItem('user_id')
        const URL = `http://localhost:5299/api/upload/files?uid=${userId}&fid=${folderId}`;
        const formData = new FormData();

        for (let i = 0; i < selectedFiles.length; i++)
            formData.append('formFile', selectedFiles[i]);


        try {
            const response = await axios.post(URL, formData, {headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}});
            console.log(response.data.data)
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    }
    catch (error){

    }
}
export const CreateFolder = async (folderId, folderName) => {
    try {
        const CREATE_FOLDER_URL = "http://localhost:5299/api/folder/create"

        const createNewFolderDTO = {
            new_folder_name: folderName,
            current_folder_id : folderId,
            user_id : localStorage.getItem('user_id')
        }
        try {
            const response = await axios.post(CREATE_FOLDER_URL, createNewFolderDTO, {headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}});
            return response.data.data.folderId;
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    }
    catch (error){

    }
}
export const UploadFolders = async (folderId, selectedFiles) => {
    try {
        const folderName = selectedFiles[0].webkitRelativePath.split('/')[0]
        const newFolderId = await CreateFolder(folderId, folderName)
        console.log("NF: ", newFolderId)
       // await UploadFiles(newFolderId, selectedFiles);
/*        const uploadDirectoryDto = {
            source_file_name : "D:\\cv"
        }
        try {
            const response = await axios.post(URL, uploadDirectoryDto, {headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}});
            console.log(response.data.data)
        } catch (error) {
            console.error('Error uploading files:', error);
        }*/
    }
    catch (error){

    }
}
