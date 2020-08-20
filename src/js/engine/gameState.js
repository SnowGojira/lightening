import {
  modPreload,
  animationToPageTwo,
  animationToPageThree,
  animationToPageFour,
  animationToPageFive,
  musicOptionsPlayer,
  animationToPageInput,
  submit,
  innDiv,
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
  divHandler() {
    let inner;
    if (this.count < 60) {
      // console.log("黑洞");
      inner = innDiv(this.name, 1);
    } else if (this.count < 75 && this.count >= 60) {
      // console.log("棱镜");
      inner = innDiv(this.name, 2);
    } else if (this.count < 90 && this.count >= 75) {
      // console.log("水母");
      inner = innDiv(this.name, 3);
    } else if (this.count >= 90) {
      // console.log("太阳");
      inner = innDiv(this.name, 4);
    }

    return inner;
  },
};

export default gameState;
