<template>
  <v-text-field
    dense
    flat
    hide-details
    rounded
    solo-inverted
    :value="searchValue"
    @keyup.enter="$emit('submitInput', $event.target.value)"
  >
    <template v-slot:label>
      Search products
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "Search",
  model: {
    prop: 'searchValue',
    event: 'submitInput'
  },
  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
},
}
</script>

<style scoped>

</style>