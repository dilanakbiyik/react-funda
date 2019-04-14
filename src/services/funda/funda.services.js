const axios = require('axios');

const API = {
    CLIENT_ID: 'ac1b0b1572524640a0ecc54de453ea9f',
    URL: 'http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail',
    PROXY: 'http://localhost:8080'
};

function parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.data;
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export function getKoop(id) {
    return axios.get(`${API.PROXY}/${API.URL}/${API.CLIENT_ID}/koop/${id}`, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then(checkStatus)
        .then(parseJSON);
}
