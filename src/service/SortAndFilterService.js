import axios from "axios";
import {PREFIX} from "../components/Connection";

export const SortFilesByFileSize = (folderId) => {

    try {
        const user_id = localStorage.getItem('user_id')
        const token = localStorage.getItem('token')

        const URL = `${PREFIX}/file/sort/byte?fid=${folderId}&&uid=${user_id}`

        const response = axios.get(URL, {headers: {"Authorization": `Bearer ${token}`}})

        return response.data.data
    } catch (error) {
        console.log(error)
    }
}
