AOS.init();
var slideleft1 = {
    distance: '200%',
    origin: 'left',
    opacity: null,
    delay: 375,
    duration: 800,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
};
var slideright1 = {
    distance: '200%',
    origin: 'right',
    opacity: null,
    delay: 675,
    duration: 800,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
};
var slideleft2 = {
    distance: '200%',
    origin: 'left',
    opacity: null,
    delay: 375,
    duration: 800,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
};
var slideright2 = {
    distance: '200%',
    origin: 'right',
    opacity: null,
    delay: 675,
    duration: 800,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
};

ScrollReveal().reveal('.one', slideleft1);
ScrollReveal().reveal('.two', slideright1);
ScrollReveal().reveal('.three', slideleft2);
ScrollReveal().reveal('.four', slideright2);


// Wrap every letter in a span
var textWrapper = document.querySelector('.name');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.name .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.name',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


anime.timeline({loop: true})
  .add({
    targets: '.H',
    opacity: [0, 1],
    scale:[0.2, 1],
    duration: 800,
    delay :500
  })

//   anime.timeline({loop: true})
//   .add({
//     targets: '.hello',
//     scale: [14,1],
//     opacity: [0,1],
//     easing: "easeOutCirc",
//     duration: 800,
//     delay: (el, i) => 800 * i
//   }).add({
//     targets: '.ml15',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });