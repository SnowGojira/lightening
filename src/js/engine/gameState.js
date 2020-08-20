import {
  modPreload,
  animationToPageTwo,
  animationToPageThree,
  animationToPageFour,
  animationToPageFive,
  musicOptionsPlayer,
  animationToPageInput,
  submit,
} from "../ui/ui";
import gameAudio from "./audio";
import animationEnd from "../ui/animation";

const gameState = {
  count: 0,
  name: "",
  userActionsHandler(el) {
    //有计数逻辑
    gameState.count += parseInt(el.attr("data-value"));
    console.log("count:" + gameState.count);

    let domList = el[0].classList;

    if (domList.contains("q1_options")) {
      //音效
      gameAudio.play("btn");
      //转场
      console.log("p1->p2");
      animationToPageTwo();
    } else if (domList.contains("q2_options")) {
      //音效
      gameAudio.play("btn");
      //转场
      console.log("p2->p3");
      animationToPageThree();
    } else if (domList.contains("q3_options")) {
      //音效
      gameAudio.play("btn");
      //转场
      console.log("p3->p4");
      animationToPageFour();
      musicOptionsPlayer();
    } else if (domList.contains("q4_options")) {
      //音效
      gameAudio.play("btn");
      //转场
      console.log("p4->p5");
      animationToPageFive();
    } else if (domList.contains("q5_options")) {
      //音效
      gameAudio.play("q5");
      //转场
      console.log("p5->result");
      gameState.getResult();
    }
  },
  getResult() {
    //转场
    animationToPageInput();
    submit();
    // console.log(gameState.name);
  },
};

export default gameState;
