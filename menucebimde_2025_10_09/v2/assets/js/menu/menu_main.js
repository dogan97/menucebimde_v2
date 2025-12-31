 function tabmenutoggle(tabmenuacik, menuID, data, curln) {

    var en = $(window).width();
    //tabmenu genişliği. ona göre açı buluyorum.
    en = 300;
    var boy = $(window).height();
    var enBoyOrani = en / boy;
    console.log("Cihazın ekran en-boy oranı: " + enBoyOrani);
    //if (enBoyOrani>.8){enBoyOrani=.5}
    degree = parseInt(enBoyOrani * -47)

    degree = Math.atan(enBoyOrani) * -180 / Math.PI

    console.log("derece: " + degree);

    if (tabmenuacik == 0) {

      $('.start').css("transform", "rotate(" + degree + "deg) rotateZ(0deg)")
      /*$('.start').css("scale",".9")
      $('.start').css("top","-60px")
      $('.start').css("border-radius","5px")*/
      $('.start').addClass('openned');


      /* $('.start .cover').css("border-radius","5px")*/



      $('.gotabmenu a').html('<i class="fa fa-reply fa-flip-vertical"></i>')
      /*$('.gotabmenu').css("scale","1.111111")*/

      tabmenuacik = 1;


      var pr = { url: 'tabmenu', menuid: menuID, jsonid: data.jsonid, curlang: curln }
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


    } else {

      $('.start').css("transform", "initial")
      /*$('.start').css("scale","1")
      $('.start').css("top","")
      $('.start').css("border-radius","0")*/

      $('.start').removeClass('openned');

      /*$('.start .cover').css("border-radius","0")*/


      $('.gotabmenu a').html('<i class="fa fa-bars"></i>')
      /* $('.gotabmenu').css("scale","1")*/




      tabmenuacik = 0;
    }



return tabmenuacik;
  }