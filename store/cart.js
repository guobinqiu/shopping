export default {
	namespaced: true,
	state: {
		//goods_id
		//goods_name
		//goods_price
		//goods_count
		//goods_small_logo
		//goods_state
		cart: JSON.parse(uni.getStorageSync('cart') || '[]'),
	},
	mutations: {
		addToCart(state, goods) {
			const findResult = state.cart.find(function(x) {
				return x.goods_id === goods.goods_id
			})
			//console.log(findResult)

			if (findResult) {
				findResult.goods_count++
			} else {
				state.cart.push(goods)
			}
			//console.log(state.cart)

			this.commit('m_cart/saveToStorage')
		},
		saveToStorage(state) {
			uni.setStorageSync('cart', JSON.stringify(state.cart))
		},
		updateGoodsState(state, goods) {
			const findResult = state.cart.find(function(x) {
				return x.goods_id === goods.goods_id
			})
			if (findResult) {
				findResult.goods_state = goods.goods_state
				this.commit('m_cart/saveToStorage')
			}
		},
		updateGoodsCount(state, goods) {
			const findResult = state.cart.find(function(x) {
				return x.goods_id === goods.goods_id
			})
			if (findResult) {
				findResult.goods_count = goods.goods_count
				this.commit('m_cart/saveToStorage')
			}
		},
		removeGoodsById(state, goods) {
			state.cart = state.cart.filter(function(x) {
				return x.goods_id !== goods.goods_id
			})
			this.commit('m_cart/saveToStorage')
		},
		updateAllGoodsState(state, newState) {
			state.cart.forEach(x => x.goods_state = newState)
			this.commit('m_cart/saveToStorage')
		}
	},
	getters: {
		total(state) {
			// let c = 0
			// state.cart.forEach(function(x) {
			// 	c += x.goods_count
			// })
			// return c

			// return state.cart.reduce((total, item) =>  {
			// 	total += item.goods_count
			// 	return total
			// }, 0)

			return state.cart.reduce((total, item) => total += item.goods_count, 0)
		},
		checkedCount(state) {
			return state.cart.filter(x => x.goods_state === true).reduce((total, item) => total += item.goods_count, 0)
		},
	},
}