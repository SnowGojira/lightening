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
  userActionsHandler(icon) {
    console.log(icon);
  },
};

export default gameState;
