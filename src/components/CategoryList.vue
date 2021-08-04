<template>
  <v-sheet rounded="lg">
    <v-list color="transparent">
      <v-list-item
          link
          color="grey lighten-4"
      >
        <v-list-item-content>
          <v-list-item-title>
            Category
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-1"/>
      <v-list-item
          v-for="(item, index) in items"
          :key="index"
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  name: "CategoryList",
  data: () => ({
    items: [
      {title: 'Phones'},
      {title: 'Notebooks'},
      {title: 'Printers'},
    ],
  }),
}
</script>

<style scoped>

</style>