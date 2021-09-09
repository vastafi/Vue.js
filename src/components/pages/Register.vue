<template>
  <div>
    <v-card
      dark
      color="dark"
      elevation-24
      style="padding: 20px; border: 1px; border-radius: 50px; text-align: center;"
    >
      <v-card-text>
        <h4 class="display-2 font-weight-bold">
          Register
        </h4>
        <hr>
        <br>
        <v-form>
          <v-text-field
            v-model="firstName"
            clearable
            label="First name"
            prepend-icon="mdi-account-circle"
            type="text"
            color="white"
            required
            :rules="nameRules"
          />
          <v-text-field
            v-model="lastName"
            clearable
            label="Last name"
            prepend-icon="mdi-account-circle"
            type="text"
            color="white"
            :rules="nameRules"
          />
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
    <v-dialog
      v-model="active"
      max-width="350"
    >
      <v-card>
        <v-card-title class="text-h5">
          Do you really want to leave?
        </v-card-title>

        <v-card-text>
          Leaving this page results in loosing changes.
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="green darken-1"
            text
            @click="clickNo"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="clickYes"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      active: false,
      resolve: null,
      nameRules: [
        v => !!v || 'This field is required',
        v => v.length > 2 || "First and last name should have at least 3 characters"
      ],
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
    if(this.firstName || this.lastName || this.username ||
        this.email || this.password) {
      this.pop().then((answer) => next(answer));
    }
    else next()
  }
}
</script>

<style scoped>
</style>