import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://www.gamerpower.com/api/',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }
);

export { CanceledError } from 'axios';
