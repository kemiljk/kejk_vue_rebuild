<template>
  <v-app>
    <v-app-bar app>
        <v-img 
          src="./assets/Lazy-PDF-icon.png"
          max-height="40"
          max-width="40"
          contain
        />
      <v-spacer />
      <v-btn 
        icon 
        class="mr-1" 
        alt="Toggle colour theme" 
        @click="toggleTheme">
        <v-icon v-if="this.$vuetify.theme.dark">
          mdi-white-balance-sunny
        </v-icon>
        <v-icon v-else>
          mdi-brightness-3
        </v-icon>
      </v-btn>
      <v-btn
        v-for="link in links"
        :key="`${link.label}--page-link`"
        class="my-2 mx-1"
        text
        :to="link.url"
      >
        <v-text class="font-weight-bold">
          {{ link.label }}
        </v-text>
      </v-btn>
     <v-btn
        class="my-2 mx-1"
        text
        href="https://res.cloudinary.com/kejk/raw/upload/v1585911201/Lazy_PDF.zip"
      >
        <v-text class="font-weight-bold">
          Download
        </v-text>
      </v-btn> 
    </v-app-bar>
    <v-content>
      <v-responsive width="900px">
        <router-view />
      </v-responsive>
    </v-content>
    <v-footer app>
      <v-col cols="12">
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