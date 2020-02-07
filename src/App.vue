<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center">
        <span class="logo">KEJK</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" text>
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
      <v-btn href="mailto:hi@kejk.co" target="_blank" text>
        Email
      </v-btn>
      <v-btn href="https://www.twitter.com/_kejk" target="_blank" text>
        Twitter
      </v-btn>
      <v-btn href="https://github.com/kemiljk" target="_blank" text>Github
      </v-btn>
      <v-btn
        href="https://music.apple.com/gb/album/cornerstone/1300802348"
        target="_blank"
        text>Music
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data() {
		return {
			links: [
				{
					label: 'About',
					url: '/'
				},
				{
					label: 'Uses',
					url: '/uses'
        }
      ]
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.image
    }
  },
};

</script>