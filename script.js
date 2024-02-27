gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

const bulbs_1 = gsap.utils.toArray(".wf-bulb");

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
//GSDevTools.create({animation:flowing});

            
