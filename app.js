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
import Toast from './toast';
import plugin from './plugin';
import Tabs from './tabs';
import TabsHead from './tabs-head';
import TabsBody from './tabs-body';
import TabsItem from './tabs-item';
import TabsPane from './tabs-pane';
import Popover from './popover';
import Collapse from './collapse';
import CollapseIem from './collapse-item';

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
Vue.component('toast', Toast);

Vue.use(plugin);


Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('popover', Popover);
Vue.component('g-collapse', Collapse);
Vue.component('g-collapse-item', CollapseIem);


new Vue({
  el: '#app',
  data: {
    // icon: 'setting',
    // iconPosition: 'right',
    // loading: true,
    selectedTab: 'sports',
    selectedNameTab: '1'
  },
  created() {
    // setTimeout(() => {console.log(this.selectedTab);}, 1000);
  },
  methods: {
    showToast() {
      this.$toast('钱包充值！', {
        position: 'top',
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback() {
            // console.log('回调');
          },
          autoClose: true,
          autoCloseDelay: 1000,
        },
      });
    },
    // handleChange(e) {
    //   console.log(e);
    // },
    // handleInput(e) {
    //   console.log(e)
    // },
    // handleBlur(e) {
    //   console.log(e);
    // },
    // handleFocus(e) {
    //   console.log(e);
    // }
  },

});
