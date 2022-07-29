$(document).ready(function () {
  $(".input-wrapper .input").keyup(function () {
    if ($(this).val() !== "") {
      $(this).addClass("focused");
    } else {
      $(this).removeClass("focused");
    }
  });
});
