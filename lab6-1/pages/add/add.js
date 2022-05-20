const db = wx.cloud.database()
Page({
  data: {
    num: null,
    num1: null,
    num2: null,
    num3: null,
    data:'2022-05-06'
},
handleInput1(e) {
      this.setData({
              num: e.detail.value
          })
},
handleInput2(e) {
      this.setData({
              num1: e.detail.value
          })
},
handleInput3(e) {
      this.setData({
              num2: e.detail.value
          })
},
handleInput4(e) {
      this.setData({
              num3: e.detail.value
          })
},
upData: function (e) {
  db.collection('lab6-1').add({
    data:{
      num: this.data.num,
      num1: this.data.num1,
      num2: this.data.num2,
      num3: this.data.num3
    },
    success:res=>{
      console.log(res);
    },
    fail:err=>{
      console.log(err);
    }
  })
}
})
