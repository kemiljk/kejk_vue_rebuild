/* eslint-disable */
<template>
    <v-main class="blog-900 mt-0 pt-4">
    <v-img
      :src="blog.metadata.hero.imgix_url"
      height="240"
    />
    <v-row class="text-left pl-lg-12">
      <v-col cols="12">
        <h1 class="my-4" color="primary--text">
          {{ blog.title }}
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-left px-lg-12">
      <v-col cols="12">
        <section
          color="primary--text"
          v-html="blog.content"
          class="justify-left"
        />
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "Blog",
  props: {
    blog: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
