<template>
  <v-card
    :href="`${book.url}`"
    target="_blank"
    rel="noreferrer"
    color="transparent"
    alt="Books Karl is reading"
    flat
  >
    <v-img
      :src="`${book.img}`"
      max-width="220px"
    />
  </v-card>
</template>

<script>
export default {
  name: "Book",
  props: {
    book: {
      type: String,
      default: 'No books are loaded'
    }
  }
};
</script>