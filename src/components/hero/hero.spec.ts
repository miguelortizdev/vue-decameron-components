import { shallowMount } from '@vue/test-utils';
import Hero from '@/components/hero/Hero.vue';

describe('Hero.vue', () => {
  it('renders props when passed', () => {
    const title = 'Hero';
    const subtitle = 'Component';
    const background = 'red';
    const wrapper = shallowMount(Hero, {
      propsData: { title, subtitle, background },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
