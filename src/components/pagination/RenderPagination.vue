<script lang="ts">
/**
 * @fileoverview  RenderPagination
 * @version       0.1
 * @author        Miguel Ortiz <miguel.ortiz@decameron.com>
 */
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VNode } from 'vue';

/**
 * Constantes para este componente
 */
const COMPONENT_NAME = 'v-render-pagination';

/**
 * Interfeces
 */
type LinkPaginate = {
  first: any,
  last: any,
  next: any,
  prev: any
}
type MetaInfo = {
  from: any,
  to: any,
  total: any,
  current_page: any,
  per_page: any,
  last_page: any,
}

type ObjectData = {
  meta: MetaInfo,
  from: any,
  links: LinkPaginate,
  to: any,
  total: any,
  current_page: any,
  per_page: any,
  last_page: any,
  next_page_url: any,
  prev_page_url: any,
}

@Component({
  name: COMPONENT_NAME,
})
export default class RenderPagination extends Vue {
  @Prop({ default: () => {} })
  private data!: ObjectData;

  @Prop({ default: 0 })
  private limit!: any;

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

   // Computed
   get isApiResource() {
     return !!this.data.meta;
   }

   get currentPage() {
     return this.isApiResource ? this.data.meta.current_page : this.data.current_page;
   }

   get firstPageUrl() {
     return this.isApiResource ? this.data.links.first : null;
   }

   get from() {
     return this.isApiResource ? this.data.meta.from : this.data.from;
   }

   get lastPage() {
     return this.isApiResource ? this.data.meta.last_page : this.data.last_page;
   }

   get lastPageUrl() {
     return this.isApiResource ? this.data.links.last : null;
   }

   get nextPageUrl() {
     return this.isApiResource ? this.data.links.next : this.data.next_page_url;
   }

   get perPage() {
     return this.isApiResource ? this.data.meta.per_page : this.data.per_page;
   }

   get prevPageUrl() {
     return this.isApiResource ? this.data.links.prev : this.data.prev_page_url;
   }

   get to() {
     return this.isApiResource ? this.data.meta.to : this.data.to;
   }

   get total() {
     return this.isApiResource ? this.data.meta.total : this.data.total;
   }

   get pageRange(): any {
     if (this.limit === -1) {
       return 0;
     }

     if (this.limit === 0) {
       return this.lastPage;
     }

     const current = this.currentPage;
     const last = this.lastPage;
     const delta = this.limit;
     const left = current - delta;
     const right = current + delta + 1;
     const range = [];
     const pages: any[] = [];
     let l: any;

     for (let i = 1; i <= last; i++) {
       if (i === 1 || i === last || (i >= left && i < right)) {
         range.push(i);
       }
     }

     range.forEach((i: any) => {
       if (l) {
         if (i - l === 2) {
           pages.push(l + 1);
         } else if (i - l !== 1) {
           pages.push('...');
         }
       }
       pages.push(i);
       l = i;
     });

     return pages;
   }

   // Methods
   private previousPage() : void {
     this.selectPage((this.currentPage - 1));
   }

   private nextPage() : void {
     this.selectPage((this.currentPage + 1));
   }

   private selectPage(page: any) : any {
     if (page === '...') {
       return;
     }
     this.$emit('pagination-change-page', page);
   }

   // Overwrite
   render() {
     //  return this.$scopedSlots.default({
     //    data: this.data,
     //    limit: this.limit,
     //    showDisabled: this.showDisabled,
     //    size: this.size,
     //    align: this.align,
     //    computed: {
     //      isApiResource: this.isApiResource,
     //      currentPage: this.currentPage,
     //      firstPageUrl: this.firstPageUrl,
     //      from: this.from,
     //      lastPage: this.lastPage,
     //      lastPageUrl: this.lastPageUrl,
     //      nextPageUrl: this.nextPageUrl,
     //      perPage: this.perPage,
     //      prevPageUrl: this.prevPageUrl,
     //      to: this.to,
     //      total: this.total,
     //      pageRange: this.pageRange,
     //    },
     //    prevButtonEvents: {
     //      click: (e: MouseEvent) => {
     //        e.preventDefault();
     //        this.previousPage();
     //      },
     //    },
     //    nextButtonEvents: {
     //      click: (e: MouseEvent) => {
     //        e.preventDefault();
     //        this.nextPage();
     //      },
     //    },
     //    pageButtonEvents: (page: any) => ({
     //      click: (e: MouseEvent) => {
     //        e.preventDefault();
     //        this.selectPage(page);
     //      },
     //    }),
     //  });
   }
}
</script>
