import { mount } from '@vue/test-utils';
import Input from '@/components/input/Input.vue';

describe('Input.vue', () => {
  let wrapper: any;
  let input: any;
  beforeEach(() => {
    const propsData = {
      name: 'input',
      value: 'Component',
      validate: false,
      placeholder: 'Component',
      disabled: false,
      label: 'Component',
      scope: 'red',
    };
    wrapper = mount(Input, { propsData });
    input = wrapper.find('input');
  });

  test('renders when passed', () => {
    input.setValue('Aprender unit testing');
    expect(wrapper.vm.input).toBe('Aprender unit testing');
  });
});
