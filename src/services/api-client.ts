import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://www.freetogame.com/api/',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }
);

export { CanceledError } from 'axios';
