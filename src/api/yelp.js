import axios from 'axios';

export default axios.create({
    baseURL:  'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PXRjIYnl0IWXUvXPxJGUacMOChf2nY6t5WCwD88Dg5wNsFKuVCkkkgaQQ0dkpS71-8Si5GhDyxnZ9se1miIZmj9DB9dqVOqRfCkOb3x1B2zXgngi9l9Lc_VW8yITX3Yx'
    }
});