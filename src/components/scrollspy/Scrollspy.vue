<template>
  <!--  Componente: Scrollspy | ID: C07 | Type: Navigation -->
  <!--
        Description: Una barra de navegación que permite
        realizar saltos entre secciones de una misma página,
        a la vez que informa al usuario de la sección de la
        página en la que se encuentra.
    -->
  <nav class="ay-c-scrollspy">
    <ul class="ay-c-scrollspy__list">
      <!--
                - Clase de item active: .ay-c-scrollspy__item_active
                - se le coloca la clase "ay-c-scrollspy__item_active" al link
                - cuando coincide con el hash del route y el href del link
            -->
      <scrollactive
        :offset="10"
        @itemchanged="onItemChanged"
      >
        <li
          v-for="item in items"
          :key="item.id"
          class="ay-c-scrollspy__item"
          :class="{ 'ay-c-scrollspy__item_active' : item.id === selected }"
        >
          <a
            class="ay-c-scrollspy__link scrollactive-item"
            :href="'#' + item.id"
            title="title"
            @click="onItemClick(item.id)"
          >
            {{ item.title }}
          </a>
        </li>
      </scrollactive>
    </ul>
  </nav>
</template>

<style scoped>

</style>

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
const COMPONENT_NAME = 'v-scrollspy';

@Component({
  name: COMPONENT_NAME,
})
export default class Scrollspy extends Vue {
  @Prop({ default: () => [] }) private items!: any[];

  @Prop() private containerId!: string;

  private selected = this.items[0].id;

  private onItemChanged(event: any, currentItem: any, lastActiveItem: any) : void {
    if (currentItem) {
      this.selected = currentItem.getAttribute('href').split('#')[1];
    }
  }

  private onItemClick(id: any) : void {
    this.selected = id;
  }
}
</script>
