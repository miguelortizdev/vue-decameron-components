<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://github.com/miguelortizdev/vue-decameron-components" target="_blank" rel="noopener">vue-decameron documentation</a>.
    </p>
  </div>
</template>

<script lang="ts">
/**
 * @fileoverview  HelloWorld
 * @version       0.1
 * @author        Miguel Ortiz <miguel.ortiz@decameron.com>
 */

import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * Constantes para este componente
 */
const COMPONENT_NAME = 'v-hello-world';

@Component({
  name: COMPONENT_NAME,
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
