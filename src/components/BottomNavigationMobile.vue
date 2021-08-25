<template>
  <v-bottom-navigation
    :value="value"
    grow
    class="bottomNav"
  >
    <v-btn
      v-for="(link, i) in links"
      :key="link.route + i"
      :to="link.route"
      text
    >
      <span>{{ link.title }}</span>

      <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          <span>Account</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <Account />
    </v-menu>
  </v-bottom-navigation>
</template>

<script>
import Account from "./Account";
export default {
  name: "BottomNavigationMobile",
  components: {Account},
  data: () => ({
    value:1,
    links: [
      {title: 'Home', route: '/', icon: 'mdi-home'},
      {title: 'About', route: '/about', icon: 'mdi-information-outline'},
      {title: 'Contacts', route: '/contacts', icon: 'mdi-book-open-blank-variant'},
    ]
  }),
}
</script>

<style scoped>
.bottomNav {
  position: sticky;
  z-index: 5;
}
</style>