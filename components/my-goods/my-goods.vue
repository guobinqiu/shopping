<template>
	<view class="goods-item">
		<view class="goods-item-left">
			<radio :checked="goods.goods_state" color="#c00000" v-if="showRadio" @click="radioClickHandler"></radio>
			<image :src="goods.goods_small_logo || defaultPic" class="goods-pic"></image>
		</view>

		<view class="goods-item-right">
			<view class="goods-name">{{ goods.goods_name }}</view>
			<view class="goods-info-box">
				<view class="goods-price">¥{{ Number(goods.goods_price).toFixed(2) }}</view>
				<uni-number-box :min="1" :value="goods.goods_count" v-if="showNum" @change="numChangeHandler"></uni-number-box>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-goods",
		//父传子
		props: {
			goods: {
				type: Object,
				default: {},
			},
			showRadio: {
				type: Boolean,
				default: false,
			},
			showNum: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
			};
		},
		methods: {
			radioClickHandler() {
				this.goods.goods_state = !this.goods.goods_state
				this.$emit('radio-change', {
					goods_state: this.goods.goods_state,
				})
			},
			numChangeHandler(val) {
				console.log(val)
				this.$emit('num-change', {
					goods_id: this.goods.goods_id,
					goods_count: +val,
				})
			},
		},
	}
</script>

<style lang="scss">
	.goods-item {
		display: flex;
		padding: 10px 5px;
		border-bottom: 1px solid #f0f0f0;

		.goods-item-left {
			margin-right: 5px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.goods-pic {
				width: 100px;
				height: 100px;
				// display: block;
			}
		}

		.goods-item-right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.goods-name {
				font-size: 13px;
			}

			.goods-info-box {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.goods-price {
					color: #c00000;
				}
			}
		}
	}
</style>