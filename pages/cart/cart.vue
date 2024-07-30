<template>
	<view class="cart-container">
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

	</view>

	<my-settle></my-settle>
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
</style>