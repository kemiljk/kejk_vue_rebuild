<template>
  <v-card hover :href="`${music.url}`" :target="`${music.ext}`">
    <v-img :src="`${music.img}`"></v-img>
    <v-card-title class="subtitle-1">
      {{ music.title }}
      <v-spacer />
      <v-icon class="ml-4">mdi-open-in-new</v-icon>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Music",
  props: {
    music: {
      type: String
    }
  }
};
</script>