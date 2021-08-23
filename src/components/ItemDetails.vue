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
    <div
      class="text-h6 ma-6"
    >
      <v-icon>mdi-eye</v-icon>
      Сегодня : {{ item.viewsToday }}
    </div>
    <v-card-title>
      {{ item.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ item.description }}
    </v-card-subtitle>
    <div
      class="text-h6 ma-6"
    >
      <v-row
        justify="center"
      >
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Общее</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list>
                <v-list-item
                  v-for="(feature, index) in item.mainFeatures"
                  :key="index"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      v-if="feature.value"
                      v-text="feature.name + ' : ' + feature.value"
                    />
                    <v-list-item-title
                      v-else
                      v-text="feature.name"
                    />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Свойства</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list>
                <v-list-item
                  v-for="(feature, index) in item.secondaryFeatures"
                  :key="index"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="feature.name + ' : ' + feature.value"
                    />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>

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
    this.loadItem(this.id)
  },
  computed: {
    ...mapGetters({
      item:'item/getItem',
      isLoading: 'item/getIsLoading'
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