const gameAudio = {
  getAudio(id) {
    return document.getElementById(id);
  },
  play(id) {
    let audio = this.getAudio(id);
    audio.play();
    audio.muted = false;
  },
  pause(id) {
    let audio = this.getAudio(id);
    audio.pause();
    audio.muted = true;
  },
};

export default gameAudio;
