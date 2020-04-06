<template>
  <v-container>
    <v-row class="text-left">
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3 mt-10" aria-label="Lazy PDF product">/Lazy-PDF.</h1>
        <h2
          class="display font-weight-bold mb-3 mt-10"
          aria-label="Karl's posts"
        >Effortless and interfaceless PDF creation.</h2>
        <v-img :src="`${hero}`" class="mt-10 img" alt="image of Lazy PDF app in use" />
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col 
        class="mt-3 mb-6 py-0" 
        cols="12" 
        sm="6" 
        md="4" 
        lg="4"
      >
        <v-card href="https://www.lazypdf.tech" target="_blank" rel="noreferrer" class="mb-3">
          <v-img alt="Lazy PDF logo visual" src="../assets/lazyPDF.webp" />
          <v-card-title class="subtitle-1">
            Lazy PDF
            <v-spacer />
            <v-icon class="ml-4">
              mdi-open-in-new
            </v-icon>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col 
        cols="12" 
        lg="8" 
        md="8" 
        sm="6">
        <h3 class="mb-3">Lazy PDF</h3>
        <p
          class="body-1"
        >I wrote a little free macOS utility that allows you to effortlessly create a PDF from a set of selected images. It's interfaceless and relies only on a Finder selection UI. This is designed to be simple and have a low overhead to make it easier to grab a set of design files and throw them together into a PDF. It'll listen to your logical file order, so number your files if you want to order in sequence, otherwise, you can move them around afterwards in Preview. Lazy PDF respects your image sizes so doesn't try to compress everything to printable sizes, ideal for sharing work to teammates and management.</p>
      </v-col>
      <v-col cols="12" sm="6">
        <a 
          href="https://www.producthunt.com/posts/lazy-pdf?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-lazy-pdf" 
          target="_blank"
          class="my-2 mx-1 v-btn v-btn--contained"
        >
          <img 
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=191366&theme=light" 
            alt="Lazy PDF - Effortless and interfaceless PDF creation | Product Hunt Embed" 
            style="width: 250px; height: 54px;" 
            width="250px" 
            height="54px" 
          >
        </a>
      </v-col>
      <v-spacer />
      <v-col 
        cols="12" sm="6" 
        class="text-right"
      >
        <v-btn
          class="my-2 mx-1"
          width="250px"
          height="55px"
          style="border-radius: 10px;"
          target="_blank"
          href="https://www.lazypdf.tech/"
        >
          <v-text class="font-weight-bold title">
            Visit website
            <v-icon class="ml-4 mb-1">
              mdi-open-in-new
            </v-icon>
          </v-text>
        </v-btn> 
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col v-for="image in images" :key="`${image.id}`" cols="12">
        <v-img :src="`${image.img}`" class="img" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import lazyPDF from "./../data/lazyPDF.json";

export default {
  name: "LazyPDF",
  data() {
    return {
      images: lazyPDF,
      hero:
        "https://res.cloudinary.com/kejk/image/upload/v1585992488/macbook-pro-space-gray-on-the-wooden-table_e6bu8w.jpg",
      url: "https://res.cloudinary.com/kejk/raw/upload/v1585911201/Lazy_PDF.zip"
    };
  }
};
</script>
