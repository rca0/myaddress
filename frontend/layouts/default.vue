<template>
  <v-app dark>
    <v-navigation-drawer
      temporary
      :clipped="clipped"
      v-model="drawer"
      light
      absolute>
        <v-list>
        <v-list-tile
            value="true"
            v-for="(item, i) in items"
            :to="item.to == '#' ? '' : item.to"
            :key="i">
            <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar class="deep-blue">
    <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
      <v-toolbar-items>
          <v-btn flat dark to="/">
              Página Inicial
          </v-btn>
            <v-btn flat dark nuxt-link to="/address">
              Endereços
            </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; github.com/rca0/myaddress</span>
    </v-footer>
  </v-app>
</template>

<script src="./default.js"></script>
