import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueObserveVisibility from 'vue-observe-visibility';
import * as VueGoogleMaps from 'vue2-google-maps';
import Page from './Page.vue';

Vue.use(VueScrollTo);
Vue.use(VueObserveVisibility);
Vue.use(VueGoogleMaps, { load: { key: 'AIzaSyC-4I1QTtQafBoV3YK8F0x_y6oALc4XZRw' } });

export default new Vue({
  el: '#app',
  render: h => h(Page),
});
