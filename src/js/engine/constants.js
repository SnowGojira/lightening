export const imageURL =
  "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/lightening/images/";
const audioURL =
  "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/lightening/assets/audio/";

const images = [
  { src: "pl_board.png", id: "o13" },
  { src: "pl_title.png", id: "o12" },
  { src: "pl_flicker.png", id: "o15" },
  { src: "logo.png", id: "o16" },

  { src: "g_board.png", id: "p13" },
  { src: "crystal.gif", id: "p12" },
  { src: "indicator.jpg", id: "p15" },
  { src: "input_box.png", id: "p16" },
  { src: "input_btn.png", id: "p18" },
  { src: "input_title.png", id: "p19" },
  { src: "inputBG.jpg", id: "p20" },

  { src: "light_board.png", id: "p21" },
  { src: "logo.png", id: "p22" },
  { src: "pink.gif", id: "p23" },
  { src: "pl_up.png", id: "p24" },
  { src: "ps_decorate.png", id: "p25" },
  { src: "ps_heart.png", id: "p26" },
  { src: "ps_title.png", id: "p30" },
  { src: "ps_title_en.png", id: "p31" },

  { src: "q1.png", id: "p32" },
  { src: "q1_ap.png", id: "p34" },
  { src: "q1_bp.png", id: "p37" },

  { src: "q2.png", id: "p38" },
  { src: "q3.png", id: "p43" },
  { src: "q4.png", id: "p50" },
  { src: "quiz2.png", id: "p250" },
  { src: "quiz3.png", id: "p264" },
  { src: "link_1.png", id: "p251" },
  { src: "link_2.png", id: "p252" },
  { src: "link_3.png", id: "p253" },
  { src: "link_4.png", id: "p254" },
  { src: "back_1.png", id: "p255" },
  { src: "back_2.png", id: "p256" },
  { src: "back_3.png", id: "p257" },
  { src: "back_4.png", id: "p258" },
  { src: "result_1.jpg", id: "p259" },
  { src: "result_2.jpg", id: "p260" },
  { src: "result_3.jpg", id: "p261" },
  { src: "result_4.jpg", id: "p262" },
  { src: "qrcode.png", id: "p263" },

  { src: "q4_play.png", id: "p54" },
  { src: "q4_pause.png", id: "p55" },
  { src: "q5.png", id: "p56" },

  { src: "quiz_board.png", id: "p64" },
  { src: "x_quiz_board.png", id: "p166" },
  { src: "x_light_board.png", id: "p167" },
  { src: "red.gif", id: "p65" },
  { src: "top1.png", id: "p60" },
  { src: "top2.png", id: "p61" },
  { src: "top3.png", id: "p71" },
  { src: "top4.png", id: "p72" },
  { src: "top5.png", id: "p73" },
  { src: "wait.png", id: "p74" },
  { src: "watch.gif", id: "p75" },
];

const audios = [
  "A.mp3",
  "B.mp3",
  "bgm.mp3",
  "btn.mp3",
  "P1.mp3",
  "q1.mp3",
  "q2_step.mp3",
  "q2_watch.mp3",
  "q5.mp3",
];

function imageArray() {
  return images.map((item) => imageURL + item.src);
}

function audioArray() {
  return audios.map((item) => audioURL + item);
}

export const RESOURCE_TO_PRELOAD = audioArray().concat(imageArray());

export const FADE_IN_800 = "fadeIn 0.8s ease-in";
export const FADE_IN_1000 = "fadeIn 1s ease-in";
export const FADE_IN_500 = "fadeIn 0.5s ease-in";
export const FADE_OUT_800 = "fadeOut 0.8s ease-out";
export const FADE_OUT_500 = "fadeOut 0.5s ease-out";
export const FADE_TOP_OUT = "fadeTopOut 1s linear";
export const MAIN_IN = "mainIn 1s 0.2s ease both";

export var count = 0;
