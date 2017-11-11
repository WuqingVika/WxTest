# WxTest
小程序练习

## git修改提交代码三步曲：

### 1、git add ./
### 2、git commit -m '提交代码注释'
### 3、git push -u origin master

## git将远程代码Check到本地地：
### 1、git clone 复制的链接

## 知识点补充，请搬好小板凳哦 :blush:
+  {{idx}} 系统自带的索引
+   font-size: 24rpx;可以设置在全局样式app.wxss中
+  按F1键有惊喜哦

## 6.6使用缓存实现文章收藏功能
+ 主要利用wx.setStorageSync(key值,value)与wx.getStorageSync(key值）
+ 页面中利用wx:if={{}},wx:else来控制图片源