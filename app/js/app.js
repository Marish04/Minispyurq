$(document).ready(function () {
  $(".input-wrapper .input, .textarea").keyup(function () {
    if ($(this).val() !== "") {
      $(this).addClass("focused");
    } else {
      $(this).removeClass("focused");
    }
  });

  // show hide new inputs
  $(".company-label-wrap").click(function () {
    $(".company-case-inputs").removeClass("hide");
  });
  $(".individual-label-wrap").click(function () {
    $(".company-case-inputs").addClass("hide");
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

  // set active item and add value for hidden select input
  window.$(".dropdown-item-li").click(function () {
    const currentValue = window.$(".active-item");
    $(".dropdown-value").attr("value", window.$(this).text().trim());
    currentValue.text(window.$(this).text());
    currentValue.addClass("active-color");
  });

  $(".company-label-wrap").click(function () {
    checkFields();
  });
  $(".individual-label-wrap").click(function () {
    checkFields();
  });
});
