import axios from "axios";
import {PREFIX} from "../components/Connection";

export const Upload = async (file, folderId, callback) =>
{

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user_id');
    const URL = `${PREFIX}/upload/files?uid=${userId}&fid=${folderId}`;
    const formData = new FormData();

    formData.append('formFile', file);

    return new Promise(async (resolve, reject) =>
    {
        try
        {
            const response = await axios.post(URL, formData, {
                headers: {Authorization: `Bearer ${token}`},

                onUploadProgress: (progressEvent) =>
                {
                    const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);

                    let returnVal = {
                        fileName: file.name,
                        progress: progress
                    }
                    callback(returnVal);
                },
            });

            resolve(response.data.data);

        } catch (error)
        {
            reject(error);
        }
    });
}
export const UploadFilesCallback = async (folderId, selectedFiles, callback) =>
{
    try
    {
        console.log("selected files: ", selectedFiles)
        return await Promise.all(selectedFiles.map((file) => Upload(file, folderId, callback)));
    } catch (error)
    {
        console.log(error);
    }
}
export const CreateFolder = async (folderId, folderName) =>
{
    try
    {
        const CREATE_FOLDER_URL = `${PREFIX}/folder/create`

        const createNewFolderDTO = {
            new_folder_name: folderName,
            current_folder_id: folderId,
            user_id: localStorage.getItem('user_id')
        }


        try
        {
            const response = await axios.post(CREATE_FOLDER_URL, createNewFolderDTO, {headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}});
            console.log(response.data.data)
            return response.data.data;
        } catch (error)
        {
            console.error('Error uploading files:', error);
        }
    } catch (error)
    {

    }
}
export const UploadFolders = async (folderId, selectedFiles) =>
{
    try
    {
        const folderName = selectedFiles[0].webkitRelativePath.split('/')[0]
        // const newFolderId = await CreateFolder(folderId, folderName)
        //console.log("NF: ", newFolderId)
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
    } catch (error)
    {

    }
}
