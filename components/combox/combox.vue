<template>
	<view class="searchOuter">
		<input type="text" :placeholder="placeholder" :disabled="disabled" :value="selectedItem">
		<button @tap="openMask">查询</button>
	</view>
	<view v-show="showMask" class="mask" @click.self="closeMask">
		<view class="mask-content">
			<view class="searchInner">
				<input type="text" placeholder="输入搜索关键词" v-model="searchText" 
				@input="handleInput" @tap.stop>
				<view class="searchInnerButtons">
					<view @tap.stop="clearSearchText">
						<uni-icons type="close" size="18"></uni-icons>
					</view>
				</view>
			</view>
			<picker-view indicator-style="height:50px;" class="picker-view">
				<picker-view-column>
					<view @tap="handleItem(item)" class="item" v-for="(item,index) in filteredItems" :key="index">{{item}}
					</view>
				</picker-view-column>
			</picker-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "combox",
		props: {
			items: {
				type: Array,
				required: true,
			},
			placeholder: {
				type: String,
				default: '车辆编号',
			},
			disabled: {
				type: Boolean,
				default: true,
			}
		},
		data() {
			return {
				showMask: false,
				selectedItem: '',
				searchText: '',
				filteredItems: this.items,
				timer: null,
			};
		},
		methods: {
			filterItems() {
				if (this.searchText !== '') {
					this.filteredItems = this.items.filter(item => item.toLowerCase().includes(this.searchText.toLowerCase()))
				} else {
					this.filteredItems = this.items
				}
			},
			handleInput() {
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					//console.log(this.searchText)
					this.filterItems()
				}, 500)
			},
			handleItem(item) {
				// console.log(data)
				this.closeMask()
				this.selectedItem = item
			},
			openMask() {
				this.showMask = true
			},
			closeMask() {
				this.showMask = false
			},
			clearSearchText() {
				this.searchText = ''
				this.filterItems()
			},
		}
	}
</script>

<style lang="scss">
	.searchOuter {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.searchInner {
		display: flex;
		justify-content: space-between;
	}

	.searchInnerButtons {
		display: flex;
		justify-content: space-around;
	}

	.picker-view {
		width: 750rpx;
		height: 1000rpx;
		margin-top: 20rpx;
	}

	.item {
		line-height: 100rpx;
		text-align: center;
	}

	.mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		/* 半透明黑色 */
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
	}

	.mask-content {
		background-color: #fff;
		padding: 20px;
		width: 100%;
		position: relative;
	}
</style>