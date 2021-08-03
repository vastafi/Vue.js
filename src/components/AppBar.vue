<template>
  <v-app-bar
      app
      color="white"
      flat
  >
    <v-container class="py-0 fill-height">
      <v-btn
          v-for="link in links"
          :key="link.route"
          :to="link.route"
          text
      >
        {{ link.title }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-container>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-badge
            bordered
            bottom
            color="deep-purple accent-4"
            offset-x="10"
            offset-y="10"
            :left="true"
            content="5"
        >
          <v-avatar size="40"
                    v-bind="attrs"
                    v-on="on">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>

          </v-avatar>
        </v-badge>

      </template>
      <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.route"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    links: [
      {title:'Products',route:'/products'},
      {title:'Contacts',route:'/contacts'},
      {title:'About',route:'/about'},
    ],
    items: [
      {title: 'Account',route:'/account'},
      {title: 'Cart',route:'/cart'},
      {title: 'Settings',route:'/settings'},
      {title: 'Log Out'},
    ],
  }),
}
</script>

<style scoped>

</style>