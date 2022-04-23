<template>
	<view>
		<video id="myVideo" class="content" object-fit="cover" muted="true" :enable-play-gesture="false" :enable-progress-gesture="false" :show-loading="false" :show-center-play-btn="false" src="https://onemanger.qinfengge.xyz/odCnSp/C__%E5%8F%88%E5%91%A8%E6%9C%AB%E4%BA%86%E5%86%8D%E8%BF%8715%E4%B8%AA%E5%B7%A5%E4%BD%9C%E6%97%A5%E5%8F%88%E4%BA%94%E4%B8%80%E4%BA%86%E5%93%88%E5%93%88%E5%93%88%E5%93%88%20%23%E5%8E%9F%E7%9B%B8%E6%9C%BA.mp4" :autoplay="true" :loop="true" :controls="false">
			<cover-view class="xz-title" style="">
				飞尔是一场技术革命，也是一场认知革命。
			</cover-view>
			<cover-view class="xz-button-1" @click="goLogin">
				登录
			</cover-view>
			
			<cover-view class="xz-button-2" @click="goRegister">
				注册
			</cover-view>
		</video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: true
			}
		},
		methods: {
			goLogin(){
				uni.navigateTo({
					url: '../login/login'
				})
			},
			goRegister(){
				uni.navigateTo({
					url: '../login/register'
				})
			}
		}
	}
</script>

<style>
.content{
	width: 750rpx;
	height: 100%;
	/* z-index: 9; */
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: #007AFF;
}
.xz-title{
	width: 600rpx;
	height: 90rpx;
	position: fixed;
	bottom: 400rpx;
	margin-left: 40rpx;
	border-radius: 12rpx;
	line-height: 90rpx;
	color: #FFFFFF;
	font-size: 30rpx;
	/* text-shadow: 5px 5px 5px #FF0000; */
}
.xz-button-1{
	width: 250rpx;
	height: 90rpx;
	position: fixed;
	bottom: 305rpx;
	margin-left: 40rpx;
	background-color: #FFFFFF;
	border-radius: 12rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	line-height: 90rpx;
}
.xz-button-2{
	width: 250rpx;
	height: 90rpx;
	position: fixed;
	bottom: 300rpx;
	margin-left: 320rpx;
	border:4rpx solid #FFFFFF;
	border-radius: 12rpx;
	text-align: center;
	line-height: 90rpx;
	color: #FFFFFF;
}
.loginForm{
	position: absolute;
	top: 40%;
	left: 40%;
	color: white;
	font-size: 38rpx;
}
</style>
