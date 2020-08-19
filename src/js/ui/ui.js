import $ from "jquery";
import animationEnd from "./animation";
import {
  FADE_IN_800,
  FADE_IN_1000,
  FADE_IN_500,
  FADE_OUT_800,
  FADE_TOP_OUT,
} from "../engine/constants";

const pageLoad = $(".pageLoad");
const pageTest = $(".pageTest");

export const preloadAnimation = (percentage) => {
  $("#loadPercent").text(percentage + "%");
  $(".pl_head").css("opacity", percentage / 100);
};

async function animationPageTestToLoad() {
  await animationEnd(pageTest[0], FADE_OUT_800);
  pageTest.hide();
  pageLoad.show();
  pageLoad[0].style.animation = FADE_IN_800;
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
async function animationFlicker() {
  await animationEnd(flickerBox[0], FADE_TOP_OUT);
  pageLoad.hide();
  pageStart.show();
  startBoard.animate({ top: "0px" }, 800);
}

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
      animationFlicker();
    }
  });
};

/*pageStart 点亮动画逻辑*/
var heart = $(".ps_heartParent");
var sparkTitle = $("#startLight");
var quizPage = $(".quizPage");
var pageOne = $(".pageOne");
var q1Board = $(".q1_board");
var topOne = $(".top_one");
var quizOne = $(".quiz_one");
// var optionOne = $(".q1_options");
var hint = $(".indicator");

export const modHeartStart = () => {
  heart.on("click", function () {
    console.log("点击触发");
    //audioPlay("q1");
    //audioPause("heart");
    /*2月24日修改 新播放*/
    //Play("btn");
    animationToPageOne();
  });
};

async function animationToPageOne() {
  //标题逐渐变亮度
  await animationEnd(sparkTitle[0], FADE_IN_800);
  sparkTitle[0].style.opacity = 1;
  //pageStart向上退场
  await animationEnd(pageStart[0], FADE_TOP_OUT);
  //显示答题页面
  quizPage.show();
  pageOne.show();
  //答题页内容一次出现
  q1Board.addClass("mainIn");
  topOne.show();
  await animationEnd(topOne[0], FADE_IN_1000);
  //因为用的是以前的css样式，造成奇葩的bug
  //需要隐藏一次pageStart
  pageStart.hide();

  topOne[0].style.opacity = 1;
  await animationEnd(quizOne[0], FADE_IN_500);
  quizOne[0].style.opacity = 1;
  await animationEnd($(".q1_a")[0], FADE_IN_500);
  $(".q1_a")[0].style.opacity = 1;
  hint;
  await animationEnd($(".q1_b")[0], FADE_IN_500);
  $(".q1_b")[0].style.opacity = 1;
  hint.show();
}
