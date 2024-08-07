gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

let counter = {
  value: 0
}

let time = 6;
let loaderMask = document.querySelector("#progress-mask");
let customEase = "M0,0 C0.162,0.534 0.454,0.485 0.595,0.614 0.686,0.698 0.73,0.974 1,1 ";

if (sessionStorage.getItem("visited") !== null) {
  time = 2;
  counter = {
    value: 75
  };
} else {
  sessionStorage.setItem("visited", "true");
}

function updateLoaderText() {
  let progress = Math.round(counter.value);
  $(".loader-counter").text(progress);
}

function endLoaderAnimation() {
  $(".trigger").click();
}

let loaderTl = gsap.timeline({ onComplete: endLoaderAnimation });

loaderTl.to(counter, {
    value: 100,
    duration: time,
    onUpdate: updateLoaderText,
    ease: CustomEase.create("custom", customEase)
  })
  .to(loaderMask, {
    x: "90%",
    duration: time,
    ease: CustomEase.create("custom", customEase)
  }, 0);

// document.addEventListener('DOMContentLoaded', function () {

let desktopMedia = gsap.matchMedia();
let mobile = gsap.matchMedia();

mobile.add("(max-width: 767px)", () => {

  const svgMobileText = document.querySelector('[wf-element="svg-p-mobile-text"]');
  const svgMobileContainer = document.querySelector(
    '[wf-element="svg-mobile-container"]');
  let svgMobileCode = svgMobileText.textContent;

  svgMobileCode = svgMobileCode.replace(/\s+/g, ' ').trim();
  svgMobileContainer.innerHTML = svgMobileCode;

  // Mobile flowing tracks
  const webfUnit = document.querySelector("#webflow-mobile-pin");
  const webfPin = document.querySelector("#mob-webflow-circ");
  const gsapPin = document.querySelector("#gsap-mobile-pin");
  const mobLights = document.querySelectorAll(".mobileLight");
  // Getting svg element bounding box attributes
  const webPinBB = webfPin.getBBox();
  const x = webPinBB.x;
  const y = webPinBB.y;
  const width = webPinBB.width;
  const height = webPinBB.height;
  // updating center since transform in place 
  const centerX = Math.round(x + width / 2).toFixed(2);
  const centerY = Math.round(y + height / 2).toFixed(2);

  gsap.set(webfUnit, { transformOrigin: "50% 50%" });

  gsap.timeline({ repeat: -1, defaults: { ease: "none" } })
    .to("#gsap-rev", {
      svgOrigin: `${centerX} ${centerY}`,
      rotationZ: 360,
      duration: 20,
      ease: "none"
    })
    .to(gsapPin, {
      transformOrigin: "50% 50%",
      rotationZ: -360,
      duration: 20,
      ease: "none"
    }, 0);

  // Get Random Line number
  function getLineNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // Increment line number
  function incrementLineNum(number) {
    const incremented = number + 2;
    return incremented > 7 ? ((incremented - 1) % 7) + 1 : incremented;
  }

  // Initializing line numbers
  let line1 = getLineNumbers(1, 7);
  let line2 = getLineNumbers(1, 7);

  // Bottom lines and their toggle
  let botLines = [2, 4, 6];
  let toggle = false;

  // Function to toggle botLines state
  function toggleBotLines() {
    botLines = toggle ? [2, 4, 6] : [1, 3, 5];
    toggle = !toggle;
  }

  mobLights.forEach((element, index) => {
    gsap.set(element, {
      opacity: 1,
      motionPath: {
        path: `#left-${index + 1}`,
        align: `#left-${index + 1}`,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 1,
        end: 1
      }
    });
  });

  function playLines() {

    mobFlow.clear();
    mobFlow.to(`#mobFlow-${line1}`, {
        duration: 2.5,
        ease: "none",
        motionPath: {
          path: `#left-${line1}`,
          align: `#left-${line1}`,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0,
          end: 0.49
        }
      })
      .to(`#mobFlow-${line2}`, {
        duration: 2.2,
        ease: "none",
        motionPath: {
          path: `#left-${line2}`,
          align: `#left-${line2}`,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0,
          end: 0.49
        }
      }, "-=0.6")
      .to(webfUnit, { delay: 0.5, scale: 0.9, ease: "circ.out", duration: 0.5 })
      .to("#circ-blur", { r: 58, ease: "power1.inOut", duration: 0.5 }, "-=0.65")
      .to(webfUnit, { delay: 0.1, scale: 1, ease: "elastic.out(1, 0.2)", duration: 0.35 })
      .to("#circ-blur", { r: 73, ease: "power2.out", duration: 0.1 }, "<0.1")
      .to(`#mobFlow-${botLines[0]}`, {
        duration: 2,
        ease: "none",
        motionPath: {
          path: `#left-${botLines[0]}`,
          align: `#left-${botLines[0]}`,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0.47,
          end: 1.01
        }
      }, "-=0.4")
      .to(`#mobFlow-${botLines[1]}`, {
        duration: 2,
        ease: "none",
        motionPath: {
          path: `#left-${botLines[1]}`,
          align: `#left-${botLines[1]}`,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0.47,
          end: 1.01
        }
      }, "<")
      .to(`#mobFlow-${botLines[2]}`, {
        duration: 2,
        ease: "none",
        motionPath: {
          path: `#left-${botLines[2]}`,
          align: `#left-${botLines[2]}`,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0.47,
          end: 1.01
        }
      }, "<");
  }
  // Define the timeline
  let mobFlow = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    onRepeat: () => {
      line1 = incrementLineNum(line1);
      line2 = incrementLineNum(line2);
      toggleBotLines();
      playLines();
    }
  });

  // Initiate the mobile line tweens
  playLines();
});

desktopMedia.add("(min-width: 768px)", () => {
  // Selecting DOM elements
  const svgRichText = document.querySelector('[wf-element="svg-p-text"]');
  const svgContainer = document.querySelector('[wf-element="svg-container"]');

  svgContainer.innerHTML = svgRichText.textContent;

  // Animating w-bulbs & gsap track
  const bulbs_1 = gsap.utils.toArray(".wf-bulb");
  gsap.to(bulbs_1, {
    fill: "#f5edcc",
    duration: 0.4,
    stagger: 0.65,
    repeat: -1,
    ease: "none"
  });

  gsap.to("#gsap-track-light", {
    duration: 2.5,
    repeat: -1,
    ease: "none",
    motionPath: {
      path: "#gsap-bulb-track",
      align: "#gsap-bulb-track",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: 0,
      end: 1
    }
  });

  //flowing lights in circuit lines
  let flowing = gsap.timeline({
      defaults: { ease: "none" },
      repeat: -1,
      scrollTrigger: {
        trigger: "#artflow-main",
        start: "top 20px",
        end: "bottom top"
        //toggleActions: "play pause resume reset"
      }
    }).to("#flowline-1L", {
      duration: 4.1,
      motionPath: {
        path: "#vTrack-1L",
        align: "#vTrack-1L",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 1.1
      }
    }, 0).addLabel("1L")
    .to("#flowline-3L", {
      duration: 2.4,
      motionPath: {
        path: "#vTrack-3L",
        align: "#vTrack-3L",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 1.1
      }
    }).addLabel("3L")
    .to("#flowline-4R", {
      duration: 2.9,
      motionPath: {
        path: "#vTrack-4R",
        align: "#vTrack-4R",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 1.1
      }
    }, "1R-=0.7").addLabel("4R")
    .to("#flowline-3R", {
      duration: 2,
      delay: 3,
      motionPath: {
        path: "#vTrack-3R",
        align: "#vTrack-3R",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 1.1
      }
    }).addLabel("3R")
    .to("#flowline-2L", {
      duration: 3.2,
      motionPath: {
        path: "#vTrack-2L",
        align: "#vTrack-2L",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 1.1
      }
    }).addLabel("2L+=3")
    .to("#flowline-2R", {
      duration: 3,
      motionPath: {
        path: "#vTrack-2R",
        align: "#vTrack-2R",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 1.1
      }
    }, 2).addLabel("2R")
    .to("#flowline-1R", {
      duration: 2.7,
      motionPath: {
        path: "#vTrack-1R",
        align: "#vTrack-1R",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 1.1
      }
    })
    .to("#flowline-4L", {
      duration: 3.3,
      motionPath: {
        path: "#vTrack-4L",
        align: "#vTrack-4L",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 1.1
      }
    });

  let circuits = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: "#artflow-main",
      start: "top top",
      end: "bottom top"
    },
    repeat: -1
  }).to("#circuit-2-current", {
    duration: 5.5,
    repeatDelay: 7,
    motionPath: {
      path: "#track2",
      align: "#track2",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: -0.15,
      end: 0.88
    }
  }).to("#circuit-4-current, #circuit-5-current", {
    duration: 10,
    repeatDelay: 6,
    motionPath: {
      path: "#track4",
      align: "#track4",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: -0.7,
      end: 1.2
    }
  }, 0);

});

// });
