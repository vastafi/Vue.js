<template>
  <v-text-field
    :value="searchValue"
    dense
    flat
    hide-details
    rounded
    solo-inverted
    @keyup.enter="$emit('submitInput',$event.target.value)"
    @keyup="$emit('changeInput',$event.target.value)"
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
    searchValue: {
      type: String,
      required: false,
      default: '',
    },
},

}
</script>

<style scoped>

</style>