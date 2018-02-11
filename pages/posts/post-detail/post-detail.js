var postsData = require('../../../data/posts-data.js');

Page({
    data: {
        isMusicPlaying: false
    },
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
        // this.getPostCollectedAsync();异步步
        this.getPostCollectedSync();

    },
    getPostCollectedSync: function () {//同步
        //1.先获取缓存中当前文章的状态
        var postsCollected = wx.getStorageSync('posts_collected');
        var postCollected = postsCollected[this.data.postCurrentId];
        //取到当前文章的状态，取反
        postCollected = !postCollected;
        //将新的状态塞进缓存修改
        postsCollected[this.data.postCurrentId] = postCollected;
        //this.showToast(postsCollected,postCollected);
        this.showModal(postsCollected, postCollected);
    },
    getPostCollectedAsync: function () {//异步
        var that = this;
        //1.先获取缓存中当前文章的状态
        wx.getStorage({
            key: 'posts_collected',
            success: function (res) {
                var postsCollected = res.data;
                var postCollected = postsCollected[that.data.postCurrentId];
                //取到当前文章的状态，取反
                postCollected = !postCollected;
                //将新的状态塞进缓存修改
                postsCollected[that.data.postCurrentId] = postCollected;
                //this.showToast(postsCollected,postCollected);
                that.showModal(postsCollected, postCollected);
            },

        })

    },
    showModal: function (postsCollected, postCollected) {
        var that = this;
        wx.showModal({
            title: "收藏",
            content: postCollected ? "收藏该文章?" : "取消收藏该文章?",
            cancelColor: "#333",
            confirmColor: "#405f80",
            showCancel: "true",
            cancelText: "取消",
            confirmText: "确认",
            success: function (res) {
                if (res.confirm) {
                    wx.setStorageSync('posts_collected', postsCollected);
                    //更新页面显示状态
                    that.setData({ collected: postCollected });
                }
            }

        })
    },
    showToast: function (postsCollected, postCollected) {
        wx.setStorageSync('posts_collected', postsCollected);
        //更新页面显示状态
        this.setData({ collected: postCollected });
        //弹框提示
        wx.showToast({
            title: postCollected ? "收藏成功" : "取消成功",
            icon: "success",
            duration: 1000
        })
    },
    onShare: function (event) {
        //wx.clearStorageSync();//清空所有缓存
        //wx.removeStorageSync('key');//移除key所对应的缓存
        var itemList = ["分享到微信好友", "分享到微博"];
        wx.showActionSheet({
            itemList: itemList,
            itemColor: "#405f80",
            success: function (res) {
                wx.showModal({
                    title: "用户 " + itemList[res.tapIndex],//tapIndex 用户点击的按钮，从上到下的顺序，从0开始
                    content: "用户是否取消?" + res.cancel + "现在无法实现分享功能哦"
                })
            },

            fail: function (res) {
                console.log(res.errMsg)
            }
        })
    },
    onMusicTap: function (event) {
        var ifMusicPlay = this.data.isMusicPlaying;
        var postCurrentId=this.data.postCurrentId;
        var postData=postsData.postList[postCurrentId];
        if (ifMusicPlay) {
            this.setData({
                isMusicPlaying:false
            });
              wx.pauseBackgroundAudio();
        } else {
            //this.data.isMusicPlaying=true;不能用这种方法 不然页面获取不到
             this.setData({
                isMusicPlaying:true
            });
            wx.playBackgroundAudio({
                coverImgUrl:postData.music.coverImgUrl,
                title: postData.music.title,
                dataUrl:postData.music.dataUrl

            })
        }

    }
})