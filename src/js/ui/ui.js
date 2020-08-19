import $ from "jquery";
import animationEnd from "./animation";

const pageLoad = $(".pageLoad");
const pageTest = $(".pageTest");

export const preloadAnimation = (percentage) => {
  $("#loadPercent").text(percentage + "%");
  $(".pl_head").css("opacity", percentage / 100);
};

function pageHideShow(pagehide, pageshow, cb) {
  return function inner() {
    pagehide.hide();
    pageshow.show();
    //如果有回调就执行回调
    if (cb) {
      cb();
    }
  };
}

async function animationPageTestToLoad() {
  await animationEnd(pageTest[0], "fadeOut 0.8s ease-in");
  pageTest.hide();
  pageLoad.show();
  pageLoad[0].style.animation = "fadeIn 0.8s ease-out";
  //await animationEnd(pageLoad[0], "fadeIn 0.8s ease-out");
}

export const modPreload = () => {
  $("#loadPercent").text("100%");
  setTimeout(animationPageTestToLoad, 1000);
};

/*pageLoad向上滑动*/
var startY, moveY, moveSpace;
const flickerBox = $(".pl_lightenBox");
const pageStart = $(".pageStart");
const startBoard = $(".g_board");

export const modUpFlipper = function () {
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
      $(".pl_upArrow").hide();
      flickerBox.animate(
        { top: "-800px" },
        1000,
        pageHideShow(
          // console.log("动画结束");
          pageLoad,
          pageStart,
          function () {
            startBoard.animate({ top: "0px" }, 800);
          }
        )
      );
    }
  });
};

/*pageStart 点亮动画逻辑*/
var heart = $(".ps_heartParent");
var sparkTitle = $("#startLight");
var quizPage = $(".quizPage");
var pageOne = $(".pageOne");
var q1Board = $(".q1_board");
// var q1Board = document.getElementsByClassName("q1_board");
var topOne = $(".top_one");
var quizOne = $(".quiz_one");
var optionOne = $(".q1_options");
var hint = $(".indicator");

export const modHeartStart = () => {
  heart.on("click", function () {
    console.log("点击触发");
    //audioPlay("q1");
    //audioPause("heart");
    /*2月24日修改 新播放*/
    //Play("btn");

    sparkTitle.animate({ opacity: "1.0" }, 800, function () {
      pageStart.animate({ top: "-800px" }, 800, function () {
        quizPage.show();
        pageOne.show();
        quizInScene(q1Board, topOne, quizOne, optionOne);
      });
    });
  });
};

/*动画全局属性*/
async function quizInScene(dom1, dom2, dom3, dom4) {
  console.log(dom1[0]);
  dom1[0].addEventListener("animationend", () => {
    console.log("dom1 finished");
  });
  dom1[0].style.animation = "mainIn 1s 0.2s ease both";

  //dom1.addClass("mainIn");
  setTimeout(function () {
    dom2.show();
    dom2.animate({ opacity: "1.0" }, 1000, function () {
      dom3.animate({ opacity: "1.0" }, 500, function () {
        dom4.animate({ opacity: "1.0" }, 500, function () {
          hint.show();
        });
      });
    });
  }, 200);
}
