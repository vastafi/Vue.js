<template>
  <v-app id="inspire">
    <AppBar />
    <v-main class="app">
      <v-container
        fluid
      >
        <v-row>
          <Categories class="hidden-md-and-down" />
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <Content />
            </v-sheet>
          </v-col>
        </v-row>
        <Footer />
      </v-container>
      <BottomNavigationMobile class="hidden-lg-and-up" />
    </v-main>
  </v-app>
</template>

<script>

import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Categories from "../components/Categories";
import BottomNavigationMobile from "../components/BottomNavigationMobile";
import {mapGetters} from "vuex";

export default {
  name: "Dashbord",
  components: {Categories, Content, Footer,  AppBar, BottomNavigationMobile,},
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      isDarkModeEnabled: 'settings/getIsDarkModeEnabled'
    })
  },
  mounted() {
    this.$vuetify.theme.dark = this.isDarkModeEnabled
  }
}

</script>