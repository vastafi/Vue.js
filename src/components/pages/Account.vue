<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-container>
      <v-avatar
        class="profile"
        color="grey"
        size="164"
        v-on="on"
      >
        <v-img
          src="https://sun6-21.userapi.com/s/v1/ig2/F4R-_f5Ia7vXFeYUxdEywjVK4b5eXbqFB0SbgevjvaJRfPoAeiVjmEhYuk9fIkQBWly7Wpssn6OR_xIGJdI-OxxD.jpg?size=400x0&quality=96&crop=425,532,539,539&ava=1"
        />
      </v-avatar>

      <v-card-text>
        <div class="font-weight-bold ml-8 mb-2">
          Order history
        </div>

        <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            v-for="message in messages"
            :key="message.time"
            :color="message.color"
            small
          >
            <div>
              <div class="font-weight-normal">
                <strong>{{ message.from }}</strong> @{{ message.time }}
              </div>
              <div>{{ message.message }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: "Account",
  data: () => ({
    messages: [
      {
        from: 'Today',
        message: `Canon i-SENSYS`,
        time: '8:42am',
        color: 'deep-purple lighten-1',
      },
      {
        from: 'Yesterday',
        message: 'Lenovo Vibe K5',
        time: '10:37am',
        color: 'green',
      },
      {
        from: 'Yesterday',
        message: 'Galaxy Note 20 Ultra',
        time: '9:47am',
        color: 'deep-purple lighten-1',
      },
    ],
  }),
}
</script>

<style scoped>

</style>