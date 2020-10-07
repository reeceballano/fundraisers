import axios from 'axios';

export const useApi = () => {
    let loadStatus = true;

    const getData = async (url) => {
        try {
            const fetch = await axios.get(`${url}`);
            await setLoadStatus(false);
            return fetch;
        } catch(error) {
            console.log('error')
            return error;
        }
    }

    const setLoadStatus = (status) => {
        return loadStatus = status;
    }

    const getLoadStatus = () => {
        return loadStatus;
    }

    return {
        loadStatus,
        getLoadStatus,
        getData
    }
}