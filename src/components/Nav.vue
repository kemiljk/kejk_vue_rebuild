<template>
  <v-btn
    v-if="nav.ext"
    :href="`${nav.url}`"
    :target="`${nav.ext}`"
    rel="noreferrer"
    class="my-2 mx-1"
    text
  >
    <v-text class="font-weight-bold">
      {{ nav.label }}
    </v-text>
  </v-btn>
  <v-btn
    v-else
    :to="`${nav.url}`"
    :target="`${nav.ext}`"
    rel="noreferrer"
    class="my-2 mx-1"
    text
  >
    <v-text class="font-weight-bold">
      {{ nav.label }}
    </v-text>
  </v-btn>
</template>

<script>
export default {
  name: "Nav",
  props: {
    nav: {
      type: String,
      default: 'No nav is loaded'
    }
  }
};
</script>