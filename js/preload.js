/*
var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/100)%60)*100;

// Percentage Increment Animation
var PercentageID = $("#loadPercent"),
    start = 0,
    end = 100,
    durTime = time;
animateValue(PercentageID, start, end, durTime);

function animateValue(id, start, end, duration) {

    var range = end - start,
        current = start,
        increment = end > start? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range)),
        obj = $(id);

    var timer = setInterval(function() {
        current += increment;
        $(obj).text(current + "%");
        //obj.innerHTML = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}*/


var loadedCount = 0; //número atual de imagens carregadas
var imagesToLoad = $('.photo').length; // número de slides com o recipiente .bcg
var loadingProgress = 0; // progresso da linha de tempo - começa a 0



$('.photo').imagesLoaded({
    background: true
}).progress( function( instance, image ) {
    loadProgress();
});





function loadProgress(imgLoad, image)
{
    // uma imagem mais foi carregada
    loadedCount++;
    loadingProgress = (loadedCount/imagesToLoad);

    // GSAP Timeline anima a barra de progresso
    TweenLite.to(progressTl, 0.7, {progress:loadingProgress, ease:Linear.easeNone});
}

var progressTl = new TimelineMax({paused: true, onUpdate: progressUpdate, onComplete: loadComplete})

//Anima a barra de progreeso
    .to($('.progress span'), 1, {width:'100vw', ease:Linear.easeNone});

//// à medida que a largura da barra de progresso se atualiza e cresce, colocamos a porcentagem carregada na tela
function progressUpdate()
{
    //the percentage loaded based on the tween's progress
    loadingProgress = Math.round(progressTl.progress() * 100);

    //colocamos a percentagem na tela
    $(".txt-perc").text(loadingProgress + '%');

}

function loadComplete() {

    // Saida do Preloader
    var preloaderOutTl = new TimelineMax();

    preloaderOutTl
        .to($('.progress'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn})
        .to($('.txt-perc'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn}, 0.1)
        .set($('body'), {className: '-=is-loading'})
        .set($('#intro'), {className: '+=is-loaded'})
        .to($('#preloader'), 0.7, {yPercent: 100, ease:Power4.easeInOut})
        .set($('#preloader'), {className: '+=is-hidden'})
        .from($('#intro .title'), 1, {autoAlpha: 0, ease:Power1.easeOut}, '-=0.2')
        .from($('#intro p'), 0.7, {autoAlpha: 0, ease:Power1.easeOut}, '+=0.2')
        .from($('.scroll-hint'), 0.3, {y: -20, autoAlpha: 0, ease:Power1.easeOut}, '+=0.1');

    return preloaderOutTl;
}
