var newMap = {
    mapContainer : document.getElementById('map'),
    mapOption : {
        center: new daum.maps.LatLng(37.55744494643207, 126.93140262289675), // 신촌교회
        level: 5 // 지도의 확대 레벨
    },
    infoWindowContent :
        '<div class="map-text-div" style="padding:5px;">신촌장로교회<br>' +
            '<strong><a href="http://map.daum.net/link/to/9188779" target="_blank">길찾기</a></strong>' +
        '</div>',
    showLocation : function () {
        var map = new daum.maps.Map(this.mapContainer, this.mapOption);

        // 줌, 드래그, 지도변환, 확대축소 설정
        map.setZoomable(false);
        map.setDraggable(false);
        map.addControl(new daum.maps.MapTypeControl(), daum.maps.ControlPosition.TOPRIGHT);
        map.addControl(new daum.maps.ZoomControl(), daum.maps.ControlPosition.RIGHT);

        // 마커
        var marker = new daum.maps.Marker({
            position: this.mapOption.center,
            map: map
        });

        // 인포윈도우
        var infowindow = new daum.maps.InfoWindow({
            position: this.mapOption.center,
            content: this.infoWindowContent
        });
        infowindow.open(map, marker);
    }
};

