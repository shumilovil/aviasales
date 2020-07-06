import axios from 'axios';
import axiosRetry from 'axios-retry';


axiosRetry(axios, { retries: 3 });

export const getTickets = () => {
    return axios.get('https://front-test.beta.aviasales.ru/search')
        .then(response => {
            axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=' + response.data.searchId)
                .then(response => { console.log(response.data);
                 })
        })
}

