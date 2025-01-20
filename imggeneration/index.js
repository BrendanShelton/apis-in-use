// const fetch = require('node-fetch'); // Required for Node.js environments. Skip this line if running in a browser.
import fetch from 'node-fetch';
//import leonardoai from '@api/leonardoai';

// const prompts
// const sizes
// const styles
// const models


function generate() {
  const url = 'https://cloud.leonardo.ai/api/rest/v1/generations';
  const apiKey = 'df44bb60-7a7f-4111-bd1f-de3ce318d19e'; // Replace with your actual API key.

  const requestData = {
    modelId: '6b645e3a-d64f-4341-a6d8-7a3690fbf042',
    contrast: 3.5,
    prompt: 'an orange cat standing on a blue basketball with the text PAWS',
    num_images: 4,
    width: 512,
    height: 512,
    alchemy: true,
    styleUUID: '111dc692-d470-4eec-b791-3475abac4c46',
    enhancePrompt: false
  };

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  };

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Response:', data);
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function getimg(genId) {

    // leonardoai.getGenerationById({id: genId})
    //     .then(({ data }) => console.log(data))
    //     .catch(err => console.error(err));
    const url = `https://cloud.leonardo.ai/api/rest/v1/generations/${genId}`;

    const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer 'df44bb60-7a7f-4111-bd1f-de3ce318d19e'`
    }
    };

    fetch(url, options)
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    }

    console.log(    getimg('1ab89fba-010f-46fb-a619-db434c579395'))