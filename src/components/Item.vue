<template>
  <v-main>
    <v-container>
      {{ id }}
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Item",
  props:{
    id:{
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>