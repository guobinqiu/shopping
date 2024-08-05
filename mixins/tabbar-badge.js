import {
	mapGetters
} from 'vuex'

export default {
	computed: {
		...mapGetters('m_cart', ['total']),
		// total() {
		// 	return this.$store.getters['m_cart/total']
		// }
	},
	onShow() {
		this.setBadge()
	},
	watch: {
		//当计算属性this.total变化时执行total(newVal, oldVal)函数,省略了newVal和oldVal
		total() {
			this.setBadge()
		}
	},
	methods: {
		// total() {
		// 	return this.$store.getters['m_cart/total']
		// },
		setBadge() {
			uni.setTabBarBadge({
				index: 2,
				// text: this.total() + "",
				text: this.total + "",
			})
		}
	}
}