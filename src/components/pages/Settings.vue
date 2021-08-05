<template>
  <v-navigation
      v-model="drawer"
      app
  >
    <v-sheet
        color="grey lighten-4"
        class="pa-4"
    >
      <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
      >
        <v-img
            src="https://sun6-21.userapi.com/s/v1/ig2/F4R-_f5Ia7vXFeYUxdEywjVK4b5eXbqFB0SbgevjvaJRfPoAeiVjmEhYuk9fIkQBWly7Wpssn6OR_xIGJdI-OxxD.jpg?size=400x0&quality=96&crop=425,532,539,539&ava=1"
        />
      </v-avatar>

      <div>vastafi@pentalog.com</div>
      <div class="blue--text">Manage your Account
      </div>
    </v-sheet>

    <v-divider/>

    <v-treeview
        activatable
        color="warning"
        :items="items"
    ></v-treeview>

  </v-navigation>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Switch account',
      },
      {
        id: 2,
        name: 'Sing out',
      },
      {
        id: 3,
        name: 'Advanced',
        children: [
          {id: 4, name: 'Languages'},
          {id: 5, name: 'Accessibility'},
          {id: 6, name: 'System'},
        ],
      },
      {
        id: 5,
        name: 'Help',
      },
    ]
  }),
}
</script>

<style scoped>

</style>