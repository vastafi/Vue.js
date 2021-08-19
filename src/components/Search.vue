<template>
  <v-autocomplete
    value="value"
    dense
    flat
    rounder
    solo-inverted
    hide-details
    hide-selected
    hide-no-data
    item-text="title"
    item-value="url"
    :items="items"
    :loading="loading"
    :search-input.sync="search"
    @change="$emit('onChange', $event)"
    @keydown.enter="$emit('onSubmit', $event)"
  />
</template>

<script>
export default {
  name: "Search",
  props: {
    items:{
      type: Array,
      required: false,
      default: () => []
    },
    loading:{
      type : Boolean,
      required : false,
      default: false,
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
},
  data :() => ({
    search:''
  }),
  watch: {
    search(){
      this.$emit('input', this.search);
    },
    value : {
      handler() {
        this.search = this.value;
      },
      immediate : true,
    }
  },
}
</script>

<style scoped>

</style>