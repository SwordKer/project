import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	tabbar:true
}

const mutations = {
	tabbarNot(state) {
		state.tabbar = false
	}
}

export default new Vuex.Store({
	state
})