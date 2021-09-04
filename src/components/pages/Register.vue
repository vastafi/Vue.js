<template>
  <v-card
    class="mx-auto elevation-5 text-center pa-5 mt-16"
    max-width="350"
    style="border-radius:20px;position:relative;top:-50px;"
  >
    <v-card-subtitle class="title black--text pa-1">
      Pегистрация
    </v-card-subtitle>
    <v-card-subtitle class="pa-1">
      Пройдите  pегистрацию <br> для начало покупок
    </v-card-subtitle>
    <v-text-field
      hide-details
      color="red"
      label="Имя"
    />
    <v-text-field
      hide-details
      color="red"
      label="Эл. почта"
    />
    <v-text-field
      hide-details
      color="red"
      label="Логин или номер телефона"
    />
    <v-text-field
      color="red"
      label="Пароль"
      type="password"
    />
    <v-card-actions>
      <v-btn
        color="red"
        dark
        block
        rounded
      >
        Войти
      </v-btn>
    </v-card-actions>
    <p class="mt-3">
      Есть уже аккаунт?<span
        class="red--text"
        style="cursor:pointer"
      >
        <router-link
          :to="{name:'login'}"
        >
          Aвторизация
        </router-link>
      </span>
    </p>
  </v-card>
</template>
<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>