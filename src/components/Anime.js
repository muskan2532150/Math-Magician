import anime from 'animejs/lib/anime.es';

const animeH = () => {
  const textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: true })
    .add({
      targets: '.ml2 .letter',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 2250,
      delay: (el, i) => 150 * (i + 1),
    }).add({
      targets: '.ml2',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1000,
    });
};

export default animeH;
