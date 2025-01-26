import https from 'https'; // or 'https' for https:// URLs
import fs from 'fs';
//import prompts from './prompts.js';
//import varyingPrompts from './varyingprompts.js';
import 'dotenv/config';

const sizes = [[512,512],[768,1024],[512,512],[768,1024],[1024,768]]
function randomSetting(setting){
    const randomIndex = Math.floor(Math.random() * setting.length);
    const randomItem = setting[randomIndex];
    //console.log(randomItem);
    return randomItem
  }


const colors = ['red', 'blue', 'green', 'yellow', 'sunset', 'neon', 'orange', 'pastel', 'black'];
const colorsNoRed = ['blue', 'green', 'yellow', 'sunset', 'neon', 'orange', 'pastel', 'black'];
const animals = ['wolf', 'bear', 'lion', 'fox', 'tiger', 'elephant'];
const celestialBodies = ['moon', 'star', 'planet', 'comet'];
const aiImageStyles = ["Expressionist","Pencil Sketch",  "Caspar David Friedrich Style",
  "Alphonse Mucha Style",  "Albrecht Dürer Style",  "Hokusai Style",  "Fauvism",  "Film Noir",  "Cinematic Lighting",
  "Digital Art",  "Comic Book Style",  "Oil Painting",  "Watercolor",  "Unreal Engine 5",  "Octane Render"
];
const presetStyles = ['ANIME', 'CREATIVE', 'DYNAMIC', 'ENVIRONMENT', 'GENERAL', 'ILLUSTRATION', 'PHOTOGRAPHY', 'RAYTRACED', 'RENDER_3D', 'SKETCH_BW', 'SKETCH_COLOR',]


const prompts = {
  NatureandAnimals: [
    "A majestic {animal} howling at a glowing, {color} crescent moon in a starry sky, surrounded by aurora borealis effects, high contrast and detailed, {aiImageStyles}.",
    "A vibrant tropical jungle scene with colorful parrots, lush greenery, and cascading waterfalls, designed in a bold, illustrative style, {aiImageStyles}.",
    "An artistic mandala made from intricate floral and leaf patterns in a gradient of warm {color} colors, {aiImageStyles}.",
    "A serene mountain landscape at sunrise, with golden light reflecting off a still lake and a flock of birds flying overhead, painted in a dreamy and vivid style, {aiImageStyles}.",
    "A close-up of a vibrant {color} butterfly resting on a blooming flower, with intricate wing details and a blurred natural background, {aiImageStyles}.",
    "A powerful {animal} standing on a rocky ledge, illuminated by golden sunlight with a savanna landscape in the background, {aiImageStyles}.",
    "A playful pair of dolphins leaping from the ocean at sunset, surrounded by splashes of water and glowing warm hues, {aiImageStyles}.",
    "A dense pine forest covered in snow, with rays of sunlight breaking through the trees and sparkling on the frost-covered branches, {aiImageStyles}.",
    "A colorful hummingbird in mid-flight, sipping nectar from a bright {color} flower, with a soft blurred bokeh background, {aiImageStyles}.",
    "A tranquil koi pond with {color} and white fish swimming among lily pads and water ripples, painted in a peaceful style, {aiImageStyles}."
  ],
  AbstractandGeometric: [
    "An abstract geometric design with interlocking shapes and lines, vibrant {colorsNoRed} colors on a black background, futuristic and symmetrical, {aiImageStyles}.",
    "A mesmerizing spiral galaxy with glowing fractal patterns, rendered in high detail and vivid hues of {color}, {color}, and gold, {aiImageStyles}.",
    "A minimalist line art design featuring concentric circles and triangles in bold black, white, and {color} tones, {aiImageStyles}.",
    "A colorful abstract swirl of liquid paint blending bold hues of blue, {color}, {color}, and {color}, with a glossy, marbled effect, {aiImageStyles}.",
    "A dynamic design of overlapping 3D cubes and spheres, shaded with gradients of metallic silver, gold, and bronze, on a dark background, {aiImageStyles}.",
    "An optical illusion of twisting and shifting {color} and white stripes, creating a mesmerizing 3D effect, {aiImageStyles}.",
    "A gradient-filled spiral pattern with vibrant colors blending smoothly from {color} to orange, glowing on a dark backdrop, {aiImageStyles}.",
    "An explosion of colorful paint splatters in bold, dynamic strokes, creating a chaotic yet balanced design, {aiImageStyles}.",
    "A hexagonal grid with glowing, pulsating {color} lights and metallic textures, futuristic and sleek, {aiImageStyles}.",
    "A series of interlocking triangles forming a geometric mandala, with gradients of {color} colors fading into each other, {aiImageStyles}."
  ],
  PopCultureandFun: [
    "A retro-style cassette tape with neon colors, vaporwave aesthetics, and a glowing grid background, inspired by 1980s design.",
    "A humorous cartoon-style alien holding a surfboard, standing on a beach under a double sunset, playful and colorful.",
    "A pixel-art style gaming controller surrounded by glowing 8-bit hearts, coins, and stars, perfect for gamers.",
    "A playful cartoon-style UFO beaming up a cow from a field, with bright colors and a humorous comic vibe.",
    "A vintage arcade cabinet surrounded by glowing coins and pixel-art explosions, rendered in a nostalgic 1980s neon aesthetic.",
    "A cartoon superhero with a glowing cape and a city skyline in the background, bursting through a comic-style explosion.",
    "A smiling anthropomorphic pizza slice holding a skateboard, rendered in a bold, graffiti-inspired style.",
    "A group of quirky cartoon-style robots dancing under a disco ball with colorful beams of light.",
    "A funny scene of a dinosaur wearing sunglasses and holding a boombox, drawn in a retro 90s vibe.",
    "A stylized boom box with vibrant graffiti-style accents and musical notes emanating in a wave of color."
  ],
  FantasyandMythology: [
    "A dragon wrapped around a glowing crystal orb, surrounded by flames and sparks, rendered in intricate detail with a mystical aura.",
    "A mystical phoenix rising from glowing embers, its feathers transitioning through fiery shades of red, orange, and gold.",
    "A magical forest scene with a glowing fairy hovering over a sparkling stream, ethereal and enchanting.",
    "A powerful unicorn galloping through a glowing starry field, its mane flowing with rainbow colors and sparkles trailing behind it.",
    "A mystical mermaid sitting on a rock under a full moon, surrounded by glowing jellyfish in an underwater fantasy setting.",
    "A glowing enchanted sword embedded in a stone, with mystical runes and a magical aura surrounding it.",
    "A castle floating in the clouds, connected by glowing rainbow bridges, with a whimsical and dreamy aesthetic.",
    "A group of dwarves forging magical weapons in a fiery forge, surrounded by glowing sparks and mystical energy.",
    "A cosmic centaur galloping through a galaxy, with a mane of stars and constellations glowing on its body.",
    "A wizard casting a powerful spell, with swirling magical energy forming glowing patterns in the air."
  ],
  TypographyandQuotes: [
    "Bold graffiti-style text spelling out 'Dream Big' with splashes of bright paint and a spray can in the corner, vibrant and dynamic.",
    "A retro-inspired text design that says 'Stay Wild' with a vintage sunburst pattern and palm tree silhouettes in the background.",
    "Hand-drawn cursive text 'Adventure Awaits' surrounded by whimsical doodles of mountains, trees, and a compass.",
    "Bold retro-style text that says 'Chase the Horizon' with an orange and pink sunset gradient and silhouetted mountains in the background.",
    "A grunge-style typographic design reading 'Rise Above' with distressed textures and fiery accents in red, black, and white.",
    "Minimalist typography reading 'Carpe Diem' with clean, elegant lines and a small sunrise icon above the text.",
    "A playful, bubbly font spelling out 'Stay Groovy' with tie-dye swirls and peace sign accents.",
    "Hand-drawn text 'Live Laugh Love' with flowing floral vines interwoven between the letters.",
    "Blocky, futuristic text saying 'Level Up' with glowing neon effects and a digital glitch aesthetic.",
    "Bold, angular typography spelling out 'Fearless' with a shattered glass texture and dynamic motion lines."
  ],
  SciFiandTech: [
    "A futuristic cityscape with glowing skyscrapers, flying cars, and holographic billboards, viewed from above, cyberpunk style.",
    "A sleek robotic hand holding a glowing neon orb, surrounded by digital code effects, highly detailed and futuristic.",
    "A space exploration scene with astronauts floating near a massive glowing planet, accented by shooting stars and nebula clouds.",
    "A sleek futuristic helmet with glowing neon circuits and holographic displays, surrounded by a digital grid of data streams.",
    "A robotic eagle with chrome feathers soaring through a stormy sky, with glowing red eyes and mechanical details.",
    "A glowing neon tunnel with a perspective leading into infinity, futuristic and immersive.",
    "A battle-ready mech robot with glowing blue armor and energy weapons, set in a futuristic battlefield.",
    "A floating holographic Earth with digital data streams surrounding it, representing futuristic global technology.",
    "A cyberpunk-style motorcycle with glowing neon trails zooming through a rainy, futuristic city street.",
    "A spacecraft in deep space, surrounded by glowing nebula clouds and distant stars, sleek and detailed."
  ],
  SeasonalandFestive: [
    "A playful Halloween-themed design with a grinning pumpkin, bats, and a glowing moon in an eerie yet colorful cartoon style.",
    "A winter wonderland scene with a snowman, pine trees, and snowflakes falling gently, drawn in a cheerful and cozy illustration style.",
    "A cheerful Thanksgiving feast scene with a cartoon turkey, colorful autumn leaves, and a cornucopia of fruits and vegetables.",
    "A spooky haunted house on a hill, surrounded by bats, glowing jack-o'-lanterns, and a full moon with eerie clouds.",
    "A vibrant Easter design with colorful painted eggs, blooming flowers, and a cheerful bunny hopping through the grass.",
    "A festive Christmas scene with a glowing fireplace, stockings hanging, and a beautifully decorated tree.",
    "A New Year's celebration with fireworks exploding in the sky, champagne glasses clinking, and a glowing '2025' text.",
    "A Valentine's Day heart-shaped wreath made of roses and fairy lights, with 'Love' written in cursive inside.",
    "A cheerful springtime design featuring blooming cherry blossoms and butterflies fluttering under a bright blue sky.",
    "A spooky ghost emerging from a glowing cauldron, surrounded by swirling green mist and floating candles."
  ],
  ArtisticandCreative: [
    "A surreal melting clock inspired by Salvador Dalí's style, with colorful drips blending into a vibrant background.",
    "A watercolor-style galaxy blending deep blues, purples, and pinks, with splashes of white stars scattered across the design.",
    "A monochromatic ink illustration of a roaring lion's face, with intricate tribal patterns filling the mane.",
    "A colorful, abstract watercolor splash of a wolf howling at the moon, blending vibrant tones of blue, purple, and orange.",
    "A line art portrait of a woman’s face filled with intricate floral patterns, creating a stunning fusion of art and nature.",
    "A graffiti-style explosion of bold colors with swirling lines and abstract shapes, chaotic yet beautiful.",
    "A stained glass-inspired design of a blooming flower, with vivid, glowing colors and intricate details.",
    "A surreal painting of an eye with galaxies and nebulae swirling inside the iris, ethereal and captivating.",
    "A series of brushstrokes forming a vivid, impressionistic landscape of a serene countryside at sunset.",
    "An intricate pen-and-ink illustration of a tree with its roots forming a mandala, detailed and meditative."
  ],
  SportsandHobbies: [
    "A silhouette of a surfer riding a massive wave at sunset, with vivid gradients of orange, pink, and purple in the sky.",
    "A skateboard deck with a bold flame design, surrounded by graffiti-style splashes and street art elements.",
    "A soccer ball breaking through a goal net, with dynamic motion lines and vibrant colors.",
    "A basketball mid-dunk with dynamic motion lines and a bold orange and black color scheme, emphasizing energy and movement.",
    "A cyclist racing downhill through a forest trail, with dramatic perspective lines and motion effects capturing speed and adrenaline.",
    "A baseball bat connecting with a ball mid-swing, with motion trails and stadium lights in the background.",
    "A sleek racing car speeding down a track, surrounded by glowing motion trails and vibrant colors.",
    "A fishing rod bending under the weight of a catch, with a sparkling river and mountains in the background.",
    "A golfer mid-swing on a lush green course, with a clear blue sky and rolling hills in the distance.",
    "A martial artist performing a high kick, with dynamic motion effects and a bold red and black color palette."
  ]
}

function getRandomPrompt(category, index) {
  const prompt = prompts[category][index];
  return prompt
    .replace(/{color}/g, colors[Math.floor(Math.random() * colors.length)])
    .replace(/{colorsNoRed}/g, colors[Math.floor(Math.random() * colorsNoRed.length)])
    .replace(/{animal}/g, animals[Math.floor(Math.random() * animals.length)])
    .replace(/{celestialBody}/g, celestialBodies[Math.floor(Math.random() * celestialBodies.length)])
    .replace(/{aiImageStyles}/g, aiImageStyles[Math.floor(Math.random() * aiImageStyles.length)]);
}


//starryGenerate()

const lAPIKey = process.env.leonardoAPIkey; // Replace with your actual API key.
function leonardoGenerate() {
  const url = 'https://cloud.leonardo.ai/api/rest/v1/generations';
  for (let j = 0; j < 1; j++){
  //   for (let i = 0; i < 5; i++) {
      // setInterval(() => {
      //   console.log('delay')
      // }, 5000);
      const requestData = {
        modelId: '1dd50843-d653-4516-a8e3-f0238ee453ff',
        contrast: 3.5,
        prompt: getRandomPrompt('AbstractandGeometric', Math.floor(Math.random() * 6)),
        negative_prompt: 'photorealistic, 3d',
        num_images: 8,
        width: randomSetting(sizes)[0],
        height: randomSetting(sizes)[1],
        //alchemy: true,
        presetStyle: randomSetting(presetStyles),
        styleUUID: '111dc692-d470-4eec-b791-3475abac4c46',
        enhancePrompt: false,
        tiling: true
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
            }, 4000);
          
          //genData = data.sdGenerationJob.generationId
        })
        .catch(error => {
          console.error('Error:', error);
        });
        //getimg(genData)
   // }
  }
  
  
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
    const file = fs.createWriteStream(`./output/${imgs[i].id}.png`);
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
//console.log(getRandomPrompt('AbstractandGeometric', Math.floor(Math.random() * 10)))
 