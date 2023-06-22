var videoPlayer = document.getElementById("video-player");
var instructionStep = document.getElementById("step-instructions");
var stepName = document.getElementById("step-name");

var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

var videos = [{
    "video": "./static/Step-1.mov",
    "stepname": "Little preparation",
    "instr": "Preheat the oven to 220°C top/bottom heat (200°C fan oven). Finely chop the garlic. Halve the onion and cut into 1 cm thick wedges. Peel the carrot as desired and cut crosswise into 1 cm slices. Cut the washed potato into 1 cm cubes."
},{
    "video": "./static/Step-2.mov",
    "stepname": "Cut cauliflower",
    "instr": "Quarter the cauliflower, remove approx. 1 cm from the stalk and cut the cauliflower quarters crosswise into 1 cm thick slices. Tip: It doesn't matter if these fall apart."
},{
    "video": "./static/Step-3.mov",
    "stepname": "Prepare Vegetables",
    "instr": "Place cauliflower, carrot, diced potatoes, onion and garlic on a baking tray lined with baking paper and mix with \"Hello Piri Piri\", 2 tbsp [3 tbsp | 4 tbsp] oil*, salt* and pepper*. Bake the vegetables in the oven for 25 - 30 Fry until golden brown, meanwhile continue with the recipe."
},{
    "video": "./static/4 Bake.mov",
    "stepname": "Bake",
    "instr": "Salt* and pepper* the chicken breast fillets all over. Spread the apricot chutney on top of the meat. In the last 15 minutes of the vegetable baking time, place the chicken breast fillets on the vegetables on the tray and cook everything together until done."
},{
    "video": "./static/5 Dip.mov",
    "stepname": "For the dip",
    "instr": "Mix the yoghurt with the \"Hello Coconut Curry\" spice mixture in a small bowl and season with salt* and pepper*."
},{
    "video": "./static/6 Serving.mov",
    "stepname": "Serving",
    "instr": "After the end of the baking time, arrange the vegetables and chicken breast on plates. Serve with the yoghurt dip and enjoy. Bon appetit!"
},
];

var currentVideoIndex = 0;

// Function to load the current video
function loadVideo() {
  videoPlayer.src = videos[currentVideoIndex].video;
  stepName.textContent = videos[currentVideoIndex].stepname;
  instructionStep.textContent = videos[currentVideoIndex].instr;
}

// Function to play the next video
function nextVideo() {
  currentVideoIndex++;
  if (currentVideoIndex >= videos.length) {
    currentVideoIndex--; // Wrap around to the first video
  }
  loadVideo();
}

// Function to play the previous video
function prevVideo() {
  currentVideoIndex--;
  if (currentVideoIndex < 0) {
    currentVideoIndex = 0; // Wrap around to the last video
  }
  loadVideo();
}

// Load the initial video
loadVideo();
