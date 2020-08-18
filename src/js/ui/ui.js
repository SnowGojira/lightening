import $ from "jquery";

export const preloadAnimation = (percentage) => {
  $("#loadPercent").text(percentage + "%");
  $(".pl_head").css("opacity", percentage / 100);
};

export const onCompleteHandler = () => {
  $("#loadPercent").text("100%");
  setTimeout(function () {
    $(".pageTest").animate({ opacity: "0" }, 800, function () {
      $(".pageTest").hide();
      $(".pageLoad").show();
      $(".pageLoad").animate({ opacity: "1.0" }, 800);
    });
  }, 2000);
};
