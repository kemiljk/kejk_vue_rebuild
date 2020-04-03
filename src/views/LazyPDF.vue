<template>
  <v-container>
    <v-row class="text-left">
      <v-col>
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
          aria-label="intro to Karl"
        >
        /Lazy-PDF.
        </h1>
        <h2
          class="display font-weight-bold mb-3 mt-10"
          aria-label="Karl's posts"
        >
          Simplifying the PDF process.
        </h2>
      </v-col>
      </v-row>
      <v-row class="text-left">
      <v-col class="mt-3 mb-6 py-0" cols="12" sm="6" md="4" lg="4">
        <v-card 
          href="https://res.cloudinary.com/kejk/raw/upload/v1585911201/Lazy_PDF.zip" 
          target="_blank" 
          rel="noreferrer">
          <v-img 
            alt="Kanic logo visual" 
            src="../assets/lazyPDF.webp" />
          <v-card-title class="subtitle-1">
            Lazy PDF
            <v-spacer />
            <v-icon class="ml-4">
              mdi-download
            </v-icon>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col 
        cols="12" 
        lg="8" 
        md="8" 
        sm="6"
      >
        <h3 class="mb-3">
          Lazy PDF
        </h3>
        <p class="body-1">
          I wrote a little free macOS utility that allows you to effortlessly create a PDF from a set of selected images. It's interfaceless and relies only on a Finder selection UI. This is desiged to be simple and have a low overhead to make it easier to grab a set of design files and throw them together into a PDF. It'll listen to your logical file order, so number your files if you want to order in sequence, otherwise, you can move them around afterwards in Preview. Lazy PDF respects your image sizes so doesn't try to compress everything to printable sizes, ideal for sharing work to teammates and management.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Posts from "../components/Posts";
import postsData from "../data/posts.json";
import Books from "../components/Books";
import booksData from "../data/books.json";
import Musics from "../components/Musics";
import musicsData from "../data/musics.json";

export default {
  name: "About",
  components: {
    Posts,
    Books,
    Musics
  },
  data() {
    return {
      posts: postsData,
      books: booksData,
      musics: musicsData
    };
  }
};
</script>
