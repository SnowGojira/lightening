/*预加载逻辑*/

window.onload=function(){

    //预加载资源
    manifest = [
        {src: 'assets/audio/btn.mp3', id: 'sona2'},
        /*{src: 'asset/audio/right.mp3', id: 'sona3'},
        {src: 'asset/audio/running.mp3', id: 'sona4'},
        {src: 'asset/audio/start.mp3', id: 'sona5'},
        {src: 'asset/audio/wrong.mp3', id: 'sona6'},
        {src: 'asset/audio/bg.mp3', id: 'sona7'},*/

        {src: 'images/g_board.png', id: 'p13'},
        {src: 'images/crystal.gif', id: 'p12'},
        {src: 'images/indicator.gif', id: 'p15'},
        {src: 'images/input_box.png', id: 'p16'},
        {src: 'images/input_btn.png', id: 'p18'},
        {src: 'images/input_title.png', id: 'p19'},
        {src: 'images/inputBG.png', id: 'p20'},

        {src: 'images/light_board.png', id: 'p21'},
        {src: 'images/logo.png', id: 'p22'},
        {src: 'images/pink.gif', id: 'p23'},
        {src: 'images/pl_up.png', id: 'p24'},
        {src: 'images/ps_decorate.png', id: 'p25'},
        {src: 'images/ps_heart.png', id: 'p26'},
        {src: 'images/ps_title.png', id: 'p30'},
        {src: 'images/ps_title_en.png', id: 'p31'},

        {src: 'images/q1_a.png', id: 'p32'},
        {src: 'images/q1_a1.png', id: 'p33'},
        {src: 'images/q1_ap.png', id: 'p34'},
        {src: 'images/q1_b.png', id: 'p35'},
        {src: 'images/q1_b1.png', id: 'p36'},
        {src: 'images/q1_bp.png', id: 'p37'},

        {src: 'images/q2_a.png', id: 'p38'},
        {src: 'images/q2_a1.png', id: 'p40'},
        {src: 'images/q2_b.png', id: 'p41'},
        {src: 'images/q2_b1.png', id: 'p42'},

        {src: 'images/q3_a.png', id: 'p43'},
        {src: 'images/q3_a1.png', id: 'p44'},
        {src: 'images/q3_b.png', id: 'p45'},
        {src: 'images/q3_b1.png', id: 'p46'},
        {src: 'images/q3_c.png', id: 'p47'},
        {src: 'images/q3_c1.png', id: 'p48'},

        {src: 'images/q4_a.png', id: 'p50'},
        {src: 'images/q4_a1.png', id: 'p51'},
        {src: 'images/q4_b.png', id: 'p52'},
        {src: 'images/q4_b1.png', id: 'p53'},
        {src: 'images/q4_play.png', id: 'p54'},
        {src: 'images/q4_pause.png', id: 'p55'},

        {src: 'images/q5_a.png', id: 'p56'},
        {src: 'images/q5_a1.png', id: 'p57'},
        {src: 'images/q5_b.png', id: 'p58'},
        {src: 'images/q5_b1.png', id: 'p63'},
        {src: 'images/quiz_board.png', id: 'p64'},
        {src: 'images/red.gif', id: 'p65'},

        {src: 'images/top1.png', id: 'p60'},
        {src: 'images/top2.png', id: 'p61'},
        {src: 'images/top3.png', id: 'p71'},
        {src: 'images/top4.png', id: 'p72'},
        {src: 'images/top5.png', id: 'p73'},

        {src: 'images/wait.png', id: 'p74'},
        {src: 'images/watch.gif', id: 'p75'},

        /*{src: 'images/page7/btn3.png', id: 'p76'},
        {src: 'images/railway.png', id: 'p1'},
        {src: 'images/timer.png', id: 'p2'},
        {src: 'images/train.png', id: 'p3'},

        {src: 'images/title1/0.png', id: 't10'},
        {src: 'images/title1/1.png', id: 't11'},
        {src: 'images/title1/2.png', id: 't12'},
        {src: 'images/title1/3.png', id: 't13'},
        {src: 'images/title1/4.png', id: 't14'},
        {src: 'images/title1/5.png', id: 't15'},
        {src: 'images/title1/6.png', id: 't16'},
        {src: 'images/title1/7.png', id: 't17'},
        {src: 'images/title1/8.png', id: 't18'},
        {src: 'images/title1/9.png', id: 't19'},
        {src: 'images/title1/10.png', id: 't110'},
        {src: 'images/title1/11.png', id: 't111'},
        {src: 'images/title1/12.png', id: 't112'},
        {src: 'images/title1/13.png', id: 't113'},
        {src: 'images/title1/14.png', id: 't114'},*/

    ];
    loader = new createjs.LoadQueue(false);
    // 关键！----设置并发数
    loader.setMaxConnections(100);
    // 关键！---一定要将其设置为 true, 否则不起作用。
    loader.maintainScriptOrder=true;
    loader.installPlugin(createjs.Sound);
    loader.addEventListener('complete', handleComplete);//加载完成 调用handleComplete函数
    loader.addEventListener('progress', handleFileProgress);//加载完成 调用handleFileProgress函数
    loader.loadManifest(manifest);
};

function handleFileProgress(){//加载中函数
    var percent=loader.progress*100|0+'%';
    document.getElementById('loadPercent').innerHTML=percent+"%";
}
var upArrow = $('.pl_upArrow');
// var BGMAudio = document.getElementById("#BGM");
// var BGMAudio =?new Audio("./assets/audio/bgm.mp3");
// BGMAudio.loop=true;
function handleComplete(){
    $('#loadPercent').hide();
    upArrow.show();
}

/*向上滑动*/

var startY, moveY, moveSpace;
var pageLoad=$(".pageLoad");
var flickerBox=$(".pl_lightenBox");
var pageStart=$(".pageStart");
var startBoard=$(".g_board");

pageLoad.on("touchstart", function(e) {

    startY = e.originalEvent.touches[0].pageY;
    return startY;
});

pageLoad.on("touchmove", function(e) {
    moveY = e.originalEvent.touches[0].pageY;
    moveSpace = startY - moveY;
    if (moveSpace > 15) {
        // console.log("上滑之后需要执行的代码片段");
        $(".pl_logo").hide();
        upArrow.hide();
        flickerBox.animate({top:"-800px"}, 1000, function () {
                // console.log("动画结束");
                pageLoad.hide();
                pageStart.show();
                startBoard.animate({top:"0px"},800);
            }
        );
    }
});

/*pageStart 点亮动画逻辑*/
var heart=$(".ps_heartParent");
var sparkTitle=$("#startLight");
var quizPage=$(".quizPage");
var pageOne=$(".pageOne");
var q1Board=$(".q1_board");
var topOne=$(".top_one");
var quizOne=$(".quiz_one");
var optionOne=$(".q1_options");
var hint=$(".indicator");

function BGM(){

}
heart.on("click",function () {
    console.log("点击触发");

    sparkTitle.animate({opacity:"1.0"},800,function () {
       pageStart.animate({left:"-600px"},800,function () {
           quizPage.show();
           pageOne.show();
           quizInScene(q1Board,topOne,quizOne,optionOne);

       })
    });
});

function quizInScene(dom1,dom2,dom3,dom4) {
    dom1.addClass("mainIn");
    setTimeout(function () {
        dom2.show();
        dom2.animate({opacity:"1.0"},1000,function () {
            dom3.animate({opacity:"1.0"},500,function () {
                dom4.animate({opacity:"1.0"},500,function () {
                    hint.show();
                });
            });
        });
    },200);

    //dom2.animate({top:"0"},1000);

}

//调试使用之后关闭
// quizInScene(q1Board,topOne,quizOne,optionOne);

var count=0;
var btn=$(".q_optionContainer");
// var btnAudio=$("#btn_audio");
//点击按钮的通识属性
btn.on("click",function(){
    hint.hide();
    //计数
    count+=parseInt($(this).attr('data-value'));
    console.log("count:"+count);
    //变色反馈
    var id_str=$(this).attr('data-opt');
    console.log("id:"+id_str);
    $("#"+id_str).show();

    //添加音频元素
    var btnAudio = new Audio('./assets/audio/btn.mp3');
    Play(btnAudio);

});

function Play(audio) {
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function() {
        audio.play();
    }, false);
}
/*page1即将结束，进入page2*/
var pageTwo=$(".pageTwo");
var q2Board=$(".q2_board");
var topTwo=$(".top_two");
var quizTwo=$(".quiz_two");
var optionTwo=$(".q2_options");

optionOne.on("click",function(){
    pageOne.animate({opacity:"0"},500,function(){
        /*转场音乐1*/

        pageTwo.show();
        q2Board.addClass("mainIn");
        setTimeout(function () {
            topTwo.show();
            topTwo.animate({opacity:"1.0"},1000,function () {
                /*转场音乐2*/

                quizTwo.animate({opacity:"1.0"},500,function () {
                    optionTwo.animate({opacity:"1.0"},500,function () {
                        hint.show();
                    });
                });
            });
        },200);

    });
});

/*page2即将结束，进入page3*/
var pageThree=$(".pageThree");
var q3Board=$(".q3_board");
var topThree=$(".top_three");
var quizThree=$(".quiz_three");
var optionThree=$(".q3_options");

optionTwo.on("click",function () {
    pageTwo.animate({opacity:"0"},500,function(){
        /*转场音乐*/

        pageThree.show();
        quizInScene(q3Board,topThree,quizThree,optionThree);

    });
});


/*page3即将结束，进入page4*/
var pageFour=$(".pageFour");
var q4Board=$(".q4_board");
var topFour=$(".top_four");
var quizFour=$(".quiz_four");
var optionFour=$(".q4_options");
var musicOpt=$(".music");
optionThree.on("click",function () {
    pageThree.animate({opacity:"0"},500,function(){
        /*转场音乐*/

        pageFour.show();
        quizInScene(q4Board,topFour,quizFour,optionFour);
        setTimeout(function () {
            musicOpt.animate({opacity:"1.0"},500)
        },3000);
    });
});

/*关于page4的音乐播放逻辑*/

/*page4即将结束，进入page5*/
var pageFive=$(".pageFive");
var q5Board=$(".q5_board");
var topFive=$(".top_five");
var quizFive=$(".quiz_five");
var optionFive=$(".q5_options");

optionFour.on("click",function () {
    pageFour.animate({opacity:"0"},500,function(){
        /*转场音乐*/

        pageFive.show();
        quizInScene(q5Board,topFive,quizFive,optionFive);
    });
});

/*音乐播放方法*/
function audioPlay(audio) { //背景音乐
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function() {
        audio.pause();
    }, false);
}

function audioPause(audio) { //背景音乐
    audio.pause();
    document.addEventListener("WeixinJSBridgeReady", function() {
        audio.play();
    }, false);
}

/*page5即将结束，跳转输入框页面*/
var pageInput=$(".pageInput");

optionFive.on("click",function () {
    pageFive.animate({opacity:"0"},500,function(){
        quizPage.hide();
        pageInput.show();
        pageInput.animate({opacity:"1"},500);

    });
});

/*input的逻辑*/
var name;
var input = $(".input_content");
var submitBtn = $(".input_btn");
var InputImg=$(".inputImg");
var OutputImg=$("#outputImg");

submitBtn.on("click",function(){
    //姓名赋值
    name=input.val();

    if (typeof name === "undefined" || name == null || name === ""){
        console.log("重新取值");
    }else{

        //得分表

        $(".input_name").animate({opacity:"0"},1000,function () {
            console.log("姓名"+name);
            $(".input_name").hide();
            //InputImg.innerHTML=getInputDiv(name);
            InputImg.append(getInputDiv(name));
            $(".waitParent").show();
            downFile();
            /*$(".waitParent").animate({opacity:"0"},1000,function () {
                downFile();
            });*/
            setTimeout(function () {
                pageInput.animate({opacity:"0"},1000,function(){
                    pageInput.hide();
                    $(".pageCanvas").show();
                }) ;
            },6000);
        });
        // $(".waitParent").show();
        // downFile();
    }
});

$(".wait").on("click",function () {
    downFile();
    setTimeout(function () {
        pageInput.animate({opacity:"0"},1000,function(){
            pageInput.hide();
            $(".pageCanvas").show();
        }) ;
    },6000);
});

function innDiv(name,id){
    var innerDiv='<img class="postBG absolute" src="images/result_'+id+'.jpg" alt="result"/>';
    innerDiv += '<p class="absolute NumType nickName">'+name+'</p>';
    innerDiv += '<img class="absolute QRcode" src="images/qr.jpg" alt="qrcode"/>';

    return innerDiv;
}

function downFile() {
    console.log(".................")
    var targetDom = InputImg;
    var copyDom = targetDom.clone();
    var cwidth=targetDom.width();
    var cheight=targetDom.height();
    console.log(cwidth);
    console.log(cheight);
//
    //要将 canvas 的宽高设置成容器宽高的 2 倍
    var canvas = document.createElement("canvas");
    canvas.width = cwidth * 2;
    canvas.height = cheight * 2;
    canvas.style.width = cwidth + "px";
    canvas.style.height = cheight + "px";
    var context = canvas.getContext("2d");
    //然后将画布缩放，将图像放大两倍画到画布上
    context.scale(2,2);

    html2canvas($(".inputImg"),{
        // $(".myImg")是你要复制生成canvas的区域，可以自己选
        allowTaint: true,
        taintTest: true,
        canvas:canvas,
        onrendered:function(canvas){
            dataURL =canvas.toDataURL("image/png");
//           $("body").append(canvas);
            console.log(dataURL);
            OutputImg.attr('src',dataURL);

            $(".inputImg").hide();
            OutputImg.show();
        },
        width:cwidth*2,
        height:cheight*2
    })

}

function getInputDiv(name) {
    var inner;
    if(count<60){
        console.log("黑洞");
        inner=innDiv(name,1);
        //InputImg.innerHTML= innDiv(name,1);

        return inner;
    }else if(count<75 && count >=60){
        console.log("棱镜");
        inner=innDiv(name,2);
        //InputImg.innerHTML= innDiv(name,2);
        return inner;
    }else if(count<90 && count >=75){
        console.log("水母");
        inner=innDiv(name,3);
        // InputImg.innerHTML= innDiv(name,3);
        return inner;
    }else if(count>=90){
        console.log("太阳");
        inner=innDiv(name,4);
        // InputImg.innerHTML= innDiv(name,4);
        return inner;
    }
}

