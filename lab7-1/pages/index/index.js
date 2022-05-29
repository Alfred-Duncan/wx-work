var app = getApp()
Page({
 data: {
  mobileModel:'',
  mobileePixelRatio:'',
  windowWidth:'',
  windowHeight:'',
  language:'',
  version:''
 },
 onLoad: function () {
  var that=this;
  wx.getSystemInfo({
   success: function(res) {
    that.setData({
     mobileModel:res.model,
     mobileePixelRatio:res.pixelRatio,
     windowWidth:res.windowWidth,
     windowHeight:res.windowHeight,
     language:res.language,
     version:res.version,
     brand:res.brand,
     system:res.system,
     SDKVersion:res.SDKVersion,
     benchmarkLevel:res.benchmarkLevel,
     fontSizeSetting:res.fontSizeSetting,
    })
   }
  })
 }
})