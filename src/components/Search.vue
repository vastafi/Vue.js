<template>
  <v-responsive :max-width="maxWidth">
    <v-autocomplete
      value="searchValue"
      dense
      flat
      hide-details
      rounded
      solo-inverted
      :items="items"
      :loading="loading"
      :search-input.sync="search"
      color="white"
      hide-no-data
      hide-selected
      item-text="title"
      item-value="url"
      return-object
      @keydown.enter="$emit('submitInput', search)"
    >
      <template v-slot:label>
        <v-icon
          style="vertical-align: middle"
          size="20"
        >
          fas fa-search
        </v-icon>
        Search for products
      </template>
    </v-autocomplete>
  </v-responsive>
</template>

<script>
export default {
  name: "Search",
  model: {
    prop: 'searchValue',
    event: 'changeSearch'
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    searchValue: {
      type: String,
      required: false,
      default: '',
    },
  },
  data: () => ({
    search: '',
  }),
  computed: {
    maxWidth() {
      if(this.$vuetify.breakpoint.name === 'xs') {
        return 190;
      }else {
        return 260;
      }
    }
  },
  watch: {
    search () {
      this.$emit('changeSearch', this.search);
    },
    searchValue: {
      immediate: true,     handler() {
        this.search = this.searchValue;
      },
        }
  },
 }
</script>

<style scoped>
</style>