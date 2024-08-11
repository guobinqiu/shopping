<template>
	<view class="login-container">
		<uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
		<button type="primary" class="btn-login" open-type="getUserInfo" @getuserinfo="getUserInfo">一键登录</button>
		<!-- <button type="primary" class="btn-login" @click="getUserProfile">一键登录</button> -->
		<text class="tips-text">登录后尽享更多权益</text>
	</view>
</template>

<script>
	import {
		mapMutations,
		mapState
	} from 'vuex'

	export default {
		name: "my-login",
		data() {
			return {

			};
		},
		computed: {
			...mapState('m_user', ['redirectInfo'])
		},
		methods: {
			...mapMutations('m_user', ['updateUserInfo', 'updateToken', 'updateRedirectInfo']),
			//微信基础库用2.20.3
			getUserInfo(e) {
				console.log(e)
				if (e.detail.errMsg === "getUserInfo:fail auth deny") return uni.$showMsg('已取消登录授权')
				console.log(e.detail.userInfo)

				this.updateUserInfo(e.detail.userInfo)

				this.getToken(e.detail)
			},
			// getUserProfile(e) {
			// 	uni.getUserProfile({
			// 		desc: '请求授权',
			// 		success: (res) => {
			// 			console.log(res)
			// 		},
			// 		fail: (err) => {
			// 			return uni.$showMsg("已取消登录授权")
			// 		}
			// 	})
			// },
			async getToken(info) {
				const res = await uni.login()
				//console.log(res)
				if (res.errMsg !== 'login:ok') return uni.$showMsg('登录失败!')
				//console.log(res.code)

				const query = {
					code: res.code,
					encryptedData: info.encryptedData,
					iv: info.iv,
					rawData: info.rawData,
					signature: info.signature,
				}

				const {
					data: loginResult
				} = await uni.$http.post('/api/public/v1/users/wxlogin', query)
				console.log(loginResult)

				//这里永远不会成功
				//if (loginResult.meta.status !== 200) return uni.$showMsg('登录失败!')
				// this.updateToken(loginResult.message.token);

				//做个假的
				const token =
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo';
				this.updateToken(token)
				this.navigateBack()
			},
			navigateBack() {
				if (this.redirectInfo && this.redirectInfo.openType === 'switchTab') {
					uni.switchTab({
						url: this.redirectInfo.from,
						complete: () => {
							this.updateRedirectInfo(null)
						},
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.login-container {
		height: 750rpx;
		background-color: #F8F8F8;
		display: flex; //flex布局
		flex-direction: column; //主轴方向
		align-items: center; //沿着交叉轴居中对齐
		justify-content: center; //沿着主轴居中对齐

		.btn-login {
			width: 90%;
			border-radius: 100px;
			margin: 15px 0;
			background-color: #C00000;
		}

		.tips-text {
			font-size: 12px;
			color: gray;
		}
	}
</style>