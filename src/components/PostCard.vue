<template>
  <v-card
    :href="`${post.url}`"
    :target="`${post.ext}`"
    rel="noreferrer"
    hover
  >
    <v-card-title class="header orange--text">
      {{ post.title }}
      <v-spacer />
      <v-icon class="ml-4">
        mdi-open-in-new
      </v-icon>
    </v-card-title>
    <v-card-text>
      {{ post.published | moment("DD MMM, YYYY") }}
    </v-card-text>
    <v-card-subtitle class="primary--text text-left">
      {{ post.snippet }}
    </v-card-subtitle>
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