<template>
  <v-card
    hover
    :href="media.metadata.url"
    target="_blank"
    rel="noreferrer"
    alt="Media Karl is enjoying"
    height="160px"
  >
  <v-row class="text-left my-auto" align="center">
    <v-col cols="5">
    <v-img
      :src="media.metadata.cover.imgix_url"
      class="img-small ml-4 my-auto"
      height="120px"
    />
    </v-col>
    <v-col cols="7">
      <v-card-text class="pt-4">
      <strong>{{ media.title }}</strong>
        <p class="pt-2 text--secondary">{{ media.metadata.subtitle }}</p>
      </v-card-text>
    </v-col>
  </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MediaCard",
  props: {
    media: {
      type: String,
      default: "No posts are loaded"
    }
  }
};
</script>