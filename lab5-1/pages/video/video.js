Page({
  data: {
    current_id:'',
    videoDetail:{
      id:"1",
      "videoUrl":"https://636c-cloud1-8gkoizux942be3b3-1311249114.tcb.qcloud.la/Adele-Someone%20Like%20You.mp4?sign=bc83fd533bcba4b7660220fea90a1de6&t=1652337355",
      "poster":"https://636c-cloud1-8gkoizux942be3b3-1311249114.tcb.qcloud.la/UG~BRQQIANNH4%40)81%5BMVM3D.png?sign=bc0e728556831236e938acbcc2b45abe&t=1652337560"
    },
    danmuList:[
      {
        text: '第1s出现的弹幕',
        color: '#FFFFFF',
        time: 1
      },
      {
        text: '第2s出现的弹幕',
        color: '#FFFFFF',
        time: 2
      },    
    ],
    isRandomColor: true,// 默认随机
    numberColor:"#ff0000",//默认红色
    inputValue: "",//文本框输入内容     
  },
  onLoad: function (options) { 
  },  
  onShow: function(){
    if(wx.getStorageSync('color')){
      this.setData({
        numberColor: wx.getStorageSync('color')
      })
    }
  },
  onReady: function () {
    this.videoContext = wx.createVideoContext("videoId")
  },
  videoPlay:function(e){
    console.log(e)
    var id= e.currentTarget.dataset.index
    var currentId=e.currentTarget.id
    this.setData({
      current_id: currentId
    })
    var videoContext = wx.createVideoContext(id)
    videoContext.play()
  },
  bindInputblur: function(e){
    this.data.inputValue = e.detail.value
  },
  bindSendDanmu : function(e){
    this.videoContext.sendDanmu({
      text: this.data.inputValue,
      color:'#FFFFFF'
    })
  },
  switchChange: function(e){
    console.log(e)
    this.data.isRandomColor = e.detail.value
  }
})
