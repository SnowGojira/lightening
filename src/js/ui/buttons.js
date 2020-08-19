import $ from "jquery";
import gameState from "../engine/gameState";

const buttons = $(".q_optionContainer");

export default function initButtons() {
  //点击
  buttons.on("click", function () {
    console.log($(this)[0].classList);

    //变色反馈
    var id_str = $(this).attr("data-opt");
    console.log("id:" + id_str);
    $("#" + id_str).show();
    //有计数逻辑
    gameState.count += parseInt($(this).attr("data-value"));
    console.log("count:" + gameState.count);

    //音效
    //audioPlay("btn");
  });
}
