//["INIT","START","QUIZ1","QUIZ2","QUIZ3","QUIZ4","QUIZ5","result"]
import { preloadHandler } from "./preload";
import { modPreload } from "../ui/ui";
const gameState = {
  current: "PRELOAD",
  count: 0,
  quiz1() {
    //this.current = "INIT";
    console.log("init");
  },
  userActionsHandler(el) {
    console.log(el.classList);

    //有计数逻辑
    gameState.count += parseInt(el.attr("data-value"));
    console.log("count:" + gameState.count);

    let domList = el[0].classList;

    if (domList.contains("q1_options")) {
      //音效
      //audioPlay("btn");
      //转场
      console.log("p1->p2");
    }
  },
};

export default gameState;
