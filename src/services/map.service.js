export const mapService = {
    initMap,
    mapClick
};

var gMap;



function initMap(lat, lng, title) {
    console.log("InitMap");
    return _connectGoogleApi().then(() => {
      console.log("google available");
      gMap = new google.maps.Map(document.querySelector("#details-map"), {
        center: { lat, lng },
        zoom: 15,
      });
      addMarker({ lat, lng }, title);
      console.log("Map!", gMap);
    });
  }

function _connectGoogleApi() {
    if(window.google) return Promise.resolve();
    const API_KEY = "AIzaSyDRSjfskUcII98LZQXzMblQX_hnBhcX26k";
    let elGoogleApi = document.createElement("script");
    elGoogleApi.scr = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject("Google script failed to load");
    });
}

function mapClick(onSuccess) {
    gMap.addListener("click", (ev) => {
    const pos = ev.latLng.toJSON();
    panTo(pos.lat, pos.lng);
    onSuccess(pos.lat, pos.lng);
    });
}

function panTo(lat, lng) {
    var laLatLng = new google.maps.LatLng(lat, lng);
    gMap.panTo(laLatLng);
  }