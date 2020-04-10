import Vue from 'vue'
import gButton from './button'
import gIcon from './icon'
import gButtonGroup from './button-group'

Vue.component('g-icon',gIcon)
Vue.component('g-button', gButton)
Vue.component('g-button-group', gButtonGroup)
new Vue({
    el: '#app',
    data: {
        icon:"setting",
        iconPosition:"right",
        loading:true
    }
});
