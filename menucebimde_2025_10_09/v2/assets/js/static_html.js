var aboutus = `
<div class="page wthead aboutus" id="aboutusLanguage">
  <div class="bottom">
    <div class="backbtn"></div>
    <div class="sepet">
      <h2><i class="fa fa-info-circle"></i> Hakkımızda</h2>
    </div>
  </div>

  <div class="aboutus-hero">
    <div class="aboutus-hero-overlay"></div>
    <div class="aboutus-hero-content">
      <div class="aboutus-logo">
        <!-- İstersen buraya <img src="logo.png" alt="Logo"> koy -->
        <span>Ş</span>
      </div>
      <h1 class="aboutus-title" data-company="Şirket Adı" id="menuAdi" data-language-key="companyName">Şirket Adı</h1>
      <p class="aboutus-subtitle">Kalite, lezzet ve mutluluğu sizinle buluşturan marka. ÖZET BİLGİ YA DA SLOGN GELEBİLİR</p>
      <div class="aboutus-cta">
        <a class="btn btn-primary" id="aboutus-whatsapp-cta" href="#" target="_blank">
          <i class="fa-brands fa-whatsapp"></i> WhatsApp’tan Yaz
        </a>
        <a class="btn btn-light" id="aboutus-instagram-cta" href="#" target="_blank">
          <i class="fa-brands fa-instagram"></i> Instagram’ı Aç
        </a>
      </div>
    </div>
  </div>

  <div class="divbg">
    <div class="daboutus">

      <!-- Hakkımızda Kartı -->
      <section class="au-card au-intro">
        <h2><i class="fa fa-star"></i> Biz Kimiz?</h2>
        <p id="aciklama">
          Misafirlerimize her gün taze ve özenle hazırlanan ürünler sunuyor,
          deneyimi kusursuz kılmak için geri bildirimlerinizi dikkatle dinliyoruz.
          Amacımız, her ziyarette aynı yüksek standartta kalite ve gülümseme.
        </p>
      </section>

      <!-- Bilgi Grid -->
      <section class="au-grid">
        <div class="au-card au-info">
          <div class="au-info-row">
            <i class="fa fa-phone"></i>
            <div>
              <div class="au-label">Telefon</div>
              <a id="aboutus-phone" href="tel:+905551112233">+90 555 111 22 33</a>
            </div>
          </div>
          <div class="au-info-row">
            <i class="fa fa-whatsapp"></i>
            <div>
              <div class="au-label">WhatsApp</div>
              <a id="aboutus-whatsapp" href="https://wa.me/905551112233" target="_blank">+90 555 111 22 33</a>
            </div>
          </div>
          <div class="au-info-row">
            <i class="fa fa-instagram"></i>
            <div>
              <div class="au-label">Instagram</div>
              <a id="aboutus-instagram" href="https://instagram.com/sirketiniz" target="_blank">@sirketiniz</a>
            </div>
          </div>
          <div class="au-info-row">
            <i class="fa fa-envelope"></i>
            <div>
              <div class="au-label">E-posta</div>
              <a id="aboutus-email" href="mailto:info@sirket.com">info@sirket.com</a>
            </div>
          </div>
          <div class="au-info-row">
            <i class="fa fa-globe"></i>
            <div>
              <div class="au-label">Web</div>
              <a id="aboutus-web" href="https://www.sirket.com" target="_blank">www.sirket.com</a>
            </div>
          </div>
        </div>

        <!-- Konum Kartı -->
        <div class="au-card au-map">
          <h3><i class="fa fa-map-marker"></i> Konum</h3>
          <div class="au-address">
            <div id="aboutus-address-text">Adres henüz eklenmedi</div>
            <div class="au-coords">
              <span>Lat: <b id="aboutus-lat">—</b></span>
              <span>Lng: <b id="aboutus-lng">—</b></span>
            </div>
          </div>
          <!-- Statik görsel yerine premium’suz “mock” harita görünümü -->
          <div class="au-mapbox">
            <div class="au-mapgrid"></div>
            <div class="au-mappin"><i class="fa fa-map-pin"></i></div>
            <div class="au-map-label">Konum önizleme</div>
          </div>
          <div class="au-map-actions">
            <a class="btn btn-primary" id="aboutus-directions" href="#" target="_blank">
              <i class="fa fa-location-arrow"></i> Yol Tarifi Al
            </a>
            <a class="btn btn-outline" id="aboutus-openmaps" href="#" target="_blank">
              <i class="fa fa-map"></i> Haritada Aç
            </a>
          </div>
        </div>
      </section>

      <!-- Çalışma Saatleri -->
      <section class="au-card au-hours">
        <h3><i class="fa fa-clock-o"></i> Çalışma Saatleri</h3>
        <ul class="au-hours-list">
          <li><span>Pazartesi</span><b>09:00 – 23:00</b></li>
          <li><span>Salı</span><b>09:00 – 23:00</b></li>
          <li><span>Çarşamba</span><b>09:00 – 23:00</b></li>
          <li><span>Perşembe</span><b>09:00 – 23:00</b></li>
          <li><span>Cuma</span><b>09:00 – 00:00</b></li>
          <li><span>Cumartesi</span><b>10:00 – 00:00</b></li>
          <li><span>Pazar</span><b>10:00 – 22:00</b></li>
        </ul>
        <div class="au-note"><i class="fa fa-info-circle"></i> Özel günlerde saatler değişiklik gösterebilir.</div>
      </section>

      <!-- Mini Footer -->
      <section class="au-footer">
        <div class="au-mini">
          <div class="au-mini-left">
            <div class="au-brand" data-company="Şirket Adı" id>Şirket Adı</div>
            <div class="au-tagline">Her yudumda mutluluk.</div>
          </div>
          <div class="au-mini-right">
          
          </div>
        </div>
      </section>

    </div>
  </div>
</div>
`;



var start =
    `<div class="tabmenu">\
      <img class="tmlogo" src="v2/assets/img/menucebimdeapplogo.png" />\
      <div class="sonyayintr">test</div>\
      <nav>\
      <span class="mgosipa"><i class="fa fa-qrcode fa-fw"></i><ln class="tbmenu">Menü</ln></span>\
      <span class="mgoabout"><i class="fas fa-calendar-check"></i><ln class="tbhakkimizda">Hakkımızda</ln></span>\
        
      <span class="mgohesap disab"><i class="fa fa-receipt fa-fw"></i><ln class="tbhesap">Hesabım</ln></span>\
      <span class="mgogars disab"><i class="fa fa-concierge-bell fa-fw"></i><ln class="tbgarson">Garson Çağır</ln></span>\
      <span class="mgoanket disab"><i class="fa fa-star fa-fw"></i><ln class="tbanket">Görüş ve Öneri</ln></span>\
      <span class="mgolang disab"><i class="fa fa-globe fa-fw"></i><ln class="tbdil">Dil Seçimi</ln></span>\
      </nav>\
    </div>\
    <div class="page start">
    <div class="menus"><div></div></div>
    <div class="cover"></div>
    <div class="cover_name"></div>
    <div class="cover_dots"></div>
    <div class="gosipa"><a></a></div>
    <div class="goanket hide"><a></a></div>
    <div class="gogars hide"><a><i class="animate__animated animate__repeat-3 animate__swing fa fa-concierge-bell"></i></a></div>
    <div class="golang hide"><div class="success circle"></div><a style="position: absolute;"></a></div>
    <div class="gomains hide"><a></a><i class="mbadge"></i></div>
    <div class="gotabmenu pulse-btn"><a><i class="fa fa-bars"></i></a></div>
    <div class="goporty hide"><a></a><a style="display:none;"></a><i>Tek tıkla Porty powerbank kirala!</i><i class="fa fa-chevron-right"></i></div>
    <div class="goportyy hide"></div>
    <div class="icerik2"></div>
    <div class="gomenucebimde">menucebimde.com</div>
    <div class="vers">`+ vs + `</div>
    <div class="tableno"></div>
    <div class="description" style="display:none"></div>
    </div>`;
//<div class="gomain"><a><i class="fa fa-cutlery"></i> Sipariş Ver</a></div>\

var navmenu =
    `<ul class="nav__menu tabmenu" id="menutab2" tabindex="-1" aria-label="main navigation" hidden>\
<li class="nav__item"><div class="nav__link"><span class="mgohesap disab"><i class="fa fa-receipt fa-fw"></i><ln class="tbhesap">Hesabım</ln></span></div></li>
<li class="nav__item"><div class="nav__link"><span class="mgoabout "><i class="fas fa-info-circle"></i><ln class="tbhakkimizda">Hesabım</ln></span></div></li>
<li class="nav__item"><div class="nav__link"><span class="mgogars disab"><i class="fa fa-concierge-bell fa-fw"></i><ln class="tbgarson">Garson Çağır</ln></span></div></li>
<li class="nav__item"><div class="nav__link"><span class="mgoanket disab"><i class="fa fa-star fa-fw"></i><ln class="tbanket">Görüş ve Öneri</ln></span></div></li>
<li class="nav__item"><div class="nav__link"><span class="mgolang disab"><i class="fa fa-globe fa-fw"></i><ln class="tbdil">Dil Seçimi</ln></span></div></li>
</ul>`


var navbtn =
    `<a href="#nav" class="nav__toggle" role="button" aria-expanded="false" aria-controls="menu">\
<svg class="menuicon" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 50 50">\
  <title>Toggle Menu</title>\
  <g>\
    <line class="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5"/>\
    <line class="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>\
    <line class="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>\
    <line class="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5"/>\
    <circle class="menuicon__circle" r="23" cx="25" cy="25" />\
  </g>\
</svg>\
</a>`;


var navsplash = '<div class="splash"></div>'
var navsplash2 = '<div class="splash2"></div>'

var etkinlikler = `
<div class="page wthead etkinlikler">
  <div class="bottom">
    <div class="backbtn"></div>
    <div class="sepet hide">
      <h2><i class="fas fa-calendar-alt"></i> ETKİNLİKLER</h2>
    </div>
  </div>
  <div class="headbar">` + navmenu + navbtn + `<img src="v2/assets/img/small-noimg.jpg" />` + navsplash2 + navsplash + `</div>

  <section class="etkinlik-container">
    <header class="etkinlik-header">
      <h1 class="etkinlik-page-title">Öne Çıkan Etkinlikler</h1>
      <p class="etkinlik-page-sub">Size özel seçtiğimiz deneyimleri keşfedin ve yerinizi ayırtın.</p>
    </header>
    
    <div class="etkinlik-list" id="etkinlikListContainer">
      <!-- Etkinlik kartları JS ile buraya basılacak -->
    </div>
  </section>
</div>`;

var rezervasyon = `
<div class="page wthead rezervasyon">
    <div class="bottom">
    <div class="backbtn"></div>
    <div class="sepet">
      <h2><i class="fas fa-calendar-check"></i> REZERVASYON</h2>
    </div>
  </div>
  <div class="headbar">` + navmenu + navbtn + `<img src="v2/assets/img/small-noimg.jpg" />` + navsplash2 + navsplash + `</div>

  <section class="resv-wrap">
    <form class="resv-card" id="reservationForm">
              <header class="resv-head">
                <h1 class="resv-title"><i class="fas fa-calendar-check"></i> Rezervasyon</h1>
                <p class="resv-sub">Lütfen bilgileri doldurun; ekibimiz en kısa sürede dönüş yapacaktır.</p>
              </header>

              <!-- Seçili Etkinlik Kartı (Dinamik olarak doldurulacak) -->
              <div id="resvSelectedEvent" class="resv-event-card hide">
                <div class="resv-event-img">
                  <img src="" alt="" id="resvEventImg">
                </div>
                <div class="resv-event-info">
                  <h4 id="resvEventTitle">Etkinlik Adı</h4>
                  <p id="resvEventPrice">0.00 TL</p>
                </div>
              </div>

      <div class="resv-grid">
        <div class="resv-field">
          <div class="resv-input-wrapper">
            <select id="resv-people" name="people" required class="resv-input resv-select">
              <option value="1">1 Kişi</option>
              <option value="2" selected>2 Kişi</option>
              <option value="3">3 Kişi</option>
              <option value="4">4 Kişi</option>
              <option value="5">5 Kişi</option>
              <option value="6">6 Kişi</option>
              <option value="7">7 Kişi</option>
              <option value="8">8 Kişi</option>
              <option value="9">9 Kişi</option>
              <option value="10">10 Kişi</option>
            </select>
            <label for="resv-people" class="resv-floating-label">Kişi Sayısı</label>
            <i class="fas fa-chevron-down resv-select-icon"></i>
          </div>
        </div>

        <div class="resv-field">
          <div class="resv-input-wrapper">
            <input id="resv-name" name="name" type="text" required class="resv-input" placeholder=" ">
            <label for="resv-name" class="resv-floating-label">Ad Soyad</label>
          </div>
        </div>

        <div class="resv-field">
          <div class="resv-input-wrapper">
            <input id="resv-phone" name="phone" type="tel" required class="resv-input" placeholder=" ">
            <label for="resv-phone" class="resv-floating-label">Telefon</label>
          </div>
        </div>

        <div class="resv-field resv-field--full">
          <div class="resv-inline-actions">
            <button type="button" id="btnShowGallery" class="resv-action-btn">
              <i class="fas fa-images"></i> Galeri
            </button>
            <button type="button" id="btnShowSeatingPlan" class="resv-action-btn">
              <i class="fas fa-map-marked-alt"></i> Yerleşim Düzeni
            </button>
          </div>
          <div class="resv-input-wrapper">
            <select id="resv-table-type" name="table_type" required class="resv-input resv-select">
              <option value="" disabled selected hidden> </option>
              <option value="garden">Bahçe Tarafı</option>
              <option value="stage">Sahne Önü</option>
              <option value="balcony">Balkon Katı</option>
              <option value="window">Pencere Kenarı</option>
              <option value="vip">VIP Loca</option>
              <option value="inside">İç Mekan</option>
            </select>
            <label for="resv-table-type" class="resv-floating-label">Masa Tipi / Tercihi</label>
            <i class="fas fa-chevron-down resv-select-icon"></i>
          </div>
        </div>

        <div class="resv-field resv-field--full">
          <div class="resv-input-wrapper">
            <input id="resv-email" name="email" type="email" class="resv-input" placeholder=" ">
            <label for="resv-email" class="resv-floating-label">E-posta (İsteğe Bağlı)</label>
          </div>
        </div>

        <div class="resv-field resv-field--full">
          <div class="resv-input-wrapper">
            <textarea id="resv-notes" name="notes" rows="3" class="resv-textarea" placeholder=" "></textarea>
            <label for="resv-notes" class="resv-floating-label">Not / Özel İstek</label>
          </div>
        </div>

        <div class="resv-field resv-field--full resv-consent">
          <label class="resv-check">
            <input type="checkbox" name="consent" required>
            <span><a href="javascript:void(0)" id="open-kvkk" class="resv-link">Kişisel Verilerin Korunması Kanunu</a> kapsamında verilerimin işlenmesini ve tarafıma bilgilendirme yapılmasını kabul ediyorum.</span>
          </label>
        </div>
      </div>

      <footer class="resv-actions">
        <button type="button" class="resv-btn resv-btn--ghost" id="btnCancelResv">
          <i class="fas fa-trash-alt"></i> Temizle
        </button>
        <button type="submit" class="resv-btn resv-btn--primary">
          <i class="fas fa-paper-plane"></i> Gönder
        </button>
      </footer>
    </form>
  </section>

  <!-- KVKK Modal -->
  <div id="kvkkModal" class="resv-modal">
    <div class="resv-modal-content">
      <div class="resv-modal-header">
        <h3><i class="fas fa-user-shield"></i> KVKK Aydınlatma Metni</h3>
        <button type="button" class="resv-modal-close">&times;</button>
      </div>
      <div class="resv-modal-body">
        <div class="resv-kvkk-text">
          <h4>1. Veri Sorumlusu</h4>
          <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz; veri sorumlusu olarak restoran işletmemiz tarafından aşağıda açıklanan kapsamda işlenebilecektir.</p>
          
          <h4>2. Kişisel Verilerin İşlenme Amacı</h4>
          <p>Toplanan kişisel verileriniz (ad-soyad, telefon, e-posta), rezervasyon talebinizin alınması, masanızın ayrılması, gerektiğinde sizinle iletişime geçilmesi ve hizmet kalitemizin artırılması amaçlarıyla işlenmektedir.</p>
          
          <h4>3. İşlenen Kişisel Verilerin Aktarımı</h4>
          <p>Kişisel verileriniz, yasal yükümlülüklerin yerine getirilmesi amacıyla yetkili kamu kurum ve kuruluşları dışında üçüncü şahıslarla paylaşılmamaktadır.</p>
          
          <h4>4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h4>
          <p>Kişisel verileriniz, rezervasyon formu aracılığıyla elektronik ortamda, "ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması" hukuki sebebine dayalı olarak toplanmaktadır.</p>
          
          <h4>5. İlgili Kişinin Hakları</h4>
          <p>KVKK’nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, silinmesini veya düzeltilmesini isteme gibi haklara sahipsiniz.</p>
        </div>
      </div>
      <div class="resv-modal-footer">
        <button type="button" class="resv-modal-close-btn">Anladım</button>
      </div>
    </div>
  </div>

  <!-- Yerleşim Düzeni Modal -->
  <div id="seatingModal" class="resv-modal">
    <div class="resv-modal-content">
      <div class="resv-modal-header">
        <h3><i class="fas fa-map-marked-alt"></i> Yerleşim Düzeni</h3>
        <button type="button" class="resv-modal-close">&times;</button>
      </div>
      <div class="resv-modal-body">
        <div class="resv-map-container">
          <img src="v2/assets/img/seating-plan.png" alt="Yerleşim Düzeni" id="seatingImage">
        </div>
        
        <div class="resv-map-selection">
          <div class="resv-map-card" data-type="garden">
            <i class="fas fa-leaf"></i>
            <span>Bahçe Tarafı</span>
          </div>
          <div class="resv-map-card" data-type="stage">
            <i class="fas fa-music"></i>
            <span>Sahne Önü</span>
          </div>
          <div class="resv-map-card" data-type="balcony">
            <i class="fas fa-level-up-alt"></i>
            <span>Balkon Katı</span>
          </div>
          <div class="resv-map-card" data-type="window">
            <i class="fas fa-border-all"></i>
            <span>Pencere Kenarı</span>
          </div>
          <div class="resv-map-card" data-type="vip">
            <i class="fas fa-glass-martini-alt"></i>
            <span>VIP Loca</span>
          </div>
          <div class="resv-map-card" data-type="inside">
            <i class="fas fa-chair"></i>
            <span>İç Mekan</span>
          </div>
        </div>
        <p class="resv-modal-hint">Lütfen rezervasyon yapmak istediğiniz bölgeyi seçiniz.</p>
      </div>
    </div>
  </div>

  <!-- Galeri Modal -->
  <div id="galleryModal" class="resv-modal">
    <div class="resv-modal-content resv-modal-content--gallery">
      <div class="resv-modal-header">
        <h3><i class="fas fa-images"></i> Restoran Galerisi</h3>
        <button type="button" class="resv-modal-close resv-modal-close--gallery">&times;</button>
      </div>
      <div class="resv-modal-body resv-modal-body--gallery">
        <div class="swiper-container resv-gallery-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200" alt="Galeri 1"></div>
            <div class="swiper-slide"><img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200" alt="Galeri 2"></div>
            <div class="swiper-slide"><img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200" alt="Galeri 3"></div>
            <div class="swiper-slide"><img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200" alt="Galeri 4"></div>
          </div>
          <!-- Slider Navigasyon -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</div>`; 

var main =
    `<div class="menus"><div></div></div>\
    <div class="page wthead main ">\
    <div class="bottom"><div class="gomains hide"><a></a><i class="mbadge"></i></div><div class="backbtn"></div><div class="sepet hide"><h2><i class="fa fa-shopping-basket"></i> SEPETE GİT</h2><label class="sepcnt">0</label></div></div>\
    <div class="headbar">`+ navmenu + navbtn + `<img src="v2/assets/img/small-noimg.jpg" />` + navsplash2 + navsplash + `</div>
    <div class="searchbar"><i class="fa fa-search"></i><input type="text" id="txtsearch" placeholder="Ürün ara.." /><a>Kapat</a></div>
    <div class="gruplar noimg onerow"><ul></ul></div>
    <div class="urunler noimg" style="display:none"><ul></ul></div>
    </div>`;


var list =
    `<div class="page wthead list" data-gid="{gid}" data-sctop="{sctop}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="backbtn"></div><div class="sepet hide"><h2><i class="fa fa-shopping-basket"></i> SEPETE GİT</h2><label class="sepcnt">0</label></div></div>\
    <div class="urunler noimg"><ul>\
    </ul></div>\
    </div>`;

list =
    `<div class="page wthead list" data-gid="{gid}" data-sctop="{sctop}">\
  <div class="bottom"><div class="backbtn"></div><div class="sepet hide"><h2><i class="fa fa-shopping-basket"></i> SEPETE GİT</h2><label class="sepcnt">0</label></div></div>\
  <div class="headbar">`+ navmenu + navbtn + `<img src="v2/assets/img/small-noimg.jpg" />` + navsplash2 + navsplash + `</div>\
  <div class="grpadi"></div>\
  <div class="grpinfo"></div>\
  <div class="urunler noimg"><ul>\
  </ul></div>\
  </div>`;

var slide =
    `<div class="page wthead slide" data-gid="{gid}" data-uid="{uid}" data-sctop="{sctop}">\
    <div class="bottom"><div class="backbtn"></div><div class="btn_f sepekle hide"><a><i class="fa fa-check-circle"></i> PORSİYON SEÇ</a></div></div>\
    <div class="headbar">`+ navmenu + navbtn + `<img src="v2/assets/img/small-noimg.jpg" />` + navsplash2 + navsplash + `</div>\
    <div class="swiper-container gallery-top">\
    <div class="swiper-wrapper"></div>\
    <div class="swiper-button-next swiper-button-white"></div>\
    <div class="swiper-button-prev swiper-button-white"></div>\
  </div>\
  </div>`;

var urun =
    `<div class="page wthead urun" data-gid="{gid}" data-uid="{uid}" data-sctop="{sctop}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="backbtn"></div><div class="btn_f sepekle hide"><a><i class="fa fa-check-circle"></i> PORSİYON SEÇ</a></div></div>\
    <div class="detay noimg">\
    <img src="v2/assets/img/kat02.jpg" onerror="this.onerror=null;this.src=\'v2/assets/img/noimg.jpg\'" />\
    <h1></h1>\
    <p></p>\
    </div><div class="fiyatlar onerow mb50"><ul>\
    </ul></div>\
    </div>`;

var ozellik =
    `<div class="page wthead ozellik" data-gid="{gid}" data-uid="{uid}" data-fid="{fid}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="backbtn"></div><div class="btn_f sepekle"><a><i class="fa fa-shopping-basket"></i> SEPETE EKLE</a></div></div>\
    <div class="filtre"><h5>ÜRÜN ADEDİ</h5><label>1</label><a class="arti">+</a><a class="eksi">-</a></div>\
    </div>`;

var sepetim =
    `<div class="page wthead sepetim" data-gid="{gid}" data-sctop="{sctop}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="backbtn"></div><div class="sepet"><h2><i class="fa fa-check"></i> SİPARİŞİ GÖNDER</h2></div></div>\
    <div class="masasepet"></div>\
    <div class="sepetisim"><input type="text" id="txtisim" placeholder="Lütfen isminizi giriniz..."></div>\
    <div class="sepall"><ul>\
    </ul></div>\
    </div>`;
//<span class="mgohesap"><i class="fa fa-receipt fa-fw"></i><ln class="tbhesap">Son Sipariş</ln></span>
var sepetimhizli =
    `<div class="page wthead sepetim sepetimhizli" data-gid="{gid}" data-sctop="{sctop}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="backbtn"></div><div class="sepet"><h2><i class="fa fa-check"></i> BİTİR</h2></div></div>\
    <div class="masasepet"></div>\
    <div class="sepetisim"><input type="text" id="txtisim" placeholder="Lütfen isminizi giriniz..."></div>\
    <div class="sepall"><ul>\
    </ul></div>\
    </div>`;


var hizlisepet = `<div class="page hizlisepet" data-gid="{gid}" data-sctop="{sctop}">\
    <div class="bottom"><div class="backbtn2 mgohesap"><i class="fa fa-receipt fa-fw"></i></div><div class="sepet hide"><h2><i class="fa fa-shopping-basket"></i> Bitir</h2><label class="sepcnt">0</label></div></div>\
    <div class="masasepet"></div>\
    <div class="sepetisim"><input type="text" id="txtisim" placeholder="Lütfen isminizi giriniz..."></div>\
    <div class="sepall"><ul>\
    </ul></div>\
    </div>`;

var hesaplist = `<div class="page wthead hesaplist" data-gid="{gid}" data-sctop="{sctop}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="backbtn"></div></div>\
    <div class="masasepet"></div>\
    <div class="sepall"><ul>\
    </ul></div>\
    </div>`;


var secure = `<div class="page wthead secure" data-gid="{gid}" data-sctop="{sctop}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="sepet"><h2><i class="fa fa-hand-pointer-o"></i> NUMARAYI DOĞRULA</h2></div></div>\
    <div class="pview"><h5><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i></h5></div>\
    <div class="pdesc">Masa kodunuzu giriniz</div>\
    <div class="ppos"><ul class="ppad">\
        <li><a data-no="1">1</a></li>\
        <li class="mid"><a data-no="2">2</a></li>\
        <li><a data-no="3">3</a></li>\
        <li><a data-no="4">4</a></li>\
        <li class="mid"><a data-no="5">5</a></li>\
        <li><a data-no="6">6</a></li>\
        <li><a data-no="7">7</a></li>\
        <li class="mid"><a data-no="8">8</a></li>\
        <li><a data-no="9">9</a></li>\
        <li><a data-no="i" class="iptal">İPTAL</a></li>\
        <li class="mid"><a data-no="0">0</a></li>\
        <li><a data-no="s" class="sil">SİL</a></li>\
    </ul></div></div>`;

var secure2 = `<div class="page wthead secure" data-gid="{gid}" data-sctop="{sctop}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="sepet"><h2><i class="fa fa-hand-pointer-o"></i> DEVAM </h2></div></div>\
    <div class="pview"><h5><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i></h5></div>\
    <div class="pdesc">Güvenlik kodunu giriniz</div>\
    <div class="divcaptcha"></div>\
    <div class="ppos"><ul class="ppad">\
        <li><a data-no="1">1</a></li>\
        <li class="mid"><a data-no="2">2</a></li>\
        <li><a data-no="3">3</a></li>\
        <li><a data-no="4">4</a></li>\
        <li class="mid"><a data-no="5">5</a></li>\
        <li><a data-no="6">6</a></li>\
        <li><a data-no="7">7</a></li>\
        <li class="mid"><a data-no="8">8</a></li>\
        <li><a data-no="9">9</a></li>\
        <li><a data-no="i" class="iptal">İPTAL</a></li>\
        <li class="mid"><a data-no="0">0</a></li>\
        <li><a data-no="s" class="sil">SİL</a></li>\
    </ul></div></div>`;

var phonenum = `<div class="page wthead phonenum" data-gid="{gid}" data-sctop="{sctop}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="sepet"><h2><i class="fa fa-hand-pointer-o"></i> DEVAM </h2></div></div>\
    <div class="pview"><h5><i>0</i><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i></h5></div>\
    <div class="pdesc">Lütfen Cep Telefonunuzu giriniz.</div>\
    <div class="divcaptcha"></div>\
    <div class="ppos"><ul class="ppad">\
        <li><a data-no="1">1</a></li>\
        <li class="mid"><a data-no="2">2</a></li>\
        <li><a data-no="3">3</a></li>\
        <li><a data-no="4">4</a></li>\
        <li class="mid"><a data-no="5">5</a></li>\
        <li><a data-no="6">6</a></li>\
        <li><a data-no="7">7</a></li>\
        <li class="mid"><a data-no="8">8</a></li>\
        <li><a data-no="9">9</a></li>\
        <li><a data-no="i" class="iptal">İPTAL</a></li>\
        <li class="mid"><a data-no="0">0</a></li>\
        <li><a data-no="s" class="sil">SİL</a></li>\
    </ul></div></div>`;

var smssecure = `<div class="page wthead smssecure" data-gid="{gid}" data-sctop="{sctop}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="sepet"><h2><i class="fa fa-hand-pointer-o"></i> DEVAM </h2></div></div>\
    <div class="pview"><h5><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i></h5></div>\
    <div class="pdesc">Lütfen Cep Telefonunuzu gelen doğrulama kodunu giriniz.</div>\
    <div class="divcaptcha"></div>\
    <div class="ppos"><ul class="ppad">\
        <li><a data-no="1">1</a></li>\
        <li class="mid"><a data-no="2">2</a></li>\
        <li><a data-no="3">3</a></li>\
        <li><a data-no="4">4</a></li>\
        <li class="mid"><a data-no="5">5</a></li>\
        <li><a data-no="6">6</a></li>\
        <li><a data-no="7">7</a></li>\
        <li class="mid"><a data-no="8">8</a></li>\
        <li><a data-no="9">9</a></li>\
        <li><a data-no="i" class="iptal">İPTAL</a></li>\
        <li class="mid"><a data-no="0">0</a></li>\
        <li><a data-no="s" class="sil">SİL</a></li>\
    </ul></div></div>`;


var masasecimi = `<div class="page wthead masasecimi" data-gid="{gid}" data-sctop="{sctop}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="backbtn"></div><div class="sepet"><h2><i class="fa fa-hand-pointer-o"></i> SİPARİŞ VER</h2></div></div>\
    <div class="pdesc2">Masa seçimi yapınız</div>\
    <div class="masalar mb50"><ul>\
    </ul></div>\
    </div>`;


var garson = `<div class="page wthead garson" data-gid="{gid}" data-sctop="{sctop}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="sepet"><h2><i class="fa fa-hand-pointer-o"></i> GARSON ÇAĞIR</h2></div></div>\
    <div class="masasepet"></div>\
    <div class="pview"><h5><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i></h5></div>\
    <div class="pdesc">Lütfen aşağıdaki güvenlik kodunu giriniz</div>\
    <div class="divcaptcha"></div>\
    <div class="ppos"><ul class="ppad">\
        <li><a data-no="1">1</a></li>\
        <li class="mid"><a data-no="2">2</a></li>\
        <li><a data-no="3">3</a></li>\
        <li><a data-no="4">4</a></li>\
        <li class="mid"><a data-no="5">5</a></li>\
        <li><a data-no="6">6</a></li>\
        <li><a data-no="7">7</a></li>\
        <li class="mid"><a data-no="8">8</a></li>\
        <li><a data-no="9">9</a></li>\
        <li><a data-no="i" class="iptal">İPTAL</a></li>\
        <li class="mid"><a data-no="0">0</a></li>\
        <li><a data-no="s" class="sil">SİL</a></li>\
    </ul></div></div>`;

var hesap =
    `<div class="page wthead hesap" data-gid="{gid}" data-sctop="{sctop}">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="sepet"><h2><i class="fa fa-hand-pointer-o"></i> HESABIM</h2></div></div>\
    <div class="masasepet"></div>\
    <div class="pview"><h5><i class="pin"></i><i class="pin"></i><i class="pin"></i><i class="pin"></i></h5></div>\
    <div class="pdesc">Lütfen aşağıdaki güvenlik kodunu giriniz</div>\
    <div class="divcaptcha"></div>\
    <div class="ppos"><ul class="ppad">\
        <li><a data-no="1">1</a></li>\
        <li class="mid"><a data-no="2">2</a></li>\
        <li><a data-no="3">3</a></li>\
        <li><a data-no="4">4</a></li>\
        <li class="mid"><a data-no="5">5</a></li>\
        <li><a data-no="6">6</a></li>\
        <li><a data-no="7">7</a></li>\
        <li class="mid"><a data-no="8">8</a></li>\
        <li><a data-no="9">9</a></li>\
        <li><a data-no="i" class="iptal">İPTAL</a></li>\
        <li class="mid"><a data-no="0">0</a></li>\
        <li><a data-no="s" class="sil">SİL</a></li>\
    </ul></div></div>`;

var onay =
    `<div class="page wthead onay">\
    <div class="headbar"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="backbtn"></div><div class="sepet"><h2>ANA MENU</h2></div></div>\
    <div class="presult">\
    </div>\
    <div class="sepall"><ul>\
    </ul></div>\
    </div>`;

var sonsip =
    `<div class="page wtheadx onay sonsip">\
    <div class="headbar hide"><img src="v2/assets/img/small-noimg.jpg" /></div>\
    <div class="bottom"><div class="backbtn"></div></div>\
    <div class="masasepet"></div>\
    <div class="presult">\
    </div>\
    <div class="sepall"><ul>\
    </ul></div>\
    </div>`;

var menucebimdeinfo =
    `<div class="page wtheadx menucebimdeinfo">\
    <div class="bottom"><div class="backbtn"></div></div>\
    <div class="presultx">\
    <div class="infodiv"><div class="centerdiv"><img src="sitev2/img/logo3.png"></img>\
    <span class="baslik">&quot;Menünün En iyi hali&quot;</span>\
    <div><a href="https://www.instagram.com/menucebimde/" target="_blank"><i class="fa fa-instagram"></i><span>Bizi Takip Edin</span></a></div>\
    <div>Ayrıntılı Bilgi Almak İçin</div>\
    <div><a href="https://api.whatsapp.com/send?phone=+905424333804&text=Benim de bir işletmem var. Menucebimde kullanmak istiyorum." target="_blank"><i class="fa fa-whatsapp"></i><span>İletişime geçin</span></a></div>\
    <div><a href="tel://08504661002" target="_blank"><i class="fa fa-phone"></i><span>0850 466 1002</span></a></div>\
    </div></div>\
    </div></div>`;


var anket =
    `<div class="page wthead anket">\
    <div class="bottom"><div class="backbtn"></div><div class="sepet"><h2><i class="fa fa-star"></i> ANKETİ GÖNDER</h2></div></div>\
    <div class="divbg"><div class="danket">\
      <div class="masasepet">Görüş ve Öneri</div>\
      <span class="giris">Değerli müşterimiz,<br>Geri bildirimlerinizi hassasiyetle incelediğimizi bildirir, değerli görüş ve önerilerinizi bizimle paylaşmanızı rica ederiz.<br>Kısa anketimize ayıracağınız zaman için teşekkür ediyoruz.</span>\
      <div class="question" id="q1" soru="Servis">\
      <div>Servis:</div>\
      <div style="display:flex;">\
      <input type="radio" name="q11" id="11" value="1"><label for="11"></label>\
      <input type="radio" name="q11" id="12" value="2"><label for="12"></label>\
      <input type="radio" name="q11" id="13" value="3"><label for="13"></label>\
      <input type="radio" name="q11" id="14" value="4"><label for="14"></label>\
      <input type="radio" name="q11" id="15" value="5"><label for="15"></label>\
      </div>\
      </div>\
      <div class="question" id="q2" soru="Lezzet">\
      <div>Lezzet:</div>\
      <div style="display:flex;">\
      <input type="radio" name="q22" id="21" value="1"><label for="21"></label>\
      <input type="radio" name="q22" id="22" value="2"><label for="22"></label>\
      <input type="radio" name="q22" id="23" value="3"><label for="23"></label>\
      <input type="radio" name="q22" id="24" value="4"><label for="24"></label>\
      <input type="radio" name="q22" id="25" value="5"><label for="25"></label>\
      </div>\
      </div>\
      <div class="question" id="q3" soru="Sunum">\
      <div>Sunum:</div>\
      <div style="display:flex;">\
      <input type="radio" name="q33" id="31" value="1"><label for="31"></label>\
      <input type="radio" name="q33" id="32" value="2"><label for="32"></label>\
      <input type="radio" name="q33" id="33" value="3"><label for="33"></label>\
      <input type="radio" name="q33" id="34" value="4"><label for="34"></label>\
      <input type="radio" name="q33" id="35" value="5"><label for="35"></label>\
      </div>\
      </div>\
      <div class="question" id="q4" soru="Porsiyon">\
      <div>Porsiyon:</div>\
      <div style="display:flex;">\
      <input type="radio" name="q44" id="41" value="1"><label for="41"></label>\
      <input type="radio" name="q44" id="42" value="2"><label for="42"></label>\
      <input type="radio" name="q44" id="43" value="3"><label for="43"></label>\
      <input type="radio" name="q44" id="44" value="4"><label for="44"></label>\
      <input type="radio" name="q44" id="45" value="5"><label for="45"></label>\
      </div>\
      </div>\
      <div class="question" id="q5" soru="Ambiyans">\
      <div >Ambiyans:</div>\
      <div style="display:flex;">\
      <input type="radio" name="q55" id="51" value="1"><label for="51"></label>\
      <input type="radio" name="q55" id="52" value="2"><label for="52"></label>\
      <input type="radio" name="q55" id="53" value="3"><label for="53"></label>\
      <input type="radio" name="q55" id="54" value="4"><label for="54"></label>\
      <input type="radio" name="q55" id="55" value="5"><label for="55"></label>\
      </div>\
      </div>\
      <div class="question2" id="q6">\
      <div>Görüş ve Önerileriniz:</div>\
      <textarea id="oneri" name="oneri" ></textarea>\
      </div>\
    </div>\
  </div></div>\
    </div>`;


var slider = `
    <div class="featured-products hide">
        <div class="featured-slider-container">
            <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">

              <div class="swiper-wrapper" id="swiper-wrapper-210ff7a20f515f17a" aria-live="off" style="transition-duration: 0ms; transform: translate3d(-7380px, 0px, 0px);">
 
              </div>


            </div>
            <div class="featured-content">
                <div class="featured-header">
                    <h2 class="featured-title" data-full-title="SMART BURGER">-</h2>
                    <p class="featured-price">-</p>
                </div>
                <p class="featured-description">...</p>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span>

        </div>
    </div>
    `;



    /* 
if (_page == "main") {
  addSearch('main');

  $(".sepcnt").text(adisyon.length);

  if (data.tema == 5) {
    let menuHtml = `<div class="a4menu">`;

    for (let i = 0; i < urndata.length; i++) {
      let kategori = urndata[i];
      if (kategori.ydata.length === 0) continue;

      menuHtml += `
        <div class="a4menu-category">
          <h2>${kategori.name}</h2>
      `;

      for (let j = 0; j < kategori.ydata.length; j++) {
        let urun = kategori.ydata[j];
        let fiyat = urun.portions && urun.portions[0] ? urun.portions[0].price : '';
        menuHtml += `
          <div class="a4menu-item">
            <div class="a4menu-item-left">
              <strong>${urun.title}</strong>
              ${urun.desc ? `<span>${urun.desc}</span>` : ''}
            </div>
            <div class="a4menu-item-right">${fiyatyap(fiyat, data.currency)}</div>
          </div>
        `;
      }

      menuHtml += `</div>`;
    }

    menuHtml += `</div>`;
    $("#app").html(menuHtml);
    return;
  }

  // diğer tema (1-4) için mevcut kod burada devam etsin
}
    */