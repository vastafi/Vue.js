<template>
  <v-app id="inspire">
    <AppBar />
    <v-container
      fluid
    >
      <v-row>
        <CategoryList />
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
  </v-app>
</template>

<script>

import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import CategoryList from "./components/CategoryList";


export default {
  components: {CategoryList, Content, Footer,  AppBar},
}
</script>