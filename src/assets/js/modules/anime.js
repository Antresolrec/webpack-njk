import anime from 'animejs';

const roundLogEl = document.querySelector('.round-log');

anime({
  targets: roundLogEl,
  innerHTML: [0, 10000],
  easing: 'linear',
  round: 1, // Will round the animated value to 1 decimal
  duration: 3000,
});

anime({
  targets: '.line-drawing-demo path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay(el, i) {
    return i * 250;
  },
  // direction: 'alternate',
  // loop: true,
});
