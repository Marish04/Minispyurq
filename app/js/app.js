$(document).ready(function () {
  $(".input-wrapper .input, .input-wrapper .textarea").keyup(function () {
    if ($(this).val() !== "") {
      $(this).addClass("focused");
    } else {
      $(this).removeClass("focused");
    }
  });
});
