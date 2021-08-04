<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col
            v-for="n in 6"
            :key="n"
            cols="4"
        >
         <ProductsItems></ProductsItems>
           </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import ProductsItems from "./ProductsItems";
export default {
  name: "Products",
  components: {ProductsItems},
}
</script>

<style scoped>

</style>