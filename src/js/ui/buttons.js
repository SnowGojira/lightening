import $ from "jquery";
import gameState from "../engine/gameState";

const buttons = $(".q_optionContainer");

function selectOptions(el) {
  //变色反馈
  var id_str = el.attr("data-opt");
  console.log("id:" + id_str);
  $("#" + id_str).show();
}

export default function initButtons(userActionHandler) {
  //点击
  buttons.on("click", function () {
    //console.log($(this)[0].classList);

    selectOptions($(this));
    userActionHandler($(this));
    //有计数逻辑
    // gameState.count += parseInt($(this).attr("data-value"));
    // console.log("count:" + gameState.count);

    //音效
    //audioPlay("btn");
  });
}
