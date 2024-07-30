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