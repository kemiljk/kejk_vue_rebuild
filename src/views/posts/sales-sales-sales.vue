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
        <h1 class="display-2 font-weight-bold mb-3 mt-10">
          Getting to yes.
        </h1>
        <h2
          class="headline font-weight-bold mb-3 mt-10"
        >
          Why designers and developers should learn the basics of sales.
        </h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <p>It’s easy to think that as a designer or developer, you’re responsible for the functionality, usability or appearance of the product you’re working on. This applies across product design, web design, architecture and even the original meaning of product design (physical product production).</p>
        <p>That is true, that is your core responsibility, but what happens when you go over-the-line with the product, when the product is finally ready for your sales team—if you have one—to go out and sell?</p>
        <p>
          If the answer is “I don’t know” then there’s a serious organisational disconnect and you’re doing yourselves a disservice. You worked for months slaving over the minute details, unit testing until you’re blue in the face, hunting down that broken
          <em>for loop</em> deep inside a component file; and yet, once that’s over you throw it over the fence to sales and start working on the next feature set.
        </p>
        <p>But how do your team sell what you’re working on? What are the things that they say to hook potential or existing customers? And why does this matter?</p>
        <p>First, let’s start with a story. Early on in my career, I was a sales person. I left University with a Masters in Fine Art but didn’t feel I was worthy of a design or development role (despite developing skills in both places for around 10 years prior) so I went from my full-time retail job at Apple to working as an Account Executive in pharmaceutical advertising. My job was to keep projects on track, win new business and keep clients happy. I was solely responsible for selling the vision of our design and development teams and ensure coordination and clarification across the board.</p>
        <p>When it came to meetings, I had to work hard to explain how something had been done, why it would take 2 months to build “that” feature and why they couldn’t have the “other” feature they wanted. Throughout that process, I learnt the intricacies and nuances of behaviour, of the complexity of communicating something widely understood by designers and developers, but deeply misunderstood by customers. I expanded skills learnt from Apple Retail about how to explain the complex in a simple way, breaking technology down to its simplest form and developing similes and metaphors for different approaches. All of this led to accurate communication and valuable insight into the customer experience.</p>
        <p>So, fast forward to now. Now I design and develop the frontend experience of products. From initial idea through to final execution. Throughout this process, I have regular touch points with our sales team to ensure that each feature is developed deeply inline with the requirements of our target market and explain why we’ve designed it one way, or developed it another. Why it can’t be exactly like that thing they showed me that one time that kind of did the same thing. Why it’s going to take six months to develop that special graph that takes data from 56 sources, runs a machine learning algorithm to extract the most valuable insights, feeds it back into the UI and generates a personalised graph in real-time with up-to-the-second data.</p>
        <p>But I also go to those meetings, sit in on those calls, talk to those potential customers and explain these things myself. Explain our UI decisions in detail. Spend hours in workshops justifying decisions and ensuring our customers see why. And in these workshops, our sales team learn. They learn how we think about design and development decisions, why we push back when we do, and how to communicate this to customers. They learn to not promise the earth and that it’ll be delivered in 2 weeks. They learn to speak in a language that is both technical and customer-centric.</p>
        <p>What happens, is both sides learn how to communicate better. With each other, with the customer, with their peers. Designers and developers learn how to sell. Sales people learn how to communicate technological ideas and not over promise.</p>
        <p>Everyone wins.</p>
        <p>Ultimately, by tightly coupling sales with the technology teams, the result is a wonderful world where all parties are working to the same goal and with the same attitudes, understanding and beliefs.</p>
        <p>
          <b>The</b> team must be
          <b>one</b> team. It’s the only way it’ll ever work.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GettingToYes"
};
</script>