const axios = require('axios');
require('dotenv').config();

const ideogramApi = axios.create({
  baseURL: 'https://api.ideogram.ai',  // Base URL for Ideogram API
  headers: {
    'Content-Type': 'application/json',
    'Api-Key': process.env.IDEOGRAM_API_TOKEN  // Using API token from environment variables
  }
});

module.exports = ideogramApi;
