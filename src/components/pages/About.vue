<template>
  <v-row>
    Welcome to SimpleSore, your number one source for all things electronic: phones, laptops, printers. We are dedicated
    to offering you the best of the stock we have, with a focus on three features: reliability, customer service and
    uniqueness.  I turned work and inspiration into a booming online store.
    <br> We now serve customers around the world and are excited to be a part of fair trade in the industry.
    <v-divider />

    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        color="purple lighten-2"
        fill-dot
        left
      >
        <v-card>
          <v-card-title class="purple lighten-2">
            <v-icon
              dark
              size="42"
            >
              mdi-home-outline
            </v-icon>
            <h2 class="text-h4 white--text font-weight-light">
              Simple Store
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="10"
              >
                Founded in 2021, SimpleStore has come a long way since its inception, as beginners in this field we have tried to dedicate our time and make an obvious result.
              </v-col>
              <v-col
                class="hidden-sm-and-down text-right"
                md="2"
              >
                <v-icon size="64">
                  mdi-calendar-text
                </v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        color="cyan lighten-1"
        fill-dot
        right
      >
        <v-card>
          <v-card-title class="cyan lighten-1">
            <v-icon
              class="mr-4"
              dark
              size="42"
            >
              mdi-email-outline
            </v-icon>
            <h2 class="text-h4 white--text font-weight-light">
              Write messages
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="10"
              >
                Do you know that now you can benefit from 0% credit for 4 months without advance on all products? Write to us and we will tell you how you get the offer.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        color="red lighten-1"
        fill-dot
        left
      >
        <v-card>
          <v-card-title class="red lighten-1 justify-end">
            <h2 class="text-h4 mr-4 white--text font-weight-light">
              Call us!
            </h2>
            <v-icon
              dark
              size="42"
            >
              mdi-account-multiple-outline
            </v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                class="hidden-sm-and-down"
                md="2"
              >
                <v-icon size="64">
                  mdi-server-network
                </v-icon>
              </v-col>
              <v-col
                cols="12"
                md="10"
              >
                If you have any questions, do not hesitate to contact us at any time on the phone numbers on the contact page. We take care to answer all questions.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        color="green lighten-1"
        fill-dot
        right
      >
        <v-card>
          <v-card-title class="green lighten-1">
            <v-icon
              class="mr-4"
              dark
              size="42"
            >
              mdi-phone-in-talk
            </v-icon>
            <h2 class="text-h4 white--text font-weight-light">
              Contact us!
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col>
                We hope you enjoy our products as much as we offer you. If you have any questions or comments, please do not hesitate to contact us.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-row>
</template>
<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>