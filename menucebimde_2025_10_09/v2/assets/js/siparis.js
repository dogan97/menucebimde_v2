//  function sipGonder(secno, phone) {
//     ////console.log({ secno:secno,provider:5,order:getSipar(),table:21,menu:data.menu_id,menucurr:data.currency });
//     order = getSipar();
//     sendData(
//       "siparis",
//       "POST",
//       {
//         code: secno,
//         provider: 5,
//         order: order,
//         menu: data.menu_id,
//         menucurr: data.currency,
//         sesid: data.id,
//         tableno: data.tableno,
//         tableid: tableid,
//         jsonid: data.jsonid,
//         phone: phone,
//         mncbmdisim: data.mncbmdisim,
//       },
//       function (_data) {
//         //console.log(_data);
//         $('.loader').fadeOut(200);

//         $('#imgCaptcha').trigger('click');

//         if (_data.status == 100) {
//           //data = _data.data;



//           //adisyon = [];
//           //loadPage("onay", {sipid:_data.data.sipid}, true);
//           loadPage("smssecure", { sipid: _data.data.sipid }, true);

//         } else if (_data.status == 99) {
//           //0
//           adisyon = [];
//           loadPage("onay", { sipid: _data.data.sipid, order: order, "sctop": "0" }, true);

//         } else if (_data.status == 104) {
//           //0
//           alertMe({ msg: _data.err });
//           //console.log(_data.err);
//         } else if (_data.status == 105) {
//           //0
//           alertMe({ msg: _data.err });
//           //console.log(_data.err);
//           loadPage("secure2", {}, true);



//         }
//         else {
//           //0
//           alertMe({ msg: "Bir hata oluştu. Lütfen tekrar deneyiniz." });
//           //console.log(_data.error);
//         }
//       },
//       function (err) {
//         //console.log(err);
//       }
//     );
//   }

  