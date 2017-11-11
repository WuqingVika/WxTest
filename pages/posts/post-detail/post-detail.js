var postsData = require('../../../data/posts-data.js');

Page({
    onLoad: function (option) {
        var postId = option.id;
        //console.log(id);
        var postData = postsData.postList[postId];
        //console.log(postData);
        // this.setData( {postData:postData});
        this.setData({ postData: postData, postCurrentId: postId });
        //获取缓存
        var postsCollected = wx.getStorageSync('posts_collected');
        if (postsCollected) {
            //有缓存获取当前文章的缓存
            var postCollected = postsCollected[postId];
            //绑定到页面
            this.setData({
                collected: postCollected
            })
        } else {
            //没有,初始化缓存列表
            var postsCollectedNothing = {};
            postsCollectedNothing[postId] = false;//将当前状态置为false,再塞到缓存列表中
            wx.setStorageSync('posts_collected', postsCollectedNothing);
        }
    },
    onCollection: function (event) {
        // wx.setStorageSync('key', "wuqingvika");
        // wx.setStorageSync('key', {
        //     name:"wuqingvika",
        //     age:23
        // })

        //1.先获取缓存中当前文章的状态
        var postsCollected = wx.getStorageSync('posts_collected');
        var postCollected = postsCollected[this.data.postCurrentId];
        //取到当前文章的状态，取反
        postCollected = !postCollected;
        //将新的状态塞进缓存修改
 postsCollected[this.data.postCurrentId]=postCollected;
        wx.setStorageSync('posts_collected', postsCollected);
        //更新页面显示状态
        this.setData({collected:postCollected});
    },
    // onShare:function(event){
    //     //wx.clearStorageSync();//清空所有缓存
    //     wx.removeStorageSync('key');//移除key所对应的缓存
    // }
})