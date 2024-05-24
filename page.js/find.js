document.addEventListener("DOMContentLoaded", function () {
    let searchButton = document.querySelector('.right-under li:first-child');
    let searchButtonCollapse = document.querySelector('.find-box');

    let findPage = document.getElementById('find');
    
    searchButton.addEventListener('click', function () {
        findPage.style.display = 'block';
        setTimeout(() => {
            findPage.style.opacity = '1';
        }, 1);
    });

    searchButtonCollapse.addEventListener('click', function () {
        findPage.style.display = 'block';
        setTimeout(() => {
            findPage.style.opacity = '1';
        }, 1);
    });

    let closePage = document.querySelector('.icon-close');
    closePage.addEventListener('click', function () {
        findPage.style.opacity = '0';
        setTimeout(() => {
            findPage.style.display = 'none';
        }, 100);
    });
});