<template>
	<view>
		 <map id="map" class="map" :show-location="true" :latitude="latitude" :longitude="longitude" style="width: 100%;"></map>
		 <button @click="upGPS">上报位置</button>
		 <scroll-view v-for="(item, index) in msgList" :key="index">
			 <uni-card title="告警信息" :extra="item.createTime">
			 	<text>{{item.msg}}</text>
			 </uni-card>
		 </scroll-view>
	</view>
</template>

<script>
	import {getDevice, addGPS, getMSG} from '../../common/api.js'
	export default {
		data() {
			return {
				latitude: 23.099994,
				longitude: 113.324520,
				userPhone: '',
				msgList: []
			}
		},
		onReady() {
			this._mapContext = uni.createMapContext("map", this);
		},
		created() {
			this.getGPS()
			this.getUserInfo()
		},
		methods: {
			getUserInfo(){
				const _this = this
				uni.getStorage({
					key: 'phone',
					success: function(res){
						console.log(res)
						_this.userPhone = res.data
						_this.showMsg()
					}
				})
			},
			getGPS(){
				const _this = this
				uni.getLocation({
					type: 'gcj02',
					success: function (res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						_this.longitude = res.longitude
						_this.latitude = res.latitude
					}
				});
			},
			upGPS(){
				getDevice(this.userPhone).then(res =>{
					if(res[1].data.code === 200){
						if(res[1].data.data.status != 1){
							uni.showToast({
								icon:'error',
								title: '设备未开或故障'
							})
						}else{
							addGPS(res[1].data.data.id, this.latitude,this.longitude).then(res =>{
								if(res[1].data.code === 200){
									uni.showToast({
										icon:'success',
										title: '已上报！'
									})
								}
							})
						}
					}
				})
			},
			
			showMsg(){
				// const _this = this
				getMSG(this.userPhone).then(res =>{
					if(res[1].data.code === 200){
						this.msgList = res[1].data.data
					}
				})
			}
		}
	}
</script>

<style>

</style>
