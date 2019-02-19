/*预加载逻辑*/
window.onload=function(){
    //预加载资源
    manifest = [
        /*{src: 'asset/audio/out.mp3', id: 'sona2'},
        {src: 'asset/audio/right.mp3', id: 'sona3'},
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
        flickerBox.animate(
            {top:"-800px"},
            1000,
            function () {
                // console.log("动画结束");
                pageLoad.hide();
                pageStart.show();
                startBoard.animate({top:"0px"},800);
            }
        );
    }
});

/*pageStart 点亮动画逻辑*/
