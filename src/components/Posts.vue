<template>
  <v-card
    hover
    :to="`${post.url}`"
    :target="`${post.ext}`"
    rel="noreferrer"
    @click.native="$scrollToTop"
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
  },
  methods: { 
    scrollToTop() {
     window.scrollTo(0,0);
    }
  }
};
</script>