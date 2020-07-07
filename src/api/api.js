import axios from 'axios';
import axiosRetry from 'axios-retry';


axiosRetry(axios, { retries: 3 });

export const getTickets = async () => {
    const searchId = await axios.get('https://front-test.beta.aviasales.ru/search');   
    const response = await axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=' + searchId.data.searchId);     

    return response.data.tickets;   
        
}

