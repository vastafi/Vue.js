<template>
  <v-app id="inspire">
    <div
      class="pa-0"
      style="max-height:100vh;overflow:hidden;"
    >
      <v-img
        src="https://tse1.mm.bing.net/th/id/OIP.AMQhmcixr3JktB8IALCf8wHaEK?pid=ImgDet&rs=1"
        height="100px"
        width="100vw"
      />
      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Auth",
  data: () => ({
    show: false,
  }),
}
</script>

<style scoped>

</style>