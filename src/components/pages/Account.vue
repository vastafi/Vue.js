<template>
  <v-list>
    <v-list-item
      v-for="(item, index) in filterItems"
      :key="index"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <router-link
        :to="{name: item.route}"
        style="text-decoration: none"
        class="text--primary"
      >
        <div v-if="item.title === 'Logout'">
          <v-list-item-title @click="logout">
            {{ item.title }}
          </v-list-item-title>
        </div>
        <div v-else>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </div>
      </router-link>
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
import {mapGetters, mapMutations, mapActions} from "vuex";
export default {
  name: "Account",
  data: () => ({
    items: [
      { title: 'Sign in', icon: 'fas fa-sign-in-alt', route: 'login'},
      { title: 'Register', icon: 'fas fa-sign-in-alt', route: 'register'},
      { title: 'Logout', icon: 'fas fa-sign-out-alt', route: ''},
    ],
    isAuthenticated: false,
  }),
  computed: {
    filterItems() {
      if(this.getIsAuthorised) {
        return this.items.filter(item => item.title !== 'Sign in' && item.title !== 'Register');
      }
      return this.items.filter(item => item.title !== 'Logout');
    },
    ...mapGetters({
      isDarkModeEnabled: 'settings/getIsDarkModeEnabled',
      getIsAuthorised: 'auth/getIsAuthorised',
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
    logout() {
      this.logoutUser();
      this.$router.push({
        name: 'login'
      })
    },
    ...mapMutations({
      mutateIsDarkModeEnabled: 'settings/mutateIsDarkModeEnabled'
    }),
    ...mapActions({
      logoutUser: 'auth/logout',
    })
  },
}
</script>

<style scoped>
</style>