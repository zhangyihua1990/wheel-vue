import Toast from './toast';

let currentToast;

function creatToast({Vue, message, propsData, onClose}) {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({propsData});
  toast.$slots.default = [message];
  toast.$mount();
  toast.$on('close', onClose);
  document.body.appendChild(toast.$el);
  return toast;
}

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, options) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = creatToast({
        Vue,
        message,
        propsData: options,
        onClose: () => {
          console.log('onClose');
          currentToast = null;
        },
      });
    };
  },
};
