//["INIT","START","QUIZ1","QUIZ2","QUIZ3","QUIZ4","QUIZ5","result"]
import { preloadHandler } from "./preload";
import { modPreload } from "../ui/ui";
const gameState = {
  current: "PRELOAD",
  count: 0,
  controller() {
    if (this.current === "PRELOAD") {
      this.preload();
    } else if (this.current === "INIT") {
      this.init();
    }
  },
  preload() {
    preloadHandler(modPreload);
  },
  init() {
    //this.current = "INIT";
    console.log("init");
  },
  start() {
    this.current = "START";
    console.log("start");
  },
  userActionsHandler(icon) {
    console.log(icon);
  },
};

export default gameState;
