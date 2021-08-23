<template>
  <v-main>
    <v-card-title class="purple lighten-2">
      <v-icon
        dark
        size="42"
      >
        mdi-home-outline
      </v-icon>
      <h2 class="text-h4 white--text font-weight-light">
        Simple Store
      </h2>
    </v-card-title>
    <v-container>
      <CategoryList class="hidden-lg-and-up col-md-12 col-12" />
      <div
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="false"
        infinite-scroll-distance="10"
      >
        <v-row>
          <v-col
            v-for="(item, i) in $store.getters['products/getList']"
            :key="item.link + i"
            cols="12"
            sm="6"
            md="4"
          >
            <ProductsItems :item="item" />
          </v-col>
        </v-row>
        <v-row class="justify-center" />
        <v-row v-if="$store.getters['products/getIsLoading']">
          <v-col
            v-for="index in 85"
            :key="index"
            cols="12"
            md="4"
          >
            <v-skeleton-loader
              class="mb-6"
              :boilerplate="true"
              :elevation="2"
              type="card-avatar, actions"
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import ProductsItems from "../ProductsItems";
import CategoryList from "../CategoryList";

export default {
  name: "Products",
  components: {CategoryList, ProductsItems},
  props: {
    link: {
      required: false,
      default: () => '',
      type: String
    }
  },
  data: () => ({
    loading: false,
    selection: 1,
    page: 1,
  }),
  watch: {
    link: {
      immediate: true,
      handler() {
        this.page = 1;
        this.$store.dispatch('products/loadProducts', {
          link: this.link,
          page: this.page
        });
      }
    },
  },
  methods: {
    loadMore: function () {
      if (this.$store.getters['products/getList'].length !== 0) {
        this.$store.dispatch('products/loadProducts', {
          link: this.link,
          page: ++this.page
        });
      }
    }
  }
}
</script>


<style scoped>

</style>