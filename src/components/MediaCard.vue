<template>
  <v-card
    hover
    :href="media.metadata.url"
    target="_blank"
    rel="noreferrer"
    alt="Media Karl is enjoying"
  >
  <v-row class="text-left">
    <v-col cols="5">
    <v-img
      :src="media.metadata.cover.imgix_url"
      class="img ml-4"
      height="120px"
    />
    </v-col>
    <v-col cols="7">
      <v-card-text class="mt-0 pt-0">
      <strong>{{ media.title }}</strong>
      </v-card-text>
      <v-card-text>
        {{ media.metadata.subtitle }}
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
      type: Object,
      default: () => {}
    }
  }
};
</script>