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
    <v-container
      v-if="$store.getters['products/getIsLoading']"
    >
      <v-row>
        <v-col
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
        <v-col
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
        <v-col
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
    </v-container>
    <v-container v-else>
      <v-row key="products">
        <v-col
          v-for="(item, i) in $store.getters['products/getList']"
          :key="item.link + i"
          cols="4"
        >
          <ProductsItems :item="item" />
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <Paginations />
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

import ProductsItems from "../ProductsItems";
import Paginations from "../Paginations";

export default {
  name: "Products",
  components: {Paginations, ProductsItems},
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
  }),
  watch: {
    link: {
      immediate: true,
      handler() {
        this.$store.dispatch('products/loadProducts', this.link);
      }
    },
  },
  mounted() {
    this.$store.dispatch('products/loadProducts', this.link);
  },
  methods: {
  }
}
</script>


<style scoped>

</style>