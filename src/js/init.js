// import * as createjs from "createjs-module"
import { preloadHandler } from "./engine/preload";
import gameState from "./engine/gameState";
import {
  modPreload,
  modUpFlipper,
  modHeartStart,
  router,
  restart,
} from "./ui/ui";
import initButtons from "./ui/buttons";
import { RESOURCE_TO_PRELOAD } from "./engine/constants";

/*预加载逻辑*/
/*2月24日修改 删除了一些不必要的加载资源提升速度*/
window.onload = function () {
  //预加载
  preloadHandler(modPreload);
  //滑动翻页
  modUpFlipper();
  //点击小心心开始
  modHeartStart();
  //进入答题页
  initButtons(gameState.userActionsHandler);
  //跳转
  router();
  //重新开始
  restart();
};
