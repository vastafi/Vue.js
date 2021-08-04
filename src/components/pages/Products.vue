<template>
  <v-main>
    <v-container class="white">
      <v-row>
        <v-col cols="2">
          <CategoryList />
        </v-col>

        <v-col
          v-for="n in 3"
          :key="n"
          cols="3"
        >
          <ProductsItems />
        </v-col>
      </v-row>
      <Paginations />
    </v-container>
  </v-main>
</template>
<script>
import CategoryList from "../CategoryList";
import ProductsItems from "../ProductsItems";
import Paginations from "../Paginations";

export default {
  name: "Products",
  components: {Paginations, ProductsItems, CategoryList},
}

</script>

<style scoped>

</style>