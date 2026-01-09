window.mobileAndTabletCheck = function () {
  return is.mobile() || is.tablet();
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};



$(function () {


  $("html, body, #app").css({
    //height: $(window).height(),
  });

  console.log($(window).height())

  if (menuID == 'QD3I5E') {
    //alert($(window).height()+'-'+$(document).height())
    //alertMe({ msg: $(window).height()+'-'+ $(window).width()+'-'+$(document).height() });
  }

  if (mobileAndTabletCheck() == true) {

    $(window).bind("orientationchange resize", function (event) {
      if (event.orientation) {
        if (event.orientation == "portrait") {
          // do something
          $(".orient").fadeOut();
        } else if (event.orientation == "landscape") {
          $(".orient").fadeIn();
        }
      } else {
        // optional... PC-version javascript for example
        //$(".orient").hide();
      }
    });

    $(window).trigger("orientationchange");
    //$(window).trigger("resize");

  }

  //----------------------

  $("#app").on("tap click", "#imgCaptcha", function () {

    this.src = this.src.split('?')[0] + '?x=' + new Date().toUTCString();

  });


  var gparam;

  window.loadPage = function (url, param, anim) {

    if (data.ssepet == '2' && (url == "main" || url == "start")) {
      url = "hizlisepet"
    }

    if (menuID == 'UP2DI6' && (url == "main" || url == "start")) {
      url = "hizlisepet"
    }

    if (data.ssepet == '2' && url == "sepetim") {
      url = "hizlisepet"
    }


    if (menuID == 'UP2DI6' && url == "sepetim") {
      url = "sepetimhizli"
    }

    console.log(param);
    var prx = {}
    gparam = param;





    console.log('url:' + url);
    /*
        if (url=='start' ){
          //uyglulama yükleme butonları
          $('div.icerik').css('display','flex')
        }else{
          $('div.icerik').css('display','none')
        }
    */



    if (url == "list") {
      //console.log(data.mdata[param.gid].name);

      prx = { key: param.gid, keyname: data.mdata[param.gid].name }
    }

    if (url == "slide") {
      //console.log(data.mdata[param.gid].name);

      prx = { key: data.mdata[param.gid].ydata[param.uid].id, keyname: data.mdata[param.gid].ydata[param.uid].title }
    }


    //$("body").removeClass('start');
    //$("body").addClass(url);



    //var param2=param.append('url', url);
    var pr = { url: url, menuid: menuID, jsonid: data.jsonid, curlang: curln }
    var param2 = { ...param, ...pr, ...prx }
    sendData("takip", "POST", param2
      , function (_data) {
        //console.log(_data);

        if (_data.status != 100) {
          //data = _data.data;
          //console.log(_data.err);
          window.location.reload();
        }
      },
      function (err) {
        //console.log(err);
      }
    );


    var loadfn = function () {
      var ret = eval(url);
      ////console.log(ret);
      $.each(param, function (key, value) {
        var re = new RegExp("{" + key + "}", "g");
        ret = ret.replace(re, value);
        ////console.log(ret);
      });

      $("#app").html(ret);

      complete(url);

      if (appopen == '0') {
        $('div.icerik').css('display', 'none')
      }

      if (mporty == 1) {


        $(".goporty").removeClass("hide");

        var images = ['gpbg1', 'gpbg0'];
        var randomImage = Math.floor(Math.random() * 2)
        //console.log(images[randomImage]);
        //$(".goporty a").css("background-image", "url('" + images[randomImage] + "')");
        //$(".goporty").children('a').eq(1).addClass(images[0]);
        $(".goporty").children('a').eq(0).addClass(images[1]);
        //$('div.icerik').css('display','none')

      }

      if (param.sctop !== undefined) {
        if (url != 'slide') {
          $("#app").scrollTop(param.sctop);
          console.log("slide değil")
        } else {
          $("#app").scrollTop(0)
        }
      }
      $(".overlay").fadeOut(200);
    };

    if (anim) {
      $(".overlay").fadeIn(200, loadfn);
    } else {
      $(".overlay").fadeOut(0, loadfn);
    }
  }

  openStart();
  // 182-336. satırlar arası style_extension.js dosyasından alınan fonksiyonların kullanımı
  function showMenus() {

    if (!$(".menus").hasClass("show")) {
      $(".menus").fadeIn();
      $(".menus").addClass("show");
    }
  }

$("#app").on("focus", ".main #txtsearch", function () {
    backfn = function () {
        refreshSearch();
    };
    $('.main .gruplar').hide();
    $('.featured-products').hide();
    $('.main .urunler').show();
    $('.main .searchbar a').show();
});

$("#app").on("blur", ".main #txtsearch", function () {
    backfn = function () {
        loadPage("start", {}, true);
    };
    if ($('.main #txtsearch').val() == '') {
        refreshSearch();
    }
});

function refreshSearch() {
    backfn = function () {
        loadPage("start", {}, true);
    };
    $('.main .searchbar a').hide();
    $('.main .gruplar').show();
    $('.featured-products').show();
    $('.main .urunler').hide();
    $('.main #txtsearch').val('')
    $('.main .urunler li').show();
    $('.main .searchbar').css('display', 'none');
}

function filterUruns(txt) {
    $('.main .urunler li').each(function (i) {
        var name = $(this).data('name');
        var key = txt;
        ////console.log(name, key, name.indexOf(key));
        if (name.indexOf(key) < 0) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
}

  $("#app").on("tap", ".main .searchbar a", function () {


    refreshSearch();
    return false;
  });

  $("#app").on("input propertychange", ".main #txtsearch", function () {
    filterUruns($('.main #txtsearch').val().toLocaleLowerCase('tr-TR').replace(/\s/g, ''));
  });

  $("#app").on("tap", ".start .gomains", function () {
    console.warn("tiktik")
    showMenus();
  });

   $("#app").on("tap", ".main .gomains", function () {
    showMenus();
  });


    $("#app").on("tap", ".start .menus, .menus", function () {

    if ($(".menus").hasClass("show")) {
      $(".menus").removeClass("show");
      $(".menus").fadeOut();

      console.log("cmenu:" + menuID)
      console.log("x:" + $(this).find('a.active').data("menuid"))

      if ($(this).find('a.active').data("menuid") == menuID) {
        if (dilsecimi == 0) {
          //alertify.okBtn("Kapat").cssClass('langDia').alert(htmlLn);
          var lkeys = data['lang'];
          if (lkeys.length > 1) {

            //console.log(lkeys)

            var htmlLn = '';
            for (var i = 0; i < lkeys.length; i++) {
              htmlLn += '<a class="' + (curln == lkeys[i] ? 'active' : '') + '" data-ln="' + lkeys[i] + '">' + ln_key[lkeys[i]]['dil'] + '</a>';
            }

            //alertify.okBtn("Kapat").cssClass('langDia langc').alert(htmlLn);


            alertify.okBtn("X").cssClass('langDia').alert(htmlLn);

          }


        }

      }


    }
  });


    $("#app").on("tap", ".start .menus a,.menus a ", function () {

    if (!$(this).hasClass("active")) {
      var nmenuid = $(this).data("menuid");
      //console.log(nmenuid);
      opage = _pageback
      openStart(nmenuid, opage);


    } else {
      //$('.menus').removeClass('show');
      //$('.menus').fadeOut();

      if (dilsecimi == 0) {
        //alertify.okBtn("Kapat").cssClass('langDia').alert(htmlLn);
        var lkeys = data['lang'];
        if (lkeys.length > 1) {

          //console.log(lkeys)

          var htmlLn = '';
          for (var i = 0; i < lkeys.length; i++) {
            htmlLn += '<a class="' + (curln == lkeys[i] ? 'active' : '') + '" data-ln="' + lkeys[i] + '">' + ln_key[lkeys[i]]['dil'] + '</a>';
          }

          //alertify.okBtn("Kapat").cssClass('langDia langc').alert(htmlLn);


          alertify.okBtn("X").cssClass('langDia').alert(htmlLn);

        }


      }

    }
  });

  $("#app").on("tap", ".backbtn", function () {
    backfn();
  });

  function camp_count(time) {
    $(".camp_time").html(time + ' sn');
    setTimeout(function () {
      ////console.log(time);
      if (time > 1) { camp_count(time - 1); } else {
        exitCamp();
      }
    }, 1000);
  }



  function showCamp(dat) {
    var dat = JSON.parse(dat);
    $('.campaign img').attr('src', dat.img);
    $('.campaign').css('display', 'flex');


    camp_count(parseInt(dat.time));
  }

  function exitCamp() {

    //$('.campaign').hide(); 

    $('.campaign').fadeOut();

  }

  $(".camp_exit").on("tap", function () {
    exitCamp();
    return false;
  });





  var setti2;
  function camp_count2(time) {
    $(".camp_time2").html(time + ' sn');

    setti2 = setTimeout(function () {
      ////console.log(time);
      if (time > 1) { camp_count2(time - 1); } else {
        exitCamp2();

      }
    }, 500);
  }





  function showCamp2(dat) {
    var dat = JSON.parse(dat);



    $('.start').css('background', 'red !important');

    $('.campaign2').css('background-color', '' + dat.bg + '');

    $('.campaign2 .camp_bg2').css('background-image', 'url(' + dat.img + ')');


    $('.campaign2').css('display', 'flex');
    //$('.campaign2').animate({"margin-right": '+=200'});
    camp_count2(parseInt(dat.time));
  }


  function exitCamp2() {

    //$('.campaign2').hide();
    $('.campaign2').fadeOut();
    clearTimeout(setti2);

  }

  $(".camp_exit2").on("tap", function () {
    exitCamp2();
    return false;
  });



  var tabmenuacik = 0;

  //$('#app').on('tap','.start .gomains',function(){
  $("#app").on("tap", ".start .cover,.start .cover_name", function () {

    if (tabmenuacik == 0) {
      loadPage("main", {}, true);

    } else {

      tabmenuacik = tabmenutoggle(tabmenuacik, menuID, data.jsonid, curln);
    }

  });


  $("#app").on("tap", ".start .gosipa", function () {


    loadPage("main", {}, true);









  });


  $("#app").on("tap", ".tabmenu .mgosipa", function () {


    loadPage("main", {}, true);




  });

  $("#app").on("click", ".tabmenu .mgoanket,.altmenu .mgoanket", function () {


    console.log(data.kanket)

    if (data.kanket > 0) {

      if (data.hasOwnProperty('kanketurl')) {

        if (data.kanketurl != '') {

          openURL(data.kanketurl, "anketurl")
          //window.open(data.kanketurl, '_blank');

        } else {

          loadPage("anket", {}, true);

        }

      } else {

        loadPage("anket", {}, true);


      }




    }



  });

  $("#app").on("click", ".tabmenu .mgoabout,.altmenu .mgoabout", function () {
    backfn = function () {
      loadPage("start", {}, true);
    };

    //alert("about us tiklandi");
    loadPage("aboutus", {}, true);
  });

  $("#app").on("click", ".tabmenu .mgoabout,.altmenu .mgorezervasyon", function () {
    // Eğer hamburger menüden giriliyorsa seçili etkinliği sıfırla
    if (typeof selectedEvent !== 'undefined') {
      selectedEvent = null;
    }

    backfn = function () {
      loadPage("start", {}, true);
    };

    //alert("about us tiklandi");
    loadPage("rezervasyon", {}, true);
  });

  

    $("#app").on("click", ".navbuttonanket", function () {
    backfn = function () {
      loadPage("start", {}, true);
    };

    //alert("about us tiklandi");
    loadPage("anket", {}, true);
  });

      $("#app").on("click", ".navbuttonaboutus", function () {
    backfn = function () {
      loadPage("start", {}, true);
    };

    //alert("about us tiklandi");
    loadPage("aboutus", {}, true);
  });

        $("#app").on("click", ".navbuttondil", function () {
    var lkeys = data['lang'];
    //lkeys=Object.keys("['tr','en']");



    if (lkeys.length > 1) {

      //console.log(lkeys)

      var htmlLn = '';
      for (var i = 0; i < lkeys.length; i++) {
        htmlLn += '<a class="' + (curln == lkeys[i] ? 'active' : '') + '" data-ln="' + lkeys[i] + '">' + ln_key[lkeys[i]]['dil'] + '</a>';
      }

      //alertify.okBtn("Kapat").cssClass('langDia langc').alert(htmlLn);


      alertify.okBtn("X").cssClass('langDia').alert(htmlLn);


    }
  });

  

  function openURL(url, takip) {
    // Yeni bir pencere açma işlemi kullanıcı etkileşimi olmadan yapılabilirse, pop-up blokerler tarafından engellenebilir.
    // Bu nedenle, kullanıcı etkileşimi gerektiren bir işlem yapılmalıdır.
    //alertMe({ msg: "Pop-up bloker tarafından engellendi. Lütfen izin verin veya doğrudan tarayıcınızdan açın." });
    // Örneğin, bir butona tıklama olayını bekleyebiliriz:
    var newWindow = window.open(url, '_blank');

    // Eğer pop-up bloker varsa ve pencere açılamazsa, kullanıcıya bir mesaj gösterebiliriz.
    if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {

      //alertMe({ msg: "Pop-up bloker tarafından engellendi. Lütfen izin verin veya doğrudan tarayıcınızdan açın." });

      var pr = { url: takip, menuid: menuID, key: '0', keyname: url, curlang: curln }
      sendData("takip", "POST", pr);

    } else {


      var pr = { url: takip, menuid: menuID, key: '1', keyname: url, curlang: curln }
      sendData("takip", "POST", pr);

    }
  }


  $("#app").on("tap", ".start .gotabmenu, .tabmenu", function () {
    tabmenuacik = tabmenutoggle(tabmenuacik, menuID, data.jsonid, curln);
  });

  $("#app").on("click", ".start .gomenucebimde", function () {
    loadPage("menucebimdeinfo", {}, true);
    //openMain();
  });

  $("#app").on("click", ".start .gogars, .tabmenu .mgogars", function () {

    if (data.gcagir > 0) {
      loadPage("garson", {}, true);
    }

    //openMain();
  });


  $("#app").on("click", ".start .gogars, .tabmenu .mgohesap, .hizlisepet .mgohesap", function () {

    if (data.ssepet == '2') {

      loadPage("sonsip", {}, true);

    }


    if (menuID == 'UP2DI6') {

      loadPage("sonsip", {}, true);

    }

    if (data.mhesap > 0) {
      loadPage("hesap", {}, true);
    }

  });



  $("#app").on("tap", ".tabmenu .tmlogo", function () {

    var pr = { url: 'tmlogo', menuid: menuID, jsonid: data.jsonid, curlang: curln }
    sendData("takip", "POST", pr
      , function (_data) {
        //console.log(_data);

        window.open('http://menucebimde.com/', '_blank');

        if (_data.status != 100) {
          //data = _data.data;
          //console.log(_data.err);
          window.location.reload();
        }
      },
      function (err) {
        //console.log(err);
      }
    );




  });

  $("#app").on("tap", ".icerik2 .badges img", function () {

    var pr = { url: 'badges', menuid: menuID, jsonid: data.jsonid, curlang: curln }
    sendData("takip", "POST", pr
      , function (_data) {
        //console.log(_data);

        window.open('http://menucebimde.com/applink', '_blank');

        if (_data.status != 100) {
          //data = _data.data;
          //console.log(_data.err);
          window.location.reload();
        }
      },
      function (err) {
        //console.log(err);
      }
    );




  });



  $("#app").on("tap", ".main .gruplar li", function () {
    gctop = $("#app").scrollTop();
    sctop = 0;
    //loadPage("slide", { gid: $(this).data("gid"), sctop: sctop }, true);
    loadPage("list", { gid: $(this).data("gid"), sctop: sctop }, true);
  });

  $("#app").on("tap", ".list .urunler li, .main .urunler li", function () {
    //loadPage("urun",{gid: $(this).data("gid"),uid: $(this).data("uid"),sctop: $("#app").scrollTop(),},true);
    sctop = $("#app").scrollTop();
    loadPage("slide", { gid: $(this).data("gid"), uid: $(this).data("uid"), sctop: sctop }, true);
  });

  // Öne çıkanlar slider'ındaki bir ürüne tıklandığında (Etkinlikler sayfasına yönlendir)
  $("#app").on("tap", "div.slidimg", function () {
    sctop = $("#app").scrollTop();
    loadPage("etkinlikler", {}, true);
  });


  $('#app').on('tap click', '.urun .fiyatlar.spsetSec li', function () {
    $('.urun .fiyatlar li').removeClass('done');
    $('.urun .fiyatlar li i').attr('class', 'fa fa-circle');
    $(this).addClass('done');
    $('i', this).attr('class', 'fa fa-check-circle');
    //loadPage('ozellik',{ gid:$(this).data('gid'),uid:$(this).data('uid'),fid:$(this).data('fid'),sctop:$('#app').scrollTop() },true);
  });

  $('#app').on('tap click', '.slide .fiyatlar.spsetSec li', function () {
    $('.slide .fiyatlar li').removeClass('done');
    $('.slide .fiyatlar li i').attr('class', 'fa fa-circle');
    $(this).addClass('done');
    $('i', this).attr('class', 'fa fa-check-circle');
    //loadPage('ozellik',{ gid:$(this).data('gid'),uid:$(this).data('uid'),fid:$(this).data('fid'),sctop:$('#app').scrollTop() },true);
  });

  var mid = "";
  $('#app').on('tap click', '.masasecimi .masalar li', function () {
    $('.masasecimi .masalar li').removeClass('done');
    $('.masasecimi .masalar li i').attr('class', 'fa fa-circle');
    $(this).addClass('done');
    $('i', this).attr('class', 'fa fa-check-circle');
    //loadPage('ozellik',{ gid:$(this).data('gid'),uid:$(this).data('uid'),fid:$(this).data('fid'),sctop:$('#app').scrollTop() },true);
    mid = $(this).data("mid");
    //console.log(mid);

  });


  $("#app").on("tap click", ".slide .sepekle", function () {
    if ($(".slide .fiyatlar li.done").length > 0) {
      var gid = $(".slide .fiyatlar li.done").data("gid");
      var uid = $(".slide .fiyatlar li.done").data("uid");
      var fid = $(".slide .fiyatlar li.done").data("fid");


      loadPage(
        "ozellik",
        { gid: gid, uid: uid, fid: fid, sctop: $("#app").scrollTop() },
        true
      );
    } else {
      //alertMe({ msg: ln_key[curln]['porsiyon-yok'] });



      $("#app").animate({
        scrollTop: $(".fiyatlar").offset().top
      }, 500);

    }
  });


  $("#app").on("tap", ".urun .sepekle", function () {
    var gid = $(".urun .fiyatlar li.done").data("gid");
    var uid = $(".urun .fiyatlar li.done").data("uid");
    var fid = $(".urun .fiyatlar li.done").data("fid");


    loadPage(
      "ozellik",
      { gid: gid, uid: uid, fid: fid, sctop: $("#app").scrollTop() },
      true
    );
  });

  //adisyon=[{gid:1}];

  $("#app").on("tap", ".main .sepet, .list .sepet", function () {
    ////console.log(adisyon);
    //sipGonder();
    if (adisyon.length > 0) {
      loadPage("sepetim", {}, true);
    } else {
      alertMe({ msg: ln_key[curln]['sepet-urun-yok'] });
    }
  });

  // Sadece isteğe bağlı (osecenek) olanlar için toggle işlemi
  $("#app").on("tap", ".ozellik .fiyatlar.osecenek li", function (e) {
    // Bazı cihazlarda/eklentilerde aynı elemana birden fazla handler zincirlenebiliyor.
    // Burada state'in (done + ikon) kararlı kalması için propagation'ı kesiyoruz.
    if (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    if ($(this).hasClass("done")) {
      $(this).removeClass("done");
      $("i", this).attr("class", "fa fa-circle");
    } else {
      $(this).addClass("done");
      $("i", this).attr("class", "fa fa-check-circle");
    }
  });


  // Zorunlu (ozorunlu) alanlar için tekli seçim (Radio mantığı)
  // zor1, zor2 ayrımı yapmadan tüm zorunlu gruplar için çalışır
  $("#app").on("tap", ".ozellik .fiyatlar.ozorunlu li", function (e) {
    if (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    // Bu grubun (ul) içindeki tüm seçenekleri temizle (class ve ikon)
    $(this).parent().find('li').removeClass("done");
    $(this).parent().find('li i').attr("class", "fa fa-circle");

    // Tıklananı seçili yap
    $(this).addClass("done");
    $("i", this).attr("class", "fa fa-check-circle");
  });


  $("#app").on("tap", ".ozellik .filtre a", function () {
    $(this).animate({ opacity: 0.7 }, 200).animate({ opacity: 1 }, 200);
    var adet = parseInt($(".ozellik .filtre label").html());
    if ($(this).hasClass("arti")) {
      adet++;
    } else if ($(this).hasClass("eksi")) {
      if (adet > 1) {
        adet--;
      }
    }
    $(".ozellik .filtre label").html(adet);
  });

  $("#app").on("tap", ".ozellik .sepekle", function () {

    var gid = $(".ozellik").data("gid");
    var uid = $(".ozellik").data("uid");
    var fid = $(".ozellik").data("fid");
    var adet = parseFloat($(".ozellik .filtre label").html());

    var option = [];
    var optiontxt = [];
    var optionhtml = [];

    if ($(".ozellik .fiyatlar.osecenek li").length > 0) {
      $(".ozellik .fiyatlar.osecenek li").each(function () {


        if ($(this).hasClass("done")) {
          if ($(this).data("defsec") == 0) {
            option.push($(this).data("oid"));
            optiontxt.push($(this).data("name"));
            optionhtml.push('<span style="color:green;">' + $(this).data("name") + '</span>');
          }
        } else {
          if ($(this).data("defsec") == 1) {
            option.push(parseInt($(this).data("oid")) * -1);
            optiontxt.push($(this).data("name") + ' istemiyorum');
            optionhtml.push('<span style="text-decoration: line-through;color:red;">' + $(this).data("name") + '</span>');
          }
        }
      });
    }



    if ($(".ozellik .fiyatlar.ozorunlu li").length > 0) {
      $(".ozellik .fiyatlar.ozorunlu li").each(function () {


        if ($(this).hasClass("done")) {

          option.push($(this).data("oid"));
          optiontxt.push($(this).data("name"));
          optionhtml.push($(this).data("name"));

        }


      });
    }

    /*
    if ($(".ozellik .fiyatlar select").length > 0) {
      $(".ozellik .fiyatlar select").each(function () {
        option.push(parseInt($(this).val()));
        optiontxt.push($(this).find(':selected').attr('data-name'));
        optionhtml.push($(this).find(':selected').attr('data-name'));
      });
      //console.log(option);
    
    
    }*/



    //aynı özellikli ürün var ise push yaomayıp adeti güncelleiyoruz.
    var adstr = adisyon.findIndex(function (vendor) { return vendor.gid === gid && vendor.uid === uid && vendor.fid === fid && vendor.option.toString() === option.toString() })
    //console.log(adstr)

    if (adstr >= 0) {

      adisyon[adstr].adet = parseFloat(adisyon[adstr].adet) + parseFloat(adet)

    }
    else {

      adisyon.push({ gid: gid, uid: uid, fid: fid, adet: adet, option: option, optiontxt: optiontxt, optionhtml: optionhtml });

    }

    console.log(adisyon);

    //adisyon.push({ gid: gid, uid: uid, fid: fid, adet: adet, option: option, optiontxt: optiontxt, optionhtml: optionhtml });
    //console.log(adisyon);

    //loadPage("main", {}, true);
    loadPage("list", { gid: gid, sctop: sctop }, true);

  });



  function sepetSil(index) {
    delmsg({
      msg: ln_key[curln]['sepet-cikar'],
      func: function () {
        ////console.log('silindi..');
        adisyon.splice(index, 1);
        loadPage("sepetim", {}, true);
      },
    });
  }

  $("#app").on("taphold", ".sepetim .seprow", function () {
    ////console.log( $(this).data('row') );
    sepetSil($(this).data("row"));
  });

  $("#app").on("tap", ".sepetim .seprow a", function () {

    $(this).animate({ opacity: 0.7 }, 200).animate({ opacity: 1 }, 200);

    var adet = parseInt($(this).parent().data("adet"));
    var cost = $(this).parent().data("cost");
    var cls = $(this).parent().attr("class");
    var total = 0;

    if ($(this).hasClass("arti")) {
      adet++;
    } else if ($(this).hasClass("eksi")) {
      if (adet > 1) {
        adet--;
      } else {
        ////console.log( $(this).parent().data('row') );
        sepetSil($(this).parent().data("row"));
      }
    }

    ////console.log(adet);
    if (adisyon[parseInt(cls.replace("seprow srow_", ""))] !== undefined) {
      adisyon[parseInt(cls.replace("seprow srow_", ""))].adet = adet;
    }
    var xtxt;
    if ($('.sepetimhizli').length > 0) {
      xtxt = ""
    } else {
      xtxt = "x"
    }

    $(".sepetim .seprow").each(function () {
      if ($(this).hasClass(cls)) {
        $(this).data("adet", adet);
        $("label", this).html(xtxt + adet);
        total += $(this).data("cost") * adet;
      } else if (!$(this).hasClass("stotal")) {
        total += $(this).data("cost") * $(this).data("adet");
      }
    });

    console.log("tr:" + total >= 0)
    if (total >= 0) {
      $(".sepetim .stotal").data("total", total.toFixed(2));
      $(".sepetim .stotal h3").html(fiyatyap(total.toFixed(2), data.currency));
    } else {
      $(".sepetim .stotal").data("total", total.toFixed(2));
      $(".sepetim .stotal h3").html("-");
    }



  });




  $("#app").on("tap", ".sepetim .sepet", function () {
    ////console.log(adisyon);
    //loadPage("secure", {}, true);
    //masa seçimi ile değiştirlidi
    //loadPage("masasecimi", {}, true);
    var txtisim;
    txtisim = $.trim($("#txtisim").val());
    //console.log('isim:'+txtisim)
    if (data.tableno == 'MNCBM' && txtisim.trim() == '') {
      alertMe({
        msg: 'Lütfen size hitap edebilmemiz için bir isim giriniz.'
        , func: function (e) {
          $("#txtisim").val('');
          $("#txtisim").focus();
        }

      })

      return false;
    }


    //return false;
    //configden gelen güncelleniyor.
    data.mncbmdisim = txtisim.trim()



    loadPage("secure2", {}, true);

  });





  $("#app").on("tap", ".hizlisepet .seprow a", function () {
    $(this).animate({ opacity: 0.7 }, 200).animate({ opacity: 1 }, 200);

    var adet = parseInt($(this).parent().data("adet"));
    var cost = $(this).parent().data("cost");
    var cls = $(this).parent().attr("class");
    var total = 0;

    if ($(this).hasClass("arti")) {
      adet++;
    } else if ($(this).hasClass("eksi")) {
      if (adet > 0) {
        adet--;
      } else {
        ////console.log( $(this).parent().data('row') );

        //sepetSil($(this).parent().data("row"));


      }
    }


    $(".hizlisepet .seprow").each(function () {
      if ($(this).hasClass(cls)) {

        if (adet == 0) {
          $("label", this).css("opacity", "1");
        } else {
          $("label", this).css("opacity", "1");
        }

        $(this).data("adet", adet);
        $("label", this).html("" + adet);
        total += $(this).data("cost") * adet;
      } else if (!$(this).hasClass("stotal")) {
        total += $(this).data("cost") * $(this).data("adet");
      }
    });





    console.log("tr:" + total >= 0)
    if (total >= 0) {
      $(".hizlisepet .stotal").data("total", total.toFixed(2));
      $(".hizlisepet .stotal h3").html(fiyatyap(total.toFixed(2), data.currency));
    } else {
      $(".hizlisepet .stotal").data("total", total.toFixed(2));
      $(".hizlisepet .stotal h3").html("-");
    }





    var gid = $(this).parent().data("gid");
    var uid = $(this).parent().data("uid");
    var fid = $(this).parent().data("fid");
    //var adet = parseFloat($(".ozellik .filtre label").html());

    var option = [];
    var optiontxt = [];
    var optionhtml = [];






    //aynı özellikli ürün var ise push yaomayıp adeti güncelleiyoruz.
    var adstr = adisyon.findIndex(function (vendor) { return vendor.gid === gid && vendor.uid === uid && vendor.fid === fid && vendor.option.toString() === option.toString() })
    //console.log(adstr)

    if (adstr >= 0) {

      adisyon[adstr].adet = adet
      if (adet == 0) {
        adisyon.splice(adstr, 1);
      }

    }
    else {
      if (adet != 0) {
        adisyon.push({ gid: gid, uid: uid, fid: fid, adet: adet, option: option, optiontxt: optiontxt, optionhtml: optionhtml });
      }
    }

    console.log(adisyon);

    var totalAdet = adisyon.reduce(function (sum, item) {
      return sum + item.adet;
    }, 0);

    $(".sepcnt").text(totalAdet);

  });

  $("#app").on("tap", ".hizlisepet .sepet", function () {
    ////console.log(adisyon);
    //loadPage("secure", {}, true);
    //masa seçimi ile değiştirlidi
    //loadPage("masasecimi", {}, true);
    var txtisim;
    txtisim = $.trim($("#txtisim").val());
    //console.log('isim:'+txtisim)
    if (data.tableno == 'MNCBM' && txtisim.trim() == '') {
      alertMe({
        msg: 'Lütfen size hitap edebilmemiz için bir isim giriniz.'
        , func: function (e) {
          $("#txtisim").val('');
          $("#txtisim").focus();
        }

      })

      return false;
    }


    //return false;
    //configden gelen güncelleniyor.
    data.mncbmdisim = txtisim.trim()

    if (adisyon.length > 0) {

      if (menuID == "UP2DI6" || data.ssepet == '2') {
        sipGonder('111111', '')
      } else {
        loadPage("secure2", {}, true);
      }



    } else {
      alertMe({ msg: ln_key[curln]['sepet-urun-yok'] });
    }


    //loadPage("sepetim", {}, true);

  });



  $("#app").on("tap", ".phonenum .sepet", function () {

    num = gparam.num
    var phone = $(".pview h5").text();

    if (phone.length == 11 && phone.charAt(0) == "0") {
      //console.log(num);
      //console.log(phone);

      sipGonder(num, phone)


    }

    else {
      alertMe({ msg: "Lütfen Cep Telefonunuzu başında 0 ve 11 hane olarak giriniz." });
    }

  });

  $("#app").on("tap", ".smssecure .sepet", function () {


    var scurecode = $(".pview h5").text();

    if (scurecode.length == 5) {

      $('.loader').show();
      sipsecureGonder(scurecode, gparam.sipid)


    }

    else {
      alertMe({ msg: "Doğrulama kodunu giriniz." });
    }

  });

  $("#app").on("tap", ".secure .sepet", function () {

    var num = $(".pview h5").text().trim();
    var ynum = "";
    var numarr = [];
    for (var i = 0; i < 4; i++) {
      ynum += '<i class="pin"></i>';
    }
    $(".pview h5").html(ynum);
    //console.log("Girilen kod:", num);

    if (num != "" && num.length == 4) {
      //$('.loader').show();
      //sipGonder(num);

      // LOKAL TEST İÇİN BYPASS: 1111 yazıldığında backend'e sormadan ilerle
      if (num == "1111") {
        if (window.tempResvOrder || _pageback == "rezervasyon") {
            // Modalı DOM'da hazırla (Global/Kalıcı olması için)
            if (typeof window.ensureSuccessModal === 'function') {
                window.ensureSuccessModal();
            }

            $('#display-name').text(window.tempResvUser ? window.tempResvUser.name : "Test İsim");
            $('#display-phone').text(window.tempResvUser ? window.tempResvUser.phone : "0500 000 00 00");
            
            $('#successResvModal').addClass('show');
        } else {
            sipGonder(num, '');
        }
        return;
      }

      sendData("securecheck", "POST", { secure: num, menu: data.menu_id }
        , function (_data) {
          //console.log(_data);

          if (_data.status == 100) {

            loadPage("phonenum", { num: num, phone: _data.data.phone })

          } else if (_data.status == 99) {
            // Rezervasyon akışından geliniyorsa özel işlem yap
            if (window.tempResvOrder) {
                // Modalı DOM'da hazırla
                if (typeof window.ensureSuccessModal === 'function') {
                    window.ensureSuccessModal();
                }
                // Hızlı Üyelik Modalını Göster (Mevcut mantığı koru)
                $('#display-name').text(window.tempResvUser.name);
                $('#display-phone').text(window.tempResvUser.phone);
                $('#successResvModal').addClass('show');
            } else {
                // Normal sipariş gönderimi
                sipGonder(num, '');
            }
          }
          else {

            $('.loader').fadeOut(200);
            $('#imgCaptcha').trigger('click');
            alertMe({ msg: "Lütfen Güvenlik kodunu giriniz." });

          }
        },
        function (err) {
          //console.log(err);
        }
      );




    } else {
      $('.loader').fadeOut(200);
      $('#imgCaptcha').trigger('click');
      alertMe({ msg: "Lütfen Güvenlik kodunu giriniz." });

    }





    //loadPage('sepetim',{},true);
  });




  $("#app").on("tap click", ".masasecimi .sepet", function () {

    var num = mid;

    if (num == "") {

      alertMe({ msg: ln_key[curln]['masasecimi-yok'] });
      return false;
    }

    if (num == "") {


      return false;
    }


    $('.loader').show();

    sipGonder(num);

    $('.loader').fadeOut(200);

    //loadPage('sepetim',{},true);
  });


  $("#app").on("tap", ".secure .ppad a", function (e) {
    e.preventDefault();

    var no = $(this).data("no");
    var num = $(".pview h5").text();
    ////console.log(num);
    var ynum = "";
    var numarr = [];

    if (no == "i") {
      //loadPage('sepet',{},true);
      loadPage("start", {}, true);
    } else if (no == "s") {
      numarr = [];
    } else if (no !== "") {
      if (num.length < 4) {
        num = num + "" + no;
      }
      numarr = num.split("");
    }

    ////console.log(num);

    for (var i = 0; i < 4; i++) {
      if (numarr[i] !== undefined) {
        ynum += "<i>" + numarr[i] + "</i>";
      } else {
        ynum += '<i class="pin"></i>';
      }
    }

    $(".pview h5").html(ynum);
  });

  $("#app").on("tap", ".garson .sepet", function () {
    var num = $(".pview h5").text();
    var ynum = "";
    var numarr = [];
    for (var i = 0; i < 4; i++) {
      ynum += '<i class="pin"></i>';
    }
    $(".pview h5").html(ynum);
    ////console.log(num);
    garsCagir(num);
    //loadPage('sepetim',{},true);
  });


  $("#app").on("tap", ".hesap .sepet", function () {
    var num = $(".pview h5").text();
    var ynum = "";
    var numarr = [];
    for (var i = 0; i < 4; i++) {
      ynum += '<i class="pin"></i>';
    }
    $(".pview h5").html(ynum);
    ////console.log(num);
    hesabim(num);
    //loadPage('sepetim',{},true);
  });



  $("#app").on("tap", ".garson .ppad a", function (e) {
    e.preventDefault();

    var no = $(this).data("no");
    var num = $(".pview h5").text();
    ////console.log(num);
    var ynum = "";
    var numarr = [];

    if (no == "i") {
      //loadPage('sepet',{},true);
      loadPage("start", {}, true);
    } else if (no == "s") {
      numarr = [];
    } else if (no !== "") {
      if (num.length < 4) {
        num = num + "" + no;
      }
      numarr = num.split("");
    }

    ////console.log(num);

    for (var i = 0; i < 4; i++) {
      if (numarr[i] !== undefined) {
        ynum += "<i>" + numarr[i] + "</i>";
      } else {
        ynum += '<i class="pin"></i>';
      }
    }

    $(".pview h5").html(ynum);
  });



  $("#app").on("tap", ".hesap .ppad a", function (e) {
    e.preventDefault();

    var no = $(this).data("no");
    var num = $(".pview h5").text();
    ////console.log(num);
    var ynum = "";
    var numarr = [];

    if (no == "i") {
      //loadPage('sepet',{},true);
      loadPage("start", {}, true);
    } else if (no == "s") {
      numarr = [];
    } else if (no !== "") {
      if (num.length < 4) {
        num = num + "" + no;
      }
      numarr = num.split("");
    }

    ////console.log(num);

    for (var i = 0; i < 4; i++) {
      if (numarr[i] !== undefined) {
        ynum += "<i>" + numarr[i] + "</i>";
      } else {
        ynum += '<i class="pin"></i>';
      }
    }

    $(".pview h5").html(ynum);
  });


  $("#app").on("tap", ".phonenum .ppad a", function (e) {
    e.preventDefault();

    var no = $(this).data("no");
    var num = $(".pview h5").text();
    ////console.log(num);
    var ynum = "";
    var numarr = [];

    if (no == "i") {
      //loadPage('sepet',{},true);
      loadPage("start", {}, true);
    } else if (no == "s") {

      if (phone != "") {
        sendData("delcookie", "POST");
        phone = "";
      }

      $(".pdesc").removeClass("clinf");
      $(".pdesc").html("Lütfen Cep Telefonunuzu giriniz.");
      numarr[0] = 0;





    } else if (no == "0" && num == 0) {
      //console.log(numarr.length);
      numarr[0] = 0;
    } else if (no !== "") {


      if (num.length < 11) {


        num = num + "" + no;

      }

      numarr = num.split("");
    }

    ////console.log(num);


    for (var i = 0; i < 11; i++) {
      if (numarr[i] !== undefined) {
        ynum += "<i>" + numarr[i] + "</i>";
      } else {
        ynum += '<i class="pin"></i>';
      }
    }

    $(".pview h5").html(ynum);
  });




  $("#app").on("tap", ".smssecure .ppad a", function (e) {
    e.preventDefault();

    var no = $(this).data("no");
    var num = $(".pview h5").text();
    ////console.log(num);
    var ynum = "";
    var numarr = [];

    if (no == "i") {
      //loadPage('sepet',{},true);
      loadPage("start", {}, true);
    } else if (no == "s") {
      numarr = [];
    } else if (no !== "") {


      if (num.length < 5) {


        num = num + "" + no;

      }
      numarr = num.split("");
    }

    ////console.log(num);


    for (var i = 0; i < 5; i++) {
      if (numarr[i] !== undefined) {
        ynum += "<i>" + numarr[i] + "</i>";
      } else {
        ynum += '<i class="pin"></i>';
      }
    }

    $(".pview h5").html(ynum);
  });


  $("#app").on("tap", ".main .btnSrc", function () {


    var pr = { url: 'search', menuid: menuID }
    sendData("takip", "POST", pr);

    $('.main .searchbar').css('display', 'flex');
    $('.main .searchbar input').focus();
    return false;

  });

  $("#app").on("tap", ".onay .sepet", function () {
    ////console.log(adisyon);
    //sipGonder();
    loadPage("start", {}, true);
  });

  $(document).on("click", ".langDia", function () {

    $('.langDia').remove();
    console.log(curln)
    document.cookie = "lang=" + curln + " ; expires=Thu, 18 Dec 2100 12:00:00 UTC";


  });
  //$("#app").on("click", ".langDia a", function() {

  $(document).on("click", ".langDia a", function () {



    $('.langDia').remove();
    //console.log( $(this).data('ln') );
    curln = $(this).data('ln');

    //set cookie
    document.cookie = "lang=" + curln + " ; expires=Thu, 18 Dec 2100 12:00:00 UTC";
    second = 1;
    goStart();

    // ↓ dil seçimi sonrası menüye girmek için kullanılablir.
    //loadPage("main", {}, true);

  });

  $("#app").on("click", ".start .golang, .tabmenu .mgolang", function () {



    var lkeys = data['lang'];
    //lkeys=Object.keys("['tr','en']");



    if (lkeys.length > 1) {

      //console.log(lkeys)

      var htmlLn = '';
      for (var i = 0; i < lkeys.length; i++) {
        htmlLn += '<a class="' + (curln == lkeys[i] ? 'active' : '') + '" data-ln="' + lkeys[i] + '">' + ln_key[lkeys[i]]['dil'] + '</a>';
      }

      //alertify.okBtn("Kapat").cssClass('langDia langc').alert(htmlLn);


      alertify.okBtn("X").cssClass('langDia').alert(htmlLn);


    }
  });


  $("#app").on("tap", ".start .goporty", function () {


    //showCamp2('{"time":8,"img":"https://menucebimde.com/admin/imgs/R9LII7-kcover-SV2GHMR55QH6WZ3M8OOV.JPG"}')

    var pr = { url: 'porty', menuid: menuID, jsonid: data.jsonid, curlang: curln }
    //var param2= { ...param, ...pr }
    sendData("takip", "POST", pr
      , function (_data) {
        //console.log(_data);

        if (_data.status != 100) {
          //data = _data.data;
          //console.log(_data.err);
          window.location.reload();
        }
      },
      function (err) {
        //console.log(err);
      }
    );

    //yukarı sct-roll olması için. 0 olursa başa dönüyor.
    gctop = 5000;

    loadPage("list", { gid: grpcount - 1, sctop: 2000 }, true);

  });


  function getSipar() {
    var sipar = [];
    var adet = null;
    var food_id = null;
    var cost_id = null;
    var ozellik = [];
    var ozelliktxt = null;


    var urndata = urndata;
    if (curln == "tr") { urndata = data.mdata }
    if (curln == "") { urndata = data.mdata }
    if (curln == "en") { urndata = data.mdata_en }
    if (curln == "ar") { urndata = data.mdata_ar }



    for (i = 0; i < adisyon.length; i++) {
      //grup = urndata[adisyon[i].gid].id;
      food_id = urndata[adisyon[i].gid].ydata[adisyon[i].uid].id;
      cost_id =
        urndata[adisyon[i].gid].ydata[adisyon[i].uid].portions[adisyon[i].fid].id;
      adet = adisyon[i].adet;
      ozellik = adisyon[i].option;
      ozelliktxt = adisyon[i].optiontxt.toString();

      //console.log(urndata[adisyon[i].gid].ydata[adisyon[i].uid].portions[adisyon[i].fid])
      var uadi = urndata[adisyon[i].gid].ydata[adisyon[i].uid].portions[adisyon[i].fid].name;
      var ubrm = urndata[adisyon[i].gid].ydata[adisyon[i].uid].portions[adisyon[i].fid].unit_type.title;
      var ufyt = urndata[adisyon[i].gid].ydata[adisyon[i].uid].portions[adisyon[i].fid].price;

      sipar.push({ adet: adet, fid: food_id, ukodu: cost_id, ozellik: ozellik, ozelliktxt: ozelliktxt, uadi: uadi, ubrm: ubrm, ufyt: ufyt });
    }

    return JSON.stringify(sipar);
  }
  function sipGonder(secno, phone) {
    ////console.log({ secno:secno,provider:5,order:getSipar(),table:21,menu:data.menu_id,menucurr:data.currency });
    
    // Eğer rezervasyon akışındaysak verileri oradan al
    let finalOrder = getSipar();
    let finalPhone = phone;
    let finalName = data.mncbmdisim;
    let finalEmail = "";

    if (window.tempResvOrder) {
        finalOrder = window.tempResvOrder;
        finalPhone = window.tempResvUser.phone;
        finalName = window.tempResvUser.name;
        finalEmail = window.tempResvUser.email;
    }

    sendData(
      "siparis",
      "POST",
      {
        code: secno,
        provider: 5,
        order: finalOrder,
        menu: data.menu_id,
        menucurr: data.currency,
        sesid: data.id,
        tableno: window.tempResvOrder ? "REZ" : data.tableno,
        tableid: tableid,
        jsonid: data.jsonid,
        phone: finalPhone,
        mncbmdisim: finalName,
        email: finalEmail,
      },
      function (_data) {
        //console.log(_data);
        $('.loader').fadeOut(200);

        $('#imgCaptcha').trigger('click');

        if (_data.status == 100) {
          //data = _data.data;
          //adisyon = [];
          //loadPage("onay", {sipid:_data.data.sipid}, true);
          loadPage("smssecure", { sipid: _data.data.sipid }, true);

        } else if (_data.status == 99) {
          if (window.tempResvOrder) {
             // Modalı DOM'da hazırla
             if (typeof window.ensureSuccessModal === 'function') {
                 window.ensureSuccessModal();
             }
             // Rezervasyon Başarı Modalı ve Hızlı Üyelik
             $('#display-name').text(window.tempResvUser.name);
             $('#display-phone').text(window.tempResvUser.phone);
             $('#successResvModal').addClass('show');
          } else {
             adisyon = [];
             loadPage("onay", { sipid: _data.data.sipid, order: finalOrder, "sctop": "0" }, true);
          }

        } else if (_data.status == 104) {
          //0
          if (window.tempResvOrder) {
             // Modalı DOM'da hazırla
             if (typeof window.ensureSuccessModal === 'function') {
                 window.ensureSuccessModal();
             }
             $('#display-name').text(window.tempResvUser.name);
             $('#display-phone').text(window.tempResvUser.phone);
             $('#successResvModal').addClass('show');
          } else {
             alertMe({ msg: _data.err });
          }
        } else if (_data.status == 105) {
          //0
          alertMe({ msg: _data.err });
          //console.log(_data.err);
          loadPage("secure2", {}, true);

        }
        else {
          //0
          if (window.tempResvOrder) {
             // Modalı DOM'da hazırla
             if (typeof window.ensureSuccessModal === 'function') {
                 window.ensureSuccessModal();
             }
             $('#display-name').text(window.tempResvUser.name);
             $('#display-phone').text(window.tempResvUser.phone);
             $('#successResvModal').addClass('show');
          } else {
             alertMe({ msg: "Bir hata oluştu. Lütfen tekrar deneyiniz." });
          }
        }
      },
      function (err) {
        if (window.tempResvOrder) {
             // Modalı DOM'da hazırla
             if (typeof window.ensureSuccessModal === 'function') {
                 window.ensureSuccessModal();
             }
             $('#display-name').text(window.tempResvUser.name);
             $('#display-phone').text(window.tempResvUser.phone);
             $('#successResvModal').addClass('show');
        }
      }
    );
  }

  
  function sipGonder(secno, phone) {
    ////console.log({ secno:secno,provider:5,order:getSipar(),table:21,menu:data.menu_id,menucurr:data.currency });
    
    // Eğer rezervasyon akışındaysak verileri oradan al
    let finalOrder = getSipar();
    let finalPhone = phone;
    let finalName = data.mncbmdisim;
    let finalEmail = "";

    if (window.tempResvOrder) {
        finalOrder = window.tempResvOrder;
        finalPhone = window.tempResvUser.phone;
        finalName = window.tempResvUser.name;
        finalEmail = window.tempResvUser.email;
    }

    sendData(
      "siparis",
      "POST",
      {
        code: secno,
        provider: 5,
        order: finalOrder,
        menu: data.menu_id,
        menucurr: data.currency,
        sesid: data.id,
        tableno: window.tempResvOrder ? "REZ" : data.tableno,
        tableid: tableid,
        jsonid: data.jsonid,
        phone: finalPhone,
        mncbmdisim: finalName,
        email: finalEmail,
      },
      function (_data) {
        //console.log(_data);
        $('.loader').fadeOut(200);

        $('#imgCaptcha').trigger('click');

        if (_data.status == 100) {
          //data = _data.data;
          //adisyon = [];
          //loadPage("onay", {sipid:_data.data.sipid}, true);
          loadPage("smssecure", { sipid: _data.data.sipid }, true);

        } else if (_data.status == 99) {
          if (window.tempResvOrder) {
             // Modalı DOM'da hazırla
             if (typeof window.ensureSuccessModal === 'function') {
                 window.ensureSuccessModal();
             }
             // Rezervasyon Başarı Modalı ve Hızlı Üyelik
             $('#display-name').text(window.tempResvUser.name);
             $('#display-phone').text(window.tempResvUser.phone);
             $('#successResvModal').addClass('show');
          } else {
             adisyon = [];
             loadPage("onay", { sipid: _data.data.sipid, order: finalOrder, "sctop": "0" }, true);
          }

        } else if (_data.status == 104) {
          //0
          if (window.tempResvOrder) {
             // Modalı DOM'da hazırla
             if (typeof window.ensureSuccessModal === 'function') {
                 window.ensureSuccessModal();
             }
             $('#display-name').text(window.tempResvUser.name);
             $('#display-phone').text(window.tempResvUser.phone);
             $('#successResvModal').addClass('show');
          } else {
             alertMe({ msg: _data.err });
          }
        } else if (_data.status == 105) {
          //0
          alertMe({ msg: _data.err });
          //console.log(_data.err);
          loadPage("secure2", {}, true);

        }
        else {
          //0
          if (window.tempResvOrder) {
             // Modalı DOM'da hazırla
             if (typeof window.ensureSuccessModal === 'function') {
                 window.ensureSuccessModal();
             }
             $('#display-name').text(window.tempResvUser.name);
             $('#display-phone').text(window.tempResvUser.phone);
             $('#successResvModal').addClass('show');
          } else {
             alertMe({ msg: "Bir hata oluştu. Lütfen tekrar deneyiniz." });
          }
        }
      },
      function (err) {
        if (window.tempResvOrder) {
             // Modalı DOM'da hazırla
             if (typeof window.ensureSuccessModal === 'function') {
                 window.ensureSuccessModal();
             }
             $('#display-name').text(window.tempResvUser.name);
             $('#display-phone').text(window.tempResvUser.phone);
             $('#successResvModal').addClass('show');
        }
      }
    );
  }

  


  function sipsecureGonder(secure, sipid) {
    ////console.log({ secno:secno,provider:5,order:getSipar(),table:21,menu:data.menu_id,menucurr:data.currency });

    order = getSipar();
    sendData(
      "smssecure",
      "POST",
      {
        smscode: secure,
        sipid: sipid,
        order: order,
        menu: data.menu_id,
      },
      function (_data) {
        //console.log(_data);

        $('.loader').fadeOut(200);


        if (_data.status == 100) {
          //data = _data.data;



          console.log(order);
          adisyon = [];
          loadPage("onay", { sipid: _data.data.sipid, order: order, "sctop": "0" }, true);


        } else if (_data.status == 104) {
          //0
          alertMe({ msg: _data.err });
          //console.log(_data.err);
          loadPage("start", {}, true);

        } else if (_data.status == 101) {
          //0
          alertMe({ msg: _data.err });
          //console.log(_data.err);
          $('.smssecure .ppad li a.sil').trigger('tap');




        }
        else {
          //0
          alertMe({ msg: "Bir hata oluştu. Lütfen tekrar deneyiniz." });
          //console.log(_data.error);
        }
      },
      function (err) {
        //console.log(err);
      }
    );
  }


  function ganket(dat) {

    sendData(
      "anket",
      "POST",
      dat,
      function (_data) {
        ////console.log(_data);

        if (_data.status == 100) {
          //data = _data.data;
          loadPage("start", {}, true);
          alertMe({ msg: _data.data.msg });

          adat = { aguid: _data.data.aguid };


          dat = { ...dat, ...adat }

          sendData("anketmail", "POST", dat
            , function (_data) {
              //console.log(_data);

            },
            function (err) {
              //console.log(err);
            }
          );




        } else {
          //0
          alertMe({ msg: _data.err });
          //console.log(_data.error);
        }
      },
      function (err) {
        //console.log(err);
      }
    );
  }


  function garsCagir(secno) {

    if (secno == '') {

      alertMe({ msg: 'Lütfen güvenlik kodunu giriniz.' })
      return false;

    }

    $('.loader').show();

    sendData(
      "garson",
      "POST",
      {
        code: secno,
        provider: 5,
        order: [],
        menu: data.menu_id,
        menucurr: data.currency,
        tableid: tableid,
        mzid: data.id,
      },
      function (_data) {
        ////console.log(_data);

        $('.loader').hide();
        if (_data.status == 100) {
          //data = _data.data;


          loadPage("start", {}, true);
          alertMe({ msg: _data.data.msg });

          adat = { gcid: _data.data.gcid, menu: data.menu_id };
          sendData("garsonmail", "POST", adat
            , function (_data) {
              //console.log(_data);

            },
            function (err) {
              $('.loader').hide();
              //console.log(err);
            }
          );



        } else {
          //0
          $('#imgCaptcha').trigger('click');
          alertMe({ msg: _data.err });
          //console.log(_data.error);
        }
      },
      function (err) {
        //console.log(err);
      }
    );
  }


  var heaspstr = [];

  function hesabim(secno) {

    console.log('secno:' + secno)

    if (secno == '') {

      alertMe({ msg: 'Lütfen güvenlik kodunu giriniz.' })
      return false;

    }

    $('.loader').show();

    sendData(
      "hesap",
      "POST",
      {
        code: secno,
        provider: 5,
        order: [],
        menu: data.menu_id,
        menucurr: data.currency,
        tableid: tableid,
        mzid: data.id,
        servis: data.mhesap,
      },
      function (_data) {
        console.log(_data);

        $('.loader').hide();
        if (_data.status == 100) {
          //data = _data.data;

          heaspstr = _data.data.hesap


          loadPage("hesaplist", {}, true);
          //alertMe({ msg: _data.data.msg });

          adat = { gcid: _data.data.gcid, menu: data.menu_id };
          sendData("hesapmail", "POST", adat, function (data) { }, function (err) { });

        } else {
          //0
          $('#imgCaptcha').trigger('click');
          alertMe({ msg: _data.err });
          //console.log(_data.error);
        }
      },
      function (err) {
        $('.loader').hide();
        console.log(err);
      }
    );


  }


  function flushApp() {
    conf = [];
    //now = new Date();
    //now_d = now.getDate();
    //now_w = now.getDay();
    //now_y = now.getFullYear();
    //now_m = now.getMonth();
  }

  function goStart() {
    flushApp();
    loadPage("start", {}, true);
  }


  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }


  // URL'deki ?p= kısmını sil (URL'yi temizle ama sayfa yenilemeden)
  function removeQueryParam(param) {
    const url = new URL(window.location);
    url.searchParams.delete(param);
    window.history.replaceState({}, document.title, url.pathname + url.search);
  }


  function openStart(menuIDxi, opage) {

    const allowedPages = ["anket", "start", "main", "aboutus"];

    menuID = getParameterByName("m") || getParameterByName("menuID") || menuID;
    dAnket = getParameterByName("dAnket") || 0;
    dGarson = getParameterByName("dGarson") || 0;
    tableid = getParameterByName("t");

    opage = getParameterByName("p") || opage;

    removeQueryParam("p");

    if (menuIDxi == undefined) {

      //console.log(menuID);
    }
    else {

      menuID = menuIDxi;
    }

    if (!allowedPages.includes(opage)) {
      opage = undefined;
    }






    if (opage == undefined) {

      opage = "start"
    }



    //console.log(tableid)
    //açılış kampanya
    //showCamp2('{"time":2,"img":"v2/assets/img/100.yil.JPG"}');


    //29 ekim popup
    //if (menuID=='QD3I5E'){
    //showCamp2('{"time":5,"img":"v2/assets/img/100yil.JPG"}');
    //}

    //10 kasım popup
    //if (menuID=='QD3I5E'){
    // showCamp2('{"time":5,"img":"v2/assets/img/10kasim.png","bg":"black"}');
    //}





    //sendData('qr/getqr/'+menuID,'GET',{},function(_data){
    sendData(
      "config",
      "POST",
      { menuid: menuID, lang: curln, tableid: tableid, referer: referer },
      function (_data) {
        console.log(_data);

        if (_data.status == 100) {
          data = _data.data;

          //data['lang'] = []//ln_key;

          if (data.hasOwnProperty('kanket')) {

          } else {

            data.kanket = 1;

          }


          if (opage == "anket") {

            console.log(data.kanket)

            if (data.kanket > 0) {

              if (data.hasOwnProperty('kanketurl')) {

                if (data.kanketurl != '') {

                  openURL(data.kanketurl, "anketurl")
                  //window.open(data.kanketurl, '_blank');

                  opage = "start";

                }

              }


            } else {
              opage = "start";
            }

          }


          if (data.hasOwnProperty('menualtitxt')) {


          } else {

            data.menualtitxt = { "tr": "", "en": "", "ar": "" };

          }




          console.log(data.mhesap);

          data.gcagir = data.gcagir || dGarson;

          if (data.tableno == null) {
            data.ssepet = 0;
            data.gcagir = 0;
            data.mhesap = 0;

          }


          if (data.i01 != '' && data.i01 != '_imgs/') {
            noimg = data.i01;
          } else {
            noimg = "v2/assets/img/noimg.jpg"
          }



          $("body").css("--backbtncolor", data.buttonbg || "#f68933");
          $("body").css("--backbtncolorrgb", hexToRgb(data.buttonbg).r + ',' + hexToRgb(data.buttonbg).g + ',' + hexToRgb(data.buttonbg).b);
          $("body").css("--colorrgbgray", '158,158,158');




          var lkeys = data['lang'];



          //cookie read
          clang = getCookie("lang");
          //console.log(clang);
          if (lkeys.length > 1) {
            if (clang != "") {

              curln = "tr"
              dilsecimi = 1;
              document.cookie = "lang=tr; expires=Thu, 01 Jan 2100 00:00:00 UTC;";
              //clang="";
              for (var i = 0; i < lkeys.length; i++) {
                //console.log(lkeys[i]);

                if (lkeys[i] == clang) {
                  curln = clang
                  //console.log("test:"+curln);
                  dilsecimi = 1;
                  document.cookie = "lang=" + curln + "; expires=Thu, 01 Jan 2100 00:00:00 UTC;";

                }

              }

            }
          } else {

            curln = "tr"
            dilsecimi = 1;

          }
          //console.log("dilsecimi:"+dilsecimi);



          if (lkeys.length > 1) {

            //$(".golang").removeClass("hide");
            $(".mgolang").removeClass("disab");



            if (clang == "") {
              var htmlLn = '';
              for (var i = 0; i < lkeys.length; i++) {
                htmlLn += '<a class="' + (curln == lkeys[i] ? 'active' : '') + '" data-ln="' + lkeys[i] + '">' + ln_key[lkeys[i]]['dil'] + '</a>';
              }




            }

            if (dilsecimi == 0 && (data.multim.length == 0 || first == 0)) {
              //alertify.okBtn("Kapat").cssClass('langDia').alert(htmlLn);
              var lkeys = data['lang'];
              if (lkeys.length > 1) {

                //console.log(lkeys)

                var htmlLn = '';
                for (var i = 0; i < lkeys.length; i++) {
                  htmlLn += '<a class="' + (curln == lkeys[i] ? 'active' : '') + '" data-ln="' + lkeys[i] + '">' + ln_key[lkeys[i]]['dil'] + '</a>';
                }

                alertify.okBtn("X").cssClass('langDia').alert(htmlLn);
                dilsecimi = 1;
              }


            }



          }


          console.log(curln)

          loadPage(opage, { "sctop": "0" }, false);
          //loadPage("start", {}, false);



          //document.title = data.firma_name;

          //$('meta[name=title]').attr('content', data.firma_name +' | menucebimde.com');
          //$('meta[name=description]').attr('content', data.firma_name + ' | Online Menü');
          //$('meta[property=og\\:image]').attr('content', 'https://menucebimde.com/'+getresim2(data.qrcover[0]));

        } else if (_data.status == 104) {
          window.location.href = "?";
        } else {
          //0
          //console.log(_data.error);
          alertMe({ msg: _data.error });
        }
      },
      function (err) {
        //console.log(err);
      }
    );
  }






  function complete(_page) {


    //aboutus sayfası için
    if (_page == "aboutus") {
      loadAboutUs();

    }

    // Etkinlikler sayfası için
    if (_page == "etkinlikler") {
      backfn = function () {
        loadPage("start", {}, true);
      };
      loadEtkinlikler();
    }

    if (_page == "rezervasyon") {
      backfn = function () {
        // Eğer bir etkinlikten gelindiyse etkinliklere, yoksa ana sayfaya dön
        if (typeof selectedEvent !== 'undefined' && selectedEvent) {
          loadPage("etkinlikler", {}, true);
        } else {
          loadPage("start", {}, true);
        }
      };

      // Etkinlik bilgilerini yükle
      if (typeof setupRezervasyonWithEvent === 'function') {
        setupRezervasyonWithEvent();
      }

      // Telefon maskesi uygula
      $('#resv-phone').mask('0(000) 000 00 00', {
        placeholder: "0(5__) ___ __ __",
        selectOnFocus: true
      });

      // Form temizleme butonu
      $('#btnCancelResv').on('click', function() {
        $('#reservationForm')[0].reset();
        $('#resv-phone').trigger('input'); // Maskeyi temizle
        
        // Eğer seçili etkinlik varsa onu da temizle (isteğe bağlı, kullanıcı talebine göre)
        if (typeof selectedEvent !== 'undefined') {
          selectedEvent = null;
          setupRezervasyonWithEvent();
        }
      });

      // Form gönderimi (Backend Entegrasyonu - Sipariş Akışını Tam Taklit Eder)
      $('#reservationForm').on('submit', function(e) {
        e.preventDefault();
        
        // Verileri sakla
        const userName = $('#resv-name').val();
        const userPhone = $('#resv-phone').val();
        const resvEmail = $('#resv-email').val();
        const resvDate = $('#resv-date').val();
        const resvPeople = $('#resv-people').val();
        const tableType = $('#resv-table-type').val();
        const resvNotes = $('#resv-notes').val();

        // Backendcinin beklediği formatta paketle
        window.tempResvOrder = [
          {
            uadi: "REZERVASYON",
            adet: resvPeople,
            price: 0,
            notes: `Tarih: ${resvDate} | Tip: ${tableType} | Not: ${resvNotes}`
          }
        ];
        window.tempResvUser = { name: userName, phone: userPhone, email: resvEmail };

        // Güvenlik adımına (secure2) yönlendir - Sipariş akışındaki gibi
        loadPage("secure2", {}, true);
      });
    }

    if (_page == "uyelik") {
      backfn = function () {
        loadPage("start", {}, true);
      };

      // Telefon maskesi uygula
      $('#mbr-phone').mask('0(000) 000 00 00', {
        placeholder: "0(5__) ___ __ __",
        selectOnFocus: true
      });
    }
    setHeadbar(data.logo);

    //console.log(_page);
    //yeni dil buraya da eklenecek
    var urndata = urndata;

    urundata = current_ln_urundata(curln, data);

    if (urndata == undefined) {
      curln == "tr";
      urndata = data.mdata;
    }

    if (mBack == 0) {
      $(".backbtn").addClass("hide");
    }

    _pageback = _page;

    if (_page == "phonenum") {

      var ynum = "";
      phone = gparam.phone
      //console.log(phone)

      if (phone != "") {
        $(".pdesc").addClass("clinf");
        $(".pdesc").html('<i class="fa fa-check-circle"></i> Kayıtlı bir telefon bulundu.<br>Doğru değil ise silip tekrar giriş yapabilirsiniz.');
        //alertMe({ msg: phone+" numaralı bir telefon kaydı bulundu. Doğru değil ise silip tekrar giriş yapabilirisiniz." });

      } else {
        phone = "0"
      }

      numarr = phone.split("");

      ////console.log(num);

      for (var i = 0; i < 11; i++) {
        if (numarr[i] !== undefined) {
          ynum += "<i>" + numarr[i] + "</i>";
        } else {
          ynum += '<i class="pin"></i>';
        }
      }

      $(".pview h5").html(ynum);

    }

    if (data.multim.length > 1) {
      $(".gomains i").text(data.multim.length);
      $(".gomains").removeClass("hide");

      var menushtm = "";
      for (var i = 0; i < data.multim.length; i++) {
        menushtm +=
          "<a " +
          (data.menu_id == data.multim[i].id ? 'class="active"' : "") +
          ' data-menuid="' +
          data.multim[i].id +
          '">' +
          data.multim[i].name +
          "</a>";
      }
      $(".menus div").html(menushtm);
      //console.log("first:"+first)
      //console.log("dilsec:"+dilsecimi)
      if (first > 0) {
        showMenus();
        first = 0;

      }
    }

    var lkeys = data['lang'];

    if (lkeys.length > 1) {

      //$(".golang").removeClass("hide");
      $(".mgolang").removeClass("disab");


    }

    const $nav = $('.headbar');
    const $menu = $('#menutab2');
    const $menuToggle = $('.nav__toggle');



    let isMenuOpen = false;

    $('.nav__menu').height($(window).height());

    // TOGGLE MENU ACTIVE STATE
    $menuToggle.click(function (e) {
      e.preventDefault();
      isMenuOpen = !isMenuOpen;

      // toggle a11y attributes and active class
      $menuToggle.attr('aria-expanded', String(isMenuOpen));
      $menu.toggle(!isMenuOpen);
      $nav.toggleClass('nav--open');
      $('body').toggleClass('nav--open');

      $('.nav__menu').css("display", "flex")

    });

    $('.nav__menu').click(function (e) {
      e.preventDefault();
      isMenuOpen = !isMenuOpen;

      // toggle a11y attributes and active class
      $menuToggle.attr('aria-expanded', String(isMenuOpen));
      $menu.toggle(!isMenuOpen);
      $nav.toggleClass('nav--open');
      $('body').toggleClass('nav--open');
    });


    if (data.kanket > 0) {
      $(".mgoanket").removeClass("disab");
    }


    if (data.gcagir > 0) {
      //$(".gogars").removeClass("hide");
      $(".mgogars").removeClass("disab");

    }

    if (data.mhesap > 0) {
      //$(".gogars").removeClass("hide");
      $(".mgohesap").removeClass("disab");
    }

    if (data.ssepet == '2') {
      $(".mgohesap").removeClass("disab")
    }


    if (menuID == 'UP2DI6') {

      $(".mgohesap").removeClass("disab");

    }


    if (_page == "start") {
      backfn = null;


      //console.log("page start:"+curln)
      //--
      var selList = ''; //urndata[0].ydata;

      //console.log(urndata);

      grpcount = urndata.length;

      for (var i = 0; i < urndata.length; i++) {

        if (urndata[i].ydata.length > 0) {
          //selList = [...selList, ...urndata[i].ydata];
          selList += urndata[i].name + ' | ' + makeListdesc(urndata[i].ydata, i, data);
        }
      }
      $(".start .description").html(data.firma_name + ' | menucebimde.com ' + selList);

      $(".start .cover_name").html(data.firma_name);

      $(".start .vers").html(vs + '.' + data.jsonid);
      $(".start .vers").html(mtoken);

      if (data.tableno != null) {

        var tblgrp = ""
        if (data.tableyer != 'YOK') {
          tblgrp = data.tableyer + ' - '
        }

        console.log("calc(10% - " + $(".start .tableno").width / 2 + "px)");
        $(".start .tableno").html(tblgrp + data.tableno);
        $(".start .tableno").css("left", "calc(50% - " + $(".start .tableno").outerWidth(true) / 2 + "px)")

      } else {
        $(".start .tableno").hide();
      }
      var coverhtm = "";
      for (var i = 0; i < data.qrcover.length; i++) {
        coverhtm +=
          '<div style="background-image:url(' + getresim2(data.qrcover[i]) + ')"></div>';
      }
      //var coverhtm='<div class="bg1"></div><div class="bg2"></div><div class="bg3"></div><div class="bg4"></div>';
      $(".cover").html(coverhtm);

      if (data.qrcover.length > 1) {
        $(".cover").slick({
          dots: true,
          arrows: false,
          appendDots: $(".cover_dots"),
        });
      }
 //todo yeni google ve app store linki yerine menu gelecek
      html = `<div class="mainbottom-container">
  <div class="mainbottom-nav ">
    <button class="mainbottom-navbtn mainbottom-navbtn-active navbuttonaboutus ">
      <i class="fa-solid fa-house"></i>
    </button>
    <button class="mainbottom-navbtn navbuttonanket">
      <i class="fa-solid fa-calendar-check"></i>
    </button>
    <button class="mainbottom-navbtn navbuttondil">
      <i class="fa-solid fa-heart"></i>
    </button>
    <button class="mainbottom-navbtn">
      <i class="fa-solid fa-user"></i>
    </button>
    <button class="mainbottom-navbtn">
      <i class="fa-solid fa-gear"></i>
    </button>
  </div>
</div>`;


      html2 = html + '</div>'
      html = `<div class="badges"><a><img src="v2/assets/img/badge.as.png"></a>
     <a><img src="v2/assets/img/badge.gp.png"></a>'
      </div><span><ln class="tbapp">Uygulamayı yükle, menüleri keşfet.</ln></span><span class="spncom">menucebimde.com</span>`;

      html3 = '<span class="spncom">menucebimde.com</span>'

      $(".sonyayintr").html(ln_key[curln]['lastu'] + "<br>" + zamanOnce(data.menuyayintr, curln));

      if (appopen != '0') {

        $('.tabmenu').append('<div class="icerik" style=""><div class="icerikbg">' + html3 + '</div></div>')

        $('.icerik2').html(html2)


      } else {
        //$('.tabmenu nav').css('padding-bottom','50px')
        $('.altmenu .appdown').css('display', 'none')
      }

      if (data.kanket > 0) {
        $(".mgoanket").removeClass("disab");
      }

      if (data.gcagir > 0) {
        //$(".gogars").removeClass("hide");
        $(".mgogars").removeClass("disab");
      }
      if (data.mhesap > 0) {
        //$(".gogars").removeClass("hide");
        $(".mgohesap").removeClass("disab");
      }
    }



    if (_page == "menucebimdeinfo") {

      backfn = function () {
        loadPage("start", {}, true);
      };

    }

    //main
    if (_page == "main") {

      addSearch('main');

      if (menuID == "C2D1B7") {
        //alert('<%=Request.ServerVariables ("HTTP_USER_AGENT")%>')
        alertMe({ msg: uagentx })
      };

      if (menuID == "QD3I5E") {

        //data.tema=4;
      };

      //data.tema=4;

      if (data.ssepet > 0) {
        $(".sepet").removeClass("hide");
      }




      backfn = function () {
        loadPage("start", {}, true);
      };

      $(".sepcnt").text(adisyon.length);


      
      if (data.tema != 4) {
        ////console.log(urndata);
        var gdata = "";
        if (urndata.length > 0) {

          for (var i = 0; i < urndata.length; i++) {
            gdata += '<li data-gid="' + i + '">\
            <div style="background-image:url(' + getresim(urndata[i].photo, 1) + '),url(' + data.i01 + '),url(v2/assets/img/noimg.jpg);"></div>\
            <h2>' + urndata[i].name + '</h2></li>';
          }
        }

        var gaciklama = '<div class="menualtitxt">' + data.menualtitxt[curln] + '</div>';
        document.querySelector(".gruplar").insertAdjacentHTML("beforebegin", slider);

        switch (data.tema) {
          case 2:
            loadFeaturedProducts(data, curln);
            $(".main .gruplar").attr("class", "gruplar");
            break;
          case 3:
            $(".main .gruplar").attr("class", "gruplar");
            break;
        }

        $(".main .gruplar ul").html(gdata);
        $(".main .gruplar").append(gaciklama);


        //--
        var selList = ''; //urndata[0].ydata;
        for (var i = 0; i < urndata.length; i++) {

          if (urndata[i].ydata.length > 0) {
            //selList = [...selList, ...urndata[i].ydata];
            selList += makeListara(urndata[i].ydata, i, data);
          }
        }
        $(".main .urunler ul").html(selList);




      }
      else {

        //tema4
        var gdata = '<div class="menu-container">';
        if (urndata.length > 0) {

          console.log(urndata);

          for (var i = 0; i < urndata.length; i++) {

            gdata += '<div class="category sticky-header">' + urndata[i].name + '</div>'
            ulist = urndata[i].ydata
            gid = urndata[i].id
            gdata += makeListtema4(ulist, gid, data)


          }
        }
        var gaciklama = '<div class="menualtitxt">' + data.menualtitxt[curln] + '</div>';

        $(".main .gruplar").html(gdata + '</div>');
        $(".main .gruplar").append(gaciklama);

        console.log('src gizle');
        $(".btnSrc").addClass('hide');

      }








      if (data.kanket > 0) {
        $(".mgoanket").removeClass("disab");
      }


      if (data.gcagir > 0) {

        //$(".gogars").removeClass("hide");
        $(".mgogars").removeClass("disab");

      }


      if (data.mhesap > 0) {

        //$(".gogars").removeClass("hide");
        $(".mgohesap").removeClass("disab");

      }


      if (data.ssepet == '2') {
        $(".mgohesap").removeClass("disab");
      }

      if (menuID == 'UP2DI6') {

        $(".mgohesap").removeClass("disab");

      }
    }



    //hizlisepet
    if (_page == "hizlisepet") {


      $(".sepcnt").text(adisyon.length);

      console.log(urndata);
      if (data.ssepet > 0) {
        $(".sepet").removeClass("hide");
      }

      backfn = function () {
        loadPage("start", {}, true);
      };

      var tblgrp = ""
      if (data.tableyer != 'YOK') {
        tblgrp = data.tableyer + ' - '
      }

      $('.hizlisepet .masasepet').html('<span style="color: var(--backbtncolor);font-weight: 600;">' + tblgrp + data.tableno + '</span>')

      if (data.tableno == 'MNCBM') {

        $("#txtisim").val(data.mncbmdisim);
        $("#txtisim").focus();

      } else {
        $(".sepetisim").hide();
      }


      var fdata = "";
      if (urndata.length > 0) {
        for (var i = 0; i < urndata.length; i++) {
          var selList = urndata[i].ydata;
          if (selList.length > 0) {
            for (var l = 0; l < selList.length; l++) {


              nameex = selList[l].portions[0].name;

              var adstr = adisyon.findIndex(function (vendor) {
                console.log(vendor)
                return vendor.gid === i && vendor.uid === l && vendor.fid === 0
              })
              console.log(adisyon)
              adet = 0;
              opac = 1;
              if (adstr >= 0) {

                adet = adisyon[adstr].adet
                opac = 1;
              }

              fdata += '<li><div class="seprow srow_' + l + '" data-row="' + l + '" data-adet="' + adet + '" data-cost="0" data-gid="' + i + '" data-uid="' + l + '" data-fid="0"><h5>' + nameex + '<span></span></h5><a class="arti">+</a><label style="opacity:' + opac + '">' + adet + '</label><a class="eksi">-</a><small></small></div></li>';

              //console.log(l + fdata)



            }


          }

        }
      }







      $(".hizlisepet .sepall ul").html(fdata);




      if (data.kanket > 0) {
        $(".mgoanket").removeClass("disab");
      }


      if (data.gcagir > 0) {

        //$(".gogars").removeClass("hide");
        $(".mgogars").removeClass("disab");

      }


      if (data.mhesap > 0) {

        //$(".gogars").removeClass("hide");
        $(".mgohesap").removeClass("disab");

      }

      if (data.ssepet == '2') {
        $(".mgohesap").removeClass("disab");
      }

      if (menuID == 'UP2DI6') {

        $(".mgohesap").removeClass("disab");

      }

    }


    if (_page == "list") {
      var gid = $(".list").data("gid");
      var sctop = $(".list").data("sctop");
      console.log(urndata[gid].name);


      grpaciklama = '<span class="ellipsis2 grupbaslik2">Fırınımız saat 21:00`e kadar hizmet vermektedir.</span>'
      grpaciklama = ''
      $(".grpadi").html('<span class="ellipsis grupbaslik">' + urndata[gid].name + '</span>' + grpaciklama);



      if (data.ssepet > 0) {
        $(".sepet").removeClass("hide");
      }

      backfn = function () {
        loadPage("main", { sctop: gctop }, true);
      };
      $(".sepcnt").text(adisyon.length);


      switch (data.tema) {
        case 2:
          $(".list .urunler").attr("class", "urunler");
          break;
        case 3:
          //$(".list .urunler").attr("class", "urunler");
          break;
      }

      var selList = urndata[gid].ydata;
      if (selList.length > 0) {
        $(".list .urunler ul").html(makeList(selList, gid, data));
      }

      $("#urunara").on("keyup", function () {
        ////console.log($(this).val());
        var searcKey = $(this).val();
        if (searcKey !== "") {
          var filtList = selList.filter(function (elm) {
            return elm.slug.toLowerCase().includes(searcKey.toLowerCase());
          });
          $(".list .urunler ul").html(makeList(filtListi, gid, data));
        } else {
          $(".list .urunler ul").html(makeList(selList, gid, data));
        }
      });
    }

    //slide
    if (_page == "slide") {

      var gid = $(".slide").data("gid");
      var puid = $(".slide").data("uid");
      var sctop = $(".slide").data("sctop");
      var stop = gparam.stop;

      //console.log(stop);
      if (data.ssepet > 0) {
        $(".sepekle").removeClass("hide");

      }

      backfn = function () {
        loadPage("list", { gid: gid, sctop: sctop }, true);
        //loadPage("main", { sctop: gctop }, true);
      };

      var htmlSlide = '';
      var galleryTop;
      var selList = Array.from(Object.keys(urndata[gid].ydata), k => urndata[gid].ydata[k]);
      if (selList.length > 0) {
        for (var uid = 0; uid < selList.length; uid++) {

          var deth1 = selList[uid].title;
          var detp = selList[uid].content;
          var detimg = getresim(selList[uid].photo);

          //console.log(selList[uid].hasOwnProperty('nlu'));
          nlustr = '';
          if (selList[uid].hasOwnProperty('nlu')) {
            if (selList[uid].nlu != '') {
              nlustr = '<span class="nluspn">' + selList[uid].nlu + '</span>'
            }

          }



          portyappstr = '';
          urnid = selList[uid].id;
          okgoster = 0;
          if (urnid == '248174' || urnid == '250796' || urnid == '250797' || urnid == '250798' || urnid == '250799') {
            portyappstr = portyappdiv;
            stl = "display:block !important;"
            okgoster = 1;
          } else {
            //$('.portyappdiv').remove();
            stl = "";
          }

          urunlink = '';
          //if (){



          //}
          urunlink = '';
          if (selList[uid].hasOwnProperty('url')) {
            if (selList[uid].url != '') {
              urunlink = '<h1 class="urunlinkdiv"><a href="' + selList[uid].url + '" target="_blank">Sipariş İçin Tıklayınız</a></h1>'
            }

          }



          var fdata = "";
          if (urndata[gid].ydata[uid].portions.length > 0) {
            for (var i = 0; i < selList[uid].portions.length; i++) {
              //fdata += '<li data-gid="'+gid+'" data-uid="'+i+'"><img src="'+getresim(urndata[id].ydata[i].photo,1)+'" /><h2>'+urndata[id].ydata[i].title+'</h2><span>€ 12,00</span></li>';
              //urndata[gid].ydata[uid].portions[i]
              //id: "7214", name: "", food_id: "11757", price: "18,00 TL", default: "0"
              fdata += '<li class="" data-gid="' + gid + '" data-uid="' + uid + '" data-fid="' + i + '">';
              if (data.ssepet > 0) {
                fdata += '<i class="fa fa-' + (i == -1 ? "check-circle" : "circle") + '"></i>';
              }
              fdata += urndata[gid].ydata[uid].portions[i].name;
              fdata += '<span>' + fiyatyap(urndata[gid].ydata[uid].portions[i].price, data.currency) + '</span></li>';
            }
          }



          if (selList[uid].id == "155029" && menuID == "90DCFM") {

            htmlSlide += '<div class="swiper-slide" data-360="circlr3">\
            <div class="detay noimg" data-id="'+ selList[uid].id + '">\
            <div style="width:100%" ><img src="'+ mver + '/assets/img/spin.png" class="spin360img"><div id="circlr3" >\
              <img data-src="_imgs/seft_90DCFM_24.JPG" >\
              <img data-src="_imgs/seft_90DCFM_23.JPG" >\
              <img data-src="_imgs/seft_90DCFM_22.JPG" >\
              <img data-src="_imgs/seft_90DCFM_21.JPG" >\
              <img data-src="_imgs/seft_90DCFM_20.JPG" >\
              <img data-src="_imgs/seft_90DCFM_19.JPG" >\
              <img data-src="_imgs/seft_90DCFM_18.JPG" >\
              <img data-src="_imgs/seft_90DCFM_17.JPG" >\
              <img data-src="_imgs/seft_90DCFM_16.JPG" >\
              <img data-src="_imgs/seft_90DCFM_15.JPG" >\
              <img data-src="_imgs/seft_90DCFM_14.JPG" >\
              <img data-src="_imgs/seft_90DCFM_13.JPG" >\
              <img data-src="_imgs/seft_90DCFM_12.JPG" >\
              <img data-src="_imgs/seft_90DCFM_11.JPG" >\
              <img data-src="_imgs/seft_90DCFM_10.JPG" >\
              <img data-src="_imgs/seft_90DCFM_09.JPG" >\
              <img data-src="_imgs/seft_90DCFM_08.JPG" >\
              <img data-src="_imgs/seft_90DCFM_07.JPG" >\
              <img data-src="_imgs/seft_90DCFM_06.JPG" >\
              <img data-src="_imgs/seft_90DCFM_05.JPG" >\
              <img data-src="_imgs/seft_90DCFM_04.JPG" >\
              <img data-src="_imgs/seft_90DCFM_03.JPG" >\
              <img data-src="_imgs/seft_90DCFM_02.JPG" >\
              <img data-src="_imgs/seft_90DCFM_01.JPG" >\
            <div id="loader"></div>\
            </div> </div>\
            <h1>'+ nlustr + deth1 + '</h1><p>' + detp + '</p>\
            </div>\
            <div class="fiyatlar onerow mb50 '+ (data.ssepet > 0 ? 'spsetSec' : '') + '"><ul>' + fdata + '</ul></div>\
            </div>';

          } else {




            alef = '';
            //if (menuID=="QD3I5E" || menuID=="MPLZH3"){


            if (selList[uid].hasOwnProperty('alerjen')) {
              if (selList[uid].alerjen.length > 0) {

                //console.log(parseInt(screen.width*.88/74))

                stl2 = 'width:' + parseInt(screen.width * .88 / parseInt(screen.width * .88 / 74)) + 'px';


                for (var k = 0; k < selList[uid].alerjen.length; k++) {
                  alef += '<div class="divaler" style="' + stl2 + '"><img class="alerjid" src="v2/assets/img/alerjen/' + selList[uid].alerjen[k] + '.png"><div>' + alerjen[curln][selList[uid].alerjen[k]] + '</div></div>'
                }


                alef = '<div class="divalera" >' + alef + '</div>'

              }






            }


            //}




            htmlSlide += '<div class="swiper-slide" data-uid="' + selList[uid].id + '">\
            <div class="detay pz-Media noimg" data-id="'+ selList[uid].id + '" style=""><img src="' + detimg + '" style="' + stl + '" onerror="this.onerror=null;this.src=\'' + noimg + '\'"/>\
            <h1>'+ nlustr + deth1 + '</h1>' + urunlink + '<p>' + detp + '</p>' + alef + '\
            <h1 class="portyappdiv">'+ portyappstr + '</h1>\
            </div>\
            <div class="fiyatlar onerow mb50 '+ (data.ssepet > 0 ? 'spsetSec' : '') + '"><ul>' + fdata + '</ul></div>\
            </div>';

          }


          if (selList[uid].id == "8691316520058" && menuID == "QD3I5E") {

            htmlSlide += '<div class="swiper-slide" data-360="circlr1">\
            \
            <div class="detay noimg" data-id="'+ selList[uid].id + '">\
            <div style="width:100%"><img src="'+ mver + '/assets/img/spin.png" class="spin360img"><div id="circlr1" >\
              <img data-src="_imgs/ekler_24.JPG" data-index="0" style="display: none;">\
              <img data-src="_imgs/ekler_23.JPG" data-index="1" style="display: none;">\
              <img data-src="_imgs/ekler_22.JPG" data-index="2" style="display: none;">\
              <img data-src="_imgs/ekler_21.JPG" data-index="3" style="display: none;">\
              <img data-src="_imgs/ekler_20.JPG" data-index="4" style="display: none;">\
              <img data-src="_imgs/ekler_19.JPG" data-index="5" style="display: none;">\
              <img data-src="_imgs/ekler_18.JPG" data-index="6" style="display: none;">\
              <img data-src="_imgs/ekler_17.JPG" data-index="7" style="display: none;">\
              <img data-src="_imgs/ekler_16.JPG" data-index="8" style="display: none;">\
              <img data-src="_imgs/ekler_15.JPG" data-index="9" style="display: none;">\
              <img data-src="_imgs/ekler_14.JPG" data-index="10" style="display: none;">\
              <img data-src="_imgs/ekler_13.JPG" data-index="11" style="display: none;">\
              <img data-src="_imgs/ekler_12.JPG" data-index="12" style="display: none;">\
              <img data-src="_imgs/ekler_11.JPG" data-index="13" style="display: none;">\
              <img data-src="_imgs/ekler_10.JPG" data-index="14" style="display: none;">\
              <img data-src="_imgs/ekler_09.JPG" data-index="15" style="display: none;">\
              <img data-src="_imgs/ekler_08.JPG" data-index="16" style="display: none;">\
              <img data-src="_imgs/ekler_07.JPG" data-index="17" style="display: none;">\
              <img data-src="_imgs/ekler_06.JPG" data-index="18" style="display: none;">\
              <img data-src="_imgs/ekler_05.JPG" data-index="19" style="display: none;">\
              <img data-src="_imgs/ekler_04.JPG" data-index="20" style="display: none;">\
              <img data-src="_imgs/ekler_03.JPG" data-index="21" style="display: none;">\
              <img data-src="_imgs/ekler_02.JPG" data-index="22" style="display: none;">\
              <img data-src="_imgs/ekler_01.JPG" data-index="23" style="display: none;">\
            <div id="loader"></div>\
            </div> </div>\
            <h1>Ekler</h1><p>'+ detp + '</p>\
            </div>\
            <div class="fiyatlar onerow mb50 '+ (data.ssepet > 0 ? 'spsetSec' : '') + '"><ul><li class="" data-gid="0" data-uid="0" data-fid="0">Ekler<span>₺ 30.00</span></li></ul></div>\
            </div>';

            htmlSlide += '<div class="swiper-slide" data-360="circlr2">\
            <div class="detay noimg" data-id="'+ selList[uid].id + '">\
            <div style="width:100%" ><img src="'+ mver + '/assets/img/spin.png" class="spin360img"><div id="circlr2" >\
              <img data-src="_imgs/marsal_24.JPG" >\
              <img data-src="_imgs/marsal_23.JPG" >\
              <img data-src="_imgs/marsal_22.JPG" >\
              <img data-src="_imgs/marsal_21.JPG" >\
              <img data-src="_imgs/marsal_20.JPG" >\
              <img data-src="_imgs/marsal_19.JPG" >\
              <img data-src="_imgs/marsal_18.JPG" >\
              <img data-src="_imgs/marsal_17.JPG" >\
              <img data-src="_imgs/marsal_16.JPG" >\
              <img data-src="_imgs/marsal_15.JPG" >\
              <img data-src="_imgs/marsal_14.JPG" >\
              <img data-src="_imgs/marsal_13.JPG" >\
              <img data-src="_imgs/marsal_12.JPG" >\
              <img data-src="_imgs/marsal_11.JPG" >\
              <img data-src="_imgs/marsal_10.JPG" >\
              <img data-src="_imgs/marsal_09.JPG" >\
              <img data-src="_imgs/marsal_08.JPG" >\
              <img data-src="_imgs/marsal_07.JPG" >\
              <img data-src="_imgs/marsal_06.JPG" >\
              <img data-src="_imgs/marsal_05.JPG" >\
              <img data-src="_imgs/marsal_04.JPG" >\
              <img data-src="_imgs/marsal_03.JPG" >\
              <img data-src="_imgs/marsal_02.JPG" >\
              <img data-src="_imgs/marsal_01.JPG" >\
            <div id="loader"></div>\
            </div> </div>\
            <h1>Marşal</h1><p>'+ detp + '</p>\
            </div>\
            <div class="fiyatlar onerow mb50 '+ (data.ssepet > 0 ? 'spsetSec' : '') + '"><ul><li class="" data-gid="0" data-uid="0" data-fid="0">Marşal<span>₺ 20.00</span></li></ul></div>\
            </div>';

            htmlSlide += '<div class="swiper-slide" data-360="circlr3">\
            <div class="detay noimg" data-id="'+ selList[uid].id + '">\
            <div style="width:100%" ><img src="'+ mver + '/assets/img/spin.png" class="spin360img"><div id="circlr3" >\
              <img data-src="_imgs/seft_90DCFM_24.JPG" >\
              <img data-src="_imgs/seft_90DCFM_23.JPG" >\
              <img data-src="_imgs/seft_90DCFM_22.JPG" >\
              <img data-src="_imgs/seft_90DCFM_21.JPG" >\
              <img data-src="_imgs/seft_90DCFM_20.JPG" >\
              <img data-src="_imgs/seft_90DCFM_19.JPG" >\
              <img data-src="_imgs/seft_90DCFM_18.JPG" >\
              <img data-src="_imgs/seft_90DCFM_17.JPG" >\
              <img data-src="_imgs/seft_90DCFM_16.JPG" >\
              <img data-src="_imgs/seft_90DCFM_15.JPG" >\
              <img data-src="_imgs/seft_90DCFM_14.JPG" >\
              <img data-src="_imgs/seft_90DCFM_13.JPG" >\
              <img data-src="_imgs/seft_90DCFM_12.JPG" >\
              <img data-src="_imgs/seft_90DCFM_11.JPG" >\
              <img data-src="_imgs/seft_90DCFM_10.JPG" >\
              <img data-src="_imgs/seft_90DCFM_09.JPG" >\
              <img data-src="_imgs/seft_90DCFM_08.JPG" >\
              <img data-src="_imgs/seft_90DCFM_07.JPG" >\
              <img data-src="_imgs/seft_90DCFM_06.JPG" >\
              <img data-src="_imgs/seft_90DCFM_05.JPG" >\
              <img data-src="_imgs/seft_90DCFM_04.JPG" >\
              <img data-src="_imgs/seft_90DCFM_03.JPG" >\
              <img data-src="_imgs/seft_90DCFM_02.JPG" >\
              <img data-src="_imgs/seft_90DCFM_01.JPG" >\
            <div id="loader"></div>\
            </div> </div>\
            <h1>Marşal</h1><p>'+ detp + '</p>\
            </div>\
            <div class="fiyatlar onerow mb50 '+ (data.ssepet > 0 ? 'spsetSec' : '') + '"><ul><li class="" data-gid="0" data-uid="0" data-fid="0">Marşal<span>₺ 20.00</span></li></ul></div>\
            </div>';


          }



        }
      }



      $(".slide .gallery-top .swiper-wrapper").html(htmlSlide);


      //ürün slide sayfasında sayfanın her yerinde kaydırma yapabilsin diye eklendi. pencere yükekliğinden navbar ve footer çıkarıldı.
      $(".swiper-container").css({
        "min-height": $(window).height() - 50 - 60
      });
      $(".swiper-slide").css({
        "min-height": $(window).height() - 50 - 60
      });

      if (mporty == 0) {
        $('.portyappdiv').remove();
      }



      $("#app").on("click", "#portyiosurl", function () {

        var pr = { url: 'portyios', menuid: menuID, jsonid: data.jsonid, curlang: curln }

        sendData("takip", "POST", pr
          , function (_data) {
            //console.log(_data);

            if (_data.status != 100) {
              //data = _data.data;
              //console.log(_data.err);
              window.location.reload();
            }
          },
          function (err) {
            //console.log(err);
          }
        );


      });

      $("#app").on("click", "#portyandurl", function () {

        var pr = { url: 'portyand', menuid: menuID, jsonid: data.jsonid, curlang: curln }

        sendData("takip", "POST", pr
          , function (_data) {
            //console.log(_data);

            if (_data.status != 100) {
              //data = _data.data;
              //console.log(_data.err);
              window.location.reload();
            }
          },
          function (err) {
            //console.log(err);
          }
        );

      });







      switch (data.tema) {
        case 1:
          $('.swiper-button-next').hide();
          $('.swiper-button-prev').hide();
          break;
        case 2:
          $(".swiper-slide .detay").attr("class", "detay pz-Media");
          break;
        case 3:
          $('.swiper-button-next').hide();
          $('.swiper-button-prev').hide();
          break;
      }


      if (okgoster == 1) {
        $('.swiper-button-next').show();
        $('.swiper-button-prev').show();
      }


      galleryTop = new Swiper('.gallery-top', {
        activeIndex: 3,
        spaceBetween: 10,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },


        on: {

          slideChange: function (swiper) {


            //android için titreşim
            // const canVibrate = window.navigator.vibrate
            // if (canVibrate) window.navigator.vibrate(100)



            var prx = { key: data.mdata[gid].ydata[swiper.activeIndex].id, keyname: data.mdata[gid].ydata[swiper.activeIndex].title }

            console.log("slideChange:" + data.mdata[gid].ydata[swiper.activeIndex].id)

            if (data.ssepet > 0) {

              if (data.mdata[gid].ydata[swiper.activeIndex].portions.length > 0) {

                console.log(data.mdata[gid].ydata[swiper.activeIndex].portions.length)
                $('[data-uid~="' + data.mdata[gid].ydata[swiper.activeIndex].id + '"] .spsetSec li[data-fid~="0"]').trigger('click');
                //$('.slide .sepekle').trigger('click');

              }

            }



            var pr = { url: 'slideChange', menuid: menuID, jsonid: data.jsonid, curlang: curln }
            var param2 = { ...pr, ...prx }
            sendData("takip", "POST", param2
              , function (_data) {
                //console.log(_data);

                if (_data.status != 100) {
                  //data = _data.data;
                  //console.log(_data.err);
                  window.location.reload();
                }
              },
              function (err) {
                //console.log(err);
              }
            );




            $("#app").animate({ scrollTop: 0 }, 'fast');
            //console.log("slide changed")
            ////console.log(swiper);
            //console.log(swiper.activeIndex);

            //console.log(data.mdata[gid].ydata[swiper.activeIndex].id)

            //console.log($(swiper.slides[swiper.realIndex]).data('360'));

            var crcx = $(swiper.slides[swiper.realIndex]).data('360')
            if (crcx != undefined) {
              //crcx.play();

              //delete circlr1;

              var circlr1 = circlr(crcx, {
                scroll: true,
                loader: 'loader',
                autoplay: 0,
                cycle: true,
                reverse: false,
                vetical: true,

              })

              /*
                  //circlr1.play()
                  const myTimeout = setTimeout(function () {
                  
                    ////console.log(circlr1)
                    circlr1.turn(7)
      
                  }, 60);
               
    
            */


            }

          }

        }





      })

      /*
        galleryTop.autoplay.start()
        const myTimeout = setTimeout(function () {
                
          galleryTop.autoplay.stop()
  
        }, 100);
      */

      console.log("puid:" + puid)
      galleryTop.slideTo(puid);

      if (puid == 0) {



        if (data.ssepet > 0) {

          if (data.mdata[gid].ydata[galleryTop.activeIndex].portions.length > 0) {

            console.log(data.mdata[gid].ydata[galleryTop.activeIndex].portions.length)
            $('[data-uid~="' + data.mdata[gid].ydata[galleryTop.activeIndex].id + '"] .spsetSec li[data-fid~="0"]').trigger('click');
            //$('.slide .sepekle').trigger('click');

          }

        }
        console.log(galleryTop.activeIndex);

      }

      //galleryTop.enable();
      /*
        $('#myTurntable1').turntable({
         axis:'x',
         reverse: true,
         scrollStart: 'top'
         
  
        })
  
     
  
  
  
        $('#myTurntable2').turntable({
          axis:'x',
          reverse: true,
          
         })
  
         $('.turntable').on('touchstart', function(){
          //console.log(galleryTop);
          galleryTop.disable();
        });
  
        $('.turntable').on('touchend', function(){
          //console.log(galleryTop);
          galleryTop.enable();
        });
      */

      $('[id^=circlr]').on('touchstart', function () {
        //console.log(galleryTop);
        galleryTop.disable();
      });

      $('[id^=circlr]').on('touchend', function () {
        //console.log(galleryTop);
        galleryTop.enable();
      });


      var im = 0;
      $('.pz-Media').bind('touchmove', (event) => {
        ////console.log('touchmove', event);

        if (event.touches.length === 2) {
          im = im + 1;
          galleryTop.disable();
          $(".fiyatlar").css("opacity", ".5");
          $(".swiper-container").css("overflow", "visible");
          //console.log('im:'+im);
          if (im == 1) {
            //console.log(event.target.src);
            //event.target.src='https://fth/menucebimde/_imgs/C2D1B7-U153747-B3D5N-1000.JPG'

          }


        }

      });

      $('.pz-Media').bind('touchend', (event) => {
        // //console.log('touchmove', event);
        $(".fiyatlar").css("opacity", "1");
        $(".swiper-container").css("overflow", "");
        galleryTop.enable();
        //event.target.src='https://fth/menucebimde/_imgs/C2D1B7-U153747-B3D5N.JPG'
        im = 0;



      });


      document.querySelectorAll(".pz-Media").forEach(element => {
        //console.log(element);
        pinchZoom(element);
      });

    }

    if (_page == "urun") {
      var gid = $(".urun").data("gid");
      var uid = $(".urun").data("uid");
      var sctop = $(".urun").data("sctop");
      ////console.log(urndata[gid].ydata[uid]);

      if (data.ssepet > 0) {
        if (urndata[gid].ydata[uid].ssepet > 0) {
          $(".sepekle").removeClass("hide");
        } else {
          $(".sepekle").addClass("hide");
        }
      }

      backfn = function () {
        //loadPage("list", { gid: gid, sctop: sctop }, true);
        loadPage("main", { sctop: gctop }, true);
      };

      switch (data.tema) {
        case 2:
          $(".urun .detay").attr("class", "detay");
          break;
      }

      $(".urun .detay h1").html(urndata[gid].ydata[uid].title);
      $(".urun .detay p").html(urndata[gid].ydata[uid].content);
      $(".urun .detay img").attr(
        "src",
        getresim(urndata[gid].ydata[uid].photo)
      );

      var fdata = "";
      if (urndata[gid].ydata[uid].portions.length > 0) {
        for (var i = 0; i < urndata[gid].ydata[uid].portions.length; i++) {
          //fdata += '<li data-gid="'+gid+'" data-uid="'+i+'"><img src="'+getresim(urndata[id].ydata[i].photo,1)+'" /><h2>'+urndata[id].ydata[i].title+'</h2><span>€ 12,00</span></li>';
          //urndata[gid].ydata[uid].portions[i]
          //id: "7214", name: "", food_id: "11757", price: "18,00 TL", default: "0"
          fdata += '<li class="' + (i == 0 ? "done" : "") + '" data-gid="' + gid + '" data-uid="' + uid + '" data-fid="' + i + '">';
          if (data.ssepet > 0) {
            fdata += '<i class="fa fa-' + (i == 0 ? "check-circle" : "circle") + '"></i>';
          }
          fdata += urndata[gid].ydata[uid].portions[i].name;
          fdata += '<span>' + fiyatyap(urndata[gid].ydata[uid].portions[i].price, data.currency) + '</span></li>';
        }
      }

      if (data.ssepet > 0) {
        $(".urun .fiyatlar").addClass('spsetSec');
      }
      $(".urun .fiyatlar ul").html(fdata);
    }

    if (_page == "ozellik") {
      var gid = $(".ozellik").data("gid");
      var uid = $(".ozellik").data("uid");
      var fid = $(".ozellik").data("fid");
      ////console.log(urndata[gid].ydata[uid]);

      backfn = function () {
        loadPage("slide", { gid: gid, uid: uid, stop: 1 }, true);
      };

      var odata = "";
      if (urndata[gid].ydata[uid].option.length > 0) {

        uadi = urndata[gid].ydata[uid].portions[fid].name;
        //console.log(uadi)
        uname = '<div class="ubaslik"><h5>' + uadi + '</h5></div>'
        zorsay = 0
        for (var i = 0; i < urndata[gid].ydata[uid].option.length; i++) {
          //fdata += '<li data-gid="'+gid+'" data-uid="'+i+'"><img src="'+getresim(urndata[id].ydata[i].photo,1)+'" /><h2>'+urndata[id].ydata[i].title+'</h2><span>€ 12,00</span></li>';
          //urndata[gid].ydata[uid].portions[i]
          //id: "7214", name: "", food_id: "11757", price: "18,00 TL", default: "0"



          if (urndata[gid].ydata[uid].option[i].type == 0) {
            if (urndata[gid].ydata[uid].option[i].odata.length > 0) {
              odata +=
                '<div class="fiyatlar osecenek ' +
                (i + 1 == urndata[gid].ydata[uid].option.length ? "mb50" : "") +
                '"><h5>' +
                urndata[gid].ydata[uid].option[i].name +
                "</h5>";
              odata +=
                '<ul data-ogid="' + urndata[gid].ydata[uid].option[i].id + '">';
              for (j = 0; j < urndata[gid].ydata[uid].option[i].odata.length; j++) {
                var secili = urndata[gid].ydata[uid].option[i].odata[j].selected;
                odata +=
                  '<li data-defsec=' + secili + ' data-name="' + urndata[gid].ydata[uid].option[i].odata[j].name + '" data-oid="' +
                  urndata[gid].ydata[uid].option[i].odata[j].id +
                  '" class="' +
                  (secili > 0 ? "done" : "") +
                  '"><i class="fa fa-' +
                  (secili > 0 ? "check-circle" : "circle") +
                  '"></i> ' +
                  urndata[gid].ydata[uid].option[i].odata[j].name +
                  (parseInt(urndata[gid].ydata[uid].option[i].odata[j].price) > 0
                    ? "<span>" +
                    fiyatyap(
                      urndata[gid].ydata[uid].option[i].odata[j].price,
                      data.currency
                    ) +
                    "</span>"
                    : "") +
                  "</li>";
              }
              odata += "</ul></div>";
            }
          } else if (urndata[gid].ydata[uid].option[i].type == 1) {
            zorsay += 1
            clsx = "zor" + zorsay;

            /*
            odata +=
              '<select data-osid="' + urndata[gid].ydata[uid].option[i].id + '">';
            for (j = 0; j < urndata[gid].ydata[uid].option[i].odata.length; j++) {
              odata +=
                '<option data-name="'+ urndata[gid].ydata[uid].option[i].odata[j].name +'" value="' +
                urndata[gid].ydata[uid].option[i].odata[j].id +
                '" ' +
                (urndata[gid].ydata[uid].option[i].odata[j].selected == 1
                  ? "selected"
                  : "") +
                ">" +
                urndata[gid].ydata[uid].option[i].odata[j].name +
                (urndata[gid].ydata[uid].option[i].odata[j].price > 0
                  ? " " +
                    fiyatyap(
                      urndata[gid].ydata[uid].option[i].odata[j].price,
                      data.currency
                    )
                  : "") +
                "</option>";
            }
            odata += "</select>";

          */
            odata +=
              '<div class="fiyatlar ozorunlu ' + clsx + ' ' +
              (i + 1 == urndata[gid].ydata[uid].option.length ? "mb50" : "") +
              '"><h5>' +
              urndata[gid].ydata[uid].option[i].name +
              "</h5>";

            odata +=
              '<ul data-ogid="' + urndata[gid].ydata[uid].option[i].id + '" >';
            for (j = 0; j < urndata[gid].ydata[uid].option[i].odata.length; j++) {
              var secili = 0;
              if (j == 0) { secili = 1; }
              odata +=
                '<li data-defsec=' + secili + ' data-name="' + urndata[gid].ydata[uid].option[i].odata[j].name + '" data-oid="' +
                urndata[gid].ydata[uid].option[i].odata[j].id +
                '" class="' +
                (secili > 0 ? "done" : "") +
                '"><i class="fa fa-' +
                (secili > 0 ? "check-circle" : "circle") +
                '"></i> ' +
                urndata[gid].ydata[uid].option[i].odata[j].name +
                (parseInt(urndata[gid].ydata[uid].option[i].odata[j].price) > 0
                  ? "<span>" +
                  fiyatyap(
                    urndata[gid].ydata[uid].option[i].odata[j].price,
                    data.currency
                  ) +
                  "</span>"
                  : "") +
                "</li>";
            }
            odata += "</ul></div>";



          }




          //odata += "</div>";



        }
      }

      $(uname).insertBefore(".ozellik .filtre");

      $(odata).insertAfter(".ozellik .filtre");

      // Güvenlik: bazı edge-case'lerde (cache/DOM patch/çoklu handler) ikon class'ı ile "done" state'i ayrışabiliyor.
      // Sayfa açılışında "done" -> ikon'u senkronlayalım.
      $(".ozellik .fiyatlar li").each(function () {
        var isDone = $(this).hasClass("done");
        var $icon = $("i", this);
        if ($icon.length > 0) {
          $icon.attr("class", isDone ? "fa fa-check-circle" : "fa fa-circle");
        }
      });
    }

    //onay
    if (_page == "onay") {

      backfn = function () {
        loadPage("main", {}, true);
      };
      sipid = "-"
      if (gparam.sipid !== undefined) {

        sipid = gparam.sipid;

      }


      console.log(JSON.parse(gparam.order));


      var reshtml = '';
      reshtml += '<p><svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg></p>\
      <span>#'+ sipid + '</span>\
      <div></div>';
      $('.onay .presult').html(reshtml);

      var pr = { menuid: menuID, jsonid: data.jsonid }
      var param2 = { ...gparam, ...pr }
      sendData("sipmail", "POST", param2
        , function (_data) {
          //console.log(_data);

          if (_data.status != 100) {
            //data = _data.data;
            //console.log(_data.err);
            //window.location.reload();
          }
        },
        function (err) {
          //console.log(err);
        }
      );

      order = JSON.parse(gparam.order)
      var fdata = "";
      if (order.length > 0) {
        fdata = '<li><div class="seprow srow_b">Sipariş Özeti</div></li>'
        for (var i = 0; i < order.length; i++) {
          //food_id = urndata[adisyon[i].gid].ydata[adisyon[i].uid].id;
          var cost =
            //order[i].price;
            //adet = adisyon[i].adet;


            fdata += '' +
            '<li><div class="seprow srow_' +
            i +
            '" data-row="' +
            i +
            '" data-adet="' +
            order[i].adet +
            '" data-cost="' +
            //realfiyat(cost) +
            '"><h5>' +
            order[i].uadi +
            "<span>" +
            //fiyatyap(cost, data.currency) +
            "</span></h5><label>x" +
            order[i].adet +
            '</label></div></li>';
          //total = total + realfiyat(cost) * 0;



          ////console.log(total);
        }

        $(".onay .sepall ul").html(fdata);
      }




    }

    //sonsip
    if (_page == "sonsip") {

      backfn = function () {
        loadPage("start", {}, true);
      };
      sipid = "-"
      if (gparam.sipid !== undefined) {

        sipid = gparam.sipid;

      }

      var sonsipCookie = getCookie("sonsip" + data.menu_id + data.tableno);
      var sonsipData;

      if (sonsipCookie) {
        sonsipData = JSON.parse(decodeURIComponent(sonsipCookie));
      } else {
        // Geri bildirim verisi yoksa varsayılan değerleri kullanabiliriz
        sonsipData = null;
      }


      console.log(sonsipData);

      var tblgrp = ""
      if (data.tableyer != 'YOK') {
        tblgrp = data.tableyer + ' - '
      }

      $('.sonsip .masasepet').html('<span style="color: var(--backbtncolor);font-weight: 600;">' + tblgrp + data.tableno + '</span>')

      console.log(sonsipData);

      if (sonsipData != null) {

        if (!sonsipData.hasOwnProperty('sipdrm')) {
          sonsipData.sipdrm = "0";
          sonsipData.sipdrmtxt = "İletildi";
          sonsipData.sipotr = "-";
        }

        if (sonsipData.sipdrm == "0") {
          // Eğer yoksa 'siddrm' alanını ekliyoruz ve bir değer atıyoruz

          var param2 = { menuid: menuID, sipid: sonsipData.sipid }
          sendData("sonsipdrm", "POST", param2
            , function (_data) {
              //console.log(_data);

              if (_data.status == 200) {

                sonsipData.sipdrm = _data.data.sipdrm
                sonsipData.sipdrmtxt = _data.data.sipdrmtxt
                sonsipData.sipotr = _data.data.sipotr;
                sonsipyaz(sonsipData)

              }
            },
            function (err) {
              //console.log(err);
            }
          );

          // 'some_value' yerine istediğiniz değeri koyabilirsiniz
        } else {
          sonsipyaz(sonsipData)
        }

        //document.cookie = "lang="+curln+" ; expires=Thu, 18 Dec 2100 12:00:00 UTC";  




      } else {

        fdata = '<li><div class="seprow srow_b">Henüz verilmiş bir sipariş yok.</div></li>'
        $(".onay .sepall ul").html(fdata);
      }




    }

    function sonsipyaz(sonsipData) {

      order = sonsipData.order
      var fdata = "";
      if (order.length > 0) {

        fdata = '<li><div class="seprow srow_b">Son Sipariş Özeti (' + sonsipData.sipid + ')</div></li>' +
          '<li><div class="seprow srow_b">' + sonsipData.siptr.replace('+', ' ') + '</div></li>' +
          '<li><div class="seprow srow_b">' + sonsipData.sipdrmtxt + '</div></li>' +
          '<li><div class="seprow srow_b">' + sonsipData.sipotr.replace('+', ' ') + '</div></li>'

        for (var i = 0; i < order.length; i++) {
          //food_id = urndata[adisyon[i].gid].ydata[adisyon[i].uid].id;
          var cost =
            //order[i].price;
            //adet = adisyon[i].adet;


            fdata += '' +
            '<li><div class="seprow srow_' +
            i +
            '" data-row="' +
            i +
            '" data-adet="' +
            order[i].adet +
            '" data-cost="' +
            //realfiyat(cost) +
            '"><h5>' +
            order[i].uadi.replace('+', ' ').replace('+', ' ').replace('+', ' ').replace('+', ' ') +
            "<span>" +
            //fiyatyap(cost, data.currency) +
            "</span></h5><label>x" +
            order[i].adet +
            '</label></div></li>';
          //total = total + realfiyat(cost) * 0;



          ////console.log(total);
        }

        $(".onay .sepall ul").html(fdata);

      }
    }

    if (_page == "anket") {

      backfn = function () {
        loadPage("start", {}, true);
      };

      $('.divbg').css("background-image", "url('" + getresim2(data.qrcover[0]) + "')")
      //$('form').css("height",$(window).height())
      $('.danket').css("height", $(window).height())






      //yıldıların doldurulması
      $('input[type="radio"]').click(function () {

        console.log("yildiz")
        var theNumber = $(this).attr('id').slice(-1);
        $(this).siblings('label').each(function () {
          var sibNumber = $(this).attr('for').slice(-1);
          if (sibNumber <= theNumber) {
            $(this).addClass('on');
          } else {
            $(this).removeClass('on');
          }
        });
      });

      $('.anket .sepet').click(function () {

        console.log("page anket:" + curln)
        langrc = curln
        //x=$('form').serialize();
        //frm=$('form');
        var formValid = true;
        var radioOptions = [];
        ik = 0
        acpuan = 0
        $("input[type='radio']:checked").each(function () {
          ik += 1
          var radioName = $('#q' + ik).attr("soru");
          var radioValue = $(this).val();
          var radioOption = {
            id: ik,
            soru: radioName,
            puan: parseFloat(radioValue)
          };
          radioOptions.push(radioOption);
          acpuan = acpuan + parseFloat(radioValue)
        });
        acpuan = acpuan / 5
        console.log(radioOptions);
        if (radioOptions.length < 5) {
          formValid = false;
        }
        if (formValid) {
          //alertMe({ msg: "Form başarıyla dolduruldu!" });
          // Formun gönderme işlemini buraya ekleyebilirsiniz



          dat = { menu: data.menu_id, menucurr: data.currency, menulang: langrc, acpuan: acpuan, oneri: $('#oneri').val(), radiso: JSON.stringify(radioOptions) }
          ganket(dat);


        } else {
          alertMe({ msg: "Lütfen değerlendirmenizi tamamlayınız." });
        }


      });




      //var feedbackData = [{"id":1,"soru":"Servis","puan":2},{"id":2,"soru":"Lezzet","puan":3},{"id":3,"soru":"Sunum","puan":3},{"id":4,"soru":"Porsiyon","puan":3},{"id":5,"soru":"Ambiyans","puan":3}];
      //feedbackData=[];

      var feedbackCookie = getCookie("SRVY_" + data.menu_id);
      var feedbackData;

      if (feedbackCookie) {
        feedbackData = JSON.parse(decodeURIComponent(feedbackCookie));
      } else {
        // Geri bildirim verisi yoksa varsayılan değerleri kullanabiliriz
        feedbackData = [];
      }


      if (feedbackData.length > 0) {
        // Form elemanlarına eriş
        //var form = document.querySelector('form');
        var radios = $('input[type=radio]');
        var textarea = $('textarea');
        var tpuan = 0
        // Geri bildirimleri form elemanlarına doldur
        feedbackData.forEach(function (item) {
          var questionId = item.id;
          var rating = item.puan;
          var radioId = questionId * 10 + rating; // Radio düğmesinin ID'si hesaplanır

          tpuan += rating;

          var radio = $('input[type=radio][id="' + radioId + '"]');

          if (radio) {

            $(radio).trigger('click');
            //radio.checked = true; // Radio düğmesini işaretle
          }
        });
        textarea.disabled = true;
        snc = 'Değerli müşterimiz,<br>Anketimize katıldığınız için teşekkür ediyoruz.<br>Puan: ' + tpuan / 5
        $('span.giris').html(snc);


        $('input[type="radio"]').unbind("click").attr("disabled", "disabled");
        $('.anket .sepet').unbind("click").css("display", "none");
      }










    }

    if (_page == "secure2") {

      $('.divcaptcha').html('<img id="imgCaptcha" src="admin/api_captcha.asp?x=' + new Date().toUTCString() + '" />')

      setInterval(function () { $('#imgCaptcha').trigger('click'); }, 300000);

      //console.log(gparam.txtisim);


    }

    if (_page == "garson") {

      var tblgrp = ""
      if (data.tableyer != 'YOK') {
        tblgrp = data.tableyer + ' - '
      }

      $('.garson .masasepet').html('<span style="color: var(--backbtncolor);font-weight: 600;">' + tblgrp + data.tableno + '</span>')

      $('.divcaptcha').html('<img id="imgCaptcha" src="admin/api_captcha.asp?x=' + new Date().toUTCString() + '" />')

      setInterval(function () { $('#imgCaptcha').trigger('click'); }, 300000);

      //console.log(gparam.txtisim);


    }

    if (_page == "hesap") {

      var tblgrp = ""
      if (data.tableyer != 'YOK') {
        tblgrp = data.tableyer + ' - '
      }

      $('.hesap .masasepet').html('<span style="color: var(--backbtncolor);font-weight: 600;">' + tblgrp + data.tableno + '</span>')

      $('.divcaptcha').html('<img id="imgCaptcha" src="admin/api_captcha.asp?x=' + new Date().toUTCString() + '" />')

      setInterval(function () { $('#imgCaptcha').trigger('click'); }, 300000);

      //console.log(gparam.txtisim);


    }

    //sepetim
    if (_page == "sepetim") {
      backfn = function () {
        loadPage("main", {}, true);
      };

      var tblgrp = ""
      if (data.tableyer != 'YOK') {
        tblgrp = data.tableyer + ' - '
      }

      $('.sepetim .masasepet').html('<span style="color: var(--backbtncolor);font-weight: 600;">' + tblgrp + data.tableno + '</span>')

      if (data.tableno == 'MNCBM') {

        $("#txtisim").val(data.mncbmdisim);
        $("#txtisim").focus();

      } else {
        $(".sepetisim").hide();
      }


      var total = 0;
      var fdata = "";
      if (adisyon.length > 0) {
        for (var i = 0; i < adisyon.length; i++) {
          //food_id = urndata[adisyon[i].gid].ydata[adisyon[i].uid].id;
          var cost =
            urndata[adisyon[i].gid].ydata[adisyon[i].uid].portions[
              adisyon[i].fid
            ].price;
          //adet = adisyon[i].adet;
          var ozellik = adisyon[i].option;
          ////console.log(ozellik);

          fdata +=
            '<li><div class="seprow srow_' +
            i +
            '" data-row="' +
            i +
            '" data-adet="' +
            adisyon[i].adet +
            '" data-cost="' +
            realfiyat(cost) +
            '"><h5>' +
            urndata[adisyon[i].gid].ydata[adisyon[i].uid].portions[adisyon[i].fid].name +
            "<span>" +
            fiyatyap(cost, data.currency) +
            "</span></h5><label>x" +
            adisyon[i].adet +
            '</label><a class="arti">+</a><a class="eksi">-</a><small>' + adisyon[i].optionhtml.toString() + '</small></div></li>';
          total = total + realfiyat(cost) * adisyon[i].adet;

          for (j = 0; j < ozellik.length; j++) {
            for (
              l = 0;
              l <
              urndata[adisyon[i].gid].ydata[adisyon[i].uid].option.length;
              l++
            ) {
              for (
                k = 0;
                k <
                urndata[adisyon[i].gid].ydata[adisyon[i].uid].option[l].odata
                  .length;
                k++
              ) {
                if (
                  urndata[adisyon[i].gid].ydata[adisyon[i].uid].option[l]
                    .odata[k].id == ozellik[j] &&
                  realfiyat(
                    urndata[adisyon[i].gid].ydata[adisyon[i].uid].option[l]
                      .odata[k].price
                  ) > 0
                ) {
                  var ocost =
                    urndata[adisyon[i].gid].ydata[adisyon[i].uid].option[l]
                      .odata[k].price;

                  fdata +=
                    '<li><div class="seprow srow_' +
                    i +
                    '" data-row="' +
                    i +
                    '" data-adet="' +
                    adisyon[i].adet +
                    '" data-cost="' +
                    realfiyat(ocost) +
                    '"><h5>' +
                    urndata[adisyon[i].gid].ydata[adisyon[i].uid].option[l]
                      .odata[k].name +
                    "</h5><label>x" +
                    adisyon[i].adet +
                    "</label><h3>" +
                    fiyatyap(ocost, data.currency) +
                    "</h3></div></li>";
                  total = total + realfiyat(ocost) * adisyon[i].adet;
                }
              }
            }
          }

          ////console.log(total);
        }

        tfyt = fiyatyap(realfiyat(total), data.currency)
        if (total < 0) {
          tfyt = "-"
        }

        fdata +=
          '<li class="total"><div class="seprow stotal" data-cost="' +
          realfiyat(total) +
          '"><h5>Toplam :</h5><label>&nbsp;</label><h3>' +
          tfyt +
          "</h3></div></li>";
      } else {
        fdata += '<li class="empty">' + ln_key[curln]['sepet-urun-yok'] + '</li>';
        $(".sepetim .sepet").remove();
      }

      $(".sepetim .sepall ul").html(fdata);
    }


    //sepetimhizli
    if (_page == "sepetimhizli") {
      backfn = function () {
        loadPage("main", {}, true);
      };

      var tblgrp = ""
      if (data.tableyer != 'YOK') {
        tblgrp = data.tableyer + ' - '
      }

      $('.sepetim .masasepet').html('<span style="color: var(--backbtncolor);font-weight: 600;">' + tblgrp + data.tableno + '</span>')

      if (data.tableno == 'MNCBM') {

        $("#txtisim").val(data.mncbmdisim);
        $("#txtisim").focus();

      } else {
        $(".sepetisim").hide();
      }


      var total = 0;
      var fdata = "";
      if (adisyon.length > 0) {
        for (var i = 0; i < adisyon.length; i++) {
          //food_id = urndata[adisyon[i].gid].ydata[adisyon[i].uid].id;
          var cost =
            urndata[adisyon[i].gid].ydata[adisyon[i].uid].portions[
              adisyon[i].fid
            ].price;
          //adet = adisyon[i].adet;
          var ozellik = adisyon[i].option;
          ////console.log(ozellik);


          fdata +=
            '<li><div class="seprow srow_' +
            i +
            '" data-row="' +
            i +
            '" data-adet="' +
            adisyon[i].adet +
            '" data-cost="' +
            realfiyat(cost) +
            '"><h5>' +
            urndata[adisyon[i].gid].ydata[adisyon[i].uid].portions[adisyon[i].fid].name +
            '<span>' +
            fiyatyap(cost, data.currency) +
            '</span></h5><a class="arti">+</a><label>' + adisyon[i].adet + '</label><a class="eksi">-</a><small>' + adisyon[i].optionhtml.toString() + '</small></div></li>';
          total = total + realfiyat(cost) * adisyon[i].adet;

          for (j = 0; j < ozellik.length; j++) {
            for (
              l = 0;
              l <
              urndata[adisyon[i].gid].ydata[adisyon[i].uid].option.length;
              l++
            ) {
              for (
                k = 0;
                k <
                urndata[adisyon[i].gid].ydata[adisyon[i].uid].option[l].odata
                  .length;
                k++
              ) {
                if (
                  urndata[adisyon[i].gid].ydata[adisyon[i].uid].option[l]
                    .odata[k].id == ozellik[j] &&
                  realfiyat(
                    urndata[adisyon[i].gid].ydata[adisyon[i].uid].option[l]
                      .odata[k].price
                  ) > 0
                ) {
                  var ocost =
                    urndata[adisyon[i].gid].ydata[adisyon[i].uid].option[l]
                      .odata[k].price;

                  fdata +=
                    '<li><div class="seprow srow_' +
                    i +
                    '" data-row="' +
                    i +
                    '" data-adet="' +
                    adisyon[i].adet +
                    '" data-cost="' +
                    realfiyat(ocost) +
                    '"><h5>' +
                    urndata[adisyon[i].gid].ydata[adisyon[i].uid].option[l]
                      .odata[k].name +
                    "</h5><label>x" +
                    adisyon[i].adet +
                    "</label><h3>" +
                    fiyatyap(ocost, data.currency) +
                    "</h3></div></li>";
                  total = total + realfiyat(ocost) * adisyon[i].adet;
                }
              }
            }
          }

          ////console.log(total);
        }

        tfyt = fiyatyap(realfiyat(total), data.currency)
        if (total < 0) {
          tfyt = "-"
        }



      } else {
        fdata += '<li class="empty">' + ln_key[curln]['sepet-urun-yok'] + '</li>';
        $(".sepetim .sepet").remove();
      }

      $(".sepetim .sepall ul").html(fdata);
    }



    if (_page == "hesaplist") {
      backfn = function () {
        loadPage("start", {}, true);
      };

      console.log(gparam.heaspstr);
      var tblgrp = ""
      if (data.tableyer != 'YOK') {
        tblgrp = data.tableyer + ' - '
      }


      $('.hesaplist .masasepet').html('<span style="color: var(--backbtncolor);font-weight: 600;">' + tblgrp + data.tableno + '</span>')

      if (data.tableno == 'MNCBM') {

        $("#txtisim").val(data.mncbmdisim);
        $("#txtisim").focus();

      } else {
        $(".sepetisim").hide();
      }

      //heaspstr=gparam.heaspstr


      var total = 0;
      var fdata = "";
      if (heaspstr.length > 0) {
        for (var i = 0; i < heaspstr.length; i++) {
          //food_id = urndata[adisyon[i].gid].ydata[adisyon[i].uid].id;



          fdata +=
            '<li><div class="seprow srow_' +
            i +
            '" data-row="' +
            i +
            '" data-adet="' +
            heaspstr[i].adet +
            '" data-cost="' +
            realfiyat(heaspstr[i].tutar) +
            '"><h5>' +
            heaspstr[i].cinsi +
            "<span>" +
            fiyatyap(heaspstr[i].brfiyat, data.currency) +
            "</span></h5><label>x" +
            heaspstr[i].adet +
            '</label><a style="color:#333;width:initial">' + fiyatyap(heaspstr[i].tutar, data.currency) + '</a></div></li>';
          total = total + realfiyat(heaspstr[i].brfiyat) * heaspstr[i].adet;



          ////console.log(total);
        }



        tfyt = fiyatyap(realfiyat(total), data.currency)
        if (total < 0) {
          tfyt = "-"
        }

        fdata +=
          '<li class="total"><div class="seprow stotal" data-cost="' +
          realfiyat(total) +
          '"><h5>Toplam :</h5><label>&nbsp;</label><h3>' +
          tfyt +
          "</h3></div></li>";
      } else {
        fdata += '<li class="empty">' + ln_key[curln]['hesap-urun-yok'] + '</li>';
        $(".hesaplist .sepet").remove();

      }


      var secimKutusu = document.createElement("select");
      secimKutusu.id = "secimKutusu";

      // 10 adet seçenek oluşturmak için döngü
      for (var i = 4; i <= 10; i++) {
        // Yeni bir seçenek oluşturuyoruz
        var secenek = document.createElement("option");
        // Seçeneğin metnini ve değerini ayarlıyoruz
        secenek.text = i + " Kişi ";
        secenek.value = i;
        // Oluşturulan seçeneği select kutusuna ekliyoruz
        secimKutusu.add(secenek);
      }


      fdata += '<ul class="fytbol"><li>2 Kişi<span>' + fiyatyap((total / 2).toFixed(2), data.currency) + '</span></li><li>3 Kişi<span>' + fiyatyap((total / 3).toFixed(2), data.currency) + '</span></li><li id="secenker"></li></ul>'



      $(".hesaplist .sepall ul").html(fdata);



      document.getElementById("secenker").appendChild(secimKutusu)
      $(".hesaplist .sepall ul #secenker").append('<span id="secfyt">' + fiyatyap((total / 4).toFixed(2), data.currency) + '</span>');


      if (heaspstr.length == 0) {
        $(".hesaplist .fytbol").remove();
      }


      secimKutusu.onchange = function () {
        // Seçilen değeri alıyoruz
        var secilenDeger = secimKutusu.value;
        // Seçilen değeri konsola yazdırıyoruz
        console.log("Seçilen değer: " + secilenDeger);
        // Burada başka işlemler yapabilirsiniz


        $(".hesaplist .sepall #secfyt").html(fiyatyap((total / secilenDeger).toFixed(2), data.currency));




      };



    }


    if (_page == "masasecimi") {
      mid = "";
      //console.log(_page)

      backfn = function () {
        //loadPage("list", { gid: gid, sctop: sctop }, true);
        loadPage("sepetim", { sctop: gctop }, true);
      };

      var fdata = "";
      sendData(
        "masalar",
        "POST",
        { menu: data.menu_id },
        function (_data) {
          //console.log(_data);

          if (_data.status == 100) {

            masalar = _data.data.masalar

            for (var i = 0; i < masalar.length - 1; i++) {
              //fdata += '<li data-gid="'+gid+'" data-uid="'+i+'"><img src="'+getresim(urndata[id].ydata[i].photo,1)+'" /><h2>'+urndata[id].ydata[i].title+'</h2><span>€ 12,00</span></li>';
              //urndata[gid].ydata[uid].portions[i]
              //id: "7214", name: "", food_id: "11757", price: "18,00 TL", default: "0"
              fdata += '<li class=""  data-mid="' + masalar[i].masano + '">';
              if (data.ssepet > 0) {
                fdata += '<i class="fa fa-' + (i == -1 ? "check-circle" : "circle") + '"></i>';
              }
              fdata += masalar[i].masano;
              fdata += '</li>';
            }

            $(".masasecimi .masalar ul").html(fdata);

          } else {
            //0
            alertMe({ msg: "Bir hata oluştu. Lütfen tekrar deneyiniz." });
            //console.log(_data.error);
          }
        },
        function (err) {
          //console.log(err);
        }
      );




    }


    //addSearch('main');


    setLangs(curln, data);

    customBack = function () {

      console.log(isMenuOpen);

      if (isMenuOpen) {

        $('.nav__toggle').trigger("click");
        return false;

      }

      if (backfn !== null) {
        backfn();
        return true;
      } else {
        //window.history.go(-1);
        return false;
      }
    };


  }

  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {

    //loadPage('main',{},true);
    window.history.pushState(null, "", window.location.href);

    if (backfn !== null) {
      backfn();
      return true;
    } else {
      //console.log(referrer);
      if (referrer != "") {
        window.top.location.replace(referrer)
      } else {
        history.go(-1)
      }
      return false;
    }

  };


  loadGarson = function () {
    loadPage("garson", {}, true);
  };


});


if (mobileAndTabletCheck() == false) {

  neww = $(window).height() * .57;

  $("body").css({
    width: neww,
  });

  $("body").css({
    margin: '0 auto',
  });



  var style = document.createElement('style');
  //style.type = 'text/css';
  style.innerHTML = '.page { margin: 0 auto; float:initial } ';
  style.innerHTML = style.innerHTML + '.headbar { width: ' + neww + 'px; box-shadow: none;} ';
  style.innerHTML = style.innerHTML + '.searchbar { width: ' + neww + 'px} ';
  style.innerHTML = style.innerHTML + '.start { background-color: var(--backbtncolor)} ';
  style.innerHTML = style.innerHTML + '.cover div { width: ' + neww + 'px;margin: 0 auto; } ';
  style.innerHTML = style.innerHTML + ' @media (min-width: 768px) {.urunler li {width: 88%;}  } ';

  style.innerHTML = style.innerHTML + '.campaing2 { width: ' + neww + 'px;margin: 0 auto; } ';

  style.innerHTML = style.innerHTML + '.goporty { width: ' + neww + 'px;margin: 0 auto; left: calc(50% - ' + neww / 2 + 'px)} ';


  document.getElementsByTagName('head')[0].appendChild(style);



}





//Dynamic action after refresh



