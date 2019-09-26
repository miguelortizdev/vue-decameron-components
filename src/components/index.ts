/**
 * @fileoverview  Index
 * @version       0.1
 * @author        Miguel Ortiz <miguel.ortiz@decameron.com>
 */

// Styles
import '../assets/scss/main.scss';

// Components
import HelloWorld from '@/components/hello-world/HelloWorld.vue';
import Hero from '@/components/hero/Hero.vue';

const VueComponents : any = {
  install(Vue : any) {
    Vue.component(HelloWorld.name, HelloWorld);
    Vue.component(Hero.name, Hero);

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
  Hero,
};
