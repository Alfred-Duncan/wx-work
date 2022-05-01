//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    num: ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
    hidden: true,
    success: '',
  },
  onLoad: function () {
    
  },
  //随机打乱数组
  sortArr: function (arr) {
    return arr.sort(function () {
      return Math.random() - 0.5
    })
  },
  onMoveTap: function (e) {
    var index = e.currentTarget.dataset.index;
    var item = e.currentTarget.dataset.item;
    if (this.data.num[index + 3] == 9) {
      this.down(e);
    }
    if (this.data.num[index - 3] == 9) {
      this.up(e);
    }
    if (this.data.num[index + 1] == 9 && index != 2 && index != 5) {
      this.right(e);
    }
    if (this.data.num[index - 1] == 9 && index != 3 & index != 6) {
      this.left(e);
    }
  },
  up: function (e) {
    var index = e.currentTarget.dataset.index;
    var temp = this.data.num[index];
    this.data.num[index] = this.data.num[index - 3]
    this.data.num[index - 3] = temp;
    this.setData({
      num: this.data.num
    })
    if (this.data.num.toString() == [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
      this.success();
    }
  },
  down: function (e) {
    var index = e.currentTarget.dataset.index;
    var temp = this.data.num[index];
    this.data.num[index] = this.data.num[index + 3]
    this.data.num[index + 3] = temp;
    this.setData({
      num: this.data.num
    })
    if (this.data.num.toString() == [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
      this.success();
    }
  },
  left: function (e) {
    var index = e.currentTarget.dataset.index;
    var temp = this.data.num[index];
    this.data.num[index] = this.data.num[index - 1]
    this.data.num[index - 1] = temp;
    this.setData({
      num: this.data.num
    })
    if (this.data.num.toString() == [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
      this.success();
    }
  },
  right: function (e) {
    var index = e.currentTarget.dataset.index;
    var temp = this.data.num[index];
    this.data.num[index] = this.data.num[index + 1]
    this.data.num[index + 1] = temp;
    this.setData({
      num: this.data.num
    })
    if (this.data.num.toString() == [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
      this.success();
    }
  },
  success: function () {
    var that = this;
    that.setData({
      success: 'win'
    })
    wx.showToast({
      title: '成功',
      icon: 'success',
      success: function () {
        that.init();
      }
    })
  },
  init:function(){
    this.setData({
      num:this.sortArr([1,2,3,4,5,6,7,8]).concat([9])
    })
  }
})