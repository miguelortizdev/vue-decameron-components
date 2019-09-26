<template>
  <div class="ay-c-modal">
    <p class="ay-c-modal__title">
      {{ title }}
    </p>
    <slot />
    <button
      class="ay-c-modal__close i-x"
      type="button"
      @click="$emit('close')"
    >
      <span class="hidden">Cerrar</span>
    </button>
  </div>
</template>

<script lang="ts">
/**
 * @fileoverview  Modal
 * @version       0.1
 * @author        Miguel Ortiz <miguel.ortiz@decameron.com>
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * Constantes para este componente
 */
const COMPONENT_NAME = 'v-modal';

@Component({
  name: COMPONENT_NAME,
})
export default class Modal extends Vue {
  @Prop() private title!: string;
}
</script>

<style scoped>

</style>
