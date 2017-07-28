var map = {};
map.showLocation = function () {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new daum.maps.LatLng(37.55744494643207, 126.93140262289675), // 지도의 중심좌표
            level: 5 // 지도의 확대 레벨
        };
    var map = new daum.maps.Map(mapContainer, mapOption);

    map.setZoomable(false);
    map.setDraggable(false);

    // 마커가 표시될 위치
    var markerPosition  = new daum.maps.LatLng(37.55744494643207, 126.93140262289675);

    // 마커를 생성
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정
    marker.setMap(map);

    var iwContent =
        '<div class="map-text-div" style="padding:5px;">신촌장로교회 <br>' +
        '   <strong><a href="http://map.daum.net/link/to/9188779" target="_blank">길찾기</a></strong>' +
        '</div>',
        iwPosition = new daum.maps.LatLng(37.55744494643207, 126.93140262289675); //인포윈도우 표시 위치

    // 인포윈도우를 생성
    var infowindow = new daum.maps.InfoWindow({
        position : iwPosition,
        content : iwContent
    });
    infowindow.open(map, marker);
};