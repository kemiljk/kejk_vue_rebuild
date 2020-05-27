<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn 
          text
          @click="$router.go(-1)" 
        >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>Back
        </v-btn>
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
        >
        Dieter Rams 'Ten Principles for Good Design' Wallpaper.
        </h1>
        <h2
          class="headline font-weight-bold mb-3 mt-10"
        >
        A free minimal wallpaper of Ram's ten principles.
        </h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <p>I've long been a huge fan of Dieter Rams and his extensive portfolio of work at Braun and Vitsœ.</p>
        <p>
          When I heard that Gary Hustwit was looking for funding to film a movie about Rams' career, I couldn't resist backing it on
          <a
            href="https://www.kickstarter.com/projects/1019019367/rams-the-first-feature-documentary-about-dieter-ra"
            target="_blank"
            class="teal--text"
          >Kickstarter.</a>
        </p>
        <p>One of the perks was to get a letterpress of the ten principles on card. This was set in a beautiful font close to <a
            href="http://atipofoundry.com/fonts/archia"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >Archia</a> by Atipo (I believe it might be <a
            href="https://fonts.google.com/specimen/Space+Mono?query=space+m"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >Space Mono</a> by Colophon) that I wanted to reimagine for the digital screen as a reminder of the principles. This allowed me to have a constant reminder to ensure my designs are always refined and focus on delivering maximum value in a minimal form.</p>
        <p>I've made this wallpaper available to download in three sizes for mobile, tablet and desktop. You can grab them below. In my version, I've set this in Archia.</p>
      </v-col>
      <v-btn
        color="teal"
        class="ml-2 mb-4"
        href="https://res.cloudinary.com/kejk/raw/upload/v1590345921/Rams_Ten_Principles_Wallpapers_god3jk.zip"
      >
        Download all
        <v-icon class="ml-2">mdi-download</v-icon>
      </v-btn>
      <v-col cols="12">
        <a
          href="https://res.cloudinary.com/kejk/image/upload/v1590345853/Desktop_bwwsio.png"
          target="_blank"
        >
          <v-img
            src="https://res.cloudinary.com/kejk/image/upload/v1590345853/Desktop_bwwsio.png"
            class="img"
          />
        </a>
      </v-col>
      <v-col cols="6">
        <a
          href="https://res.cloudinary.com/kejk/image/upload/v1590345851/iPhone_uu2rlk.png"
          target="_blank"
        >
          <v-img
            src="https://res.cloudinary.com/kejk/image/upload/v1590345851/iPhone_uu2rlk.png"
            class="img"
          />
        </a>
      </v-col>
      <v-col cols="6">
        <a
          href="https://res.cloudinary.com/kejk/image/upload/v1590345852/iPad_uh3sg1.png"
          target="_blank"
        >
          <v-img
            src="https://res.cloudinary.com/kejk/image/upload/v1590345852/iPad_uh3sg1.png"
            class="img"
          />
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TenPrinciples"
};
</script>