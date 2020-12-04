<template>
  <v-card
    :to="`/posts/${blog.slug}`"
    rel="noreferrer"
    hover
  >
    <v-card-title class="header teal--text">
      {{ blog.title }}
      <v-spacer />
      <v-icon class="ml-4">
        mdi-arrow-right
      </v-icon>
    </v-card-title>
    <v-card-text>
      {{ blog.metadata.published | moment("DD MMM, YYYY") }}
    </v-card-text>
    <v-card-subtitle class="primary--text">
      {{ blog.metadata.snippet }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    blog: {
      type: Object,
      default: () => {}
    }
  }
};
</script>