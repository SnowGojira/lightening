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
