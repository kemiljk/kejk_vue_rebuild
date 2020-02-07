<template>
  <v-card>
    <v-card-text class="text-center">
      <div class="display-1">{{ link.title }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Links',
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>