$(function () {
  $("#header").vegas({
    slides: [
      {
        src: "/img/kenji.webp",
      },
      {
        src: "/img/kenji2.jpeg",
      },
      {
        src: "/img/kenji3.jpeg",
      },
    ],
    delay: 7000,
    transition: "fade2",
    animation: 'kenburns',
    timer: false,
    transitionDuration: 6000
  });
});

$(".openbtn5").click(function () {
  $(this).toggleClass('active');
  $('#js-nav').toggleClass('active');
});
