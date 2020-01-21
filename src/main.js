import Vue from 'vue'
import App from './App.vue'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
Vue.component('LazyYoutubeVideo', LazyYoutubeVideo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
