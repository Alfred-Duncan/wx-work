Page({
  takePhoto(){  
  },
  takePhoto(){
    const ctx = wx.createCameraContext()
  },
  takePhoto(){
    const ctx = wx.createCameraContext()
    ctx.takePhoto({      
    })
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
})