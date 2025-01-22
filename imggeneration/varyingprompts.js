const colors = ['red', 'blue', 'green', 'neon']

function varyWords(words){
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomItem = words[randomIndex];
  console.log(randomItem);
  return randomItem
}

const varyingPrompts = {
  NatureandAnimals: function (index) {
    switch(index) {
      case 0:
        return `A majestic wolf howling at a glowing, ${varyWords(colors)} crescent moon in a starry sky, surrounded by aurora borealis effects, high contrast and detailed.`
      case 1:
        return "A vibrant tropical jungle scene with colorful parrots, lush greenery, and cascading waterfalls, designed in a bold, illustrative style."
      case 2:
        return "An artistic mandala made from intricate floral and leaf patterns in a gradient of warm sunset colors."
      case 3:
        return "A serene mountain landscape at sunrise, with golden light reflecting off a still lake and a flock of birds flying overhead, painted in a dreamy and vivid style."
      case 4: 
        return "A close-up of a vibrant monarch butterfly resting on a blooming flower, with intricate wing details and a blurred natural background."
      case 5:
        return "A powerful lion standing on a rocky ledge, illuminated by golden sunlight with a savanna landscape in the background."
      case 6: 
        return "A playful pair of dolphins leaping from the ocean at sunset, surrounded by splashes of water and glowing warm hues."
      case 7:
        return "A dense pine forest covered in snow, with rays of sunlight breaking through the trees and sparkling on the frost-covered branches."
      case 8:
        return "A colorful hummingbird in mid-flight, sipping nectar from a bright red flower, with a soft blurred bokeh background."
      case 9:
        return "A tranquil koi pond with orange and white fish swimming among lily pads and water ripples, painted in a peaceful style."
      default:
        return "no prompt selected"
    }

  }
  
  
  // [
  //   "A majestic wolf howling at a glowing, neon crescent moon in a starry sky, surrounded by aurora borealis effects, high contrast and detailed.",
  //   "A vibrant tropical jungle scene with colorful parrots, lush greenery, and cascading waterfalls, designed in a bold, illustrative style.",
  //   "An artistic mandala made from intricate floral and leaf patterns in a gradient of warm sunset colors.",
  //   "A serene mountain landscape at sunrise, with golden light reflecting off a still lake and a flock of birds flying overhead, painted in a dreamy and vivid style.",
  //   "A close-up of a vibrant monarch butterfly resting on a blooming flower, with intricate wing details and a blurred natural background.",
  //   "A powerful lion standing on a rocky ledge, illuminated by golden sunlight with a savanna landscape in the background.",
  //   "A playful pair of dolphins leaping from the ocean at sunset, surrounded by splashes of water and glowing warm hues.",
  //   "A dense pine forest covered in snow, with rays of sunlight breaking through the trees and sparkling on the frost-covered branches.",
  //   "A colorful hummingbird in mid-flight, sipping nectar from a bright red flower, with a soft blurred bokeh background.",
  //   "A tranquil koi pond with orange and white fish swimming among lily pads and water ripples, painted in a peaceful style."
  // ],
  // AbstractandGeometric: [
  //   "An abstract geometric design with interlocking shapes and lines, vibrant neon colors on a black background, futuristic and symmetrical.",
  //   "A mesmerizing spiral galaxy with glowing fractal patterns, rendered in high detail and vivid hues of purple, blue, and gold.",
  //   "A minimalist line art design featuring concentric circles and triangles in bold black, white, and red tones.",
  //   "A colorful abstract swirl of liquid paint blending bold hues of blue, pink, yellow, and green, with a glossy, marbled effect.",
  //   "A dynamic design of overlapping 3D cubes and spheres, shaded with gradients of metallic silver, gold, and bronze, on a dark background.",
  //   "An optical illusion of twisting and shifting black and white stripes, creating a mesmerizing 3D effect.",
  //   "A gradient-filled spiral pattern with vibrant colors blending smoothly from purple to orange, glowing on a dark backdrop.",
  //   "An explosion of colorful paint splatters in bold, dynamic strokes, creating a chaotic yet balanced design.",
  //   "A hexagonal grid with glowing, pulsating blue lights and metallic textures, futuristic and sleek.",
  //   "A series of interlocking triangles forming a geometric mandala, with gradients of pastel colors fading into each other."
  // ],
  // PopCultureandFun: [
  //   "A retro-style cassette tape with neon colors, vaporwave aesthetics, and a glowing grid background, inspired by 1980s design.",
  //   "A humorous cartoon-style alien holding a surfboard, standing on a beach under a double sunset, playful and colorful.",
  //   "A pixel-art style gaming controller surrounded by glowing 8-bit hearts, coins, and stars, perfect for gamers.",
  //   "A playful cartoon-style UFO beaming up a cow from a field, with bright colors and a humorous comic vibe.",
  //   "A vintage arcade cabinet surrounded by glowing coins and pixel-art explosions, rendered in a nostalgic 1980s neon aesthetic.",
  //   "A cartoon superhero with a glowing cape and a city skyline in the background, bursting through a comic-style explosion.",
  //   "A smiling anthropomorphic pizza slice holding a skateboard, rendered in a bold, graffiti-inspired style.",
  //   "A group of quirky cartoon-style robots dancing under a disco ball with colorful beams of light.",
  //   "A funny scene of a dinosaur wearing sunglasses and holding a boombox, drawn in a retro 90s vibe.",
  //   "A stylized boom box with vibrant graffiti-style accents and musical notes emanating in a wave of color."
  // ],
  // FantasyandMythology: [
  //   "A dragon wrapped around a glowing crystal orb, surrounded by flames and sparks, rendered in intricate detail with a mystical aura.",
  //   "A mystical phoenix rising from glowing embers, its feathers transitioning through fiery shades of red, orange, and gold.",
  //   "A magical forest scene with a glowing fairy hovering over a sparkling stream, ethereal and enchanting.",
  //   "A powerful unicorn galloping through a glowing starry field, its mane flowing with rainbow colors and sparkles trailing behind it.",
  //   "A mystical mermaid sitting on a rock under a full moon, surrounded by glowing jellyfish in an underwater fantasy setting.",
  //   "A glowing enchanted sword embedded in a stone, with mystical runes and a magical aura surrounding it.",
  //   "A castle floating in the clouds, connected by glowing rainbow bridges, with a whimsical and dreamy aesthetic.",
  //   "A group of dwarves forging magical weapons in a fiery forge, surrounded by glowing sparks and mystical energy.",
  //   "A cosmic centaur galloping through a galaxy, with a mane of stars and constellations glowing on its body.",
  //   "A wizard casting a powerful spell, with swirling magical energy forming glowing patterns in the air."
  // ],
  // TypographyandQuotes: [
  //   "Bold graffiti-style text spelling out 'Dream Big' with splashes of bright paint and a spray can in the corner, vibrant and dynamic.",
  //   "A retro-inspired text design that says 'Stay Wild' with a vintage sunburst pattern and palm tree silhouettes in the background.",
  //   "Hand-drawn cursive text 'Adventure Awaits' surrounded by whimsical doodles of mountains, trees, and a compass.",
  //   "Bold retro-style text that says 'Chase the Horizon' with an orange and pink sunset gradient and silhouetted mountains in the background.",
  //   "A grunge-style typographic design reading 'Rise Above' with distressed textures and fiery accents in red, black, and white.",
  //   "Minimalist typography reading 'Carpe Diem' with clean, elegant lines and a small sunrise icon above the text.",
  //   "A playful, bubbly font spelling out 'Stay Groovy' with tie-dye swirls and peace sign accents.",
  //   "Hand-drawn text 'Live Laugh Love' with flowing floral vines interwoven between the letters.",
  //   "Blocky, futuristic text saying 'Level Up' with glowing neon effects and a digital glitch aesthetic.",
  //   "Bold, angular typography spelling out 'Fearless' with a shattered glass texture and dynamic motion lines."
  // ],
  // SciFiandTech: [
  //   "A futuristic cityscape with glowing skyscrapers, flying cars, and holographic billboards, viewed from above, cyberpunk style.",
  //   "A sleek robotic hand holding a glowing neon orb, surrounded by digital code effects, highly detailed and futuristic.",
  //   "A space exploration scene with astronauts floating near a massive glowing planet, accented by shooting stars and nebula clouds.",
  //   "A sleek futuristic helmet with glowing neon circuits and holographic displays, surrounded by a digital grid of data streams.",
  //   "A robotic eagle with chrome feathers soaring through a stormy sky, with glowing red eyes and mechanical details.",
  //   "A glowing neon tunnel with a perspective leading into infinity, futuristic and immersive.",
  //   "A battle-ready mech robot with glowing blue armor and energy weapons, set in a futuristic battlefield.",
  //   "A floating holographic Earth with digital data streams surrounding it, representing futuristic global technology.",
  //   "A cyberpunk-style motorcycle with glowing neon trails zooming through a rainy, futuristic city street.",
  //   "A spacecraft in deep space, surrounded by glowing nebula clouds and distant stars, sleek and detailed."
  // ],
  // SeasonalandFestive: [
  //   "A playful Halloween-themed design with a grinning pumpkin, bats, and a glowing moon in an eerie yet colorful cartoon style.",
  //   "A winter wonderland scene with a snowman, pine trees, and snowflakes falling gently, drawn in a cheerful and cozy illustration style.",
  //   "A cheerful Thanksgiving feast scene with a cartoon turkey, colorful autumn leaves, and a cornucopia of fruits and vegetables.",
  //   "A spooky haunted house on a hill, surrounded by bats, glowing jack-o'-lanterns, and a full moon with eerie clouds.",
  //   "A vibrant Easter design with colorful painted eggs, blooming flowers, and a cheerful bunny hopping through the grass.",
  //   "A festive Christmas scene with a glowing fireplace, stockings hanging, and a beautifully decorated tree.",
  //   "A New Year's celebration with fireworks exploding in the sky, champagne glasses clinking, and a glowing '2025' text.",
  //   "A Valentine's Day heart-shaped wreath made of roses and fairy lights, with 'Love' written in cursive inside.",
  //   "A cheerful springtime design featuring blooming cherry blossoms and butterflies fluttering under a bright blue sky.",
  //   "A spooky ghost emerging from a glowing cauldron, surrounded by swirling green mist and floating candles."
  // ],
  // ArtisticandCreative: [
  //   "A surreal melting clock inspired by Salvador Dalí's style, with colorful drips blending into a vibrant background.",
  //   "A watercolor-style galaxy blending deep blues, purples, and pinks, with splashes of white stars scattered across the design.",
  //   "A monochromatic ink illustration of a roaring lion's face, with intricate tribal patterns filling the mane.",
  //   "A colorful, abstract watercolor splash of a wolf howling at the moon, blending vibrant tones of blue, purple, and orange.",
  //   "A line art portrait of a woman’s face filled with intricate floral patterns, creating a stunning fusion of art and nature.",
  //   "A graffiti-style explosion of bold colors with swirling lines and abstract shapes, chaotic yet beautiful.",
  //   "A stained glass-inspired design of a blooming flower, with vivid, glowing colors and intricate details.",
  //   "A surreal painting of an eye with galaxies and nebulae swirling inside the iris, ethereal and captivating.",
  //   "A series of brushstrokes forming a vivid, impressionistic landscape of a serene countryside at sunset.",
  //   "An intricate pen-and-ink illustration of a tree with its roots forming a mandala, detailed and meditative."
  // ],
  // SportsandHobbies: [
  //   "A silhouette of a surfer riding a massive wave at sunset, with vivid gradients of orange, pink, and purple in the sky.",
  //   "A skateboard deck with a bold flame design, surrounded by graffiti-style splashes and street art elements.",
  //   "A soccer ball breaking through a goal net, with dynamic motion lines and vibrant colors.",
  //   "A basketball mid-dunk with dynamic motion lines and a bold orange and black color scheme, emphasizing energy and movement.",
  //   "A cyclist racing downhill through a forest trail, with dramatic perspective lines and motion effects capturing speed and adrenaline.",
  //   "A baseball bat connecting with a ball mid-swing, with motion trails and stadium lights in the background.",
  //   "A sleek racing car speeding down a track, surrounded by glowing motion trails and vibrant colors.",
  //   "A fishing rod bending under the weight of a catch, with a sparkling river and mountains in the background.",
  //   "A golfer mid-swing on a lush green course, with a clear blue sky and rolling hills in the distance.",
  //   "A martial artist performing a high kick, with dynamic motion effects and a bold red and black color palette."
  // ]
}
console.log(varyingPrompts.NatureandAnimals(0))
console.log(varyingPrompts.NatureandAnimals[0])
console.log(varyingPrompts.NatureandAnimals[0])
console.log(varyingPrompts.NatureandAnimals[1])

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
