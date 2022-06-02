wx.cloud.init()
Page({
  data:{
    requestUrl: '' ,
    imgUrl:'',
    'value': null
  },
  upload(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths[0]
        this.uploadFile(tempFilePaths) 
      },
    })
  },
  uploadFile(filePath) {
    wx.cloud.uploadFile({
      cloudPath: (new Date()).valueOf()+'.png',
      filePath: filePath,
      success: res => {
        console.log(res.fileID)
        this.setData({
          imgUrl:res.fileID
        })
      },
      fail: err => {
      }
    })
  },
  download(e) {
    console.log('e',e.currentTarget.dataset.img)
    let fileUrl = e.currentTarget.dataset.img
    wx.cloud.downloadFile({
      fileID: fileUrl,
      success: res => {
        console.log('下载成功', res)
        this.saveImage(res.tempFilePath)
      },
      fail: res => {
        console.log('下载失败', res)
      }
    })
  },
  saveImage(imgUrl){
    wx.saveImageToPhotosAlbum({
      filePath:imgUrl,
      success(res) { },
      fail(res) {
        console.log('保存失败', res)
      }
    })
  },
  setURLValue: function (e) {
    console.log(e)
    this.setData({ requestUrl: e.detail.value })
  },
  request: function (options) {
    var that = this
    wx.request({
      url: that.data.requestUrl,
      header: { 'content-type': 'application/json' },
      success:function(res) {
        if (res.statusCode == 200) {
          wx.showToast({ title: '请求成功！', })
        }
        that.setData({
          value: res.data
        })
        console.log(res.data)
      }
    })
  }
})
