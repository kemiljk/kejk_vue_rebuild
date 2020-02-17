<template>
  <v-container>
    <v-row class="text-left">
      <v-col>
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
          aria-label="intro to Karl"
        >/Posts.</h1>
        <h2
          class="headline font-weight-bold mt-12 mb-3"
          aria-label="intro to Karl"
        >Thoughts on development and design.</h2>
      </v-col>
    </v-row>
    <v-row class="ml-1 mr-1">
      <v-row>
        <v-col v-for="post in posts" :key="`${post.id}`" cols="12" sm="6">
          <Posts :post="post" class="justify-center" />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import Posts from "../components/Posts";
import postsData from "../data/posts.json";

export default {
  name: "Currently Thinking",
  components: {
    Posts,
  },
  data() {
    return {
      posts: postsData,
    };
  }
};
</script>
