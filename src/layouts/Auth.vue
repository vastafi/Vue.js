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
      <div
        class="text-center"
        style="position:relative;top:-40px"
      >
        <p class="ma-0">
          - ИЛИ -
        </p>
        <v-btn
          color="grey"
          rounded
          outlined
          class="ma-2"
          width="200"
        >
          <v-icon
            left
            color="blue"
          >
            mdi-facebook
          </v-icon>Вход с Facebook
        </v-btn><br>
        <v-btn
          color="grey"
          rounded
          outlined
          class="ma-2"
          width="200"
        >
          <v-icon
            left
            color="red"
          >
            mdi-google
          </v-icon>Вход с Google
        </v-btn>
      </div>
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