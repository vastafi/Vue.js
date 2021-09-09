<template>
  <div>
    <v-card
      class="mx-auto elevation-5 text-center pa-5 mt-16"
      max-width="600"
      style="border-radius:20px;position:relative;top:-50px;"
    >
      <v-card-text>
        <v-card-subtitle class="title black--text pa-1">
          Register
        </v-card-subtitle>
        <v-form>
          <v-text-field
            v-model="username"
            clearable
            label="Username"
            prepend-icon="mdi-account-circle"
            type="text"
            color="white"
            :rules="usernameRules"
          />
          <v-text-field
            v-model="email"
            clearable
            label="Email"
            prepend-icon="mdi-email"
            type="text"
            color="white"
            :rules="emailRules"
          />
          <v-text-field
            v-model="password"
            clearable
            label="Password"
            prepend-icon="mdi-lock"
            type="password"
            color="white"
            :rules="passwordRules"
          />
          <v-text-field
            v-model="passwordConfirm"
            clearable
            label="Repeat password"
            prepend-icon="mdi-lock"
            type="password"
            color="white"
          />
        </v-form>
        <br>
        <v-btn
          color="grey darken-2"
          large
        >
          Enter
        </v-btn>
        <p class="mt-3">
          Already have an account?
          <router-link
            :to="{name: 'login'}"
            style="text-decoration: none"
          >
            <span
              class="orange--text"
              style="cursor:pointer"
            >
              Login
            </span>
          </router-link>
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
           username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      active: false,
      resolve: null,
            usernameRules: [
        v => !!v || 'This field is required',
        v => v.length > 2 || 'Username should have at least 3 characters'
      ],
      emailRules: [
        v => !!v || 'This field is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'This field is required',
        v => (v.length > 8) || 'Password should have at least 8 characters',
        v => /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(v) ||
            'Password should contain at least one special character',
        v => /[0123456789]/.test(v) || 'Password should contains at least one digit'
      ],
    }
  },
  methods: {
    pop() {
      this.active = true;
      return new Promise((resolve) =>
          this.resolve = resolve
      );
    },
    clickYes() {
      this.active = false;
      this.resolve(true);
    },
    clickNo() {
      this.active = false;
      this.resolve(false);
    }
  },
  beforeRouteLeave (to, from, next) {
    if( this.username ||
        this.email || this.password) {
      this.pop().then((answer) => next(answer));
    }
    else next()
  }
}
</script>

<style scoped>
</style>