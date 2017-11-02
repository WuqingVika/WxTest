var postsData=require('../../../data/posts-data.js');

Page({
    onLoad:function(option){
        var postId=option.id;
        //console.log(id);
        var postData=postsData.postList[postId];
        //console.log(postData);
        this.setData( {postData:postData});
    }
})