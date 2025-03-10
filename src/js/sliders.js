/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }

import Swiper from 'swiper';
import { Navigation, Controller, Parallax } from 'swiper/modules';

/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import '../scss/base/swiper.scss';

// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector('.hero__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер

    // const miniSlider = new Swiper('.hero__mini-slider', {
    //   // Вказуємо склас потрібного слайдера
    //   // Підключаємо модулі слайдера
    //   // для конкретного випадку
    //   modules: [Navigation, Controller],
    //   observer: true,
    //   loop: true,
    //   observeParents: true,
    //   slidesPerView: 'auto',
    //   slideToClickedSlide: true,
    //   spaceBetween: 20,
    //   //autoHeight: true,
    //   speed: 800,

    //   //touchRatio: 0,
    //   //simulateTouch: false,
    //   //loop: true,
    //   //preloadImages: false,
    //   //lazy: true,

    //   /*
    // 	// Ефекти
    // 	effect: 'fade',
    // 	autoplay: {
    // 		delay: 3000,
    // 		disableOnInteraction: false,
    // 	},
    // 	*/

    //   // Пагінація
    //   /*
    // 	pagination: {
    // 		el: '.swiper-pagination',
    // 		clickable: true,
    // 	},
    // 	*/

    //   // Скроллбар
    //   /*
    // 	scrollbar: {
    // 		el: '.swiper-scrollbar',
    // 		draggable: true,
    // 	},
    // 	*/

    //   // Кнопки "вліво/вправо"
    //   navigation: {
    //     prevEl: '.swiper-button-prev',
    //     nextEl: '.swiper-button-next',
    //   },
    //   /*
    // 	// Брейкпоінти
    // 	breakpoints: {
    // 		640: {
    // 			slidesPerView: 1,
    // 			spaceBetween: 0,
    // 			autoHeight: true,
    // 		},
    // 		768: {
    // 			slidesPerView: 2,
    // 			spaceBetween: 20,
    // 		},
    // 		992: {
    // 			slidesPerView: 3,
    // 			spaceBetween: 20,
    // 		},
    // 		1268: {
    // 			slidesPerView: 4,
    // 			spaceBetween: 30,
    // 		},
    // 	},
    // 	*/
    //   // Події
    //   on: {
    //     init: function (slider) {
    //       console.log(slider);
    //       console.log(slider.slides);

    //       slider.slides.forEach(slide => {
    //         const imageSrc = slide
    //           .querySelector('.slide-hero__image')
    //           .getAttribute('src');
    //         const topImage = `
    //         <div class="slide-hero__top-image">
    //               <img src="${imageSrc}" alt="Image">
    //           </div>
    //         `;
    //         slide.insertAdjacentHTML('beforeend', topImage);
    //       });
    //     },
    //   },
    // });

    const mainSlider = new Swiper('.hero__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Controller, Parallax],
      observer: true,
      loop: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      //autoHeight: true,
      speed: 800,
      parallax: true,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: '.hero__arrow--left',
        nextEl: '.hero__arrow--right',
      },

      // Брейкпоінти
      breakpoints: {
        320: {
          centeredSlides: true,
          spaceBetween: 30,
        },
        768: {
          centeredSlides: true,
          spaceBetween: 30,
        },
        1200: {
          centeredSlides: false,
        },
      },

      // Події
      on: {
        init: function (slider) {
          slider.slides.forEach(slide => {
            const imageSrc = slide
              .querySelector('.slide-hero__image')
              .getAttribute('src');
            const topImage = `
            <div class="slide-hero__top-image">
                  <img src="${imageSrc}" alt="Image">
              </div>
            `;
            const slideContent = slide.querySelector('.slide-hero__content');
            slideContent.insertAdjacentHTML('beforeend', topImage);
          });
        },
      },
    });

    // mainSlider.controller.control = miniSlider;
    // miniSlider.controller.control = mainSlider;
  }
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 4,
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});
