import html2canvas from "html2canvas";
import $ from "jquery";
import { animationToPageResult } from "./ui";

export default function canvasEnd(targetDom, outputDom, opacity) {
  console.log(".................");
  // var targetDom = InputImg;
  //var copyDom = targetDom.clone();
  var cwidth = targetDom.width();
  var cheight = targetDom.height();
  console.log(cwidth);
  console.log(cheight);

  //要将 canvas 的宽高设置成容器宽高的 2 倍
  var canvas = document.createElement("canvas");
  canvas.width = cwidth * 2;
  canvas.height = cheight * 2;
  canvas.style.width = cwidth + "px";
  canvas.style.height = cheight + "px";
  var context = canvas.getContext("2d");
  //然后将画布缩放，将图像放大两倍画到画布上
  context.scale(2, 2);

  return new Promise((resolve) => {
    html2canvas(targetDom, {
      // $(".myImg")是你要复制生成canvas的区域，可以自己选
      allowTaint: true,
      taintTest: true,
      canvas: canvas,
      width: cwidth * 2,
      height: cheight * 2,
    }).then(function (canvas) {
      let dataURL = canvas.toDataURL("image/png");
      console.log(dataURL);
      outputDom.attr("src", dataURL);
      let imageData = outputDom.attr("src");
      targetDom.hide();
      animationToPageResult();
    });
  });
}

function downFile() {
  console.log(".................");
  var targetDom = InputImg;
  //var copyDom = targetDom.clone();
  var cwidth = targetDom.width();
  var cheight = targetDom.height();
  console.log(cwidth);
  console.log(cheight);

  //要将 canvas 的宽高设置成容器宽高的 2 倍
  var canvas = document.createElement("canvas");
  canvas.width = cwidth * 2;
  canvas.height = cheight * 2;
  canvas.style.width = cwidth + "px";
  canvas.style.height = cheight + "px";
  var context = canvas.getContext("2d");
  //然后将画布缩放，将图像放大两倍画到画布上
  context.scale(2, 2);

  html2canvas($(".inputImg"), {
    // $(".myImg")是你要复制生成canvas的区域，可以自己选
    allowTaint: true,
    taintTest: true,
    canvas: canvas,
    onrendered: function (canvas) {
      dataURL = canvas.toDataURL("image/png");
      //           $("body").append(canvas);
      console.log(dataURL);
      OutputImg.attr("src", dataURL);
      var imageData = OutputImg.attr("src");
      if (imageData !== null) {
        console.log("传值成功");
        //初次进入，防止海报黑屏进行延时
        $(".inputImg").hide();

        setTimeout(function () {
          pageInput.animate({ opacity: "0" }, 1000, function () {
            pageInput.hide();
            OutputImg.show();
            $(".pageCanvas").show();
          });
        }, 4000);
      } else {
        console.log("传值失败");
        downFile();
      }
    },
    width: cwidth * 2,
    height: cheight * 2,
  });
}
