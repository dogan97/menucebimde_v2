/**
 * Etkinlikler Sayfası Yönetimi
 * Öne çıkan ürünleri etkinlik listesi olarak sunar.
 */

var selectedEvent = null; // Rezervasyona taşınacak veri

function loadEtkinlikler() {
    console.log("Etkinlikler yükleniyor...");
    const container = $('#etkinlikListContainer');
    if (!container.length) return;

    container.empty();

    // data.onecikanlar global değişkeninden veriyi alıyoruz
    if (typeof data !== 'undefined' && data.onecikanlar && data.onecikanlar.length > 0) {
        data.onecikanlar.forEach(item => {
            const cardHtml = `
                <div class="etkinlik-card animated fadeInUp">
                    <div class="etkinlik-img-wrap">
                        <img src="https://menucebimde.com/_imgs/${item.photo}" alt="${item.title}">
                    </div>
                    <div class="etkinlik-body">
                        <div class="etkinlik-title-row">
                            <h3 class="etkinlik-title">${item.title}</h3>
                            <div class="etkinlik-price-tag">${item.uprice} TL</div>
                        </div>
                        <p class="etkinlik-desc">${item.content || 'Bu harika etkinlik için hemen yerinizi ayırtın. Detaylı bilgi için ekibimizle iletişime geçebilirsiniz.'}</p>
                        <div class="etkinlik-footer">
                            <button type="button" class="etkinlik-resv-btn" data-id="${item.id}" data-title="${item.title}" data-price="${item.uprice}" data-img="${item.photo}">
                                <i class="fas fa-calendar-check"></i> Rezervasyon Yap
                            </button>
                        </div>
                    </div>
                </div>
            `;
            container.append(cardHtml);
        });
    } else {
        container.append('<p style="text-align:center; padding: 50px; color: #666;">Henüz aktif bir etkinlik bulunmamaktadır.</p>');
    }
}

// Rezervasyon sayfasını seçili etkinlik ile doldurur
function setupRezervasyonWithEvent() {
    const eventCard = $('#resvSelectedEvent');
    if (selectedEvent) {
        $('#resvEventTitle').text(selectedEvent.title);
        $('#resvEventPrice').text(selectedEvent.price + ' TL');
        $('#resvEventImg').attr('src', 'https://menucebimde.com/_imgs/' + selectedEvent.img);
        eventCard.removeClass('hide');
        
        // Not kısmına otomatik bilgi ekle (opsiyonel)
        $('#resv-notes').val(selectedEvent.title + " etkinliği için rezervasyon yapmak istiyorum.");
    } else {
        eventCard.addClass('hide');
    }
}

$(document).ready(function() {
    // Etkinlik listesindeki rezervasyon butonu (Tap ve Click desteği)
    $(document).on('tap click', '.etkinlik-resv-btn', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        
        console.log("Rezervasyon butonu tetiklendi");

        selectedEvent = {
            id: $(this).data('id'),
            title: $(this).data('title'),
            price: $(this).data('price'),
            img: $(this).data('img')
        };
        
        // Doğru yükleme yöntemi: window.loadPage fonksiyonunu kullan
        if (typeof window.loadPage === 'function') {
            window.loadPage("rezervasyon", {}, true);
        } else {
            console.error("loadPage fonksiyonu bulunamadı!");
        }
    });
});

