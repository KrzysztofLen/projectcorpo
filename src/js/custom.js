$(window).load(function () {

  $('.timer').countTo();
  //.parallax(xPosition, speedFactor, outerHeight) options:
  //xPosition - Horizontal position of the element
  //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
  //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
  $('#parallax').parallax("50%", 0.1);

  $('#menu').onePageNav({
    currentClass: 'active',
    scrollOffset: 30

  });
});