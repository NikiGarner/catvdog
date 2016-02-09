$(document).ready(function() {
  $("button#Cat_Says").click(function() {
    $("ul#Cat").prepend("<li>Mew</li>");
    $("ul#Dog").prepend("<li>Arf</li>");
    $("ul#Cat").children("li").first().click(function() {
  $(this).remove(); alert('Cats Rule!');
  });
  });

  $("button#Dog_Says").click(function() {
    $("ul#Cat").prepend("<li>Hiss</li>");
    $("ul#Dog").prepend("<li>Grrr</li>");
    $("ul#Dog").children("li").first().click(function() {
  $(this).remove(); alert('Dogs Rule!');
  });
  });
});
