/*预加载逻辑*/
window.onload=function(){
    //预加载资源
    manifest = [
        /*{src: 'assets/audio/btn.mp3', id: 'sona2'},
        {src: 'assets/audio/bgm.mp3', id: 'sona3'},*/
        /*{src: 'assets/audio/A.mp3', id: 'sona4'},
        {src: 'assets/audio/B.mp3', id: 'sona5'},
        {src: 'assets/audio/P1.mp3', id: 'sona6'},
        {src: 'assets/audio/q1.mp3', id: 'sona7'},
        {src: 'assets/audio/q2_step.mp3', id: 'sona8'},
        {src: 'assets/audio/q2_watch.mp3', id: 'sona9'},
        {src: 'assets/audio/q5.mp3', id: 'sona10'},*/
        {src: 'images/pl_board.png', id: 'o13'},
        {src: 'images/pl_title.png', id: 'o12'},
        {src: 'images/pl_flicker.png', id: 'o15'},
        {src: 'images/logo.png', id: 'o16'},

        {src: 'images/g_board.png', id: 'p13'},
        {src: 'images/crystal.gif', id: 'p12'},
        {src: 'images/indicator.jpg', id: 'p15'},
        {src: 'images/input_box.png', id: 'p16'},
        {src: 'images/input_btn.png', id: 'p18'},
        {src: 'images/input_title.png', id: 'p19'},
        {src: 'images/inputBG.jpg', id: 'p20'},

        {src: 'images/light_board.png', id: 'p21'},
        {src: 'images/logo.png', id: 'p22'},
        {src: 'images/pink.gif', id: 'p23'},
        {src: 'images/pl_up.png', id: 'p24'},
        {src: 'images/ps_decorate.png', id: 'p25'},
        {src: 'images/ps_heart.png', id: 'p26'},
        {src: 'images/ps_title.png', id: 'p30'},
        {src: 'images/ps_title_en.png', id: 'p31'},

        {src: 'images/q1.png', id: 'p32'},
        {src: 'images/q1_ap.png', id: 'p34'},
        {src: 'images/q1_bp.png', id: 'p37'},

        {src: 'images/q2.png', id: 'p38'},
        {src: 'images/q3.png', id: 'p43'},
        {src: 'images/q4.png', id: 'p50'},
        {src: 'images/quiz2.png', id: 'p250'},
        {src: 'images/quiz3.png', id: 'p264'},
        {src: 'images/link_1.png', id: 'p251'},
        {src: 'images/link_2.png', id: 'p252'},
        {src: 'images/link_3.png', id: 'p253'},
        {src: 'images/link_4.png', id: 'p254'},
        {src: 'images/back_1.png', id: 'p255'},
        {src: 'images/back_2.png', id: 'p256'},
        {src: 'images/back_3.png', id: 'p257'},
        {src: 'images/back_4.png', id: 'p258'},
        {src: 'images/result_1.jpg', id: 'p259'},
        {src: 'images/result_2.jpg', id: 'p260'},
        {src: 'images/result_3.jpg', id: 'p261'},
        {src: 'images/result_4.jpg', id: 'p262'},
        {src: 'images/qrcode.png', id: 'p263'},

        {src: 'images/q4_play.png', id: 'p54'},
        {src: 'images/q4_pause.png', id: 'p55'},
        {src: 'images/q5.png', id: 'p56'},

        {src: 'images/quiz_board.png', id: 'p64'},
        {src: 'images/x_quiz_board.png', id: 'p166'},
        {src: 'images/x_light_board.png', id: 'p167'},
        {src: 'images/red.gif', id: 'p65'},
        {src: 'images/top1.png', id: 'p60'},
        {src: 'images/top2.png', id: 'p61'},
        {src: 'images/top3.png', id: 'p71'},
        {src: 'images/top4.png', id: 'p72'},
        {src: 'images/top5.png', id: 'p73'},
        {src: 'images/wait.png', id: 'p74'},
        {src: 'images/watch.gif', id: 'p75'},

    ];

    loader = new createjs.LoadQueue(false);
    // 关键！----设置并发数
    loader.setMaxConnections(100);
    // 关键！---一定要将其设置为 true, 否则不起作用。
    loader.maintainScriptOrder=true;
    // loader.installPlugin(createjs.Sound);
    loader.loadManifest(manifest);
    // loader.addEventListener('progress', handleFileProgress);//加载完成 调用handleFileProgress函数
    // loader.addEventListener('complete', handleComplete);//加载完成 调用handleComplete函数


};

/*preload 逻辑*/
var width = 100,
    // The PerformanceTiming interface represents timing-related performance information for the given page.
    perfData = window.performance.timing,
    // EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    EstimatedTime = -perfData.loadEventEnd,
    time = parseInt((EstimatedTime/100)%60)*100;
    console.log(time);
// Percentage Increment Animation
var PercentageID = $("#loadPercent"),
    start = 0,
    end = 100;

animateValue(PercentageID, start, end, time);

function animateValue(id, start, end, duration) {

    var range = end - start,
        current = start,
        increment = end > start? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range)),
        obj = $(id);

    var timer = setInterval(function() {
        current += increment;
        $(obj).text(current + "%");
        $(".pl_head").css("opacity",current/100);
        //obj.innerHTML = current;
        if (current === end) {
            console.log("加载结束");
            clearInterval(timer);
            StartPageAnimete(2000);
        }
    }, stepTime);
}


//--创建页面监听，等待微信端页面加载完毕 触发音频播放
document.addEventListener('DOMContentLoaded', function () {
    console.log("自动播放");
    function audioAutoPlay() {
        document.getElementById('BGM').play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            document.getElementById('BGM').play();
        }, false);
    }
    audioAutoPlay();
});
//--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
function audioAutoPlay() {
    document.getElementById('BGM').play();

    document.removeEventListener('touchstart',audioAutoPlay);
}
document.addEventListener('touchstart', audioAutoPlay);

/*percent 显示函数*/
var percent;
function handleFileProgress(){//加载中函数
    percent=(loader.progress*10|0)+90;
    $(".pl_head").css("opacity",percent);
    $("#loadPercent").text(percent+ "%");
    console.log(percent);
}

/*加载完成*/
var upArrow = $('.pl_upArrow');

function handleComplete(){
    // console.log(j);
    console.log("开始调用Complete");
    StartPageAnimete(2000);
}

function StartPageAnimete(delaytime){
    setTimeout(function () {
        $('.pageTest').animate({opacity:"0"},800,function () {
            $('.pageTest').hide();
            $('.pageLoad').show();
            $('.pageLoad').animate({opacity:"1.0"},800);
        });
    },delaytime);
}

/*音乐开始播放*/
//创建播放与停止的函数

//创建audio play和audio pause的函数
function audioPlay(id_str){
    var audio = document.getElementById(id_str);
    audio.play();
    audio.muted=false;
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
}

function audioPause(id_str){
    var audio = document.getElementById(id_str);
    audio.pause();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.pause();
    }, false);
}
/*备选play如果微信不播放音乐时*/
function Play(id_str){
    var audio = document.getElementById(id_str);
    audio.play();
    audio.muted=true;
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
}

/*pageLoad向上滑动*/
var startY, moveY, moveSpace;
var pageLoad=$(".pageLoad");
var flickerBox=$(".pl_lightenBox");
var pageStart=$(".pageStart");
var startBoard=$(".g_board");
//点击按钮的通识属性
var count=0;
var btn=$(".q_optionContainer");

pageLoad.on("touchstart", function(e) {
    audioPlay('heart');
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

    // var heartAudio = new Audio('./assets/audio/p1.mp3');
    // Play(heartAudio);
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

heart.on("click",function () {
    console.log("点击触发");
    audioPlay('q1');
    audioPause('heart');
    Play('btn');



    sparkTitle.animate({opacity:"1.0"},800,function () {
       pageStart.animate({top:"-800px"},800,function () {
           quizPage.show();
           pageOne.show();
           quizInScene(q1Board,topOne,quizOne,optionOne);

       })
    });

});
/*动画全局属性*/
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



btn.on("click",function(){
        hint.hide();
        //计数
        count+=parseInt($(this).attr('data-value'));
        console.log("count:"+count);
        //变色反馈
        var id_str=$(this).attr('data-opt');
        console.log("id:"+id_str);
        $("#"+id_str).show();
        //音效
        audioPlay('btn');

});

$(".q_optionContainerKiss").on("click",function(){
    hint.hide();
    //计数
    count+=parseInt($(this).attr('data-value'));
    console.log("count:"+count);
    //变色反馈
    var id_str=$(this).attr('data-opt');
    console.log("id:"+id_str);
    $("#"+id_str).show();
    //音效
    audioPlay('q5');
});





/*page1即将结束，进入page2*/
Function.prototype.bind = function(parent) {
    var f = this;
    var args = [];

    for (var a = 1; a < arguments.length; a++) {
        args[args.length] = arguments[a];
    }
    var temp = function() {
        return f.apply(parent, args);
    }
    return(temp);
};

var pageTwo=$(".pageTwo");
var q2Board=$(".q2_board");
var topTwo=$(".top_two");
var quizTwo=$(".quiz_two");
var optionTwo=$(".q2_options");
var watch = document.getElementById('watch');

optionOne.on("click",function(){
    /*转场音乐1*/
    audioPlay('step');
    // audioPlay('watch');
    watch.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        watch.play();
    }, false);

    //
    /*var data1=0;
    function count1(){
        audioPlay('watch');
        console.log("count1:",data1++);
    }
    setInterval(count1,2500);*/

    // setTimeout(function () {
    //     audioPlay('watch');
    // }.bind(this),2500);


    pageOne.animate({opacity:"0"},500,function(){

        // audioPlay('watch');

        pageTwo.show();
        q2Board.addClass("mainIn");
        setTimeout(function () {
            topTwo.show();
            topTwo.animate({opacity:"1.0"},1500,function () {
                quizTwo.animate({opacity:"1.0"},500,function () {

                    optionTwo.animate({opacity:"1.0"},500,function () {
                        hint.show();
                        watch.muted=false;
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
    /*音乐*/
    audioPause('watch');
    pageTwo.animate({opacity:"0"},500,function(){
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
        // document.getElementById("BGM").play();
        pageFour.show();
        quizInScene(q4Board,topFour,quizFour,optionFour);
        setTimeout(function () {
            musicOpt.animate({opacity:"1.0"},500);
        },2000);

    });
});


/*关于page4的音乐播放逻辑*/
var musicA=$(".q4_a_music");
musicA.on("click",function () {
    audioPause('BGM');
    audioPause('B');
    audioPlay('A');
    // document.getElementById("BGM").pause();
    // document.getElementById("A").play();
    // document.getElementById("B").pause();
    // var aAudio = new Audio('./assets/audio/A.mp3');
    // Play(aAudio);
});

var musicB=$(".q4_b_music");
musicB.on("click",function () {
    audioPause('BGM');
    audioPause('A');
    audioPlay('B');
    // document.getElementById("BGM").pause();
    // document.getElementById("B").play();
    // document.getElementById("A").pause();
});



/*page4即将结束，进入page5*/
var pageFive=$(".pageFive");
var q5Board=$(".q5_board");
var topFive=$(".top_five");
var quizFive=$(".quiz_five");
var optionFive=$(".q5_options");

optionFour.on("click",function () {
    /*转场音乐*/
    audioPause('A');
    audioPause('B');
    // setTimeout(function () {
    //     audioPlay('q5');
    // },2500);
    pageFour.animate({opacity:"0"},500,function(){
        pageFive.show();
        audioPlay('BGM');
        // document.getElementById("BGM").play();
        quizInScene(q5Board,topFive,quizFive,optionFive);
    });
});

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

        });
        // $(".waitParent").show();
        // downFile();
    }
});



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

            setTimeout(function () {
                pageInput.animate({opacity:"0"},1000,function(){
                    pageInput.hide();
                    OutputImg.show();
                    $(".pageCanvas").show();
                }) ;
            },10000);

        },
        width:cwidth*2,
        height:cheight*2
    })

}
function innDiv(name,id){
    var innerDiv='<img class="postBG absolute" src="images/result_'+id+'.jpg" alt="result"/>';
    innerDiv += '<p class="absolute NumType nickName">'+name+'</p>';
    innerDiv += '<img class="absolute QRcode" src="images/qrcode.png" alt="qrcode"/>';

    $(".link").attr('src',"images/link_"+id+".png");
    $(".back").attr('src',"images/back_"+id+".png");
    return innerDiv;
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

var link_url='http://www.17xpw.com/2019/index.php/index/?uid=uqYNHhyTo';
var link=$(".link");
link.on("click",function () {
    window.location.href=link_url;
});

//重新加载
var reload=$(".back");
reload.on("click",function () {
    window.location.reload();
});