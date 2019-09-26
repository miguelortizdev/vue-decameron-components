<template>
  <div class="ay-form__item">
    <label
      class="ay-form__label"
      :for="name"
    >
      {{ label }}
    </label>
    <input
      :id="name"
      class="ay-form__field"
      step="any"
      :type="type"
      :name="name"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      :data-vv-as="name"
      v-bind="$attrs"
      v-on="inputListeners"
    >
    <span class="ay-form__msg">
      {-- errors.first((scope) ? `${scope}.${name}` : name) --}
    </span>
  </div>
</template>

<script lang="ts">
/**
 * @fileoverview  Input
 * @version       0.1
 * @author        Miguel Ortiz <miguel.ortiz@decameron.com>
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * Constantes para este componente
 */
const COMPONENT_NAME = 'vue-input';

@Component({
  name: COMPONENT_NAME,
})
export default class Scrollspy extends Vue {
  @Prop({ required: true })
  private name!: string;

  @Prop({ default: null })
  private value!: string;

  @Prop({
    default: 'text',
    validator: (val: any) => (
      [
        'text',
        'password',
        'email',
        'number',
        'url',
        'tel',
        'date',
        'time',
        'range',
        'color',
      ].indexOf(val) !== -1
    ),
  })
  private type!: String;

  @Prop({ required: true })
  private validate!: Boolean;

  @Prop({ default: null })
  private placeholder!: String;

  @Prop({ default: false })
  private disabled!: Boolean;

  @Prop({ default: null })
  private label!: String;

  @Prop({ default: null })
  private scope!: String;

  // Computed
  get inputListeners() : Object {
    const vm : Vue = this;
    // `Object.assign` merges objects together to form a new object
    return Object.assign({},
      // We add all the listeners from the parent
      this.$listeners,
      // Then we can add custom listeners or override the
      // behavior of some listeners.
      {
        // This ensures that the component works with v-model
        input(event: any) {
          vm.$emit('input', event.target.value);
        },
      });
  }
}
</script>

<style scoped>

</style>
