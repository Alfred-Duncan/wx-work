const db = wx.cloud.database()
var del = ""
Page({
  data:{
      list:[],
  },
  onLoad(){
  wx.cloud.database().collection('lab6-1').get() 
  .then(res =>{
      console.log('请求成功',res.data)
      this.setData({
          list:res.data
      })
     })
    .catch(err =>{
        console.log('请求失败',err)
     })
 },
 change: function(e){
  wx.navigateTo({
    url: '/pages/add/add',
  })
 },
 delnum(res){
  del = res.detail.value
  console.log(del)
},

 delete(){
  db.collection("lab6-1")
  .doc(del)
  .remove()
  .then(res=>{
    console.log(res)
  })  
}
})