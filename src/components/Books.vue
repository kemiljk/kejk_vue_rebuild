<template>
    <v-card
        hover
        :href="`${book.url}`"
        target="_blank"
        :color="book.color"
        >
        <v-img
        :src="`${book.img}`"
        max-width="220px"
        >
        </v-img>
    </v-card>
</template>

<script>
export default {
    name: "Book",
    props: {
        book: {
            type: String
        },
    }
}
</script>