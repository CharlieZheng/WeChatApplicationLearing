//index.js
//获取应用实例
var app = getApp()
var changePetName = require("changePetName.js")
// var changePetName = require('../../modules/changePetName.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    age: 26,
    name: "郑汉荣",
    pet: {
        name : "傻柯基",
        sex: "男狗",
        age: 2
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  Click: function () {
    console.log('点击了我');
     wx.navigateTo({
      url: '../../wxmlLearning/wxmlLearning'
    })
  },
  changeName : function () {
    this.setData ({
      name: "秦",
      age: 32
    })
  },
  changePetName : function () {
    this.setData ({
      'pet.name': "傻狍子",
      "pet.age": 32,
      'pet.sex':"公犬"// 带句点的这种得用引号括起来
    })
  },

  changePetName : function () {
    changePetName.changePetNaaame(this, this.pet)
  }
})
