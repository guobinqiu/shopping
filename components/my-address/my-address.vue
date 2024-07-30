<template>
	<view>
		<view class="address-choose-box" v-if="JSON.stringify(address) === '{}'">
			<button type="primary" size='mini' class='btn-choose-address' @click="chooseAddress">请选择收货地址+</button>
		</view>

		<view class="address-info-box" v-else @click="chooseAddress">
			<view class="row1">
				<view class="row1-left">
					<view class="username">收货人: {{address.userName}}</view>
				</view>
				<view class="row1-right">
					<view class="phone">电话: {{address.telNumber}}</view>
					<uni-icons type="arrowright" size="16"></uni-icons>
				</view>
			</view>

			<view class="row2">
				<view class="row2-left">收货地址: </view>
				<view class="row2-right">{{addstr}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapGetters
	} from 'vuex'

	export default {
		name: "my-address",
		data() {
			return {
				//address: {},
			};
		},
		methods: {
			...mapMutations('m_user', ['updateAddress']),
			async chooseAddress() {
				const result = await uni.chooseAddress()
				if (result.errMsg === 'chooseAddress:ok') {
					console.log(result)
					// this.address = result
					this.updateAddress(result)
				}
			},
		},
		computed: {
			...mapState('m_user', ['address']),
			...mapGetters('m_user', ['addstr']),
		},
	}
</script>

<style lang="scss">
	.address-choose-box {
		height: 90px;
		display: flex;
		justify-content: center;
		align-items: center;

		.btn-choose-address {}
	}

	.address-info-box {
		font-size: 12px;
		height: 90px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 5px;

		.row1 {
			display: flex;
			justify-content: space-between;

			.row1-right {
				display: flex;
				justify-content: space-between;
			}
		}

		.row2 {
			display: flex;
			align-items: center;
			margin-top: 10px;

			.row2-left {
				white-space: nowrap;

			}

			.row2-right {}
		}
	}
</style>