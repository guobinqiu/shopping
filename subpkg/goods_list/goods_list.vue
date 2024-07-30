<template>
	<view>
		<view class="goods-list">
			<view v-for="(goods, i) in goodsList" :key="i" @click="gotoDetail(goods)">
				<!-- <view class="goods-item">
					<view class="goods-item-left">
						<image :src="goods.goods_small_logo || defaultPic" class="goods-pic"></image>
					</view>
				
					<view class="goods-item-right">
						<view class="goods-name">{{goods.goods_name}}</view>
						<view class="goods-info-box">
							<view class="goods-price">¥{{goods.goods_price}}</view>
						</view>
					</view>
				</view> -->
				<my-goods :goods="goods"></my-goods>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				queryObj: {
					query: '',
					cid: '',
					pagenum: 1,
					pagesize: 10,
				},
				goodsList: [],
				total: 0,
				//defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
				isloading: false,
			};
		},
		onLoad(options) {
			// console.log(options)
			this.queryObj.query = options.query || ''
			this.queryObj.cid = options.cid || ''
			this.getGoodsList()
		},
		onReachBottom() {
			if (this.queryObj.pagenum * this.queryObj.pagesize >= this.total) return uni.$showMsg('数据加载完毕!')
			if (this.isloading) return
			this.queryObj.pagenum++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.queryObj.pagenum = 1
			this.total = 0
			this.isloading = false
			this.goodsList = []
			
			this.getGoodsList()
			uni.stopPullDownRefresh()
		},
		methods: {
			async getGoodsList() {
				this.isloading = true
				const {
					data: res
				} = await uni.$http.get('/api/public/v1/goods/search', this.queryObj)
				console.log(res)
				this.isloading = false
			
				if (res.meta.status !== 200) return uni.$showMsg()
				this.goodsList = [...this.goodsList, ...res.message.goods]
				this.total = res.message.total
			},
			gotoDetail(goods) {
				uni.navigateTo({
					url: '/subpkg/goods_detail/goods_detail?goods_id=' + goods.goods_id,
				})
			},
		}
	}
</script>

<style lang="scss">
	// .goods-item {
	// 	display: flex;
	// 	padding: 10px 5px;
	// 	border-bottom: 1px solid #f0f0f0;

	// 	.goods-item-left {
	// 		margin-right: 5px;

	// 		.goods-pic {
	// 			width: 100px;
	// 			height: 100px;
	// 			// display: block;
	// 		}
	// 	}

	// 	.goods-item-right {
	// 		display: flex;
	// 		flex-direction: column;
	// 		justify-content: space-between;

	// 		.goods-name {
	// 			font-size: 13px;
	// 		}

	// 		.goods-info-box {
	// 			.goods-price {
	// 				color: #c00000;
	// 			}
	// 		}
	// 	}
	// }
</style>