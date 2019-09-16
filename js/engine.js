/*todo:2. make an imageLoader prototype
*  */

/*todo:1. make the audio prototype
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
