Page({
  data: {
    latitude: 39.90380184518381,
    longitude: 116.39769257872922,
    markers: [{
      id: 1,
      latitude: 39.90380184518381,
      longitude: 116.39769257872922,
    }],
    covers: [{
      latitude: 45.71753127267418,
      longitude: 126.61724617404434,
      iconPath: '/image/location.png'
    }, {
      latitude: 45.71753127267418,
      longitude: 126.61724617404434,
      iconPath: '/image/location.png'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 45.71753127267418,
        longitude: 126.61724617404434,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 45.71753127267418,
        longitude: 126.61724617404434,
      }, {
        latitude: 45.71753127267418,
        longitude: 126.61724617404434,
      }]
    })
  }
})