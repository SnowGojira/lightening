import $ from "jquery";
import animationEnd from "./animation";
import gameAudio from "../engine/audio";
import {
  FADE_IN_800,
  FADE_IN_1000,
  FADE_IN_500,
  FADE_OUT_800,
  FADE_OUT_500,
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
    gameAudio.play("heart");
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
    gameAudio.pause("heart");
    /*2月24日修改 新播放*/
    gameAudio.play("btn");
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
  gameAudio.play("q1");
  await animationEnd($(".q1_a")[0], FADE_IN_500);
  $(".q1_a")[0].style.opacity = 1;
  await animationEnd($(".q1_b")[0], FADE_IN_500);
  $(".q1_b")[0].style.opacity = 1;
  hint.show();
}

var pageTwo = $(".pageTwo");
var q2Board = $(".q2_board");
var topTwo = $(".top_two");
var quizTwo = $(".question_2");
var watch = $(".watch_two");

export async function animationToPageTwo() {
  //pageOne-->pageTwo
  await animationEnd(pageOne[0], FADE_OUT_500);
  pageOne[0].style.opacity = 0;
  pageTwo.show();
  q2Board.addClass("mainIn");
  topTwo.show();

  await animationEnd(topTwo[0], FADE_IN_1000);
  topTwo[0].style.opacity = 1;
  // pageOne.hide();
  gameAudio.play("watch");
  await animationEnd(quizTwo[0], FADE_IN_500);
  quizTwo[0].style.opacity = 1;
  await animationEnd(watch[0], FADE_IN_500);
  watch[0].style.opacity = 1;

  await animationEnd($(".q2_a")[0], FADE_IN_500);
  $(".q2_a")[0].style.opacity = 1;
  await animationEnd($(".q2_b")[0], FADE_IN_500);
  $(".q2_b")[0].style.opacity = 1;
  hint.show();
  gameAudio.pause("watch");
}

/*page2即将结束，进入page3*/
var pageThree = $(".pageThree");
var q3Board = $(".q3_board");
var topThree = $(".top_three");
var quizThree = $(".question_3");
var crystal = $(".q3_crystalContainer");

export async function animationToPageThree() {
  await animationEnd(pageTwo[0], FADE_OUT_500);
  pageTwo[0].style.opacity = 0;

  pageThree.show();
  q3Board.addClass("mainIn");

  topThree.show();
  await animationEnd(topThree[0], FADE_IN_1000);
  topThree[0].style.opacity = 1;
  await animationEnd(quizThree[0], FADE_IN_500);
  quizThree[0].style.opacity = 1;
  await animationEnd(crystal[0], FADE_IN_500);
  crystal[0].style.opacity = 1;

  await animationEnd($(".q3_a")[0], FADE_IN_500);
  $(".q3_a")[0].style.opacity = 1;
  await animationEnd($(".q3_b")[0], FADE_IN_500);
  $(".q3_b")[0].style.opacity = 1;
  hint.show();
}
// optionTwo.on("click", function () {
//   /*音乐*/
//   audioPause("watch");
//   pageTwo.animate({ opacity: "0" }, 500, function () {
//     pageThree.show();
//     quizInScene(q3Board, topThree, quizThree, optionThree);
//   });
// });

var pageFour = $(".pageFour");
var q4Board = $(".q4_board");
var topFour = $(".top_four");
var quizFour = $(".quiz_four");
var optionFour = $(".q4_options");
var musicOpt = $(".music");

export async function animationToPageFour() {
  await animationEnd(pageThree[0], FADE_OUT_500);
  pageThree[0].style.opacity = 0;
  pageFour.show();
  q4Board.addClass("mainIn");

  await animationEnd(topFour[0], FADE_IN_1000);
  topFour[0].style.opacity = 1;
  await animationEnd(quizFour[0], FADE_IN_500);
  quizFour[0].style.opacity = 1;
  // await animationEnd(crystal[0], FADE_IN_500);
  // crystal[0].style.opacity = 1;

  await animationEnd($(".q4_a")[0], FADE_IN_500);
  $(".q4_a")[0].style.opacity = 1;
  await animationEnd($(".q4_a_music")[0], FADE_IN_500);
  $(".q4_a_music")[0].style.opacity = 1;
  await animationEnd($(".q4_b")[0], FADE_IN_500);
  $(".q4_b")[0].style.opacity = 1;
  await animationEnd($(".q4_b_music")[0], FADE_IN_500);
  $(".q4_b_music")[0].style.opacity = 1;
  hint.show();
}
