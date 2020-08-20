import $ from "jquery";
// import gameState from "../engine/gameState";

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
    $(".indicator").hide();
    selectOptions($(this));
    userActionHandler($(this));
  });
}
