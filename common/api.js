import {
	baseUrl
} from './config.js';

// 司机登录
export function Dlogin(phone,pwd) {
	return uni.request({
		url: `${baseUrl}/login/${phone}/${pwd}`,
		method: 'POST'
	});
}

// 根据司机手机号获取GPS设备
export function getDevice(phone) {
	return uni.request({
		url: `${baseUrl}/getGPSByPhone/${phone}`,
		method: 'GET'
	});
}

// 上传GPS信息
export function addGPS(did,latitude,longitude) {
	return uni.request({
		url: `http://localhost:8201/gps/addByDriver/${did}/${latitude}/${longitude}`,
		method: 'POST'
	});
}

// 根据司机手机号获取GPS设备
export function getMSG(phone) {
	return uni.request({
		url: `${baseUrl}/getMSGByPhone/${phone}`,
		method: 'GET'
	});
}