/**
 * Üyelik Sayfası İşlemleri
 * Form yönetimi, Validasyon ve Dijital Kart Simülasyonu
 */

$(document).ready(function() {
    console.log("Üyelik JS Yüklendi.");

    // --- Ana Ekrandaki Banner Butonu ---
    $(document).on('click', '.btn-go-membership', function(e) {
        e.preventDefault();
        if (typeof window.loadPage === 'function') {
            window.loadPage("uyelik", {}, true);
        }
    });

    // --- Üyelik Formu Gönderimi ---
    $(document).on('submit', '#membershipForm', function(e) {
        e.preventDefault();
        
        const name = $('#mbr-name').val();
        const phone = $('#mbr-phone').val();
        
        // Simülasyon: Loader göster
        $('.loader').show();
        
        setTimeout(() => {
            $('.loader').fadeOut(200);
            
            // Başarı Durumu: Dijital Üye Kartını Göster
            const memberNumber = "MC " + Math.floor(1000 + Math.random() * 9000) + " " + Math.floor(1000 + Math.random() * 9000);
            
            $('.uyelik-card').html(`
                <div class="success-header animate__animated animate__zoomIn">
                    <div class="success-icon-wrap" style="color: #2ecc71; font-size: 60px; margin-bottom: 20px;">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h2>Aramıza Hoş Geldiniz!</h2>
                    <p>VIP Üyeliğiniz başarıyla oluşturuldu. İşte dijital kartınız:</p>
                </div>

                <div class="member-card-wrapper animate__animated animate__flipInX">
                    <div class="member-card">
                        <div class="mc-logo">LOUIS VIP</div>
                        <div class="mc-chip"></div>
                        <div class="mc-number">${memberNumber}</div>
                        <div class="mc-footer">
                            <div>
                                <span class="mc-label">Üye Adı</span>
                                <span class="mc-name">${name}</span>
                            </div>
                            <div class="mc-rank">SILVER MEMBER</div>
                        </div>
                    </div>
                </div>

                <div style="margin-top: 30px; text-align: center;">
                    <p style="font-size: 14px; color: #64748b;">Şifreniz telefonunuza SMS ile iletilmiştir.<br>Her gelişinizde bu kartı göstererek puan kazanabilirsiniz.</p>
                    <button type="button" class="resv-btn resv-btn--primary btn-finish-membership" style="margin-top: 20px;">
                        Harika, Menüye Dön
                    </button>
                </div>
            `);
        }, 1500);
    });

    // --- KVKK Modalı (Üyelik Sayfası İçin) ---
    $(document).on('click', '#open-kvkk-mbr', function(e) {
        e.preventDefault();
        if ($('#kvkkModal').length > 0) {
            $('#kvkkModal').addClass('show');
        }
    });

    // --- İşlemi Bitir ---
    $(document).on('click', '.btn-finish-membership', function() {
        if (typeof window.loadPage === 'function') {
            window.loadPage("start", {}, true);
        }
    });

    // Telefon Maskesi
    $(document).on('focus', '#mbr-phone', function() {
        $(this).mask('0(000) 000 00 00', {
            placeholder: "0(5__) ___ __ __"
        });
    });
});

