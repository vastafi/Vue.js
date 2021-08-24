<template>
  <v-col cols="2">
    <v-divider class="my-5" />
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
        <v-progress-linear
          v-if="$store.getters['categories/getIsLoading']"
          indeterminate
          color="green"
        />
        <v-expansion-panels
          focusable
        >
          <v-expansion-panel
            v-for="(category) in categories()"
            :key="category.link"
          >
            <v-expansion-panel-header>{{ category.name }}</v-expansion-panel-header>
            <div
              v-for="(child) in category.children"
              :key="child.link"
            >
              <v-expansion-panel-content>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-wrap">
                      <router-link
                        style="text-decoration: none; color: inherit;"
                        class="child-link"
                        :to="{name:'products', query: {link: child.link}}"
                      >
                        {{ child.name }}
                      </router-link>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-expansion-panel-content>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: "CategoryList",
    mounted() {
    if(!this.$store.getters['categories/getList'].length)
    this.$store.dispatch('categories/fetch');
  },
  methods: {
    categories() {
      let categories = {};
      for (let category of this.$store.getters['categories/getList']) {
        if (!category.parentLink) {
          categories[category.link] = {
            children: [],
            ...category
          }
        } else {
          categories[category.parentLink].children.push(category)
        }
      }
      return categories
    }
  }
}
</script>

<style scoped>

</style>