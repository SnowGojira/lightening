import $ from "jquery";
import gameState from "../engine/gameState";

const pageLoad = $(".pageLoad");
const pageTest = $(".pageTest");

export const preloadAnimation = (percentage) => {
  $("#loadPercent").text(percentage + "%");
  $(".pl_head").css("opacity", percentage / 100);
};

function pageHideShow(pagehide, pageshow, state, cb) {
  return function inner() {
    pagehide.hide();
    pageshow.show();
    //页面切换的时候也包含着gameState的变换
    gameState.current = state;
    //如果有回调就执行回调
    if (cb) {
      cb();
    }
  };
}

export const modPreload = () => {
  $("#loadPercent").text("100%");
  setTimeout(function () {
    pageTest.animate(
      { opacity: "0" },
      800,
      pageHideShow(pageTest, pageLoad, "INIT", function () {
        pageLoad.animate({ opacity: "1.0" }, 800);
      })
    );
  }, 1000);
};

/*pageLoad向上滑动*/
var startY, moveY, moveSpace;
const flickerBox = $(".pl_lightenBox");
const pageStart = $(".pageStart");
const startBoard = $(".g_board");

export const modFlipper = function () {
  pageLoad.on("touchstart", function (e) {
    //audioPlay("heart");
    startY = e.originalEvent.touches[0].pageY;
    return startY;
  });

  pageLoad.on("touchmove", function (e) {
    moveY = e.originalEvent.touches[0].pageY;
    moveSpace = startY - moveY;
    if (moveSpace > 15) {
      // console.log("上滑之后需要执行的代码片段");
      $(".pl_logo").hide();
      upArrow.hide();
      flickerBox.animate({ top: "-800px" }, 1000, function () {
        // console.log("动画结束");
        pageLoad.hide();
        pageStart.show();
        startBoard.animate({ top: "0px" }, 800);
      });
    }
  });
};
