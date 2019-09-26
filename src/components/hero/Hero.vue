<template>
  <!--  Componente: Hero | ID: C01 | Type: Banner -->
  <header
    class="ay-c-hero"
    :class="background"
  >
    <h1 class="ay-c-hero__title">
      {{ title }}
    </h1>
    <p
      v-if="subtitle !== 'undefined'"
      class="ay-c-hero__subtitle"
    >
      {{ subtitle }}
    </p>
  </header>
</template>

<script lang="ts">
/**
 * @fileoverview  Hero
 * @version       0.1
 * @author        Miguel Ortiz <miguel.ortiz@decameron.com>
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * Constantes para este componente
 */
const COMPONENT_NAME = 'v-hero';

@Component({
  name: COMPONENT_NAME,
})
export default class HelloWorld extends Vue {
  @Prop() private title!: string;

  @Prop() private subtitle!: string;

  @Prop() private background!: string;
}
</script>

<style scoped>

</style>
