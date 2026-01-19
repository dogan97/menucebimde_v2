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
        const userData = {
            name: $('#q-name').val(),
            phone: $('#q-phone').val(),
            email: $('#q-email').val(),
            birthday: $('#q-birthday').val(),
            gender: $('#q-gender').val(),
            password: $('#q-password').val(),
            prefs: {
                sms: $('input[name="pref_sms"]').is(':checked'),
                email: $('input[name="pref_email"]').is(':checked'),
                call: $('input[name="pref_call"]').is(':checked')
            }
        };
        
        console.log("Hızlı üyelik oluşturuluyor...", userData);
        
        // Başarı animasyonu ve mesajı
        $(this).css('opacity', '0.5').css('pointer-events', 'none');
        
        setTimeout(() => {
            $(this).html(`
                <div class="signup-success-msg animate__animated animate__zoomIn" style="padding: 30px 20px; color: #2ecc71; font-weight: 600; text-align: center;">
                    <div class="success-icon-wrap" style="background: rgba(46, 204, 113, 0.1); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                        <i class="fas fa-check-double" style="font-size: 40px;"></i>
                    </div>
                    <h2 style="color: #1e293b; margin-bottom: 10px;">Harika!</h2>
                    <p style="color: #64748b; font-size: 14px; font-weight: 400;">
                        Üyeliğiniz başarıyla oluşturuldu.<br>
                        Giriş bilgileriniz e-posta adresinize gönderildi.
                    </p>
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
        }, 1500);
    });

    // --- Şifre Göster/Gizle (Global ve Gelişmiş) ---
    $(document).on('tap click', '.toggle-password', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $this = $(this);
        const $wrapper = $this.closest('.resv-input-wrapper');
        const $input = $wrapper.find('input');
        
        console.log("Şifre toggle tıklandı", $input.attr('type'));

        if ($input.attr('type') === 'password') {
            $input.attr('type', 'text');
            $this.removeClass('fa-eye').addClass('fa-eye-slash');
            $this.css('color', 'var(--resv-accent)');
        } else {
            $input.attr('type', 'password');
            $this.removeClass('fa-eye-slash').addClass('fa-eye');
            $this.css('color', '#64748b');
        }
    });
});
