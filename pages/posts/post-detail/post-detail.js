var postsData=require('../../../data/posts-data.js');

Page({
    onLoad:function(option){
        var postId=option.id;
        //console.log(id);
        var postData=postsData.postList[postId];
        //console.log(postData);
        this.setData( {postData:postData});
    },
    onCollection:function(event){
        // wx.setStorageSync('key', "wuqingvika");
        wx.setStorageSync('key', {
            name:"wuqingvika",
            age:23
        })
    },
    onShare:function(event){
        //wx.clearStorageSync();//清空所有缓存
        wx.removeStorageSync('key');//移除key所对应的缓存
    }
})