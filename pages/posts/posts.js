var postData=require('../../data/posts-data.js')
Page({
  data:{
    date:"May 25 2017",
    title:"Hello wuqingvika"
    //小程序总会读取data对象做数据绑定，这动作称为A
    //而动作A的执行，是在onload事件之后发生的
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    //console.log("onload");
    
    //this.setData({postKey:post_content});

    this.setData({
      postKey:postData.postList
    })

   // this.data.postList=postData.postList
   //这种方法需要将页面中postKey改为postList
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
     console.log("onready");
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
     //console.log("onshow");
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
     console.log("onhide");
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    console.log("onunload");
  }

})