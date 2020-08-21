# 网易 H5 项目 lightening

## 项目说明

这个项目其实的逻辑交互其实很简单：
测试题，根据分数打印出不同的海报，海报图片可以存储在手机上。

## version 1

最开始我直接使用 vanilla JS 进行编写，使用的工具有：

- createJS 里的 preload.js 进行预加载
- wechat 进行分享
- html2canvas 进行画布打印

动画我使用：

- setTimeout 控制时序
- css-animation 来完成动画

难点：

- 动画的时间轴
- 画布打印：用的是 html2canvas.min.js 打印效果不尽如人意，分辨率上想了很多办法。最后使用放大两倍，在用 css 压缩回来的方法解决：

```javascript
function downFile(inputImg, outputImg) {
  var cwidth = inputImg.width();
  var cheight = inputImg.height();
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
      //...
    },
    width: cwidth * 2,
    height: cheight * 2,
  });
}
```

## version2

由于 vanilla JS 写的代码实在混乱，于是使用 parcel 打包工具，ES6 module 来重构代码。

### 工具包重选

为了能用 yarn 安装，工具包进行重选：

- html2canvas,jquery 有自己的 npm 包，直接替换

- 预加载由 createJS --> preload-it
- 暂时不需要 wechat 先删除
- 用 ESlint prettier 进行语法矫正

### html2canvas 的坑

html2canvas 变化很大，使用起来出了很多的坑。html2canvas 虽然有 CORS 跨域的接口，但我实验了很久就是渲染不出来。我在网上调研了一下。`目前html2canvas渲染图片只能是同源的这个结论是比较可靠的`。

### parcel 的图片路径问题

如果你的 index 里面使用了

```html
<image src="/image/picture.png" />
```

恭喜你最后一定找不到。因为你文件包里面 image 已经被编译成`picture819827109.png`这种感觉的了。
解决方法有：

- 使用 cdn 网络地址
- 使用相对路径

```javascript
import imageUrl from "/image/location";
```

- 使用 css 装图片

```css
.div {
  background: url("./image/location");
}
```

### 动画时序

setTimeout 实在不太稳当，这次控制时序的方法是 asnyc await。本质上是 promise 控制时序。
