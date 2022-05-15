const bgMusic = wx.getBackgroundAudioManager()
const app = getApp()
Page({
 data: {
  isOpen: false,
  starttime: '00:00',
  duration: '',
  src:"http://music.163.com/song/media/outer/url?id=16435049"
 },
 listenerButtonPlay: function () {
  var that = this
  bgMusic.title = 'Adele-Someone Like You' 
  bgMusic.epname = 'Adele'
  bgMusic.src = that.data.src;
  bgMusic.onTimeUpdate(() => { 
   console.log(bgMusic.currentTime)
   var duration = bgMusic.duration; 
   var offset = bgMusic.currentTime; 
   var currentTime = parseInt(bgMusic.currentTime);
   var min = "0" + parseInt(currentTime / 60);
   var max = parseInt(bgMusic.duration);
   var sec = currentTime % 60;
   if (sec < 10) {
    sec = "0" + sec;
   };
   var starttime = min + ':' + sec;
   that.setData({
    offset: currentTime,
    starttime: starttime,
    max: max,
    changePlay: true
   })
  })
  bgMusic.onEnded(() => {
   that.setData({
    starttime: '00:00',
    isOpen: false,
    offset: 0
   })
  })
  bgMusic.play();
  that.setData({
   isOpen: true,
  })
 },
 listenerButtonPause(){
   var that = this
  bgMusic.pause()
  that.setData({
   isOpen: false,
  })
 },
 listenerButtonStop(){
  var that = this
  bgMusic.stop()
 },
 sliderChange(e) {
  var that = this
  var offset = parseInt(e.detail.value);
  bgMusic.play();
  bgMusic.seek(offset);
  that.setData({
   isOpen: true,
  })
 }
})