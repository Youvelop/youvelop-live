gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

const bulbs_1 = gsap.utils.toArray(".wf-bulb");

// Desktop script
 let mm = gsap.matchMedia();

 mm.add("(min-width: 768px)", () => {


// Mobile flowing tracks
const webfPin = document.querySelector("#mob-webflow-ellipse");
const gsapPin = document.querySelector("#gsap-mobile-pin");
const pin = document.querySelector("#dot");
// Assume `rectElement` is the SVG <rect> element
const webPinBB = webfPin.getBBox();
const x = webPinBB.x;
const y = webPinBB.y;
const width = webPinBB.width;
const height = webPinBB.height;

const centerX = Math.round(x + width / 2).toFixed(2);
const centerY = Math.round(y + height / 2).toFixed(2);

pin.setAttribute('cx', centerX);
pin.setAttribute('cy', centerY);

gsap.set(webfPin, { transformOrigin: "50% 50%"});

let rotation = gsap.timeline({ repeat: -1, defaults: { ease: "none"}})
.to("#gsap-rev", { svgOrigin: `${centerX} ${centerY}`, rotationZ: 360, duration: 20,  ease: "none"})
.to(gsapPin,{ transformOrigin: "50% 50%", rotationZ: -360, duration: 20, ease: "none"}, 0);


let mobFlow = gsap.timeline();

mobFlow.to("#mobFlow-5", { duration: 1.8, ease: "none",
                            motionPath: {
                                path: "#left-5",
                                align: "#left-5",
                                alignOrigin: [0.5, 0.5],
                                autoRotate: true,
                                start: 0,
                                end: 0.47
                            }
                        })
        .to("#mobFlow-1", { duration: 1.2, ease: "none",
        motionPath: {
            path: "#left-1",
            align: "#left-1",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
            start: 0,
            end: 0.5
        }}, "-=0.6")                
        .to("#webflow-mobile-pin", {scale: 0.9, ease: "circ.out", duration: 0.3})
        .to("#webflow-mobile-pin", {delay: 0.1, scale: 1, ease: "elastic.out(1.5, 0.2)", duration: 0.3})
       .to("#mobFlow-2", {
        duration: 1.3, ease: "none", 
        motionPath:{
            path: "#left-2",
            align: "#left-2",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
            start: 0.47,
            end: 1.01
        }
       }, "-=0.4")
       .to("#mobFlow-4", {
        duration: 1.3, ease: "none", 
        motionPath:{
            path: "#left-4",
            align: "#left-4",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
            start: 0.47,
            end: 1.01
        }
       }, "<")
       .to("#mobFlow-6", {
        duration: 1.3, ease: "none", 
        motionPath:{
            path: "#left-6",
            align: "#left-6",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
            start: 0.47,
            end: 1.01
        }
       }, "<");





//////////////////////////////////////////////////////
// Animating w-bulbs
gsap.to(bulbs_1, { fill: "#f5edcc", duration: 0.5, stagger: 0.65, repeat: -1, ease: "none" });

//flowing lights in circuit lines
let flowing = gsap.timeline({ defaults: {ease: "none"}, repeat: -1,
                                scrollTrigger: {
                                    trigger: "#artflow-main",
                                    start: "top top",
                                    end: "top top"
                                    // toggleActions: "play pause resume reset"
                                }
});
flowing.to("#flowline-1L", { duration: 4,
                        motionPath:{
                            path: "#vTrack-1L",
                            align: "#vTrack-1L",
                            alignOrigin: [0.5, 0.5],
                            autoRotate: true,
                            start: 0,
                            end:1.1
                        }    
}).addLabel("1L")
.to("#flowline-3L", { duration: 2.5,
                        motionPath:{
                            path: "#vTrack-3L",
                            align: "#vTrack-3L",
                            alignOrigin: [0.5, 0.5],
                            autoRotate: true,
                            start: 0,
                            end:1.1
                        }    
}).addLabel("3L")
.to("#flowline-4R", { duration: 2.9,
motionPath:{
    path: "#vTrack-4R",
    align: "#vTrack-4R",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    start: 0,
    end:1.1
}    
}, "1R-=0.7").addLabel("4R")
.to("#flowline-3R", { duration: 2, delay: 3,
motionPath:{
    path: "#vTrack-3R",
    align: "#vTrack-3R",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    start: 0,
    end:1.1
}    
}).addLabel("3R")
.to("#flowline-2L", { duration: 3.2,
                        motionPath:{
                            path: "#vTrack-2L",
                            align: "#vTrack-2L",
                            alignOrigin: [0.5, 0.5],
                            autoRotate: true,
                            start: 0,
                            end:1.1
                        }    
}).addLabel("2L+=3")
.to("#flowline-2R", { duration: 3,
                        motionPath:{
                            path: "#vTrack-2R",
                            align: "#vTrack-2R",
                            alignOrigin: [0.5, 0.5],
                            autoRotate: true,
                            start: 0,
                            end:1.1
                        }    
}, 2).addLabel("2R")
.to("#flowline-1R", { duration: 2.7,
                        motionPath:{
                            path: "#vTrack-1R",
                            align: "#vTrack-1R",
                            alignOrigin: [0.5, 0.5],
                            autoRotate: true,
                            start: 0,
                            end:1.1
                        }    
})
.to("#flowline-4L", { duration: 3.3,
                        motionPath:{
                            path: "#vTrack-4L",
                            align: "#vTrack-4L",
                            alignOrigin: [0.5, 0.5],
                            autoRotate: true,
                            start: 0,
                            end:1.1
                        }    
});
 let circuits = gsap.timeline({ defaults: { ease: "none"},
                                scrollTrigger: {
                                    trigger: "#artflow-main",
                                    start: "top top",
                                    end: "top top"
                                }, repeat: -1
});
 circuits.to("#circuit-2-current", { duration: 6,
                                    motionPath: {
                                        path: "#track2",
                                        align: "#track2",
                                        alignOrigin: [0.5, 0.5],
                                        autoRotate: true,
                                        start: -0.15,
                                        end: 0.88
                                    },delay: 15, paused: false   
}).to("#circuit-4-current, #circuit-5-current", { duration: 15,
                                motionPath: {
                                    path: "#track4",
                                    align: "#track4",
                                    alignOrigin: [0.5, 0.5],
                                    autoRotate: true,
                                    start: -0.7,
                                    end: 1.2
                                }, delay: 6, paused: false    
},0);
gsap.to("#gsap-track-light", { duration: 3,repeat: -1, ease: "none",
                              motionPath: {
                                path: "#gsap-bulb-track",
                                    align: "#gsap-bulb-track",
                                    alignOrigin: [0.5, 0.5],
                                    autoRotate: true,
                                    start: 0,
                                    end: 1
                              }      
}, 0);

});
//GSDevTools.create({animation:flowing});

            
let mobile = gsap.matchMedia();

mobile.add("(max-width: 479px)", () => {

    console.log("Mobile script active!");

});
