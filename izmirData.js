function initMap() {
var map = new google.maps.Map(document.getElementById("map"), {
   center : { lat: 38.42700588112389, lng: 27.155236810197746 } ,
   zoom: 10,
   disableDefaultUI: !0, scaleControl: !0, fullscreenControl: !0,
   clickableIcons: false
});
  $.getJSON("https://openapi.izmir.bel.tr/api/ibb/cbs/agizvedissagligimerkezleri", function (data) {
    for(var i=0;i<Object.keys(data).length;i++)
    {
       var lat = data.onemliyer[i].ENLEM;
       var lng = data.onemliyer[i].BOYLAM;
       var title = data.onemliyer[i].ADI;
       marker = new google.maps.Marker({
	   position: { lat: lat , lng: lng },
           map: map,
	       title: title,
		   icon: "https://cdn3.iconfinder.com/data/icons/clinical-3/96/dental-32.png"
       });
    }
 });
 $.getJSON("https://openapi.izmir.bel.tr/api/ibb/cbs/anacocuksagligimerkezleri", function (data) {
    for(var i=0;i<Object.keys(data).length;i++)
    {
       var lat = data.onemliyer[i].ENLEM;
       var lng = data.onemliyer[i].BOYLAM;
       var title = data.onemliyer[i].ADI;
       marker = new google.maps.Marker({
	   position: { lat: lat , lng: lng },
           map: map,
	       title: title,
		   icon: "https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Son-32.png"
       });
    }
 });
 $.getJSON("https://openapi.izmir.bel.tr/api/ibb/cbs/hastaneler", function (data) {
    for(var i=0;i<Object.keys(data).length;i++)
    {
       var lat = data.onemliyer[i].ENLEM;
       var lng = data.onemliyer[i].BOYLAM;
       var title = data.onemliyer[i].ADI;
       marker = new google.maps.Marker({
	   position: { lat: lat , lng: lng },
           map: map,
	       title: title,
		   icon: "https://cdn2.iconfinder.com/data/icons/covid-19-2/64/30-Doctor-32.png"
       });
    }
 });
 $.getJSON("https://openapi.izmir.bel.tr/api/ibb/cbs/kanmerkezleri", function (data) {
    for(var i=0;i<Object.keys(data).length;i++)
    {
       var lat = data.onemliyer[i].ENLEM;
       var lng = data.onemliyer[i].BOYLAM;
       var title = data.onemliyer[i].ADI;
       marker = new google.maps.Marker({
	   position: { lat: lat , lng: lng },
           map: map,
	       title: title,
		   icon: "https://cdn3.iconfinder.com/data/icons/clinical-3/96/blood-32.png"
       });
    }
 });
  $.getJSON("https://openapi.izmir.bel.tr/api/ibb/cbs/laboratuvarlar", function (data) {
    for(var i=0;i<Object.keys(data).length;i++)
    {
       var lat = data.onemliyer[i].ENLEM;
       var lng = data.onemliyer[i].BOYLAM;
       var title = data.onemliyer[i].ADI;
       marker = new google.maps.Marker({
	   position: { lat: lat , lng: lng },
           map: map,
	       title: title,
		   icon: "https://cdn3.iconfinder.com/data/icons/education-209/64/tube-lab-science-school-32.png"
       });
    }
 });
  $.getJSON("https://openapi.izmir.bel.tr/api/ibb/cbs/veterinerlikler", function (data) {
    for(var i=0;i<Object.keys(data).length;i++)
    {
       var lat = data.onemliyer[i].ENLEM;
       var lng = data.onemliyer[i].BOYLAM;
       var title = data.onemliyer[i].ADI;
       marker = new google.maps.Marker({
	   position: { lat: lat , lng: lng },
           map: map,
	       title: title,
		   icon: "https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_gato-32.png"
       });
    }
 });
}
initMap();

