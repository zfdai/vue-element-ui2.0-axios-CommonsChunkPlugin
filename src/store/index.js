import state from './state.js'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'
import cart from './modules/cart.js'
export default {
	state,
  	actions,
  	getters,
  	mutations,
  	modules: {
  		cart
  	}
}