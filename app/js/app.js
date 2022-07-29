$(document).ready(function () {
  $(".input-wrapper .input, .input-wrapper .textarea").keyup(function () {
    if ($(this).val() !== "") {
      $(this).addClass("focused");
    } else {
      $(this).removeClass("focused");
    }
  });

  // checkout modal dropdown
  function openDropdown() {
    window.$(".dropdown").addClass("show");
  }
  function closeDropdown() {
    window.$(".dropdown").removeClass("show");
  }

  // open/close modal
  window.$(".dropdown").click(() => {
    if (window.$(".dropdown").hasClass("show")) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  // close dropdown clicking outside
  window.$(document).on("click", function (e) {
    if (!(window.$(e.target).closest(".dropdown").length > 0)) {
      closeDropdown();
    }
  });

  // set active item
  window.$(".dropdown-item-li").click(function () {
    const currentValue = window.$(".active-item");
    // currentValue.html(window.$(this).html());
    currentValue.text(window.$(this).text());
  });
});
