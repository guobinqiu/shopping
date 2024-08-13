import App from './App'
import store from '@/store/store.js'

import {
	$http
} from '@escook/request-miniprogram'
$http.baseUrl = 'https://www.uinav.com'

$http.beforeRequest = function(options) {
	uni.showLoading({
		title: "数据加载中..."
	})

	if (options.url.indexOf('/my/') !== -1) {
		options.header = {
			Authorization: store.state.m_user.token
		}
	}
}

$http.afterRequest = function(options) {
	uni.hideLoading()
}

uni.$http = $http

uni.$showMsg = function(title = '数据请求失败', duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: 'none',
	})
}

// #ifndef VUE3
console.log("=============vue2")
import Vue from 'vue'
import './uni.promisify.adaptor'
// import store from '@/store/store.js'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
	store,
})
app.$mount()
// #endif

// #ifdef VUE3
console.log("=============vue3")
import {
	createSSRApp
} from 'vue'
// import store from '@/store/store.js'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	return {
		app
	}
}
// #endif