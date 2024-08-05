<template>
	<view class="cart-container" v-if="cart.length !== 0">
		<my-address></my-address>

		<view class="cart-title">
			<uni-icons type="shop" size="18"></uni-icons>
			<text class="cart-title-text">购物车</text>
		</view>

		<!-- <block v-for="(goods, i) in cart" :key="i">
			<my-goods :goods="goods" :show-radio="true" :show-num="true" @radio-change="radioChangeHandler" @num-change="numberChangeHandler"></my-goods>
		</block>
		 -->
		<uni-swipe-action>
			<block v-for="(goods, i) in cart" :key="i">
				<uni-swipe-action-item :right-options="options" @click="swipeItemClickHandler(goods)">
					<my-goods :goods="goods" :show-radio="true" :show-num="true" @radio-change="radioChangeHandler"
						@num-change="numberChangeHandler"></my-goods>
				</uni-swipe-action-item>
			</block>
		</uni-swipe-action>

		<my-settle></my-settle>
	</view>

	<view class="empty-cart" v-else>
		<text class="tip-text">空空如也</text>
	</view>	
</template>

<script>
	import badgeMixin from '@/mixins/tabbar-badge.js'
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		mixins: [badgeMixin],
		computed: {
			...mapState('m_cart', ['cart']),
		},
		data() {
			return {
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#c00000'
					},
				}],
			};
		},
		methods: {
			...mapMutations('m_cart', ['updateGoodsState', 'updateGoodsCount', 'removeGoodsById']),
			radioChangeHandler(goods) {
				//console.log(goods)
				this.updateGoodsState(goods)
			},
			numberChangeHandler(goods) {
				// console.log(goods)
				this.updateGoodsCount(goods)
			},
			swipeItemClickHandler(goods) {
				this.removeGoodsById(goods)
			},
		},
	}
</script>

<style lang="scss">
	.cart-container {
		padding-bottom: 50px;
	}

	.cart-title {
		height: 40px;
		display: flex;
		align-items: center;
		padding-left: 5px;
		border-bottom: 1px solid #EFEFEF;

		.cart-title-text {
			font-size: 14px;
			margin-left: 10px;
		}
	}
	
	.empty-cart {
		display: flex;
		flex-direction: column;//纵向排列
		align-items: center; //横向居中
		padding-top: 150px;
		.tip-text {
			font-size: 12px;
			color: gray;
			margin-top: 15px;
		}
	}
</style>