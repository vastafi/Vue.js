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
    <v-form>
      <v-text-field
        v-model="username"
        clearable
        label="Username"
        prepend-icon="mdi-account-circle"
        type="text"
        color="white"
        required
      />
      <v-text-field
        v-model="password"
        clearable
        label="Password"
        prepend-icon="mdi-lock"
        type="password"
        color="white"
        required
      />
    </v-form>
    <br>
    <v-btn
      color="grey darken-2"
      large
      @click="login"
    >
      Войти
    </v-btn>

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
  import {mapActions} from 'vuex';
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      login() {
        this.loginUser({
          username: this.username,
          password: this.password
        });
        this.$router.push({
          name: 'products'
        })
      },
      ...mapActions({
        loginUser: 'auth/login'
      })
    }
  }
</script>

<style scoped>

</style>