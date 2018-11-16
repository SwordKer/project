// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store/store'
import axios from 'axios'
    // import './plugins/imgspreview/photoswipe.js'
    // import './plugins/imgspreview/photoswipe-ui-default.min.js'

Vue.config.productionTip = true

Vue.use(ElementUI);

Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
	console.log(to.name)
	var toName = to.name
	if(toName=='index' || toName=='shop' || toName=='news' || toName=='company') {
		store.state.tabbar = true;
  	}else {
  		store.state.tabbar = false;
  	}
  	next()
})
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
