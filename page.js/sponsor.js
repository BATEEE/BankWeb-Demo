// const listImage = document.querySelector('.list-images');
// const imgs = document.getElementsByTagName('img');
// const btnLeft = document.querySelector('.btn-left');
// const btnRight = document.querySelector('.btn-right');
// const length = imgs.length;
// let current = 0

// const handleChangeSlide = () => {
//     if(current == length - 1) {
//         current = 0;
//         let width = imgs[0].offsetWidth;
//         listImage.style.transform = `translateX(0px)`;
//         document.querySelector('.active').classList.remove('active');
//         document.querySelector('.item-' + current).classList.add('active');
//     }
//     else {
//         let width = imgs[0].offsetWidth;
//         listImage.style.transform = `translateX(${width * -1 * ++current}px`;
//         document.querySelector('.active').classList.remove('active');
//         document.querySelector('.item-' + current).classList.add('active');
//     }
// }

// let handleEventChangeSlide = setInterval(handleChangeSlide , 4000);

// btnRight.addEventListener('click', () => {
//     clearInterval(handleEventChangeSlide);
//     handleChangeSlide();
//     handleEventChangeSlide = setInterval(handleChangeSlide , 4000);
// });

// btnLeft.addEventListener('click', () => {
//     clearInterval(handleEventChangeSlide);
//     if(current == 0) {
//         current = length - 1;
//         let width = imgs[0].offsetWidth;
//         listImage.style.transform = `translateX(${width * -1 * current}px)`;
//         document.querySelector('.active').classList.remove('active');
//         document.querySelector('.item-' + current).classList.add('active');
//     }
//     else {
//         let width = imgs[0].offsetWidth;
//         listImage.style.transform = `translateX(${width * -1 * --current}px`;
//         document.querySelector('.active').classList.remove('active');
//         document.querySelector('.item-' + current).classList.add('active');
//     }
//     handleEventChangeSlide = setInterval(handleChangeSlide , 4000);
// })
document.addEventListener('DOMContentLoaded', () => {
    const slideShow = document.querySelector('.slide-show');
    const slide = document.querySelector('.slides');
    const nextBtn = document.querySelector('.btn-right');
    const prevBtn = document.querySelector('.btn-left');
    const interval = 3000;
    
    let slides = document.querySelectorAll('.slide'); 
    let index = 1;
    let slideId;
    
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);  
    
    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';
    
    slide.append(firstClone);
    slide.prepend(lastClone);
    
    const slideWidth = slides[index].clientWidth;
    
    const startSlice = () => {
        slideId = setInterval(() => {
            moveToNextSlide();
        }, interval)
    }
    
    slide.style.transform = `translateX(${-slideWidth * index}px)`;

    const getSlides = () => document.querySelectorAll('.slide');
    
    const moveToNextSlide = () => {
        slides = getSlides();
        if(index >= slides.length - 1) return;
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '.5s';
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.item-' + index).classList.add('active');
    }
    
    const moveToPreviousSlide = () => {
        if(index <= 0) return;
        index--;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '.5s';
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.item-' + index).classList.add('active');
    }
    
    slide.addEventListener('transitionend', () => {
        slides = document.querySelectorAll('.slide'); 
        if(slides[index].id === firstClone.id) {
            slide.style.transition = 'none';
            index = 1;
            slide.style.transform = `translateX(${-slideWidth * index}px)`;
        }
    
        if(slides[index].id === lastClone.id) {
            slide.style.transition = 'none';
            index = slides.length - 2;
            slide.style.transform = `translateX(${-slideWidth * index}px)`;
        }
    
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.item-' + index).classList.add('active');
    })
    
    slideShow.addEventListener('mouseenter', () => {
        clearInterval(slideId);
    })
    
    slideShow.addEventListener('mouseleave', startSlice)
    
    nextBtn.addEventListener('click', moveToNextSlide);
    prevBtn.addEventListener('click', moveToPreviousSlide);
    
});
