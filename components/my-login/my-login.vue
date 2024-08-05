<template>
	<view class="login-container">
		<uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
		<button type="primary" class="btn-login" open-type="getUserInfo" @getuserinfo="getUserInfo">一键登录</button>
		<text class="tips-text">登录后尽享更多权益</text>
	</view>
</template>

<script>
	export default {
		name: "my-login",
		data() {
			return {

			};
		},
		methods: {
			getUserInfo(e) {
				console.log(e)
			},
		}
	}
</script>

<style lang="scss">
	.login-container {
		height: 750rpx;
		background-color: #F8F8F8;
		display: flex;//flex布局
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