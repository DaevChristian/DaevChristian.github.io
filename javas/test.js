window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};

const body = document.querySelector('html');

setTimeout(function () {
    body.classList.add('makeitscroll');
}, 3000);

