<template>
  <v-card
    hover
    :href="`${post.url}`"
    :target="`${post.ext}`"
    rel="noreferrer"
  >
    <v-img :src="`${post.img}`" />
    <v-card-title class="subtitle-1">
      {{ post.title }}
      <v-spacer />
      <v-icon
        v-if="post.extTrue"
        class="ml-4"
      >
        mdi-open-in-new
      </v-icon>
      <v-icon
        v-else
        class="ml-4"
      >
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
      type: String
    }
  }
};
</script>