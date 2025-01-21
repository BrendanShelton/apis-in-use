// const fetch = require('node-fetch'); // Required for Node.js environments. Skip this line if running in a browser.
import fetch from 'node-fetch';
//import leonardoai from '@api/leonardoai';
import prompts from './prompts.js';
//console.log(prompts.NatureandAnimals[4])
// const prompts 
// const sizes = [[512,512],[768,1024],[]]
// const styles = ['111dc692-d470-4eec-b791-3475abac4c46', "Volvo", "BMW"]
//const models = [6b645e3a-d64f-4341-a6d8-7a3690fbf042', ]
import 'dotenv/config';


console.log(process.env.starryAPIkey)


function leonardoGenerate() {
  const url = 'https://cloud.leonardo.ai/api/rest/v1/generations';
  const apiKey = process.env.leonardoAPIkey; // Replace with your actual API key.
  //let reqErr = false

  for (let j = 0; j < 400; j++){
    for (let i = 0; i < 5; i++) {
      // setInterval(() => {
      //   console.log('delay')
      // }, 5000);
      const requestData = {
        modelId: '1dd50843-d653-4516-a8e3-f0238ee453ff',
        contrast: 3.5,
        prompt: prompts.NatureandAnimals[i],
        num_images: 8,
        width: 512,
        height: 512,
        //alchemy: true,
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
            //reqErr = true;
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
  }
  
  
}

function getimg(genId) {

    // leonardoai.getGenerationById({id: genId})
    //     .then(({ data }) => console.log(data))
    //     .catch(err => console.error(err));
    const url = `https://cloud.leonardo.ai/api/rest/v1/generations/1ab89fba-010f-46fb-a619-db434c579395`;

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

    // console.log(    getimg('1ab89fba-010f-46fb-a619-db434c579395'))
 