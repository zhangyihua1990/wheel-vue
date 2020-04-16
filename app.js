import Vue from 'vue';
import gButton from './button';
import gIcon from './icon';
import gButtonGroup from './button-group';
import gInput from './input';
import Col from './col';
import Row from './row';
import Layout from './g-layout';
import Header from './g-header';
import Content from './g-content';
import Footer from './g-footer';
import Sider from './g-sider';

Vue.component('g-icon', gIcon);
Vue.component('g-button', gButton);
Vue.component('g-button-group', gButtonGroup);
Vue.component('g-input', gInput);
Vue.component('g-col', Col);
Vue.component('g-row', Row);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);

new Vue({
  el: '#app',
  data: {
    icon: 'setting',
    iconPosition: 'right',
    loading: true,
  },
  methods: {
    handleChange(e) {
      console.log(e);
    },
    handleInput(e) {
      console.log(e)
    },
    handleBlur(e) {
      console.log(e);
    },
    handleFocus(e) {
      console.log(e);
    }
  },

});
