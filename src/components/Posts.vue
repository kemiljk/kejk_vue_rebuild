<template>
    <v-card
        hover
        :href="`${post.url}`"
        target="_blank">
        <v-card-title
        class="body-2">
        {{ post.title }}
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    name: "Posts",
    props: {
        post: {
            type: String
        },
    }
}
</script>