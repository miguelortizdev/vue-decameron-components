/**
 * @fileoverview  Index
 * @version       0.1
 * @author        Miguel Ortiz <miguel.ortiz@decameron.com>
 */

// Styles
import '../assets/scss/main.scss';

// Components
import HelloWorld from '@/components/hello-world/HelloWorld.vue';
import FormCard from '@/components/form-card/FormCard.vue';
import Hero from '@/components/hero/Hero.vue';
import Input from '@/components/input/Input.vue';
import Modal from '@/components/modal/Modal.vue';
// import Pagination from '@/components/pagination/Pagination.vue';
import Scrollspy from '@/components/scrollspy/Scrollspy.vue';


const VueComponents : any = {
  install(Vue : any) {
    Vue.component(HelloWorld.name, HelloWorld);
    Vue.component(FormCard.name, FormCard);
    Vue.component(Hero.name, Hero);
    Vue.component(Input.name, Input);
    Vue.component(Modal.name, Modal);
    // Vue.component(Pagination.name, Pagination);
    Vue.component(Scrollspy.name, Scrollspy);

    // Object containing Tour objects (see Home.vue) where the tour name is used as key
    // Vue.prototype.$decameron = {};
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  // window.Vue.use(VueComponents)
}

export default VueComponents;

export {
  HelloWorld,
  FormCard,
  Hero,
  Input,
  Modal,
  // Pagination,
  Scrollspy,
};
