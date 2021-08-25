<template>
  <v-responsive :max-width="maxWidth">
    <v-autocomplete
      value="value"
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
      @change="$emit('onChange', $event)"
      @keydown.enter="$emit('onSubmit', $event)"
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
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
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
      this.$emit('input', this.search);
    },
    value: {
      handler() {
        this.search = this.value;
      },
      immediate: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>