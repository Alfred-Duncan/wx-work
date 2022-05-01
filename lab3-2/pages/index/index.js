const app = getApp()
Page({
  data: {
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'Login',
    })
  },
  Primary:function(){
    wx.navigateTo({
      url: '/pages/add/add',
    })
  },
  onReady: function () {
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      console.log('设置选中项 0')
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },

  onShareAppMessage: function () {
  }
})
