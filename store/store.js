// #ifndef VUE3
console.log("---------vue2")
import Vue from 'vue'
import Vuex from 'vuex'
import moduleCart from '@/store/cart.js'
import moduleUser from '@/store/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		'm_cart': moduleCart,
		'm_user': moduleUser,
	},
})

export default store
// #endif

// #ifdef VUE3
console.log("---------vue3")
import {
	createStore
} from 'vuex'

import moduleCart from '@/store/cart.js'
import moduleUser from '@/store/user.js'

const store = createStore({
	modules: {
		'm_cart': moduleCart,
		'm_user': moduleUser,
	}
})

export default store
// #endif
