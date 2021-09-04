<template>
  <v-card
    class="mx-auto elevation-5 text-center pa-5 mt-16"
    max-width="350"
    style="border-radius:20px;position:relative;top:-50px;"
  >
    <v-card-subtitle class="title black--text pa-1">
      Вход
    </v-card-subtitle>
    <v-card-subtitle class="pa-1">
      Пройдите авторизацию <br> для начало покупок
    </v-card-subtitle>
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
      У вас нет аккаунта?
      <span
        class="red--text"
        style="cursor:pointer"
      >
        <router-link
          :to="{name:'registration'}"
        >
          Регистрация
        </router-link>
      </span>
    </p>
  </v-card>
</template>
<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>