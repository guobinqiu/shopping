<template>
	<view class="my-search-container" :style="{'background-color': bgcolor}" @click="searchBoxHandler">
		<view class="my-search-box" :style="{'border-radius': radius + 'px'}">
			<uni-icons type="search" size="17"></uni-icons>
			<text class="placeholder">搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-search",
		
		props: {
			bgcolor: {
				type: String,
				default: '#C00000',
			},
			radius: {
				type: Number,
				default: 18 //px
			},
		},
		data() {
			return {
				
			};
		},
		methods: {
			searchBoxHandler() {
				console.log('~~~~')
				
				//子传父
				this.$emit('click') //调用自定义事件
			}
		},
	}
</script>

<style lang="scss">
	.my-search-container {
		// background-color: #C00000;
		height: 50px;
		display: flex;
		align-items: center;
		padding: 0 10px;
		
		.my-search-box {
			height: 35px;
			width: 100%;
			// border-radius: 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #FFFFFF;
		}
		
		.placeholder {
			font-size: 15px;
			margin-left: 5px;
		}
	}
</style>