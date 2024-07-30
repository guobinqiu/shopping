<template>
	<view>
		<view class="search-box">
			<my-search @click="gotoSearch"></my-search>
		</view>


		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="(item, i) in swiperList" :key="i"><!--item列表项,i索引,索引当作key值-->
				<navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id">
					<image :src="item.image_src"></image>
				</navigator>
			</swiper-item>
		</swiper>

		<view class="nav-list">
			<view class="nav-item" v-for="(item, i) in navList" :key="i">
				<image :src="item.image_src" class="nav-img" @click="navClickHandler(item)"></image>
			</view>
		</view>

		<view class="floor-list">
			<view class="floor-item" v-for="(item, i) in floorList" :key="i">
				<image :src="item.floor_title.image_src" class="floor-title"></image>

				<view class="floor-img-box">
					<navigator class="left-img-box" :url="item.product_list[0].url">
						<image :src="item.product_list[0].image_src" :style="{width: item.product_list[0].image_width + 'rpx'}"
							mode="widthFix"></image>
					</navigator>
					<view class="right-img-box">
						<navigator class="right-img-item" v-for="(item2, i2) in item.product_list" :key="i2" :url="item2.url">
							<image :src="item2.image_src" :style="{width: item2.image_width + 'rpx'}" mode="widthFix" v-if="i2 !== 0">
							</image>
						</navigator>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import badgeMixin from '@/mixins/tabbar-badge.js'
	
	export default {
		mixins: [badgeMixin],
		components: {},
		data() {
			return {
				swiperList: [],
				navList: [],
				floorList: [],
			};
		},
		onLoad() {
			this.getSwiperList()
			this.getNavList()
			this.getFloorList()
		},
		methods: {
			async getSwiperList() {
				const {
					data: res //解构出data属性,重命名为res
				} = await uni.$http.get('/api/public/v1/home/swiperdata')
				console.log(res)
				if (res.meta.status !== 200) {
					// return uni.showToast({
					// 	title: '数据请求失败',
					// 	duration: 1500,
					// 	icon: 'none'
					// })
					return uni.$showMsg()
				}
				this.swiperList = res.message
			},

			async getNavList() {
				const {
					data: res
				} = await uni.$http.get('/api/public/v1/home/catitems')
				// console.log(res)
				if (res.meta.status !== 200) {
					return uni.$showMsg()
				}
				this.navList = res.message
			},

			async getFloorList() {
				const {
					data: res
				} = await uni.$http.get('/api/public/v1/home/floordata')
				console.log(res)
				if (res.meta.status !== 200) return uni.$showMsg()


				res.message.forEach(floor => {
					floor.product_list.forEach(prod => {
						prod.url = '/subpkg/goods_list/goods_list?' + prod.navigator_url.split('?')[1]
					})
				})

				this.floorList = res.message
			},

			navClickHandler(item) {
				// console.log(item)
				if (item.name === '分类') {
					uni.switchTab({
						url: '/pages/cate/cate'
					})
				}
			},

			gotoSearch() {
				uni.navigateTo({
					url: '/subpkg/search/search',
				})
			}
		}
	}
</script>

<style lang="scss">
	swiper {
		height: 330rpx;

		.swiper-item,
		image {
			width: 100%;
			height: 100%;
		}
	}

	.nav-list {
		display: flex;
		justify-content: space-around;
		margin: 15px 0;

		.nav-img {
			width: 128rpx;
			height: 140rpx;
		}
	}

	.floor-title {
		width: 100%;
		height: 60rpx;
	}

	.right-img-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.floor-img-box {
		display: flex;
		padding-left: 10rpx;
	}

	.search-box {
		position: sticky;
		top: 0;
		z-index: 999;
	}
</style>