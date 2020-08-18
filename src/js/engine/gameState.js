//["INIT","START","QUIZ1","QUIZ2","QUIZ3","QUIZ4","QUIZ5","result"]
const gameState = {
  current: "INIT",
  count: 0,
  controller() {
    if (this.current === "init") {
      this.init();
    }
  },
  init() {
    this.current = "INIT";
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
