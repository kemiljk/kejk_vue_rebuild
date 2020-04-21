<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn :to="'/posts'">
          <v-icon class="mr-2">
            mdi-chevron-left
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
        <p>
          I've long been a huge fan of Dieter Rams and his extensive portfolio of work at Braun and Vitsœ.
        </p>
        <p>
          When I heard that Gary Hustwit was looking for funding to film a movie about Rams' career, I couldn't resist backing it on 
          <a 
            href="https://www.kickstarter.com/projects/1019019367/rams-the-first-feature-documentary-about-dieter-ra"
            target="_blank"
            class="teal--text"
          >
            Kickstarter.
          </a>
        </p>
        <p>
          One of the perks was to get a letterpress of the ten principles on card. This was set in a beautiful monospace font that I want to reimagine for the digital screen as a reminder of the principles I follow closely to ensure my designs are refined and focus on delivering maximum value in a minimal form.
        </p>
        <p>
          I've made this wallpaper available to download in three sizes for mobile, tablet and desktop. You can grab them below.
        </p>
      </v-col>
      <v-btn 
        color="teal" 
        class="ml-2 mb-4" 
        href="https://res.cloudinary.com/kejk/raw/upload/v1587501020/Rams-Ten-Principles-Wallpapers_z2yut7.zip"
      >
        Download all 
        <v-icon class="ml-2">
          mdi-download
        </v-icon>
      </v-btn>
      <v-col cols="12">
        <a 
          href="https://res.cloudinary.com/kejk/image/upload/v1587500606/Desktop_k8cevn.png"
          target="_blank"
        >
          <v-img 
            src="https://res.cloudinary.com/kejk/image/upload/v1587500606/Desktop_k8cevn.png" 
            class="img"
          />
        </a>
      </v-col>
      <v-col cols="6">
        <a 
          href="https://res.cloudinary.com/kejk/image/upload/v1587500605/iPhone_nqp4ev.png"
          target="_blank"
        >
          <v-img 
            src="https://res.cloudinary.com/kejk/image/upload/v1587500605/iPhone_nqp4ev.png" 
            class="img"
          />
        </a>
      </v-col>
      <v-col cols="6">
        <a 
          href="https://res.cloudinary.com/kejk/image/upload/v1587500606/iPad_qnpful.png"
          target="_blank"
        >
          <v-img 
            src="https://res.cloudinary.com/kejk/image/upload/v1587500606/iPad_qnpful.png" 
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