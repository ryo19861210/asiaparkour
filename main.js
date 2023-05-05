$(function () {
  $("#header").vegas({
    slides: [
      {
        src: "https://raw.githubusercontent.com/ryo19861210/asiaparkour/main/kenji.webp",
      },
      {
        src: "https://github.com/ryo19861210/asiaparkour/blob/main/kenji2.jpeg?raw=true",
      },
      {
        src: "https://github.com/ryo19861210/asiaparkour/blob/main/kenji3.jpeg?raw=true",
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
