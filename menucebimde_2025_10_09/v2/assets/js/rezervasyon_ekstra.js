/**
 * Rezervasyon Ekstra İşlemleri
 * Yerleşim Düzeni ve Restoran Galerisi Modalları Yönetimi
 */

$(document).ready(function() {
    console.log("Rezervasyon Ekstra JS Yüklendi.");

    /**
     * Başarı modalının DOM'da olduğundan emin olur (Global/Kalıcı olması için)
     */
    window.ensureSuccessModal = function() {
        // Eğer modal zaten varsa içeriğini sıfırla (formu geri getir)
        if ($('#successResvModal').length > 0) {
            $('#successResvModal').remove();
        }
        
        if (typeof resvSuccessModalHtml !== 'undefined') {
            $('body').append(resvSuccessModalHtml);
            console.log("Başarı modalı taze haliyle eklendi.");
        }
    };

    // Uygulama yüklendiğinde modalı hazırla
    window.ensureSuccessModal();

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

    // --- Tab Geçişleri (Zemin Kat / 1. Kat) ---
    $(document).on('click', '.resv-tab-btn', function() {
        const target = $(this).data('target');
        
        // Butonları güncelle
        $('.resv-tab-btn').removeClass('active');
        $(this).addClass('active');
        
        // Panelleri güncelle
        $('.resv-map-pane').removeClass('active');
        if (target === 'ground') {
            $('#map-ground').addClass('active');
        } else {
            $('#map-first').addClass('active');
        }
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

    // --- KVKK Modalı Yönetimi ---
    $(document).on('click', '#open-kvkk', function(e) {
        e.preventDefault();
        $('#kvkkModal').addClass('show');
    });

    $(document).on('click', '#kvkkModal .resv-modal-close, #kvkkModal .resv-modal-close-btn', function() {
        $('#kvkkModal').removeClass('show');
    });

    $(document).on('click', '#kvkkModal', function(e) {
        if ($(e.target).hasClass('resv-modal')) {
            $(this).removeClass('show');
        }
    });

    // --- Başarı ve Hızlı Üyelik Modalı Yönetimi ---
    $(document).on('click', '.btn-close-success', function() {
        $('#successResvModal').removeClass('show');
        
        // Hafızayı temizle
        window.tempResvOrder = null;
        window.tempResvUser = null;

        if (typeof window.loadPage === 'function') {
            window.loadPage("start", {}, true);
        }
    });

    $(document).on('submit', '#quickSignupForm', function(e) {
        e.preventDefault();
        
        // Form verilerini al (Simülasyon)
        const prefs = {
            sms: $('input[name="pref_sms"]').is(':checked'),
            email: $('input[name="pref_email"]').is(':checked'),
            call: $('input[name="pref_call"]').is(':checked')
        };
        
        console.log("Üyelik oluşturuluyor...", prefs);
        
        // Başarı mesajı göster
        $(this).html(`
            <div class="signup-success-msg" style="padding: 20px; color: #2ecc71; font-weight: 600; text-align: center;">
                <i class="fas fa-check-double" style="font-size: 32px; margin-bottom: 10px; display: block;"></i>
                Üyeliğiniz başarıyla oluşturuldu!<br>
                Şifreniz SMS ile iletilmiştir.
            </div>
        `);
        
        // Hafızayı temizle
        window.tempResvOrder = null;
        window.tempResvUser = null;

        setTimeout(() => {
            $('#successResvModal').removeClass('show');
            if (typeof window.loadPage === 'function') {
                window.loadPage("start", {}, true);
            }
        }, 3000);
    });
});
