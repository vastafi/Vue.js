<template>
  <v-sheet
    rounded="lg"
    min-height="268"
  >
    <div
      v-if="$store.getters['item/getIsLoading']"
    />
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
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Item",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.loadItem (this.id)
  },
  computed: {
    ...mapGetters({
      item: 'item/getItem'
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