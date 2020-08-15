//////////////////////////////////////the variables/////////////////////
const file_list = [
    'assets/audio/A.mp3',
    'assets/audio/B.mp3',
    'assets/audio/bgm.mp3',
    'assets/audio/btn.mp3',
    'assets/audio/P1.mp3',
    'assets/audio/q1.mp3',
    'assets/audio/q2_step.mp3',
    'assets/audio/q2_watch.mp3',
    'assets/audio/q5.mp3',
    'assets/font/hanzhen.ttf',

    'images/back_1.png',
    'images/back_2.png',
    'images/back_3.png',
    'images/back_4.png',
    'images/crystal.gif',
    'images/desc.png',
    'images/g_board.png',
    'images/hand.png',
    'images/head.png',
    'images/indicator.jpg',
    'images/input_box.png',
    'images/input_btn.png',
    'images/input_title.png',
    'images/inputBG.jpg',

    'images/light_board.png',
    'images/link_1.png',
    'images/link_2.png',
    'images/link_3.png',
    'images/link_4.png',
    'images/logo.png',
    'images/pink.gif',
    'images/pl_board.png',
    'images/pl_flicker.png',
    'images/pl_title.png',
    'images/pl_up.png',
    'images/ps_decorate.png',
    'images/ps_heart.png',
    'images/ps_title.png',
    'images/ps_title_en.png',
    'images/q1.png',
    'images/q1_ap.png',
    'images/q1_bp.png',
    'images/q2.png',
    'images/q3.png',
    'images/q4.png',
    'images/q4_pause.png',
    'images/q4_play.png',
    'images/q5.png',
    'images/qrcode.png',
    'images/quiz2.png',
    'images/quiz3.png',
    'images/quiz_board.png',
    'images/red.gif',
    'images/result_1.jpg',
    'images/result_2.jpg',
    'images/result_3.jpg',
    'images/result_4.jpg',
    'images/top1.png',
    'images/top2.png',
    'images/top3.png',
    'images/top4.png',
    'images/top5.png',
    'images/wait.png',
    'images/watch.gif',
    'images/x_quiz_board.png',
    'images/x_light_board.png'
];
////////////////////////////////////the prototype///////////////////////
/*todo:1. make the audio prototype
       2. use more stable preload model
       3. use the mvc model to manage the code
* */
//audio
function Sound (id_str){
    let url = 'assets/audio/'+id_str+'.mp3';
    this.audio = new Audio(url);
}
Sound.prototype.play = function () {
    // console.log("sound play is triggered "+ this.url);
    let audio = this.audio;

    if(audio){
        audio.play().catch(e =>
            console.log("sound play method has something wrong: "+e)
        );
        document.addEventListener("WeixinJSBridgeReady", () => {
            audio.play().catch(e =>
                console.log("sound wechat play method has something wrong: "+e)
            );
        }, false);
    }
};
Sound.prototype.pause = function(){
    let audio = this.audio;
    audio.pause();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.pause();
    }, false);
};

/*todo:2. make a button prototype with a sound effect
*  */
function Button(id,audio){
    this.id = id;
    this.audio  = audio;
}

Button.prototype.click = function (cb) {
    $(this.id).on('click',function () {
        this.audio.play();
        cb();
    })
}

/////////////////////////////////////Initiate objects//////////////////////////
var audio_bgm = new Sound('bgm'),
    audio_A = new Sound('A'),
    audio_B = new Sound('B'),
    audio_heart = new Sound('P1'),
    audio_step = new Sound('q2_step'),
    audio_watch = new Sound('q2_watch'),
    audio_q5 = new Sound('q5'),
    audio_q1 = new Sound('q1'),
    audio_btn = new Sound('btn');

var myLoader = new html5Preloader();
    myLoader.addFiles(file_list);

const btn_heart = new Button(".ps_heartParent",audio_btn);