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
          Moneybox design challenge.
        </h1>
        <h2 class="headline mb-3 mt-2">
          Design the Moneybox Mortgage experience
        </h2>
        <v-row class="mb-4 mt-8 text-left">
          <v-col
            cols="12"
            sm="10"
          >
            <h3>What was the challenge?</h3>
            <p>Design a product to empower people with awareness around home buying options and make the process faster & more transparent by partnering with top mortgage lenders.</p>
          </v-col>
          <v-col
            cols="12"
            sm="2"
          >
            <h3>Time</h3>
            <p><em>4 hours.</em></p>
          </v-col>
        </v-row>
        <h3 class="mb-4">
          Feature selection
        </h3>
        <ul class="mb-4">
          <li>
          Mortgage options are complicated and very similar to standard loan applications, but the reality of how much you’ll be actually spending over the course of the entire mortgage is often confusing when you account for variable rates, inflation, market forces etc.
          </li>
          <li>
          Borrowing is often referred to as debt. Whislt this is true, debt is a negative term which is particularly discouraging or offputting for young people. Most credit cards and lending services focus on using the “borrowing” language to improve the positive approach.
          </li>
        </ul>
        <h4 class="mb-4">
          My process
        </h4>
        <p class="mb-4">
          Simplify the overarching experience. Push the journey into being a staged journey that communicates the buyer’s intent throughout. Focus on first-time buyers but enable flexibility for future scenarios like remortgage situations.
        </p>
        <h4 class="mb-4">
          Focus – Mortgage Pre-planning
        </h4>
        <p class="mb-4">
          The focus of the journey I’m designing is the first-time buyer, who’s looking to obtain a mortgage for their house. This is focused on simplifying the planning phase of the journey, based on: what they’ve saved, what they want to borrow, how long they want to borrow for and what options are available to them.
        </p>
        <h4 class="mb-4">
          Rationale
        </h4>
        <p class="mb-4">
          <strong>Staging</strong><br />
          By staging the entire experience, the buyer is taken on an easy to discover, easy to understand journey where they are in control. Instead of having to hunt through reams of information, a simplified and understandable set of pages will enable easy navigation and buyer understanding.
        </p>
        <p>A persistent journey bar at the bottom will focus on telling the user where they are, what they’ve completed already and what’s coming up next.</p>
        <p>Related painpoints: Unknown journey</p>
        <p class="mb-4">
          <strong>Complexity</strong><br />
          Alongside this, at relevant stages, graphics and visuals are presented to help illustrate what certain things look like over time such as long term interest impact or how predicted salary increases could allow for overpayments to be made. Where less-known things—such as overpayments—are referenced, modals are presented to explain what it means or how it works.
        </p>
        <p>Related painpoints: Unknown journey, overwhelming options, positivity around deposit savings</p>
        <p class="mb-4">
          <strong>Simplicity</strong><br />
          Overall, the experience is simple, elegant and caters to the needs of the buyer first, whilst providing us (Moneybox) with plenty of information</p>
          <p>The final presented offers are simplified to a maximum of 3 offers, even if there are more available. We do the work to provide only the best available options. If they’re not happy with them, they can choose the “I don’t like these options” and either see more options rendered or see text that explains these are the only options we have for their situation.</p>
          <p>Related painpoints: Unknown journey, overwhelming options</p>
        <p class="mb-4">
          <strong>Future thinking</strong><br />
          Equally, these data become powerful data that we can use to train machine learning algorithms (using anonymised data), thus providing more and more accurate data to future buyers. We could also have methods and tools to keep up to date with changes in buyer situations (such as how frequently overpayments occur) to therefore improve our predictions.</p>
          <p>Like with pending Pension transfers or investment, the Mortgage experience post-application would follow a similar approach of showing the current status, what the next step is (and how long it’s likely to take) and any further steps. This then further solves the ‘unknown journey’ paintpoint.</p>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col
        v-for="image in images"
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
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4gaYooVxpuXknxV2wExBXx%2FHome-Purchase-Design%3Fnode-id%3D23%253A124%26viewport%3D624%252C323%252C0.1995733082294464%26scaling%3Dscale-down&chrome=DOCUMENTATION"
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
        "https://res.cloudinary.com/kejk/image/upload/v1592413623/walking-with-iphone-x_eftxft.jpg"
    };
  },
  mounted() {
    this.getMoneyboxImages()
  },
  methods: {
    getMoneyboxImages: function () {
      fetch('../../data/challenges/moneyboxImages.json')
        .then(response => response.json())
        .then(data => (this.images = data));
    },
  }
};
</script>