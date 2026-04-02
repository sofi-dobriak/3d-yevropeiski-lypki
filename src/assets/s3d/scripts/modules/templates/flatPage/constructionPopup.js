export default function constructionPopup(data, i18n) {
    console.log('constructionPopup data', data);
    
    return `
        <div class="construction-popup active" data-lenis-prevent data-construction-popup>
            <div class="construction-popup__content">
                <button class="construction-popup__close" type="button" data-construction-popup-close>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00008 7.29297L8.35363 7.64652L12.5001 11.793L16.6465 7.64652L17.0001 7.29297L17.7072 8.00008L17.3536 8.35363L13.2072 12.5001L17.3536 16.6465L17.7072 17.0001L17.0001 17.7072L16.6465 17.3536L12.5001 13.2072L8.35363 17.3536L8.00008 17.7072L7.29297 17.0001L7.64652 16.6465L11.793 12.5001L7.64652 8.35363L7.29297 8.00008L8.00008 7.29297Z" fill="#1A1E21"/>
                    </svg>
                </button>
                <div class="construction-popup__slider swiper-container" data-construction-popup-slider>
                    <div class="construction-popup__nav">
                        <div class="s3d-flat-new__apartments-list-swiper-button-prev s3d-villa__construction-swiper-button-prev" data-construction-popup-slider-prev>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.90658 12.5062L12.7036 17.3055L11.9963 18.0124L6.34625 12.3597L5.99294 12.0062L6.34625 11.6527L11.9963 6L12.7036 6.70694L7.90658 11.5062H18V12.5062H7.90658Z" fill="#1A1E21"></path>
                            </svg>
                        </div>
                        <div class="construction-popup__counter">
                        <span data-construction-popup-slider-counter>1</span><span>/</span><span data-construction-popup-slider-total>${data.gallery.length+data.videos.length}</span></div>
                        <div class="s3d-flat-new__apartments-list-swiper-button-next s3d-villa__construction-swiper-button-next" data-construction-popup-slider-next>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0864 12.6763L11.2932 17.4696L12.0003 18.1767L17.647 12.5298L18.0005 12.1763L17.647 11.8227L12.0003 6.17578L11.2932 6.88288L16.0864 11.6763H6V12.6763H16.0864Z" fill="#1A1E21"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="swiper-wrapper" data-construction-popup-slides>
                        ${data.videos.map((video) => `
                            <div class="swiper-slide">
                                <video style="width:100%; height: 100%;" src="${video.hid_video_file}" alt="" loading="lazy" controls playsinline></video>
                            </div>
                        `).join('')}
                        ${data.gallery.map((img) => `
                            <div class="swiper-slide">
                                <img src="${img}" alt="">
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="construction-popup__text">
                    <div class="construction-popup__text-top">
                        <div class="construction-card-label">
                            <span data-construction-popup-img-count>
                                ${data.gallery.length} 
                            </span>
                            <span>ФОТО</span>
                            ${data.videos.length > 0 ? `<span> / ${data.videos.length} ВІДЕО</span>` : ''}
                        </div>
                        <div class="construction-card-date" data-construction-popup-date>${data.date}</div>
                    </div>
                    <div class="construction-popup__text-content" data-construction-popup-text>
                        ${data.text}
                    </div>
                    <button class="ButtonIconLeft active ButtonIconLeft--secondary" data-open-form="" data-construction-popup-close="data-construction-popup-close">
                        <svg class="ButtonIconLeft__icon--no-paints" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--color-gray-200)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.88978 4.53638C6.88976 4.5364 6.88974 4.53642 6.88972 4.53644L5.0702 6.26193C5.0702 6.26193 5.07019 6.26194 5.07019 6.26194C4.63931 6.67057 4.45268 7.16852 4.51028 7.80011C4.57038 8.45913 4.90032 9.28114 5.56562 10.2726L5.56564 10.2727C6.64022 11.8743 8.25549 13.4085 8.96717 14.0835L8.96725 14.0835C9.5765 14.6615 11.3846 16.3734 13.2814 17.4795C14.4837 18.1804 15.4843 18.5 16.2706 18.5C16.9001 18.5 17.4162 18.296 17.8329 17.9008L19.4733 16.3452L19.8174 16.708L19.4733 16.3451C19.4939 16.3256 19.5 16.3067 19.5 16.2884C19.5 16.2689 19.4936 16.2508 19.4745 16.2327L19.4739 16.2321L16.1928 13.1207L16.5209 12.7747L16.1928 13.1207C16.1712 13.1002 16.1385 13.0847 16.0945 13.0847C16.0509 13.0847 16.0181 13.1 15.9959 13.1209C15.9958 13.1209 15.9958 13.121 15.9957 13.121L14.0498 14.9664L13.7586 15.2426L13.426 15.0181C12.4184 14.338 11.4421 13.5514 10.5239 12.6806L10.5239 12.6806C9.72806 11.9259 8.99577 11.1262 8.34712 10.303L8.06476 9.94469L8.39579 9.63076L10.3675 7.76095L10.3675 7.76094C10.3886 7.74097 10.3945 7.72085 10.3945 7.70432C10.3945 7.68778 10.3886 7.66749 10.3673 7.64734C10.3673 7.64733 10.3673 7.64733 10.3673 7.64732L7.08659 4.53627L7.08658 4.53626C7.06415 4.51498 7.02993 4.5 6.98835 4.5C6.9468 4.5 6.91243 4.51496 6.88978 4.53638ZM7.77469 3.81065C7.33781 3.39635 6.63887 3.39661 6.202 3.81047L6.20181 3.81065L4.38208 5.53633L4.38208 5.53633C3.71918 6.16499 3.43027 6.96823 3.51441 7.89093C3.59606 8.78622 4.02517 9.77162 4.73524 10.8298C5.87622 12.5304 7.56334 14.1303 8.27078 14.8012L8.27899 14.809L8.27907 14.8091L8.28183 14.8117C8.88857 15.3873 10.7708 17.1731 12.7776 18.3433L12.7777 18.3434C14.0532 19.0869 15.2336 19.5 16.2706 19.5C17.1404 19.5 17.9074 19.2083 18.521 18.6264L20.1614 17.0708C20.3763 16.867 20.5 16.5878 20.5 16.2884C20.5 15.9899 20.3775 15.7104 20.1616 15.5062C20.1615 15.5061 20.1614 15.506 20.1614 15.506L16.8809 12.3951C16.667 12.1922 16.3854 12.0847 16.0945 12.0847C15.8034 12.0847 15.5222 12.1924 15.3084 12.3947L15.308 12.395L13.6558 13.9619C12.8117 13.3675 11.9909 12.6937 11.212 11.955C10.565 11.3414 9.96336 10.6983 9.41876 10.0388L11.0556 8.48656C11.5075 8.058 11.5073 7.35064 11.0558 6.92207L11.0556 6.92188L7.7747 3.81065C7.77469 3.81065 7.77469 3.81065 7.77469 3.81065Z" stroke="none" fill="var(--color-gray-200)"></path>
                        </svg>
                        <span>Більше деталей</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

/*

    {
  "id": 1,
  "data": {
    "date": "2024-07-29 15:26:43",
    "day": 29,
    "month": 7,
    "year": 2024,
    "text": "As of today, the first two buildings of the apart-hotel are already in operation, welcoming guests and generating passive income for the owners. Construction works for the third building are currently underway.  The monolithic frame has already been poured to 80 percent. External walls have been completed to 50%. Internal walls and partitions have been installed to 15%. Staircases and platforms have been poured up to the level of the eighth floor. Installation of PVC windows has begun in the building. Thanks to coordinated and organized work, construction is progressing rapidly, significantly ahead of the scheduled construction works.",
    "video": "https://www.youtube.com/watch?v=9bZkp7q19f0",
    "gallery": [
      "https://smarto.agency/wp-content/themes/smartoagency/assets/images/jpg/ozon-preview.jpg",
      "https://smarto.agency/wp-content/themes/smartoagency/assets/images/jpg/ozon-preview.jpg",
      "https://smarto.agency/wp-content/themes/smartoagency/assets/images/jpg/ozon-preview.jpg"
    ],
    "nextId": 2,
    "prevId": 3
  }
}
*/