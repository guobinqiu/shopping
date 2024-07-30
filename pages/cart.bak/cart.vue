<template>
	<view>
		Cart
		<combox :items="items" placeholder="查询获取车辆编号" disabled="false"></combox>

		<view>test</view>
		<view>test</view>
		<view>test</view>
		<view>test</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: ['中国', '美国', '日本', '韩国', '印度',
					'俄罗斯', '希腊', '荷兰', '法国', '德国', '泰国', '印度尼西亚', '老挝', '缅甸'
				],
			};
		},
	}
</script>

<style lang="scss">
</style>