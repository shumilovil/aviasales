import axios from 'axios';
import axiosRetry from 'axios-retry';


axiosRetry(axios, { retries: 3 });


export const getSearchId = async () => {
    const searchId = await axios.get('https://front-test.beta.aviasales.ru/search');
    return searchId;
}

export const getTicketsPack = async (searchId) => {
    const response = await axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=' + searchId);
    return response;    
}


