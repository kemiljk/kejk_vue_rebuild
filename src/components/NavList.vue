<template>
<v-list-item class="my-2 px-4" text :to="nav.url">
    <v-list-item-content class="font-weight-medium">{{
      nav.label
    }}</v-list-item-content>
</v-list-item>
</template>

<script>
export default {
    name: "Nav",
    props: {
        nav: {
            type: String,
            default: "No nav is loaded",
        },
    },
};
</script>
