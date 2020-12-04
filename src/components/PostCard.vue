<template>
  <v-card
    :href="post.metadata.url"
    target="`_blank"
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
      {{ post.metadata.published | moment("DD MMM, YYYY") }}
    </v-card-text>
    <v-card-subtitle class="primary--text text-left">
      {{ post.metadata.snippet }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "Posts",
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
};
</script>