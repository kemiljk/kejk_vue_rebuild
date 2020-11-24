<template>
  <v-card
    v-if="post.extTrue"
    :href="`${post.url}`"
    :target="`${post.ext}`"
    rel="noreferrer"
    hover
  >
    <v-img :src="`${post.img}`" height="732" />
    <v-card-title class="subtitle-1">
      {{ post.title }}
      <v-spacer />
      <v-icon class="ml-4">
        mdi-open-in-new
      </v-icon>
    </v-card-title>
  </v-card>
  <v-card
    v-else
    :to="`${post.url}`"
    :target="`${post.ext}`"
    rel="noreferrer"
    hover
  >
    <v-img :src="`${post.img}`" height="732" />
    <v-card-title class="subtitle-1">
      {{ post.title }}
      <v-spacer />
      <v-icon class="ml-4">
        mdi-arrow-right
      </v-icon>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Posts",
  props: {
    post: {
      type: String,
      default: 'No posts are loaded'
    }
  }
};
</script>