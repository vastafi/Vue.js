<template>
  <v-container>
    <v-sheet
      rounded="lg"
      elevation="3"
      max-width="1200"
      outlined
      class="spacing-playground ma-6"
    >
      <div
        v-if="$store.getters['item/getIsLoading']"
      >
        <v-sheet
          class="pa-3"
        >
          <v-skeleton-loader
            class="mx-auto"
            max-width="1200"
            type="card"
          />
        </v-sheet>
      </div>
      <div
        v-else
      >
        <v-carousel>
          <v-carousel-item 
            v-for="(image, i) in $store.getters['item/getItem'].img"
            :key="i"
            :src="image"
            reverse-transition="fade-transitions"
            transition="fade-transition"
          />
        </v-carousel>
      </div>
    </v-sheet>
    <v-card-title>
      {{ item.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ item.description }}
    </v-card-subtitle>
    <v-card-title
      v-if="item.price"

      class="text-h5"
    >
      {{ item.price }} €
    </v-card-title>
    <v-card-title
      v-else
      class="text-h5"
    >
      Договорная
    </v-card-title>
    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "ItemDetails",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    // this.$store.dispatch('item/loadItem', this.id)
    this.loadItem(this.id)
  },
  computed: {
    ...mapGetters({
      item:'item/getItem'
    })
  },
  methods: {
    ...mapActions({
      loadItem: 'item/loadItem'
    })
  },
}
</script>

<style scoped>

</style>