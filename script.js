const imageMap = {
  portfolioImage: {
    "style.css": "assets/vaporeon.gif",
    "style2.css": "assets/espeon.gif"
  },
  portfolioIcon: {
    "style.css": "assets/waterstone.png",
    "style2.css": "assets/sunstone.png"
  },
  portfolioSpeech: {
    "style.css": "assets/vaporeonspeech.gif",
    "style2.css": "assets/espeonspeech.gif"
  },
  qualificationsImage: {
    "style.css": "assets/jolteon.gif",
    "style2.css": "assets/umbreon.gif"
  },
  qualificationsIcon: {
    "style.css": "assets/thunderstone.png",
    "style2.css": "assets/moonstone.png"
  },
  qualificationsSpeech: {
    "style.css": "assets/jolteonspeech.gif",
    "style2.css": "assets/umbreonspeech.gif"
  },
  servicesImage: {
    "style.css": "assets/flareon.gif",
    "style2.css": "assets/sylveon.gif"
  },
  servicesIcon: {
    "style.css": "assets/firestone.png",
    "style2.css": "assets/shinystone.png"
  },
  servicesSpeech: {
    "style.css": "assets/flareonspeech.gif",
    "style2.css": "assets/sylveonspeech.gif"
  },
  languageIcon: {
    "style.css": "assets/electricenergy.png",
    "style2.css": "assets/darkenergy.png"
  },
  techIcon: {
    "style.css": "assets/fightingenergy.png",
    "style2.css": "assets/normalenergy.png"
  },
  devIcon: {
    "style.css": "assets/normalenergy.png",
    "style2.css": "assets/metalenergy.png"
  },
  fullstackIcon: {
    "style.css": "assets/grassenergy.png",
    "style2.css": "assets/fairyenergy.png"
  },
  aiIcon: {
    "style.css": "assets/psychicenergy.png",
    "style2.css": "assets/fireenergy.png"
  },
  webIcon: {
    "style.css": "assets/fairyenergy.png",
    "style2.css": "assets/fightingenergy.png"
  },
  cloudIcon: {
    "style.css": "assets/darkenergy.png",
    "style2.css": "assets/psychicenergy.png"
  }
};

function updateImages(currentStyle) {
  for (const [id, sources] of Object.entries(imageMap)) {
    const img = document.getElementById(id);
    if (img) {
      img.setAttribute("src", sources[currentStyle]);
    }
  }
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var styleElement = document.getElementById("style1");
    
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var currentStyle = styleElement.getAttribute("href");
   
    // 1 (c) Determine new stylesheet file name
    if (currentStyle === "style.css") {
        styleElement.setAttribute("href", "style2.css");
        localStorage.setItem("stylesheet", "style2.css");
        updateImages("style2.css");
    } else {
        styleElement.setAttribute("href", "style.css");
        localStorage.setItem("stylesheet", "style.css");
        updateImages("style.css");
    }
}

window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var savedStyle = localStorage.getItem("stylesheet");
    if (savedStyle) {
        // 2 (b) get html style element by ID
        var styleElement = document.getElementById("style1");
     
        // 2 (c) replace href attribute of html element.
        styleElement.setAttribute("href", savedStyle);
        
        updateImages(savedStyle);
    }
}