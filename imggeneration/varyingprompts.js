const colors = ['red', 'blue', 'green']

function varyWords(words){
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = words[randomIndex];
  console.log(randomItem);
  return randomItem
}

const varyingPrompts = {
  NatureandAnimals: [
    () => {`A majestic wolf howling at a glowing, ${varyWords(['red', 'blue', 'green'])} crescent moon in a starry sky, surrounded by aurora borealis effects, high contrast and detailed.`},
    "A vibrant tropical jungle scene with colorful parrots, lush greenery, and cascading waterfalls, designed in a bold, illustrative style.",
    "An artistic mandala made from intricate floral and leaf patterns in a gradient of warm sunset colors.",
    "A serene mountain landscape at sunrise, with golden light reflecting off a still lake and a flock of birds flying overhead, painted in a dreamy and vivid style.",
    "A close-up of a vibrant monarch butterfly resting on a blooming flower, with intricate wing details and a blurred natural background."
  ],
  AbstractandGeometric: [
    "An abstract geometric design with interlocking shapes and lines, vibrant neon colors on a black background, futuristic and symmetrical.",
    "A mesmerizing spiral galaxy with glowing fractal patterns, rendered in high detail and vivid hues of purple, blue, and gold.",
    "A minimalist line art design featuring concentric circles and triangles in bold black, white, and red tones.",
    "A colorful abstract swirl of liquid paint blending bold hues of blue, pink, yellow, and green, with a glossy, marbled effect.",
    "A dynamic design of overlapping 3D cubes and spheres, shaded with gradients of metallic silver, gold, and bronze, on a dark background."
  ],
  PopCultureandFun: [
    "A retro-style cassette tape with neon colors, vaporwave aesthetics, and a glowing grid background, inspired by 1980s design.",
    "A humorous cartoon-style alien holding a surfboard, standing on a beach under a double sunset, playful and colorful.",
    "A pixel-art style gaming controller surrounded by glowing 8-bit hearts, coins, and stars, perfect for gamers.",
    "A playful cartoon-style UFO beaming up a cow from a field, with bright colors and a humorous comic vibe.",
    "A vintage arcade cabinet surrounded by glowing coins and pixel-art explosions, rendered in a nostalgic 1980s neon aesthetic."
  ],
  FantasyandMythology: [
    "A dragon wrapped around a glowing crystal orb, surrounded by flames and sparks, rendered in intricate detail with a mystical aura.",
    "A mystical phoenix rising from glowing embers, its feathers transitioning through fiery shades of red, orange, and gold.",
    "A magical forest scene with a glowing fairy hovering over a sparkling stream, ethereal and enchanting.",
    "A powerful unicorn galloping through a glowing starry field, its mane flowing with rainbow colors and sparkles trailing behind it.",
    "A mystical mermaid sitting on a rock under a full moon, surrounded by glowing jellyfish in an underwater fantasy setting."
  ],
  TypographyandQuotes: [
    "Bold graffiti-style text spelling out 'Dream Big' with splashes of bright paint and a spray can in the corner, vibrant and dynamic.",
    "A retro-inspired text design that says 'Stay Wild' with a vintage sunburst pattern and palm tree silhouettes in the background.",
    "Hand-drawn cursive text 'Adventure Awaits' surrounded by whimsical doodles of mountains, trees, and a compass.",
    "Bold retro-style text that says 'Chase the Horizon' with an orange and pink sunset gradient and silhouetted mountains in the background.",
    "A grunge-style typographic design reading 'Rise Above' with distressed textures and fiery accents in red, black, and white."
  ],
  SciFiandTech: [
    "A futuristic cityscape with glowing skyscrapers, flying cars, and holographic billboards, viewed from above, cyberpunk style.",
    "A sleek robotic hand holding a glowing neon orb, surrounded by digital code effects, highly detailed and futuristic.",
    "A space exploration scene with astronauts floating near a massive glowing planet, accented by shooting stars and nebula clouds.",
    "A sleek futuristic helmet with glowing neon circuits and holographic displays, surrounded by a digital grid of data streams.",
    "A robotic eagle with chrome feathers soaring through a stormy sky, with glowing red eyes and mechanical details."
  ],
  SeasonalandFestive: [
    "A playful Halloween-themed design with a grinning pumpkin, bats, and a glowing moon in an eerie yet colorful cartoon style.",
    "A winter wonderland scene with a snowman, pine trees, and snowflakes falling gently, drawn in a cheerful and cozy illustration style.",
    "A cheerful Thanksgiving feast scene with a cartoon turkey, colorful autumn leaves, and a cornucopia of fruits and vegetables.",
    "A spooky haunted house on a hill, surrounded by bats, glowing jack-o'-lanterns, and a full moon with eerie clouds."
  ],
  ArtisticandCreative: [
    "A surreal melting clock inspired by Salvador Dalí's style, with colorful drips blending into a vibrant background.",
    "A watercolor-style galaxy blending deep blues, purples, and pinks, with splashes of white stars scattered across the design.",
    "A monochromatic ink illustration of a roaring lion's face, with intricate tribal patterns filling the mane.",
    "A colorful, abstract watercolor splash of a wolf howling at the moon, blending vibrant tones of blue, purple, and orange.",
    "A line art portrait of a woman’s face filled with intricate floral patterns, creating a stunning fusion of art and nature."
  ],
  SportsandHobbies: [
    "A silhouette of a surfer riding a massive wave at sunset, with vivid gradients of orange, pink, and purple in the sky.",
    "A skateboard deck with a bold flame design, surrounded by graffiti-style splashes and street art elements.",
    "A soccer ball breaking through a goal net, with dynamic motion lines and vibrant colors.",
    "A basketball mid-dunk with dynamic motion lines and a bold orange and black color scheme, emphasizing energy and movement.",
    "A cyclist racing downhill through a forest trail, with dramatic perspective lines and motion effects capturing speed and adrenaline."
  ]
}
// console.log(varyingPrompts.NatureandAnimals[0])
// console.log(varyingPrompts.NatureandAnimals[0])
// console.log(varyingPrompts.NatureandAnimals[0])
// console.log(varyingPrompts.NatureandAnimals[1])

// import https from 'https'; // or 'https' for https:// URLs
// import fs from 'fs';

// const file = fs.createWriteStream("file.jpg");
// const request = https.get("https://cdn.leonardo.ai/users/45cf8331-059f-4414-8479-35758543fa10/generations/aded75ff-6f02-4387-89f3-5233d44bfd2e/Leonardo_Phoenix_09_An_artistic_mandala_made_from_intricate_fl_0.jpg", function(response) {
//    response.pipe(file);

//    // after download completed close filestream
//    file.on("finish", () => {
//        file.close();
//        console.log("Download Completed");
//    });
// });
export default varyingPrompts
