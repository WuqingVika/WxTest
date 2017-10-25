Page({
  data:{
    date:"May 25 2017",
    title:"Hello wuqingvika"
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log("onload");
    var post_content=[{
      date:"2017-10-25",
      title:"wqtest",
      content:"wuqingvika1吴斯齐扬扬哈哈宋大姐我的田馥甄当然还有我                 艾薇儿女神啦啦Svn为什么到现在还没好呢真的郁闷1",
      view_num:"112",
      collect_num:"96",
      /*img:{
        author_img:"/images/avatar/2.png",
        post_image:"/images/post/bl.png"
      },*/
    author_img:"/images/avatar/2.png",
    post_image:"/images/post/bl.png",
     //imgCondition:true//wx:if="{{imgCondition}}"
    },
    {
      date:"2017-10-26",
      title:"wqtest2",
      content:"wuqingvika吴斯齐扬扬哈哈宋大姐我的田馥甄当然还有我的                艾薇儿女神啦啦Svn为什么到现在还没好呢真的郁闷2",
      view_num:"112",
      collect_num:"97",
      author_img:"/images/avatar/5.png",
      post_image:"/images/post/crab.png",
    }];
    this.setData({postKey:post_content});
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