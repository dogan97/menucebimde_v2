//   function showMenus() {

//     if (!$(".menus").hasClass("show")) {
//       $(".menus").fadeIn();
//       $(".menus").addClass("show");
//     }
//   }

// $("#app").on("focus", ".main #txtsearch", function () {
//     backfn = function () {
//         refreshSearch();
//     };
//     $('.main .gruplar').hide();
//     $('.featured-products').hide();
//     $('.main .urunler').show();
//     $('.main .searchbar a').show();
// });

// $("#app").on("blur", ".main #txtsearch", function () {
//     backfn = function () {
//         loadPage("start", {}, true);
//     };
//     if ($('.main #txtsearch').val() == '') {
//         refreshSearch();
//     }
// });

// function refreshSearch() {
//     backfn = function () {
//         loadPage("start", {}, true);
//     };
//     $('.main .searchbar a').hide();
//     $('.main .gruplar').show();
//     $('.featured-products').show();
//     $('.main .urunler').hide();
//     $('.main #txtsearch').val('')
//     $('.main .urunler li').show();
//     $('.main .searchbar').css('display', 'none');
// }

// function filterUruns(txt) {
//     $('.main .urunler li').each(function (i) {
//         var name = $(this).data('name');
//         var key = txt;
//         ////console.log(name, key, name.indexOf(key));
//         if (name.indexOf(key) < 0) {
//             $(this).hide();
//         } else {
//             $(this).show();
//         }
//     });
// }

//   $("#app").on("tap", ".main .searchbar a", function () {


//     refreshSearch();
//     return false;
//   });

//   $("#app").on("input propertychange", ".main #txtsearch", function () {
//     filterUruns($('.main #txtsearch').val().toLocaleLowerCase('tr-TR').replace(/\s/g, ''));
//   });

//   $("#app").on("tap", ".start .gomains", function () {
//     console.warn("tiktik")
//     showMenus();
//   });

//    $("#app").on("tap", ".main .gomains", function () {
//     showMenus();
//   });


//     $("#app").on("tap", ".start .menus, .menus", function () {

//     if ($(".menus").hasClass("show")) {
//       $(".menus").removeClass("show");
//       $(".menus").fadeOut();

//       console.log("cmenu:" + menuID)
//       console.log("x:" + $(this).find('a.active').data("menuid"))

//       if ($(this).find('a.active').data("menuid") == menuID) {
//         if (dilsecimi == 0) {
//           //alertify.okBtn("Kapat").cssClass('langDia').alert(htmlLn);
//           var lkeys = data['lang'];
//           if (lkeys.length > 1) {

//             //console.log(lkeys)

//             var htmlLn = '';
//             for (var i = 0; i < lkeys.length; i++) {
//               htmlLn += '<a class="' + (curln == lkeys[i] ? 'active' : '') + '" data-ln="' + lkeys[i] + '">' + ln_key[lkeys[i]]['dil'] + '</a>';
//             }

//             //alertify.okBtn("Kapat").cssClass('langDia langc').alert(htmlLn);


//             alertify.okBtn("X").cssClass('langDia').alert(htmlLn);

//           }


//         }

//       }


//     }
//   });


//     $("#app").on("tap", ".start .menus a,.menus a ", function () {

//     if (!$(this).hasClass("active")) {
//       var nmenuid = $(this).data("menuid");
//       //console.log(nmenuid);
//       opage = _pageback
//       openStart(nmenuid, opage);


//     } else {
//       //$('.menus').removeClass('show');
//       //$('.menus').fadeOut();

//       if (dilsecimi == 0) {
//         //alertify.okBtn("Kapat").cssClass('langDia').alert(htmlLn);
//         var lkeys = data['lang'];
//         if (lkeys.length > 1) {

//           //console.log(lkeys)

//           var htmlLn = '';
//           for (var i = 0; i < lkeys.length; i++) {
//             htmlLn += '<a class="' + (curln == lkeys[i] ? 'active' : '') + '" data-ln="' + lkeys[i] + '">' + ln_key[lkeys[i]]['dil'] + '</a>';
//           }

//           //alertify.okBtn("Kapat").cssClass('langDia langc').alert(htmlLn);


//           alertify.okBtn("X").cssClass('langDia').alert(htmlLn);

//         }


//       }

//     }
//   });

//   $("#app").on("tap", ".backbtn", function () {
//     backfn();
//   });