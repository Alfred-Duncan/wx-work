Page({
    data: {
    imgUrls: [
    {
    link: '/pages/index/index',
    url: '/image/1.png'
    }, {
    link: '/pages/index/index',
    url: '/image/2.png'
    }, {
    link: '/pages/index/index',
    url: '/image/3.png'
        }
    ],   
    indicatorDots: true,
    indicatorColor: "#f5e2e7",
    activeColor: "#dbf741",
    autoplay: true,
    interval: 1000,
    duration: 1000,
    },  
  indicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  autoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  interval(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  duration(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})

