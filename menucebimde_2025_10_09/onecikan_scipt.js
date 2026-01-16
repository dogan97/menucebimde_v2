
// Logo ve kategorileri yükle
// Slider'ı başlat

let datcurrency;

function initializeSwiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    // Slide değiştiğinde içeriği güncelle
    swiper.on('slideChange', function () {
        const activeIndex = this.realIndex;
        const featuredProducts = window.featuredProducts;
        if (featuredProducts && featuredProducts[activeIndex]) {
            updateFeaturedContent(featuredProducts[activeIndex], datcurrency);
        }
    });

    return swiper;
}


function findIndexes(data, targetMdataId, targetYdataId) {
    for (let i = 0; i < data.mdata.length; i++) {
        console.log(data.mdata[i].id)
        if (data.mdata[i].id == targetMdataId) {
            const ylist = data.mdata[i].ydata;
            for (let j = 0; j < ylist.length; j++) {
                if (ylist[j].id == targetYdataId) {
                    return { mdataIndex: i, ydataIndex: j };
                }
            }
        }
    }
    return null;
}


// Öne çıkan ürünleri yükle
function loadFeaturedProducts(data, curln) {

    if (data.hasOwnProperty('onecikanlar')) {



        if (data.onecikanlar.length > 0) {
            switch (curln) {
                case "en":
                    window.featuredProducts = data.onecikanlar_en;
                    break;
                case "ar":
                    window.featuredProducts = data.onecikanlar_ar;
                default:
                    window.featuredProducts = data.onecikanlar;
                    break;
            }
            if (window.featuredProducts.length > 0) {
                $('.featured-products').removeClass("hide");
                datcurrency = data.currency;

                const swiperWrapper = document.querySelector('.swiper-wrapper');
                const featuredTitle = document.querySelector('.featured-title');
                const featuredDescription = document.querySelector('.featured-description');
                const featuredPrice = document.querySelector('.featured-price');
                const featuredProducts = data.onecikanlar; // İlk kategoriden 5 ürün al

                // İlk ürünün bilgilerini göster
                if (featuredProducts.length > 0) {
                    const firstProduct = featuredProducts[0];
                    updateFeaturedContent(firstProduct, data.currency);


                }

                featuredProducts.forEach(product => {


                    result = findIndexes(data, product.category_id, product.id);

                    console.log(product)
                    console.log(result)
                    const slide = document.createElement('div');
                    slide.className = 'swiper-slide';
                    slide.innerHTML = `
            <div class="slidimg" alt="${product.title}" style="background-image: url(http://menucebimde.com/_imgs/${product.photo}),url(${data.i01}),url(v2/assets/img/noimg.jpg)" data-gid="${result.mdataIndex}" data-uid="${result.ydataIndex}" ></div>
        `;
                    swiperWrapper.appendChild(slide);
                });
            }
        }
    }

    // Slider'ı başlat
    initializeSwiper();
}

// Seçili ürünün bilgilerini güncelle
function updateFeaturedContent(product, currency) {
    const featuredTitle = document.querySelector('.featured-title');
    const featuredDescription = document.querySelector('.featured-description');
    const featuredPrice = document.querySelector('.featured-price');

    if (!featuredTitle || !featuredDescription || !featuredPrice) return;

    featuredTitle.textContent = product.title;
    //featuredTitle.setAttribute('data-full-title', product.title);
    //featuredTitle.classList.toggle('truncated', isLongTitle);

    if (product.content == '') {
        $(featuredDescription).hide();
    } else {
        $(featuredDescription).show();
    }

    //console.log(data);

    featuredDescription.textContent = product.content //|| ' ';
    featuredDescription.classList.remove('expanded');
    featuredPrice.textContent = fiyatyap(product.uprice, currency)//product.uprice;

    // Başlık tıklama olayını ekle
    featuredTitle.onclick = function () {
        if (isLongTitle) {
            this.classList.toggle('expanded');
            this.textContent = this.classList.contains('expanded') ? product.title : title;
        }
    };

    // Açıklama tıklama olayını ekle
    featuredDescription.onclick = function () {
        this.classList.toggle('expanded');
    };
}






// Sayfa yüklendiğinde uygulamayı başlat
//document.addEventListener('DOMContentLoaded', initializeApp);