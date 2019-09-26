<template>
  <v-render-pagination
    :data="data"
    :limit="limit"
    :show-disabled="showDisabled"
    :size="size"
    :align="align"
    @pagination-change-page="onPaginationChangePage"
  >
    <ul
      v-if="computed.total > computed.perPage"
      slot-scope="{ data, limit, showDisabled, size, align, computed, prevButtonEvents, nextButtonEvents, pageButtonEvents }"
      class="ay-c-pager"
    >
      <li
        v-if="computed.prevPageUrl || showDisabled"
        class="ay-c-pager__array ay-c-pager__array_left"
        :class="{'disabled': !computed.prevPageUrl}"
      >
        <a
          class="ay-c-pager__link"
          href="#"
          aria-label="Previous"
          :tabindex="!computed.prevPageUrl && -1"
          v-on="prevButtonEvents"
        >
          <slot name="prev-nav">
            <span aria-hidden="true">&lt;</span>
            <span class="sr-only">{{ $ml.get('btn.previous') }}</span>
          </slot>
        </a>
      </li>

      <li
        v-for="(page, key) in computed.pageRange"
        :key="key"
        class="ay-c-pager__item"
        :class="{ 'ay-c-pager__item_active': page == computed.currentPage }"
      >
        <a
          class="ay-c-pager__link"
          href="#"
          v-on="pageButtonEvents(page)"
        >
          {{ page }}
        </a>
      </li>

      <li
        v-if="computed.nextPageUrl || showDisabled"
        class="ay-c-pager__array ay-c-pager__array_right"
        :class="{'disabled': !computed.nextPageUrl}"
      >
        <a
          class="ay-c-pager__link"
          href="#"
          aria-label="Next"
          :tabindex="!computed.nextPageUrl && -1"
          v-on="nextButtonEvents"
        >
          <slot name="next-nav">
            <span class="sr-only">{{ $ml.get('btn.next') }}</span>
            <span aria-hidden="true">&gt;</span>
          </slot>
        </a>
      </li>
    </ul>
  </v-render-pagination>
</template>

<script lang="ts">
/**
 * @fileoverview  Pagination
 * @version       0.1
 * @author        Miguel Ortiz <miguel.ortiz@decameron.com>
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

import RenderPagination from './RenderPagination';

/**
 * Constantes para este componente
 */
const COMPONENT_NAME = 'v-pagination';

@Component({
  name: COMPONENT_NAME,
  components: {
    'v-render-pagination': RenderPagination,
  },
})
export default class Pagination extends Vue {
  @Prop({ default: () => {} })
  private data!: Object;

  @Prop({ default: 0 })
  private limit!: Number;

  @Prop({ default: false })
  private showDisabled!: Boolean;

  @Prop({
    default: 'default',
    validator: value => (
      [
        'small',
        'default',
        'large',
      ].indexOf(value) !== -1
    ),
  })
  private size!: String;

   @Prop({
     default: 'left',
     validator: value => (
       [
         'left',
         'center',
         'right',
       ].indexOf(value) !== -1
     ),
   })
  private align!: String;


   private onPaginationChangePage(page: any) {
     this.$emit('pagination-change-page', page);
   }
}
</script>
