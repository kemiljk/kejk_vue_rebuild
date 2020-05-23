<template>
  <v-card hover :to="`${challenge.url}`" rel="noreferrer">
    <v-img :src="`${challenge.img}`" />
    <v-card-title class="subtitle-1">
      {{ challenge.title }}
      <v-spacer />
      <v-icon class="ml-4">mdi-arrow-right</v-icon>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Challenges",
  props: {
    challenge: {
      type: String
    }
  }
};
</script>