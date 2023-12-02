var geocoderPage;
var mapPage;
var positionPage = [];
var markersPage = [];
var infoWindowPage;

function initializeMapPage() {
    geocoderPage = new google.maps.Geocoder;
    var a = new google.maps.LatLng(list_shop_json[0].lat, list_shop_json[0].lng),
        b = {
            zoom: 13,
            scrollwheel: !1,
            center: a
        };
    mapPage = new google.maps.Map(document.getElementById("map-canvas-page"), b);
}

function setAllMapPage(map) {
    for (i = 0; i < list_shop_json.length; i++) {
        image = static_url+'images/maps/map_neo.png';
        positionPage[i] = new google.maps.LatLng(list_shop_json[i].lat, list_shop_json[i].lng);
        markersPage[i] = new google.maps.Marker({
            position: positionPage[i],
            title: list_shop_json[i].shop_name,
            icon: image
        });
        markersPage[i].setMap(map);
        callbackMapPage(i);
    }
}

function callbackMapPage(i) {
    google.maps.event.addListener(markersPage[i], 'click', function() {
        if (infoWindowPage) infoWindowPage.close();
        content = '<div style="overflow: auto;" class="shop_info_marker"><div></div><h4 class="col-md-12">'+ list_shop_json[i].shop_name +'</h4></div>' +
            '<div class="col-md-12"><p> <i class="fa fa-map-marker"></i> '+ list_shop_json[i].shop_name +'</p><p><i class="fa fa-phone"></i> '+ list_shop_json[i].shop_phone +'</p></div></div>';

        infoWindowPage = new google.maps.InfoWindow({
            content: content
        });
        infoWindowPage.open(mapPage, markersPage[i]);
        mapPage.setZoom(13);
        mapPage.setCenter(positionPage[i]);
    });
}

function showInfoMapPage(marker) {
    google.maps.event.trigger(markersPage[marker], 'click');

    $('body,html').animate({
        scrollTop: 0
    });
}

$(document).ready(function(){
    initializeMapPage();
    setAllMapPage(mapPage);

    $.ajax({
        url: base_url+"ajax/metashop",
        async: true,
        dataType: 'json',
        success: function (data) {
            let arr_return = [];
            for (var i = 0, len = data.length; i < len; i++) {
                // var id = (data[i].id).toString();
                arr_return.push({'value' : data[i].name});
            }
            //send parse data to autocomplete function
            loadSuggestions(arr_return);
        }
    });

    function loadSuggestions(options) {
        $('#autocomplete').autocomplete({
            lookup: options,
            onSelect: function (suggestion) {
                $('#selected_option').html(suggestion.value);
            }
        });
    }
});