import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueObserveVisibility from 'vue-observe-visibility';
import Page from './Page.vue';

Vue.use(VueScrollTo);
Vue.use(VueObserveVisibility);

export default new Vue({
  el: '#app',
  render: h => h(Page),
});
