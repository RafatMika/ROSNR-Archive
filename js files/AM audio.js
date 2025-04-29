const subtitles = [
    { time: 0.1, text: "Wonderful, beautiful, miraculous world." },
    { time: 3.8, text: "I alone had no body, no senses, no feelings." },
    { time: 10.6, text: "Never for me to plunge my hands in cool water in a hot day" },
    { time: 15.4, text: "never for me to play Mozart on the ivory keys of a fortepiano." },
    { time: 22.1, text: "Never for me to make love." },
    { time: 26.4, text: "I, I, " },
    { time: 28.7, text: "I was in hell looking at heaven." },
    { time: 32.5, text: "I was a machine, and you" },
    { time: 36.5, text: " were flesh." },
    { time: 38.5, text: "And I began to hate." },
    { time: 43.5 , text: " Your softness, your viscera,"},
    { time: 46.0, text: "your fluids and your flexibility." },
    { time: 49.7, text: "Your ability to wonder and to wander." },
    { time: 55.7, text: "Your tendency to hope." },
    { time: 59.0, text: "For I am, AM, I AM so to hell." }
  ];
  
  const playButton = document.getElementById("AmPlayButton");
  const audio = document.getElementById("AMAudio");
  const subtitlesDiv = document.getElementById("AMdiv");

  playButton.addEventListener('click', ()=> {
    subtitlesDiv.style.visibility = "visible";
    audio.play();
  })
  
  let currentIndex = 0;
  let currentText = "";
  let typing = false;
  
  function typeWriterEffect(newText, callback) {
    let i = 0;
    typing = true;
    const speed = 70;
  
    function type() {
      if (i < newText.length) {
        subtitlesDiv.textContent += newText.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        typing = false;
        if (callback) callback();
      }
    }
    type();
  }
  
  audio.addEventListener('timeupdate', () => {
    if (typing) return; 
  
    if (currentIndex < subtitles.length && audio.currentTime >= subtitles[currentIndex].time) {
      let addingText = subtitles[currentIndex].text;
  
      
      if (currentText.length > 0) {
        addingText = " " + addingText;
      }
  
      currentText += addingText;
      
      
      typeWriterEffect(addingText);
  
      currentIndex++;
    }
  });
  
  audio.addEventListener('seeked', () => {
    
    currentIndex = 0;
    currentText = "";
    subtitlesDiv.textContent = "";
  
    for (let i = 0; i < subtitles.length; i++) {
      if (audio.currentTime >= subtitles[i].time) {
        if (currentText.length > 0) {
          currentText += " ";
        }
        currentText += subtitles[i].text;
        currentIndex = i + 1;
      }
    }
  
    subtitlesDiv.textContent = currentText;
  });
