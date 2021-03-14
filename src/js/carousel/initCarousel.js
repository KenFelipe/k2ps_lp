const initSwiper = () => {
    const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
    // autoplay: {
    //   delay: 1700,
    //   disableOnInteraction: false,
    // },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        490: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        720: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        721: {
        slidesPerView: 3,
        spaceBetween: 20,
        }
    }
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    }); 
    return swiper
}

const initSlideItems = () => {
    const sliderWrapper = document.getElementsByClassName('swiper-wrapper').item(0)

    const n = 14

    for(let i = 0; i < n; i++) {
        const item = document.createElement('div')
        item.className = 'swiper-slide'
        item.innerHTML = `Slide ${i + 1}`
        // const [red, blue, green] = Array(3).fill(0).map(() => Math.random() * 255)
        // const bgStyle =`background-color: rgb(${red}, ${blue}, ${green});` 
        // item.style = `background: url('https://picsum.photos/400/400?grayscale&random=${i + 1}');`
        sliderWrapper.appendChild(item)
    }
}

// initSlideItems()
initSwiper()