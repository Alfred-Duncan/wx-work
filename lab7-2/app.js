// app.js
App({  /**
  * 页面的初始数据
  */
 data: {
   time: 5,
 },

     /**
      * 生命周期函数--监听页面加载
      */
     onLoad: function(options) {
       this.setTime()
     },
     // 设置计时器
     setTime(){
       let that = this
       let myTime = setInterval(function () {
         that.setData({
           time: that.data.time - 1
         })
         if (that.data.time == 0) {
           clearInterval(myTime)
           wx.navigateTo({
            url:''
           })
         }
       }, 1000)
     },
})
