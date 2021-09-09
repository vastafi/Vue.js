<template>
  <v-main>
    <v-container>
      <RouterView />
      <ErrorMessage />
    </v-container>
  </v-main>
</template>

<script>
import ErrorMessage from "./ErrorMessage";
export default {
  name: "Content",
  components: {ErrorMessage},
}
</script>

<style scoped>

</style>