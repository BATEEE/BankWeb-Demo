function scrollToUtilities () {
    let utilitiesTop = document.querySelector('.utilities').offsetTop;
    let menuHeight = document.querySelector(".menu-collapse").offsetHeight;

    window.scrollTo(0, utilitiesTop - menuHeight + 3);
}

function scrollToSupport () {
    let supportTop = document.getElementById('support').offsetTop;
    let menuHeight = document.querySelector(".menu-collapse").offsetHeight;

    window.scrollTo(0, supportTop - menuHeight + 3 + 60);
}

function scrollToTransfer () {
    let transferTop = document.getElementById('transfer').offsetTop;
    let menuHeight = document.querySelector(".menu-collapse").offsetHeight;

    window.scrollTo(0, transferTop - menuHeight + 3 - 3);
}