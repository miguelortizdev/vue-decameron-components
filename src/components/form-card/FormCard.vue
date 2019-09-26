<template>
  <!--  Componente: FormCard | ID: C2 | Type: Form-->
  <div
    class="ay-c-form-card"
    :class="colorScheme"
  >
    <div
      class="ay-c-form-card__header"
      :class="icon"
    >
      <p class="ay-c-form-card__legend">
        {{ title }}
      </p>
    </div>
    <div class="ay-c-form-card__body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @fileoverview  FormCard
 * @version       0.1
 * @author        Miguel Ortiz <miguel.ortiz@decameron.com>
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * Constantes para este componente
 */
const COMPONENT_NAME = 'form-card';

@Component({
  name: COMPONENT_NAME,
})
export default class FormCard extends Vue {
  @Prop() private title!: string;

  @Prop() private colorScheme!: string;

  @Prop() private icon!: string;
}
</script>

<style scoped>

</style>
