<template>
  <v-col cols="2">
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
      color="yellow darken-2"
    />
    <v-expansion-panels
      focusable
    >
      <v-expansion-panel
        v-for="category in categories"
        :key="category.name"
      >
        <v-expansion-panel-header>{{ category.name }}</v-expansion-panel-header>
        <div
          v-for="linkChild in category.children"
          :key="linkChild.link"
        >
          <v-expansion-panel-content>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  <router-link
                    class="text--primary"
                    :to="{name:'products', query: {link: linkChild.link}}"
                  >
                    {{ linkChild.name }}
                  </router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-expansion-panel-content>
        </div>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import eventBus from "../eventBus";
import {ERROR_MESSAGE} from "../constants/eventBus";
export default {
  name: "Categories",
  computed: {
    categories(){
      let categories={};
      for(let category of this.getCategories){
        if(!category.parentLink){
          categories[category.link]= {
            children:[],
            ...category
          }
        }else{
          categories[category.parentLink].children.push(category)
        }
      }
      return categories
    },
    ...mapGetters({
      getCategories: 'categories/getList'
    })
  },
  mounted() {
    if(!this.getCategories.length)
      this.fetchCategories()
          .catch((e) => eventBus.$emit(ERROR_MESSAGE, e));
  },
  methods: {
    ...mapActions({
      fetchCategories: 'categories/fetchCategories'
    }),
  }
}
</script>

<style scoped>
.v-list-item__title a {
  text-decoration: none;
}
</style>