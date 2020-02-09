<template>
    <v-card
        hover
        :href="`${book.url}`"
        target="_blank">
        <v-img
        :src="`${book.img}`"
        width="220px"
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