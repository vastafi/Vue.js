<template>
  <v-sheet rounded="lg">
    <v-list color="transparent">
      <v-list-item
        color="grey lighten-4"
      >
        <v-list-item-content>
          <v-list-item-title>
            Category
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-3" />
      <v-expansion-panels focusable>
        <v-expansion-panel
          v-for="link in $store.getters['categories/getList']"
          :key="link"
        >
          <div v-if="!link.parentLink">
            <v-expansion-panel-header>{{ link.name }}</v-expansion-panel-header>
            <div
              v-for="linkChild in $store.getters['categories/getList']"
              :key="linkChild"
            >
              <v-expansion-panel-content
                v-if="linkChild.parentLink === link.link"
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-wrap">
                      {{ linkChild.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-expansion-panel-content>
            </div>
          </div>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  name: "CategoryList",
  data: () => ({
    links: [
      'Phones',
      'Notebooks',
      'Printers',
    ],
  }),
  mounted() {
    this.$store.dispatch('categories/fetch');
  }
}
</script>

<style scoped>

</style>