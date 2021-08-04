<template>
  <v-app id="inspire">
    <AppBar />

<Content></Content>
    <Footer />
  </v-app>
</template>

<script>

import AppBar from "./components/AppBar";
import Footer from "./components/pages/Footer";

import Content from "./components/Content";


export default {
  components: {Content, Footer,  AppBar},
}
</script>