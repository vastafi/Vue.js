<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col
            v-for="n in 6"
            :key="n"
            cols="4"
        >
          <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                  </template>

                  <v-img
                      height="250"
                      src="data:image/jpeg;base64,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"
                  ></v-img>

                  <v-card-title>Acer Nitro</v-card-title>

                  <v-card-text>
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                      <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                      ></v-rating>

                      <div class="grey--text ms-4">
                        4.5 (413)
                      </div>
                    </v-row>

                    <div class="my-4 text-subtitle-1">
                      $ • Simple Store
                    </div>

                    <div>Explore and enjoy a new level of gaming with the powerful Nitro 5. The solid, understated design houses a lightning-quick 144Hz FHD IPS display and a lineup of impressive tech to enhance every aspect of gameplay.</div>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-title>Available amount</v-card-title>

                  <v-card-text>
                    <v-chip-group
                        v-model="selection"
                        active-class="deep-purple accent-4 white--text"
                        column
                    >
                      <v-chip>1</v-chip>
                      <v-chip>2</v-chip>
                      <v-chip>3</v-chip>
                      <v-chip>4</v-chip>
                      <v-chip>5</v-chip>
                      <v-chip>6</v-chip>
                      </v-chip-group>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="add"
                    >
                      Add to cart
                    </v-btn>
                  </v-card-actions>
                </v-card>
           </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  name: "Products",
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    add () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style scoped>

</style>