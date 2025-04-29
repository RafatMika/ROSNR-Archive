const glitchText = document.getElementById("glitchy");
const image1 = document.getElementById("TheIntruderImage1");
const image2 = document.getElementById("TheIntruderImage2");
const imageSources1 = ["../assets/intruder1.jpg","../assets/intruder1S.jpg"];
const imageSources2 = ["../assets/intruder2.jpg","../assets/intruder2D.jpg"];

const glitchWords = [ 
    "ter.",
    "terrr.",
    "terrrrrr.",
    "teRRRRrrr...",
    "t̶e͟͏r̷̡̡͘r̸̴r̶.",
    "terr$%rrr!",
    "t3rrr@@r.",
    "t̸e̶r̴r̴r̸r̶r̴r̷.",
    "te̷r̵͜rr̶͡rr̶͘r.",
    "terrr#@r$r%r.",
    "T͜E͜R͘͢R͞R͘R͡R͘."
  ];


function changer() {
    const randomIndex = Math.floor(Math.random() * glitchWords.length);
    glitchText.innerHTML = glitchWords[randomIndex];
  }
setInterval(changer, 300);

let imageSelect = 0;

function imageChanger() {
    imageSelect = (imageSelect + 1) % imageSources1.length;
    image1.src = imageSources1[imageSelect];   
    image2.src = imageSources2[imageSelect];
}
setInterval(imageChanger, 1500);
