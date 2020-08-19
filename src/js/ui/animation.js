export default function animationEnd(dom, animStyleStr) {
  return new Promise((resolve) => {
    const onAnimationEndCb = () => {
      dom.removeEventListener("animationend", onAnimationEndCb);
      resolve();
    };
    dom.addEventListener("animationend", onAnimationEndCb);
    dom.style.animation = animStyleStr;
  });
}
