<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn 
          text
          @click="$router.go(-1)" 
        >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>Back
        </v-btn>
        <v-img
          :src="`${hero}`"
          class="mt-10 img cropped"
          alt="Stint website page"
        />
        <h1 class="display-2 font-weight-bold mb-3 mt-10">
          Azure DevOps design challenge.
        </h1>
        <h2 class="headline mb-3 mt-2">
          Redesign a feature of DevOps
        </h2>
        <v-row class="mb-4 mt-8 text-left">
          <v-col
            cols="12"
            sm="10"
          >
            <h3>What was the challenge?</h3>
            <p>Re-think and redesign a single feature within Azure DevOps to showcase your skills and abilities to solve a complex problem as a designer.</p>
          </v-col>
          <v-col
            cols="12"
            sm="2"
          >
            <h3>Time</h3>
            <p><em>3 hours.</em></p>
          </v-col>
        </v-row>
        <h3 class="mb-4">
          Feature selection
        </h3>
        <p class="mb-4">
          Microsoft Azure DevOps – the contextual nature of the mysterious plus symbol at the top of the vertical side navigation.
        </p>
        <v-row class="text-left">
          <v-col
            v-for="image in images.slice(0, 2)"
            :key="`${image.id}`"
            cols="12"
          >
            <v-img
              :src="`${image.img}`"
              class="img"
            />
          </v-col>
        </v-row>
        <h4 class="mb-4">
          My process
        </h4>
        <p class="mb-4">
          The current plus button has a consistent but confusing behaviour that often leads to a lot of forgetfulness on how to access the features hidden behind it. This is an ongoing issue across my current team at NeuerEnergy. The button also doesn’t provide any simple queues or affordances to explain its featureset to a user, particularly a new user.
        </p>
        <h4 class="mb-4">
          Expectation
        </h4>
        <p class="mb-4">
          As a user, particularly a new user, based on placement and my historic experience with buttons placed next to items, I expect that the plus button’s behaviour is directly tied to the label to its left.
        </p>
        <p>Why? It’s contained by a bottom stroke into a box with the left label.</p>
        <p>The left label also happens to be the organisation name. Based on the list of features below the organisation name and the icon, my expectation as a user is for it to enable me to add a new feature below based on a predefined list (say, if Artifacts wasn’t there, I would be able to enable it/add it.</p>
        <p>The reality is, those elements are controlled within the Settings panel at the very bottom of the nav (cut off from the screenshot).</p>
        <h4 class="mb-4">
          Reality
        </h4>
        <p class="mb-4">
          So what does it actually do? Well, it’s entirely dependent on what item I have selected in the left navigation. And is even as contextually relevant to a sub item in one of those navigation sections (the plus button includes more features in the ‘Backlogs’ view of Boards, than any other section in there). This leads to an overall confusing user experience and is highly undiscoverable and immediately forgettable.
        </p>
        <h4 class="mb-4">
          A new reality
        </h4>
        <p class="mb-4">
          Context is king, so I chose to focus on adding greater affordances and context to the actions that can take place.
        </p>
        <h4 class="mb-4">
          Rationale
        </h4>
        <p class="mb-4">
          This approach offers a new paradigm whilst also maintaining some behaviour from the existing approach. This ensures that the mental models developed by current users aren’t greatly impacted by the changes and that equally, the experience is both consistent and better.
        </p>
        <p>One of the fundamentally important aspects for me is that it follows the mantra of ‘less, but better’. One that I swear by in both life and in design.</p>
        <p>I also chose to promote some page-level features up to this new nav to make them more accessible. This includes any other “create new” functions that were top level on the page but not surfaced in the original nav. This provides consistency of experience.</p>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col
        v-for="image in images.slice(2, 6)"
        :key="`${image.id}`"
        cols="12"
      >
        <v-img
          :src="`${image.img}`"
          class="img"
        />
      </v-col>
    </v-row>
    <v-row class="d-none d-md-flex">
      <h3 class="ml-3 mt-4">
        Prototype built in Figma
      </h3>
      <v-col cols="12">
        <iframe
          style="border: 1px solid rgba(0, 0, 0, 0.1); border-radius:8px;"
          width="890"
          height="650"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJAgQ0W58e62GIcegDdP6xZ%2FCMC-Task%3Fnode-id%3D7%253A572%26viewport%3D482%252C180%252C0.16739873588085175%26scaling%3Dmin-zoom%26hotspot-hints%3D0&chrome=DOCUMENTATION"
          allowfullscreen
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "CMC",
  data() {
    return {
      images: [],
      hero:
        "https://res.cloudinary.com/kejk/image/upload/v1590260460/dark-environment-with-imac_poutvu.jpg"
    };
  },
  mounted() {
    this.getCMCImages()
  },
  methods: {
    getCMCImages: function () {
      fetch('../../data/challenges/cmcImages.json')
        .then(response => response.json())
        .then(data => (this.images = data));
    },
  }
};
</script>