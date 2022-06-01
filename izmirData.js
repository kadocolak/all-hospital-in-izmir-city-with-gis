function initMap() {
var map = new google.maps.Map(document.getElementById("map"), {
   center : { lat: 38.42700588112389, lng: 27.155236810197746 } ,
   zoom: 10,
   disableDefaultUI: !0, scaleControl: !0, fullscreenControl: !0,
   clickableIcons: false
});
var apiStartLink = "https://openapi.izmir.bel.tr/api/ibb/cbs/";
var iconStartLink = "https://cdn3.iconfinder.com/data/icons/";
var jsonList = [[apiStartLink.toString()+"agizvedissagligimerkezleri"],[apiStartLink.toString()+"anacocuksagligimerkezleri"],[apiStartLink.toString()+"hastaneler"],
[apiStartLink.toString()+"kanmerkezleri"],[apiStartLink.toString()+"laboratuvarlar"],[apiStartLink.toString()+"veterinerlikler"]];
var iconList = [[iconStartLink.toString()+"clinical-3/96/dental-32.png"],[iconStartLink.toString()+"family-member-flat-happy-family-day/512/Son-32.png"],[iconStartLink.toString()+"covid-19-2/64/30-Doctor-32.png"],
[iconStartLink.toString()+"clinical-3/96/blood-32.png"],[iconStartLink.toString()+"education-209/64/tube-lab-science-school-32.png"],[iconStartLink.toString()+"animals-105/150/icon_animal_gato-32.png"]];
jsonList.forEach(arrayLoop);
var lat,lng,title;
function arrayLoop(item,index)
{
	$.getJSON(item.toString(),function(data){
		for(var i=0;i<Object.keys(data).length;i++)
        {
		   lat = data.onemliyer[i].ENLEM;
           lng = data.onemliyer[i].BOYLAM;
           title = data.onemliyer[i].ADI;
		   marker = new google.maps.Marker({
	       position: { lat: lat , lng: lng },
           map: map, title: title, icon: iconList[index].toString()
           });
	    }
	});
}
}
initMap();
