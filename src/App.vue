<template>
  <v-app :dark="$isDark">
    <v-app-bar app>
      <v-toolbar-title class="logo d-none d-sm-block">KEJK</v-toolbar-title>
      <v-toolbar-title class="logo d-sm-none">K.</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" text class="mr-1">
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
      <v-btn
        v-for="link in links"
        :key="`${link.label}--page-link`"
        class="my-2 mx-1"
        text
        :to="link.url"
      ><v-text class="font-weight-bold">{{ link.label }}</v-text></v-btn>
    </v-app-bar>
    <v-content>
      <v-responsive width="900px">
        <router-view></router-view>
      </v-responsive>
    </v-content>
    <v-footer app>
      <v-col class="text-left" cols="12">
        <v-row justify="end" no-gutters>
          <v-speed-dial v-model="fab" absolute bottom right>
            <template v-slot:activator>
              <v-btn v-model="fab" color="orange" fab>
                <v-icon v-if="fab">mdi-close</v-icon>
                <v-icon v-else>mdi-account-circle</v-icon>
              </v-btn>
            </template>
            <v-btn fab dark small color="teal" href="mailto:hi@kejk.co">
              <v-icon>mdi-email</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="light-blue"
              href="https://www.twitter.com/_kejk"
              target="_blank"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="grey"
              href="https://www.github.com/kemiljk/"
              target="_blank"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="red"
              href="https://music.apple.com/gb/album/cornerstone/1300802348"
              target="_blank"
            >
              <v-icon>mdi-music</v-icon>
            </v-btn>
          </v-speed-dial>
        </v-row>
        <strong>
          Made with
          <v-icon>mdi-vuejs</v-icon>in London.
        </strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          label: "About",
          url: "/"
        },
        {
          label: "Posts",
          url: "/posts"
        },
        {
          label: "Uses",
          url: "/uses"
        }
      ]
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>