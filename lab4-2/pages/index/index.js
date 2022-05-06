Page({
    data: {
      num: null,
      num1: null,
      num2: null,
      num3: null,
      num4: null,
      data:'2022-05-06'
  },
  bindDateChange: function(e) {
    console.log('picker携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
},
  handleInput1(e) {
        this.setData({
                num: parseFloat(e.detail.value)
            })
  },
  handleInput2(e) {
        this.setData({
                num1: parseFloat(e.detail.value)
            })
  },
  handleInput3(e) {
        this.setData({
                num2: parseFloat(e.detail.value)
            })
},
  handleInput4(e) {
        this.setData({
                num3: parseFloat(e.detail.value)
            })
},
  handleInput5(e) {
         this.setData({
                num4: parseFloat(e.detail.value)
              })
}
})
  