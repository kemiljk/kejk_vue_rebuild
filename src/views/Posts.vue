<template>
  <v-container>
    <v-row class="text-left ml-1 mr-1">
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
          aria-label="intro to Karl"
        >
          /Posts.
        </h1>
        <h2
          class="display font-weight-bold mb-3 mt-10"
          aria-label="Karl's posts"
        >
          Thoughts on development and design.
        </h2>
      </v-col>
    </v-row>
    <v-row class="mt-3 mb-5">
      <v-col
        v-for="post in posts"
        :key="`${post.id}`"
        cols="12"
        sm="6"
      >
        <Posts
          :post="post"
          class="justify-center"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Posts from "../components/Posts";
import postsData from "../data/posts.json";

export default {
  name: "CurrentlyThinking",
  components: {
    Posts
  },
  data() {
    return {
      posts: postsData
    };
  }
};
</script>
