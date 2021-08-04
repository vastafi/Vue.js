<template>
  <v-container>
    <v-card>
      <v-card-title class="purple lighten-2">
        <v-icon
            dark
            size="42"
        >
          mdi-home-outline
        </v-icon>
        <h2 class="text-h4 white--text font-weight-light">
          Simple Store
        </h2>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col
              cols="12"
              md="8"
          >
            Tel: +373 60 80 90 10
            <br> E-mail: simpleStore@mail.ru
          </v-col>
          <v-col
              class="hidden-sm-and-down text-right"
              md="2"
          >
            <v-icon size="64">
              mdi-calendar-text
            </v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  <br>
    <br>
    <v-row>
      <v-col cols="3">
        <DataPicker/>
      </v-col>
      <v-spacer />
      <v-col cols="8">
        <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|max:10"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :error-messages="errors"
          label="Name"
          required
        />
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
        :rules="{
          required: true,
          digits: 7,
          regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$'
        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :counter="7"
          :error-messages="errors"
          label="Phone Number"
          required
        />
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        />
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="Messages"
        rules="required|max:200"
      >
        <v-text-field
          v-model="messages"
          :counter="200"
          :error-messages="errors"
          label="Messages"
          required
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="checkbox"
      >
        <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="Option"
          type="checkbox"
          required
        />
      </validation-provider>

      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>

  </validation-observer>
      </v-col>
  </v-row></v-container>
</template>

<script>
import {digits, email, max, regex, required} from 'vee-validate/dist/rules'
import {extend, setInteractionMode, ValidationObserver, ValidationProvider} from 'vee-validate'
import DataPicker from "./DataPicker";

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

export default {
  name: "Contacts",
  components: {
    DataPicker,
    ValidationProvider,
    ValidationObserver,

  },
  data: () => ({
    name: '',
    phoneNumber: '',
    email: '',
    messages: null,
    checkbox: null,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate()
    },
    clear() {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.messages = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
  },
}
</script>

<style scoped>

</style>