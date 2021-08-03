<template>
  <v-app id="inspire">
    <AppBar></AppBar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <CategoryList></CategoryList>
                     </v-col>

          <v-col>
            <v-sheet
                min-height="70vh"
                rounded="lg"
            >
              <Content></Content>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Content from "./components/Content";
import AppBar from "./components/AppBar";
import CategoryList from "./components/CategoryList";

export default {
  components: {CategoryList, AppBar, Content},

}
</script>