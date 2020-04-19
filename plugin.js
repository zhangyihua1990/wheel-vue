import Toast from './toast';

function creatToast({Vue, message, propsData}) {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({propsData});
  toast.$slots.default = [message];
  toast.$mount();
  document.body.appendChild(toast.$el);
}

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, options) {
      creatToast({Vue, message, propsData:options});
    };
  },
};
