<template>
  <v-container>
    <v-row class="text-left">
      <v-col>
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
        >Posts.</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="post in posts" :key="`${post.id}`" cols="12" md="6">
        <Posts :post="post" class="justify-center" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* import Posts from "../components/Posts";
import postsData from "../data/posts.json"; */

export default {
  name: "Posts",
 /*  components: {
    Posts,
  },
  data() {
    return {
      posts: postsData
    };
  } */
}; 
</script>