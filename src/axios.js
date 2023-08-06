// axios.js

import axios from 'axios';

// Set a base URL for your API requests
// axios.defaults.baseURL = 'https://api.example.com';

// Set default headers, if needed
axios.defaults.headers.common['Authorization'] = 'Bearer your-token';

export default axios;
