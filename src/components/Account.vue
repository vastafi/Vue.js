<template>
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
    <v-divider class="my-2" />
    <v-sheet class="pa-5">
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        :label="`Dark mode`"
        @change="changeDarkMode"
      />
    </v-sheet>
  </v-list>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
export default {
  name: "Account",
  data: () => ({
    items: [
      { title: 'Sign in', route: ''},
      { title: 'Register', route: ''},
      { title: 'Logout', route: ''},
    ],
  }),
  computed: {
    ...mapGetters({
      isDarkModeEnabled: 'settings/getIsDarkModeEnabled'
    })
  },
  watch: {
    isDarkModeEnabled: {
      handler() {
        this.$vuetify.theme.dark = this.isDarkModeEnabled
      },
      immediate: true
    },
  },
  methods: {
    changeDarkMode() {
      this.mutateIsDarkModeEnabled(!this.isDarkModeEnabled);
    },
    ...mapMutations({
      mutateIsDarkModeEnabled: 'settings/mutateIsDarkModeEnabled'
    })
  },
}
</script>

<style scoped>
</style>