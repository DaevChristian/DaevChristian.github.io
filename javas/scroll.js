window.onscroll = function() {effectscroll()};

function effectscroll() {
    if (document.body.scroll > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("background").className = "intro-new"
    } else {
        document.getElementById("background").className = "intro-back-reverse"
    }
    if (document.body.scroll > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("infoback").className = "animation-infoback"
    } else {
        document.getElementById("infoback").className = "animation-infoback-reverse"
    }
};
