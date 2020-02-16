<template>
  <v-card hover :href="`${post.url}`" :target="`${post.ext}`">
    <v-img :src="`${post.img}`"></v-img>
    <v-card-title class="body-2">
      {{ post.title }}
      <v-spacer />
      <v-icon class="ml-4">mdi-arrow-right</v-icon>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Posts",
  props: {
    post: {
      type: String
    }
  }
};
</script>