function initCarousel(pricesData) {
    setSlideItems()
    initSwiper()

    function setSlideItems() {
        const sliderWrapper = document.getElementById('plans-swiper-wrapper')

        pricesData.data.forEach(data => {
            const src = data.imgUrl
            const header = data.header
            const price = data.content.replace(/<(.+?)>/gs, '<p>$1</p>')

            const cardTemplate = `    
                <div class="card swiper-slide">
                    <img src="${src}" alt="" class="card__img">
                    <div class="card-content">
                        <div class="card-content__header">${header}</div>
                        <div class="card-content__text">${price}</div>
                    </div>
                </div>
            `
            sliderWrapper.innerHTML += cardTemplate
        })
    }

    function initSwiper() {
        const autoplayInterval = pricesData.autoplayIntervalMilliSec

        const autoplayConfig = autoplayInterval != 0 ? { 
            autoplay: {
                delay: autoplayInterval,
                disableOnInteraction: true,
            } 
        } : {}

        const swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            centeredSlides: true,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 'auto',
            spaceBetween: 10,
            ...autoplayConfig
        }) 

        return swiper
    }
}