<template>
  <v-card
    hover
    :to="`${project.url}`"
    rel="noreferrer"
    @click.native="$scrollToTop"
  >
    <v-img :src="`${project.img}`" />
    <v-card-title class="subtitle-1">
      {{ project.title }}
      <v-spacer />
      <v-icon class="ml-4">
        mdi-arrow-right
      </v-icon>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Projects",
  props: {
    project: {
      type: String
    }
  }
  methods: { 
    scrollToTop() {
     window.scrollTo(0,0);
    }
  }
};
</script>