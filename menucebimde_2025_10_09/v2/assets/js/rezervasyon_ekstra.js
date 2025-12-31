/**
 * Rezervasyon Ekstra İşlemleri
 * Yerleşim Düzeni ve Restoran Galerisi Modalları Yönetimi
 */

$(document).ready(function() {
    console.log("Rezervasyon Ekstra JS Yüklendi.");

    // --- Yerleşim Düzeni Modalı Yönetimi ---
    $(document).on('click', '#btnShowSeatingPlan', function(e) {
        e.preventDefault();
        console.log("Yerleşim Düzeni Butonuna Tıklandı.");
        $('#seatingModal').addClass('show');
    });

    $(document).on('click', '.resv-modal-close', function() {
        $('#seatingModal').removeClass('show');
    });

    $(document).on('click', '#seatingModal', function(e) {
        if ($(e.target).hasClass('resv-modal')) {
            $(this).removeClass('show');
        }
    });

    // Akıllı Bağlantı: Bölgeye tıklandığında dropdown güncelleme
    $(document).on('click', '.resv-map-zone', function() {
        const selectedZone = $(this).data('type');
        const $select = $('#resv-table-type');

        if ($select.length) {
            $select.val(selectedZone).trigger('change');
            $select.focus();
        }

        $('#seatingModal').removeClass('show');
        console.log("Seçilen Bölge: " + selectedZone);
    });

    // --- Galeri Modalı Yönetimi ---
    let gallerySwiper = null;

    $(document).on('click', '#btnShowGallery', function(e) {
        e.preventDefault();
        console.log("Galeri Butonuna Tıklandı.");
        $('#galleryModal').addClass('show');

        // Swiper'ı başlat (Eğer henüz başlatılmadıysa)
        if (!gallerySwiper) {
            gallerySwiper = new Swiper('.resv-gallery-slider', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
            });
        } else {
            gallerySwiper.update();
        }
    });

    $(document).on('click', '.resv-modal-close--gallery', function() {
        $('#galleryModal').removeClass('show');
    });

    $(document).on('click', '#galleryModal', function(e) {
        if ($(e.target).hasClass('resv-modal')) {
            $(this).removeClass('show');
        }
    });
});
