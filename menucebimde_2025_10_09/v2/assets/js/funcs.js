var alerjen = {
    "tr":['','Acı','Sülfür Dioksit','Hardal','Glüten','Soya','Kereviz','Yumuşakçalar','Fıstık','Kabuklular','Alkol','Yumurta','Susam','Süt ve Süt Ürünleri','Sert Kabuklular','Bakla','Deniz Ürünleri','Domuz Eti'],
    "en":['','Hot','Sulfur Dioxside','Mustard','Gluten','Soy','Celery','Sea Mollusks','Peanut','Shellfish','Alcohol','Egg','Sesame','Milk And Products','Nuts','Broad Beans','Seafood','Pork'],
    "ar":['','حار','على ثاني أكسيد الكبريت','على الخردل','على الغلوتين','على الصويا','على الكرفس','على رخويات البحر','على الفول السوداني','على المحار','على الكحول','على البيض','على السمسم','الحليب ومنتجاته','على المكسرات','على حبوب عريضة','على المأكولات البحرية','لحم خنزير']
  }
  
  
  function zamanOncex(tarihStr,curln) {
      const aylar = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
  
      // Tarih stringini Date'e çevir
      var parcalar = tarihStr.split(" ");
      var tarihParca = parcalar[0].split(".");
      var saatParca = parcalar[1].split(":");
  
      var tarih = new Date(
          parseInt(tarihParca[2]),
          parseInt(tarihParca[1]) - 1,
          parseInt(tarihParca[0]),
          parseInt(saatParca[0]),
          parseInt(saatParca[1]),
          parseInt(saatParca[2])
      );
  
      var simdi = new Date();
      var farkMs = simdi - tarih;
      var farkSn = Math.floor(farkMs / 1000);
  
      if (farkSn < 60) return "az önce";
      var dakika = Math.floor(farkSn / 60);
      if (dakika < 60) return dakika + " dakika önce";
      var saat = Math.floor(dakika / 60);
      if (saat < 24) return saat + " saat önce";
      var gun = Math.floor(saat / 24);
      if (gun < 30) return gun + " gün önce";
      var ay = Math.floor(gun / 30);
      if (ay < 3) return ay + " ay önce";
  
      // 3 ay geçtiyse:
      var gunTarih = tarih.getDate();
      var ayTarih = tarih.getMonth(); // 0-indexed
      var yilTarih = tarih.getFullYear();
  
      if (simdi.getFullYear() === yilTarih) {
          // Aynı yıl: sadece gün ve ay
          return gunTarih + " " + aylar[ayTarih];
      } else {
          // Farklı yıl: gün ay yıl
          return gunTarih + " " + aylar[ayTarih] + " " + yilTarih;
      }
  }
  
  function zamanOnce(tarihStr, curln) {
      // Çoklu dil desteği
      const diller = {
          tr: {
              aylar: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
              now: "az önce",
              minute: " dakika önce",
              hour: " saat önce",
              day: " gün önce",
              month: " ay önce"
          },
          en: {
              aylar: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              now: "just now",
              minute: " minutes ago",
              hour: " hours ago",
              day: " days ago",
              month: " months ago"
          },
          ar: {
              aylar: ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"],
              now: "الآن",
              minute: " دقيقة مضت",
              hour: " ساعة مضت",
              day: " يوم مضى",
              month: " شهر مضى"
          }
      };
  
      // Geçerli dil seti (yoksa tr default)
      const dil = diller[curln] || diller["tr"];
  
      // Tarih stringini parçala
      var parcalar = tarihStr.split(" ");
      var tarihParca = parcalar[0].split(".");
      var saatParca = parcalar[1].split(":");
  
      var tarih = new Date(
          parseInt(tarihParca[2]),
          parseInt(tarihParca[1]) - 1,
          parseInt(tarihParca[0]),
          parseInt(saatParca[0]),
          parseInt(saatParca[1]),
          parseInt(saatParca[2])
      );
  
      var simdi = new Date();
      var farkMs = simdi - tarih;
      var farkSn = Math.floor(farkMs / 1000);
  
      if (farkSn < 60) return dil.now;
      var dakika = Math.floor(farkSn / 60);
      if (dakika < 60) return dakika + dil.minute;
      var saat = Math.floor(dakika / 60);
      if (saat < 24) return saat + dil.hour;
      var gun = Math.floor(saat / 24);
      if (gun < 30) return gun + dil.day;
      var ay = Math.floor(gun / 30);
      if (ay < 3) return ay + dil.month;
  
      // 3 aydan fazlaysa tam tarih
      var gunTarih = tarih.getDate();
      var ayTarih = tarih.getMonth(); // 0-indexed
      var yilTarih = tarih.getFullYear();
  
      if (simdi.getFullYear() === yilTarih) {
          return gunTarih + " " + dil.aylar[ayTarih];
      } else {
          return gunTarih + " " + dil.aylar[ayTarih] + " " + yilTarih;
      }
  }
  
  function getParameterByName(name) {
    var match = RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  }
  
  function alertMe(e) {
    var rf = function () {};
    if (e.func !== undefined) {
      rf = e.func;
    }
    alertify.okBtn("Kapat").cssClass("deff").alert(e.msg, rf);
    /*
          alertify
              .okBtn("Accept")
              .cancelBtn("Deny")
              .confirm("Confirm dialog with custom button labels", function (ev) {
                ev.preventDefault();
                alertify.success("You've clicked OK");
              }, function(ev) {
                ev.preventDefault();
                alertify.error("You've clicked Cancel");
              });
          */
  }
  
  function delmsg(e) {
    var rf = function () {};
    if (e.func !== undefined) {
      rf = e.func;
    }
    alertify
      .cssClass('delalert')
      .okBtn("Ürünü Sil")
      .cancelBtn("Vazgeç")
      .confirm(e.msg, rf, function () {});
  }
  
  function teldelmsg(e) {
    var rf = function () {};
    if (e.func !== undefined) {
      rf = e.func;
    }
    alertify
      .cssClass('teldelalert')
      .okBtn("Evet")
      .cancelBtn("Hayır")
      .confirm(e.msg, rf, function () {});
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function sendData(op, method, param, fnsuccess, fnerror) {
    console.log('op:'+op)
    $.ajax({
      //url: "http://php.menejer.com.tr/newq/api.php?op="+op,
      //url: "http://fatihdell/mcadm/api.asp?op=" + op,
      //url: "https://menucebimde.com/admin/api.asp?op=" + op,
      //url: "https://fatihdell/menucebimde/admin/api.asp?op=" + op,
      url: "https://menucebimde.com/admin/api.asp?op=" + op,
      //url: "http://qradmin.mekanindeks.com/_api.asp?op=" + op,
      //url: "http://adm.menucebimde.com/api.asp?op=" + op,
      //url: "http://mekandex.com/"+op,
      //url: "http://mekandex.com/api/"+op,
      type: method,
      timeout: 35000,
      data: param,
      //headers: { 'Authorization': 'Basic ' + btoa('CardTime_Pos_@v01:dl_i0G=O2@-jl1Ch') },
      success: function (ret) {
        //var res = $.parseJSON(ret);
      
        fnsuccess(ret);
      },
      error: function (request, status, error) {
        fnerror(request.status + "|" + error);
      },
    });
  }
  
  function setHeadbarxx(logo) {
    if (logo !== "") {
      $(".headbar")
        .css("display", "flex")
        .html('<img src="' + getresim2(logo) + '" />');
    }
  }
  
  function setHeadbar(logo) {
    if (logo !== "") {
      $(".headbar").css("display", "flex")
      $(".headbar img").attr('src' , getresim2(logo) );
    }
  }
  
  function addSearch(page) {
    $('.'+page+' .headbar').prepend('<a class="btnSrc"><i class="fa fa-search"></i></a>');
  }
  
  function getresim(_url, _no) {
    // return "http://img.menucebimde.com/" + _url;
    return "https://menucebimde.com/admin/imgs/" + _url;
    return "_imgs/" + _url;
    
  }
  
  function getresim2(_url, _no) {
    return "https://menucebimde.com/" + _url;
    //return "https://menucebimde.com/" + _url;
    return "" + _url;
    
  }
  
  function removeArr(arr, elm) {
    var index = arr.indexOf(elm);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
  
  function getIndex(val, arr) {
    for (k = 0; k < arr.length; k++) {
      if (arr[k].id == val) {
        return k;
        break;
      }
    }
  }
  
  function fiyatyap(txt, curr) {
    
    var txtprice=txt
    var ret = txt
      .toString()
      .replace(",", ".")
      .replace(/([a-zA-Z ])/g, "");
      
      if (txtprice=="-1,00"){
        curr=""
      }
  
    switch (curr) {
      case "TL":
        //ret += " " + curr;
        ret = "₺ " + ret;
        break;
      case "$":
      case "€":
        ret = curr + " " + ret;
        break;
      case "£":
        ret = curr + " " + ret;
        break;
      case "":
        ret = "";
        break;
    }
    return ret;
  }
  
  function realfiyat(txt) {
    var ret = txt
      .toString()
      .replace(",", ".")
      .replace(/([a-zA-Z ])/g, "");
    return parseFloat(ret).toFixed(2);
  }
  function fiyatyap2(txt, curr) {
    
    var txtprice=txt
    var ret = txt
      .toString()
      .replace(".", "")
      .replace(",", ".")
      .replace(/([a-zA-Z ])/g, "");
      
      if (txtprice=="-1,00"){
        curr=""
      }
  
      ret=kucukOndalikYaz(ret,2)
  
    switch (curr) {
      case "TL":
        //ret += " " + curr;
        ret = "₺ " + ret;
        break;
      case "$":
      case "€":
        ret = curr + " " + ret;
        break;
      case "":
        ret = "";
        break;
    }
    return ret;
  }
  
  function kucukOndalikYaz(sayi, basamakSayisi) {
    var ondalikKisim = sayi.toString().split('.')[1];
    var kucukOndalik = '<small>.' + ondalikKisim + '</small>';
    return sayi.toString().split('.')[0] +  kucukOndalik;
    
  }
  
  function sprintf(format) {
    for (var i = 1; i < arguments.length; i++) {
      format = format.replace(/%s/, arguments[i]);
    }
    return format;
  }
  
  function getQuery() {
    var urlParams;
    var match,
      pl = /\+/g, // Regex for replacing addition symbol with a space
      search = /([^&=]+)=?([^&]*)/g,
      decode = function (s) {
        return decodeURIComponent(s.replace(pl, " "));
      },
      query = window.location.search.substring(1);
  
    urlParams = {};
    while ((match = search.exec(query))) {
      urlParams[decode(match[1])] = decode(match[2]);
    }
    return urlParams;
  }
  
  function makeList(arr, gid, data) {
    $(".list .urunler ul").html("");
  
    console.log(arr);
    var udata = "";
    for (var i = 0; i < arr.length; i++) {
  
      nlustr='';
      if (arr[i].hasOwnProperty('nlu')){
        if (arr[i].nlu!=''){
          nlustr='<spn class="nluspn">'+arr[i].nlu+'</spn>'
        }
        
      }
  
      udetay=arr[i].content
  if(udetay==''){
    udetay="&nbsp;"
  }
  
  stl=""
  if (data.tema == 1){
    stl="display:none;"
  }
  urnid=arr[i].id;
  if (urnid=='248174' || urnid=='250796' || urnid=='250797' || urnid=='250798' || urnid=='250799'){
    stl="display:block !important;"
  }
  
      
      var dfiy = arr[i].portions.length > 0 ? arr[i].portions[0].price : 0;
      udata += '<li data-gid="' + gid + '" data-uid="' + i + '" data-name="'+arr[i].title.toLocaleLowerCase('tr-TR').replace(/\s/g,'')+'" class="c'+arr[i].id+'">\
      <img src="' + getresim(arr[i].photo, 1) + '" style="' + stl + '" onerror="this.onerror=null;this.src=\''+ noimg +'\'" />\
      <h2><p class="ellipsis">'+nlustr+arr[i].title+'</p></h2>\
      <h5 class="udetay">' + udetay +'</h5>';
      
      //console.log(menuID)
      alef='';
      //if (menuID=="QD3I5E" || menuID=="MPLZH3"){
  
  
        if (arr[i].hasOwnProperty('alerjen')){
          if (arr[i].alerjen.length>0){
  
            for (var k = 0; k < arr[i].alerjen.length; k++) {
              alef+='<img class="alerji" style="display:block !important;" src="v2/assets/img/alerjen/'+ arr[i].alerjen[k] +'.png">'
            }
            
        
                
  
          }
          
        }
  
  
      //}
  
      
      udata += '<div class="divlalerjen"><span>' + fiyatyap(dfiy, data.currency) + '</span><div style="display:flex;">'+ alef +'</div></diV>';   
  
  
      if (arr[i].portions.length > 1) {
        udata += "<i class='fa fa-chevron-right'></i>";
      }
      udata += "</li>";
  
      ////console.log(gid);
  
    }
    return udata;
  }
  
  
  
  
  function makeListtema4(arr, gid, data) {
    //$(".list .urunler ul").html("");
  
    console.log(arr);
    var udata = "";
    for (var i = 0; i < arr.length; i++) {
  
      nlustr='';
      if (arr[i].hasOwnProperty('nlu')){
        if (arr[i].nlu!=''){
          nlustr='<spn class="nluspn">'+arr[i].nlu+'</spn>'
        }
        
      }
  
      udetay=arr[i].content
  if(udetay==''){
    udetay=""
  }else{
    udetay='<div class="item-desc">' + removeLeadingBr(udetay) +'</div>'
  }
  
  stl=""
  if (data.tema == 1){
    stl="display:none;"
  }
  urnid=arr[i].id;
  if (urnid=='248174' || urnid=='250796' || urnid=='250797' || urnid=='250798' || urnid=='250799'){
    stl="display:block !important;"
  }
  
  alef='';
      //if (menuID=="QD3I5E" || menuID=="MPLZH3"){
  
  
        if (arr[i].hasOwnProperty('alerjen')){
          if (arr[i].alerjen.length>0){
  
            for (var k = 0; k < arr[i].alerjen.length; k++) {
              alef+='<img width="24" height="24" alt="" src="v2/assets/img/alerjen/'+ arr[i].alerjen[k] +'.png">'+alerjen["tr"][arr[i].alerjen[k]]
            }
            
        
                
            alef='<div class="item-alerjen">'+alef+'</div>';
  
          }
          
        }
      
  
        var adata = arr[i].portions;
        alturun='';
        console.log(adata.length);
        if (adata.length>1){
          for (var a = 1; a < adata.length; a++) {
            aurn=adata[a];
           
           
            alturun+='<div class="item-info">\
                <div class="item-name txtsml">'+aurn.name+'</div>\
                <div class="item-price txtsml">'+fiyatyap2(aurn.price, data.currency)+'</div>\
              </div>';
  
  
  
              
  
          }
         
        }
  
  
      var dfiy = arr[i].portions.length > 0 ? arr[i].portions[0].price : 0;
  
      udata+='<div class="item">\
                <div class="item-info">\
                  <div class="item-name">'+nlustr+arr[i].title+'</div>\
                  <div class="item-price">'+fiyatyap2(dfiy, data.currency)+'</div>\
                </div>\
                '+alturun+'\
                '+ udetay +'\
                '+ alef +'\
              </div>';
  
     
      
      //console.log(menuID)
      
  
  
      //}
  
  
      ////console.log(gid);
  
    }
    return udata;
  }
  
  function makeListara(arr, gid, data) {
    $(".list .urunler ul").html("");
    var udata = "";
    for (var i = 0; i < arr.length; i++) {
      var dfiy = arr[i].portions.length > 0 ? arr[i].portions[0].price : 0;
      udata += '<li data-gid="' + gid + '" data-uid="' + i + '" data-name="'+arr[i].title.toLocaleLowerCase('tr-TR').replace(/\s/g,'')+'">\
      <h2><p class="line-clamp2">' + arr[i].title + '</p></h2>\
      <span>' + fiyatyap(dfiy, data.currency) + '</span>';
  
      if (arr[i].portions.length > 1) {
        udata += "<i class='fa fa-chevron-right' style='right: 14px;'></i>";
      }
      udata += "</li>";
  
      ////console.log(gid);
  
    }
    return udata;
  }
  
  
  function makeListdesc(arr, gid, data) {
    //$(".list .urunler ul").html("");
    var udata = "";
    for (var i = 0; i < arr.length; i++) {
      
      udata +=  arr[i].title + ', ';
   
      
  
      ////console.log(gid);
  
    }
    return udata;
  }
  
  
  
  function removeLeadingBr(str) {
    return str.replace(/^<br>/i, ''); // Başta <br> varsa kaldırır
  }
  
  /**
   * Ürün için tahmini servis süresi ve kalori bilgisi üretir.
   * Backend verisi varsa onu kullanır, yoksa akıllı tahmin yapar.
   */
  function getProductExtras(item) {
      if (!item) return { time: "10-15 dk", kcal: "350 kcal", kcalNum: 350 };
      
      let time = item.service_time || null;
      let kcal = item.calories || null;
      let kcalNum = 0;
  
      const title = (item.title || "").toLowerCase();
  
      if (!time) {
          if (title.indexOf("çay") > -1 || title.indexOf("kahve") > -1 || title.indexOf("su") > -1 || title.indexOf("soda") > -1 || title.indexOf("ayran") > -1) {
              time = "3-5 dk";
          } else if (title.indexOf("tost") > -1 || title.indexOf("sandviç") > -1 || title.indexOf("omlet") > -1 || title.indexOf("menemen") > -1) {
              time = "8-12 dk";
          } else if (title.indexOf("burger") > -1 || title.indexOf("pizza") > -1 || title.indexOf("makarna") > -1 || title.indexOf("salata") > -1) {
              time = "12-18 dk";
          } else if (title.indexOf("kebap") > -1 || title.indexOf("ızgara") > -1 || title.indexOf("pirzola") > -1 || title.indexOf("bonfile") > -1) {
              time = "20-25 dk";
          } else if (title.indexOf("tatlı") > -1 || title.indexOf("pasta") > -1 || title.indexOf("kek") > -1 || title.indexOf("çikolata") > -1) {
              time = "5-10 dk";
          } else {
              time = "10-15 dk";
          }
      }
  
      if (!kcal) {
          let baseKcal = 350;
          if (title.indexOf("çay") > -1 || title.indexOf("su") > -1 || title.indexOf("soda") > -1) baseKcal = 0;
          else if (title.indexOf("kahve") > -1) baseKcal = 50;
          else if (title.indexOf("salata") > -1) baseKcal = 220;
          else if (title.indexOf("burger") > -1 || title.indexOf("pizza") > -1) baseKcal = 650;
          else if (title.indexOf("kebap") > -1 || title.indexOf("ızgara") > -1) baseKcal = 550;
          else if (title.indexOf("makarna") > -1) baseKcal = 450;
          else if (title.indexOf("tatlı") > -1 || title.indexOf("pasta") > -1 || title.indexOf("çikolata") > -1) baseKcal = 400;
  
          if (title.indexOf("diyet") > -1 || title.indexOf("fit") > -1 || title.indexOf("light") > -1) baseKcal *= 0.6;
          if (title.indexOf("double") > -1 || title.indexOf("büyük") > -1 || title.indexOf("karışık") > -1) baseKcal *= 1.3;
  
          const offset = (parseInt(item.id || 0) % 40) - 20;
          kcalNum = Math.max(0, Math.floor(baseKcal + offset));
          kcal = kcalNum + " kcal";
      } else {
          kcalNum = parseInt(kcal) || 0;
      }
  
      return { 
          time: time, 
          kcal: kcal,
          kcalNum: kcalNum
      };
  }