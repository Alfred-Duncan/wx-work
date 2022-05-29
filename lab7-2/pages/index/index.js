Page({
 data: {
   time: 60,
 },
     onLoad: function(options) {
       this.setTime()
     },
     setTime(){
       let that = this
       let myTime = setInterval(function () {
         that.setData({
           time: that.data.time - 1
         })
         if (that.data.time == 0) {
           clearInterval(myTime)
         }
       }, 1000)
     },
})
