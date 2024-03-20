gsap.registerPlugin(Flip);

const toggle = document.querySelector(".lesson_sidebar_toggle"),
      bottomWrapper = document.querySelector(".bottom_sidebar_toggle"),
      midWrapper = document.querySelector(".mid_sidebar_toggle");

toggle.addEventListener('click', () => {
  const state = Flip.getState(toggle);
  
  (toggle.parentNode === bottomWrapper ? midWrapper : bottomWrapper).appendChild(toggle);
  Flip.from(state, { duration: 0.3, ease: "power1,inOut", absolute: true});
});
