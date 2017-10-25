Page({
    onTap:function(){
        //console.log("ontap"); 别加.wxml
        //ctrl+i 选中当前行
        //  wx.navigateTo({url:"../posts/posts"}); //从父级跳到子级页面的关系
        //注意：子级最多只有有5级
         wx.redirectTo({url:"../posts/posts"});
    },
    onUnload:function(){
        console.log("w redirectTo onUnload ");
    },
    onHide:function(){
        console.log("w navigateTO onHide");
    }
});