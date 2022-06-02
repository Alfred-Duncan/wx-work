const db = wx.cloud.database()
Page({
bindKeyBlur: function (e) {
  this.setData({ key1: e.detail.value })
},
bindKeyBlur2: function (e) {
  this.setData({ key2: e.detail.value })
},
bindValueBlur: function (e) {
  this.setData({ value: e.detail.value })
},
setStorage: function () {//写入
  var that = this
  wx.setStorage({
    key: that.data.key1,
    data: that.data.value,
    success(res) {
      wx.showToast({ title: '写入成功！', icon: '', })
    }
  })
},
getStorage: function (e) {//获取
  var tempKey = this.data.key1
  var that = this
  wx.getStorage({
    key: tempKey,
    success(res) { that.setData({ value: res.data }) },
    fail(res) { wx.showToast({ title: '没有该缓存！', icon: 'none', }) }
  })
},
removeStorage: function (e) {//移除
  var tempKey = this.data.key2
  var that = this
  wx.removeStorage({
    key: tempKey,
    complete(res) {
      console.log(res)
    }
  })
},
getStorageInfo: function (e) {//获取全部keys以及占用空间信息
  var that = this
  wx.getStorageInfo({
    success(res) {
      that.setData({ storageInfo: res })//总共空间大小为10MB
    }
  })
},
clearStorage: function (e) {//全部清除
  wx.clearStorage({ success() { wx.showToast({ title: '已清除！', icon: '', }) } })
},
})
