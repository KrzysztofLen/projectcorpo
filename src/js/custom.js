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

  // Search engine
  var search = '',
    tip = '',
    tip_pos = 0,
    total = 0;

  $('.autocomplete-list').css('display', 'none');

  $('.autocomplete-input input').on('keyup', function (e) {
    search = $(this).val();
    total = 0;

    // Found match
    $('.autocomplete-list li').each(function () {
      var value = $(this).text().toLowerCase();

      if (value.indexOf(search.toLowerCase()) === 0) {
        total++;
        $(this).removeClass('hide');
        $('.autocomplete-list').css('display', 'block');
      } else {
        $(this).addClass('hide');
      }
    });

    if (e.keyCode == 38 && total > 1) {
      tip_pos--;

      if (tip_pos == -1) tip_pos = total - 1;
    }

    if (e.keyCode == 40 && total > 1) {
      tip_pos++

      if (tip_pos > total - 1) tip_pos = 0;
    }

    if (search.length > 0) {
      tip = search + $('.autocomplete-list li').not('.hide').eq(tip_pos).text().substr(search.length);
    } else {
      $('.autocomplete-list').css('display', 'none');
      tip = 'What you search for?';
      tip_pos = 0;
    }

    $('.autocomplete-tip').text(tip);

    if (e.keyCode == 39 && total > 0 && search.length > 0) {
      $('.autocomplete-input input').val(tip);
      tip = '';
      tip_pos = 0;
    }

    if (total > 0) $('.autocomplete-message').hide();
    else $('.autocomplete-message').show();
  });

  $('.autocomplete-list li').on('click', function () {
    $('.autocomplete-input input').val($(this).text());
    $('.autocomplete-tip').text('');
  });
});
