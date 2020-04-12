import Vue from 'vue';
import gButton from './button';
import gIcon from './icon';
import gButtonGroup from './button-group';
import gInput from './input';
import Col from './col';
import Row from './row';

Vue.component('g-icon', gIcon);
Vue.component('g-button', gButton);
Vue.component('g-button-group', gButtonGroup);
Vue.component('g-input', gInput);
Vue.component('g-col', Col);
Vue.component('g-row', Row);

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
