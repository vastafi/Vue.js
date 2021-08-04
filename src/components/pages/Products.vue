<template>
  <v-main>
    <v-container class="white">
      <v-row>
        <v-col cols="2">
          <CategoryList/>
        </v-col>

        <v-col
            v-for="n in 3"
            :key="n"
            cols="3"
        >
          <ProductsItems/>
        </v-col>
      </v-row>
      <Paginations></Paginations>
    </v-container>
  </v-main>

</template>
<script>
import ProductsItems from "./ProductsItems";
import CategoryList from "../CategoryList";
import Paginations from "./Paginations";

export default {
  name: "Products",
  components: {Paginations, CategoryList, ProductsItems},
}

</script>

<style scoped>

</style>