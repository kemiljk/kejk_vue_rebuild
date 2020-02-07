<template>
  <v-container>
    <v-row class="text-left">
      <v-col class="mb-4" cols="12" md="8">
        <h1 class="display-1 font-weight-bold mb-3">/Uses.</h1>
        <p
          class="body-1 mb-3"
        >I use a variety of tools to get my work done on a daily basis. Being a designer and frontend developer, I have to switch between two very different but complimentary workflows.</p>
        <p
          class="body-1 mb-3"
        >As much as possible, I try to integrate these two workflows to reduce cognitive load and improve productivity.</p>
        <p
          class="body-1 mb-3"
        >I'm primarily a designer first but I learned the fundamentals of web development by hacking other peoples' MySpace pages back when that was a real thing.</p>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-4" cols="12" md="8">
        <h2 class="display font-weight-bold mb-3">Design.</h2>
        <p
          class="body-1 mb-3"
        >My design tools are simple and straightforward. I keep it lean and minimal.</p>
        <ul
          class="body-1 mb-3"
        >
        <li>Adobe XD is my design tool of choice. Its flexibility as a wireframing, prototyping and full featured design tool make it perfect for my daily needs. 
          The new collaboration beta is a little funky at the moment, but it's going to make for a solid solution when it's ready.</li>
        </ul>
        <p
          class="body-1 mb-3"
        >I'm primarily a designer first but I learned the fundamentals of web development by hacking other people's MySpace pages back when that was a real thing.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Uses",

  data() {
    return {
      links: [
        {
          label: "About",
          url: "/"
        }
      ]
    };
  }
};
</script>