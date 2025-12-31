 
 function loadAboutUs() {
 $('#sirketadi').html(data.menuinfos.menuAdi);

      //whatsapp
      const rawPhone = data.menuinfos && data.menuinfos.whatsapp ? data.menuinfos.whatsapp : null;

      if (rawPhone) {
        const waUrl = 'https://wa.me/' + rawPhone.replace(/\D/g, '');
        const phoneDisplay = rawPhone; // ekranda göstermek istediğin formatlı numara

        $('#aboutus-whatsapp').attr('href', waUrl).text(phoneDisplay);
        $('#aboutus-whatsapp-cta').attr('href', waUrl);
        $('#aboutus-mini-wa').attr('href', waUrl);
      } else {
        // numara yoksa buton/linki gizle veya pasif yap
        $('#aboutus-whatsapp, #aboutus-whatsapp-cta, #aboutus-mini-wa').removeAttr('href').hide();
      }

      // instagram
      const rawInstagram = data.menuinfos && data.menuinfos.instagram ? data.menuinfos.instagram : null;
      if (rawInstagram) {
        const igUrl = 'https://instagram.com/' + rawInstagram.replace(/^@/, '');
        $('#aboutus-instagram')?.attr('href', igUrl);
        $('#aboutus-instagram') && ($('#aboutus-instagram').text ('@' + rawInstagram.replace(/^@/, '')));
        $('#aboutus-instagram-cta')?.attr('href', igUrl);
        $('#aboutus-mini-ig')?.attr('href', igUrl);
      }
       else {
        // numara yoksa buton/linki gizle veya pasif yap
        $('#aboutus-instagram, #aboutus-instagram-cta').removeAttr('href').hide();
      }

      aboutus_language(curln);
    }