<template>
    <v-card
        hover
        :href="`${post.url}`"
        >
        <v-img
        :src="`${post.img}`"
        >
        </v-img>
        <v-card-title
        class="body-2"
        >
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