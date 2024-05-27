// Pre-Loader code

let counter = document.querySelector(".loader-counter");
let count = 0;
let progressCircle = document.querySelector(".progress-circle");
let loaderProgress = document.querySelector(".loader-progress");
let counterTime = setInterval(() => {
  if (count === 99) {
    clearInterval(counterTime);
  }
  count++;
  counter.textContent = `${count}%`;
  progressCircle.style.strokeDashoffset = `calc(830 - (830 * ${count}) / 100)`;
}, 8);

let progress = 0;
let progressTimer = setInterval(() => {
  if (progress === 199) {
    clearInterval(progressTimer);
    gsap.to(counter, {
      opacity: 0,
    });
  }
  progress++;
  progressCircle.style.strokeDashoffset = `calc(830 - (830 * ${progress}) / 100)`;
}, 8);












// CLUTTER LETTERS

let heroHeading = document.querySelectorAll(".visible-layer .text-container h1");

heroHeading.forEach((elem) => {
  let content = elem.textContent;
  let splitter = content.split("");
  let clutter = "";
  splitter.forEach((e) => {
    clutter += `<span>${e}</span>`
  })

  elem.innerHTML = clutter;

  
});









// SOUND BOX

let soundBtn = document.querySelector(".sound-box");
let soundOn = document.querySelector(".sound-on");
let soundOff = document.querySelector(".sound-off");

soundBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();

      gsap.to(soundOn, {
        top: 0,
        duration: .3,
      });
    
      gsap.to(soundOff, {
        top: 20,
        duration: .3,
      });



    } 
    else {
      audio.pause();

      
      gsap.to(soundOn, {
        top: -20,
        duration: .3,
      });
    
      gsap.to(soundOff, {
        top: 0,
        duration: .3,
      });
    }
  });

















  // Start code
let pageLoader = document.querySelector(".page-loader");
let loaderBtn = document.querySelector(".loader-btn");

let audio = document.querySelector("audio");





loaderBtn.addEventListener("click", () => {
  gsap.to(pageLoader, {
    opacity: 0,
    display: "none"
  });
  document.body.style.overflow = "auto";


  document.body.appendChild(audio)



  audio.src = "./assets/audio/audio.mp3";

  
  gsap.from(".visible-layer .text-container h1 span", {
    top:50,
    opacity:0,
    stagger:0.02,
    duration:.6
  });

  gsap.from(".text-container h6", {
    opacity:0,
    duration:1
  });

    
});











// mask cursor

let wrapper = document.querySelector(".wrapper");
let textContainer = document.querySelector(".text-container");
let noMask = document.querySelectorAll(".no-mask");

wrapper.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
  document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
})



textContainer.addEventListener("mouseenter", () => {
  document.documentElement.style.setProperty("--cursor-size", "120px");
});

textContainer.addEventListener("mouseleave", () => {
  document.documentElement.style.setProperty("--cursor-size", "12px");
});

noMask.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    document.documentElement.style.setProperty("--cursor-size", "0px");
  });
  
  
  elem.addEventListener("mouseleave", () => {
    document.documentElement.style.setProperty("--cursor-size", "12px");
  });
})



// link Stuffs

/*about-links*/
let aboutLink = document.querySelector(".about-link");
let aboutLink1 = document.querySelectorAll(".about-link1");
let aboutLink2 = document.querySelectorAll(".about-link2");

/*work-links*/
let workLink = document.querySelector(".work-link");
let workLink1 = document.querySelectorAll(".work-link1");
let workLink2 = document.querySelectorAll(".work-link2");

/*contact-links*/
let contactLink = document.querySelector(".contact-link");
let contactLink1 = document.querySelectorAll(".contact-link1");
let contactLink2 = document.querySelectorAll(".contact-link2");



// about link code

aboutLink.addEventListener("mouseover", () => {
  gsap.to(aboutLink1, {
    top: -20,
    duration: .3,
  });

  gsap.to(aboutLink2, {
    top: 0,
    duration: .3,
  });
});


aboutLink.addEventListener("mouseleave", () => {
  gsap.to(aboutLink1, {
    top: 0,
    duration: .3,
  });

  gsap.to(aboutLink2, {
    top: 20,
    duration: .3,
  });
});



// work link code

workLink.addEventListener("mouseover", () => {
  gsap.to(workLink1, {
    top: -20,
    duration: .3,
  });

  gsap.to(workLink2, {
    top: 0,
    duration: .3,
  });
});


workLink.addEventListener("mouseleave", () => {
  gsap.to(workLink1, {
    top: 0,
    duration: .3,
  });

  gsap.to(workLink2, {
    top: 20,
    duration: .3,
  });
});




// contact link code

contactLink.addEventListener("mouseover", () => {
  gsap.to(contactLink1, {
    top: -20,
    duration: .3,
  });

  gsap.to(contactLink2, {
    top: 0,
    duration: .3,
  });
});


contactLink.addEventListener("mouseleave", () => {
  gsap.to(contactLink1, {
    top: 0,
    duration: .3,
  });

  gsap.to(contactLink2, {
    top: 20,
    duration: .3,
  });
});

















// MAGNETIC EFFECT

let logo = document.querySelector(".logo");
let svgPath = document.querySelector(".logo svg path");
let svgEllipse = document.querySelectorAll(".logo svg ellipse");
logo.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;

  let width = logo.clientWidth;
  let height = logo.clientHeight;

  let moveX = (x - width / 5);
  let moveY = (y - height / 5);


  gsap.to(logo, {
    translateX: `${moveX}px`,
    translateY: `${moveY}px`
  });


  gsap.to(svgPath, {
    fill: "#EB5939"
  });

  svgEllipse.forEach((elem) => {
    gsap.to(elem, {
      fill: "#EB5939"
    })
  })

})

logo.addEventListener("mouseout", (e) => {
  gsap.to(logo, {
    translateX: ``,
    translateY: ``
  })

  gsap.to(svgPath, {
    fill: "#B7AB98"
  });

  svgEllipse.forEach((elem) => {
    gsap.to(elem, {
      fill: "#B7AB98"
    })
})

})












// All the Gsap Stuffs
gsap.to(".loader-btn", {
  opacity: 1,
  delay: 1.8,
  display: "block",
  translateY: -95,
  duration: 0.5,
});

gsap.to(".loader-logo", {
  opacity: 1,
  delay: 1.8,
  translateY: -60,
  duration: 0.7,
});


