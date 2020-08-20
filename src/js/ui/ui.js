import $ from "jquery";
import animationEnd from "./animation";
import gameAudio from "../engine/audio";
import gameState from "../engine/gameState";
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
var hint = $(".indicator");

export const modHeartStart = () => {
  heart.on("click", function () {
    gameAudio.pause("heart");
    gameAudio.play("btn");
    animationToPageOne();
  });
};

async function animationToPageOne() {
  //标题逐渐变亮度
  await animationEnd(sparkTitle[0], FADE_IN_800, 1);
  //pageStart向上退场
  await animationEnd(pageStart[0], FADE_TOP_OUT);
  //显示答题页面
  quizPage.show();
  pageOne.show();
  //答题页内容一次出现
  q1Board.addClass("mainIn");
  // topOne.show();
  await animationEnd(topOne[0], FADE_IN_1000, 1);
  //因为用的是以前的css样式，造成奇葩的bug
  //需要隐藏一次pageStart
  pageStart.hide();

  await animationEnd(quizOne[0], FADE_IN_500, 1);
  gameAudio.play("q1");
  await animationEnd($(".q1_a")[0], FADE_IN_500, 1);
  await animationEnd($(".q1_b")[0], FADE_IN_500, 1);
  hint.show();
}

var pageTwo = $(".pageTwo");
var q2Board = $(".q2_board");
var topTwo = $(".top_two");
var quizTwo = $(".question_2");
var watch = $(".watch_two");

export async function animationToPageTwo() {
  //pageOne-->pageTwo
  samePageAnimation(pageOne, pageTwo, q2Board, topTwo, async function () {
    gameAudio.play("watch");
    await animationEnd(quizTwo[0], FADE_IN_500, 1);
    await animationEnd(watch[0], FADE_IN_500, 1);
    await animationEnd($(".q2_a")[0], FADE_IN_500, 1);
    await animationEnd($(".q2_b")[0], FADE_IN_500, 1);
  });
}

async function samePageAnimation(dom1, dom2, dom3, dom4, cb) {
  await animationEnd(dom1[0], FADE_OUT_500, 0);
  dom2.show();
  dom3.addClass("mainIn");
  await animationEnd(dom4[0], FADE_IN_1000, 1);

  cb();

  hint.show();
}
/*page2即将结束，进入page3*/
var pageThree = $(".pageThree");
var q3Board = $(".q3_board");
var topThree = $(".top_three");
var quizThree = $(".question_3");
var crystal = $(".q3_crystalContainer");

export async function animationToPageThree() {
  gameAudio.pause("watch");

  samePageAnimation(pageTwo, pageThree, q3Board, topThree, async function () {
    await animationEnd(quizThree[0], FADE_IN_500, 1);
    await animationEnd(crystal[0], FADE_IN_500, 1);
    await animationEnd($(".q3_a")[0], FADE_IN_500, 1);
    await animationEnd($(".q3_b")[0], FADE_IN_500, 1);
  });
}

var pageFour = $(".pageFour");
var q4Board = $(".q4_board");
var topFour = $(".top_four");
var quizFour = $(".quiz_four");

export async function animationToPageFour() {
  samePageAnimation(pageThree, pageFour, q4Board, topFour, async function () {
    await animationEnd(quizFour[0], FADE_IN_500, 1);
    await animationEnd($(".q4_a")[0], FADE_IN_500, 1);
    await animationEnd($(".q4_a_music")[0], FADE_IN_500, 1);
    await animationEnd($(".q4_b")[0], FADE_IN_500, 1);
    await animationEnd($(".q4_b_music")[0], FADE_IN_500, 1);
  });
}

export function musicOptionsPlayer() {
  /*关于page4的音乐播放逻辑*/
  var musicA = $(".q4_a_music");
  musicA.on("click", function () {
    gameAudio.pause("BGM");
    gameAudio.pause("B");
    gameAudio.play("A");
  });

  var musicB = $(".q4_b_music");
  musicB.on("click", function () {
    gameAudio.pause("BGM");
    gameAudio.pause("A");
    gameAudio.play("B");
  });
}

var pageFive = $(".pageFive");
var q5Board = $(".q5_board");
var topFive = $(".top_five");
var quizFive = $(".quiz_five");

export async function animationToPageFive() {
  /*转场音乐*/
  gameAudio.pause("A");
  gameAudio.pause("B");

  samePageAnimation(pageFour, pageFive, q5Board, topFive, async function () {
    await animationEnd(quizFive[0], FADE_IN_500, 1);
    await animationEnd($(".q5_a")[0], FADE_IN_500, 1);
    await animationEnd($(".pink")[0], FADE_IN_500, 1);
    await animationEnd($(".q5_b")[0], FADE_IN_500, 1);
    await animationEnd($(".red")[0], FADE_IN_500, 1);
  });
}

var pageInput = $(".pageInput");

export async function animationToPageInput() {
  await animationEnd(pageFive[0], FADE_OUT_500, 0);
  quizPage.hide();
  pageInput.show();
  await animationEnd(pageInput[0], FADE_IN_500, 1);
}

/*input的逻辑*/
// var name;
var input = $(".input_content");
var submitBtn = $(".input_btn");
var InputImg = $(".inputImg");
var OutputImg = $("#outputImg");

//2月24日 添加input虚拟按键不影响布局
input.blur(function () {
  document.body.addEventListener("focusout", function () {
    document.body.scrollTop = 0;
  });
});

export function submit() {
  submitBtn.on("click", function () {
    //姓名赋值
    gameState.name = input.val();

    if (gameState.name) {
      $(".input_name").animate({ opacity: "0" }, 1000, function () {
        console.log("姓名" + gameState.name);
        $(".input_name").hide();
        //InputImg.innerHTML=getInputDiv(name);
        // InputImg.append(getInputDiv(name));
        // $(".waitParent").show();
        // downFile();
      });
    }
  });
}

export async function animationToPageResult() {
  await animationEnd(pageInput, FADE_OUT_800, 0);
  pageInput.hide();
  OutputImg.show();
  $(".pageCanvas").show();
}
