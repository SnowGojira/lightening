const buttons = document.querySelector(".q_optionContainer");

export default function initButtons() {
  //点击
  buttons.addEventListener("click", function () {
    //有UI逻辑
    hint.hide();
    //变色反馈
    var id_str = $(this).attr("data-opt");
    console.log("id:" + id_str);
    $("#" + id_str).show();
    //有计数逻辑
    count += parseInt($(this).attr("data-value"));
    console.log("count:" + count);

    //音效
    audioPlay("btn");
  });
}
