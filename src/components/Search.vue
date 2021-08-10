<template>
  <v-text-field
    dense
    flat
    hide-details
    rounded
    solo-inverted
    :value="value"
    @keypress="$emit('input', $event.target.value)"
  >
    <template v-slot:label>
      Search products
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "Search",
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    }
}
}
</script>

<style scoped>

</style>