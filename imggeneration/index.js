import https from 'https'; // or 'https' for https:// URLs
import fs from 'fs';
import prompts from './prompts.js';

// const prompts 
// const sizes = [[512,512],[768,1024],[1024,768]]
// const styles = ['111dc692-d470-4eec-b791-3475abac4c46', "Volvo", "BMW"]
//const models = [6b645e3a-d64f-4341-a6d8-7a3690fbf042', ]
import 'dotenv/config';
//import starryai from '@api/starryai';

const sAPIKey = process.env.starryAPIkey ;
function starryGenerate() {
  const url = 'https://api.starryai.com/creations/';
  const options = {
    method: 'POST',
    headers: {accept: 'application/json', 'content-type': 'application/json', 'X-API-Key': 'YPZIivmd80BVAPI92loa4-5Ro2iZhg'},
    body: JSON.stringify({
      prompt: 'string',
      negativePrompt: 'string',
      model: 'lyra',
      aspectRatio: 'square',
      highResolution: false,
      images: 4,
      seed: 0,
      steps: 20,
      initialImageUrl: 'string',
      initialImageEncoded: 'string',
      initialImageMode: 'color',
      initialImageStrength: 0
    })
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));

}

//starryGenerate()

const lAPIKey = process.env.leonardoAPIkey; // Replace with your actual API key.
function leonardoGenerate() {
  const url = 'https://cloud.leonardo.ai/api/rest/v1/generations';
  // for (let j = 0; j < 125; j++){
  //   for (let i = 0; i < 5; i++) {
      // setInterval(() => {
      //   console.log('delay')
      // }, 5000);
      const requestData = {
        modelId: '1dd50843-d653-4516-a8e3-f0238ee453ff',
        contrast: 3.5,
        prompt: prompts.NatureandAnimals[8] + ", Oil Painting",
        negative_prompt: 'photorealistic',
        num_images: 2,
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
          'Authorization': `Bearer ${lAPIKey}`,
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
          console.log(data.sdGenerationJob.generationId)
          setTimeout(() => {
              console.log('delay')
              getimg(data.sdGenerationJob.generationId)
            }, 5000);
          
          //genData = data.sdGenerationJob.generationId
        })
        .catch(error => {
          console.error('Error:', error);
        });
        //getimg(genData)
   // }
  //}
  
  
}

function getimg(genId) {
  const writeInterface = fs.createWriteStream(`genIds.txt`, {
    flags: "a", // Append mode
  });
  
   writeInterface.write(`${genId}\n`);
  
  // Indicate the end of the writeStream with the end method
  writeInterface.end();

  const url = `https://cloud.leonardo.ai/api/rest/v1/generations/${genId}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Bearer df44bb60-7a7f-4111-bd1f-de3ce318d19e'
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => {console.log('response:',json)
                  downloadImg(json.generations_by_pk.generated_images)
                  console.log('id array:',json.generations_by_pk.generated_images)})
    .catch(err => console.error(err));
    }

function downloadImg(imgs){
  for(let i = 0; i < imgs.length; i++){
    let imgURL = imgs[i].url
    const file = fs.createWriteStream(`./output/${imgs[i].id}.jpg`);
    const request = https.get(imgURL, function(response) {
    response.pipe(file);

   // after download completed close filestream
    file.on("finish", () => {
        file.close();
        console.log("Download Completed");
    });
});
  }


}
leonardoGenerate()
// getimg('cbd04722-f71b-46d3-bb71-5be3dc595420')
//console.log(genData.generations_by_pk)
 