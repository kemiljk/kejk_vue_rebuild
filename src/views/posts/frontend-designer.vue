<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn :to="'/posts'">
          <v-icon class="mr-2">mdi-chevron-left</v-icon>Back
        </v-btn>
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
        >From Regular Designer to Frontend Designer.</h1>
        <h2
          class="headline font-weight-bold mb-3 mt-10"
        >What learning Vue has taught me about the future of design.</h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <p>So let's start with some background; I've been tinkering with website code since the early 2000's when MySpace was first on the scene and I was trying to customise the look of my personal MySpace page.</p>
        <p>At that time, it involved a hell of a lot of inline styling and hacking around to find out what would work and what wouldn't. Thanks to the beauty of 'View Source', it was possible to see the detail of what another person had done, pull that code, and tweak to your heart's content until you broke it again.</p>
        <p>After MySpace died and I moved on to other, less emo, things I found myself falling away from programming. That was until I started a job in healthcare leading the digital design and development of projects. This all came about organically but I was kinda out of my depth.</p>
        <p>Luckily, I had a great relationship with the core developer on our team and over time started to tinker again, this time though, in production code (mostly because I did the crappy little jobs that he liked not having to do).</p>
        <p>What I started to learn, was the magic of development-based design, or frontend design, where I would manipulate the UI (or DOM) inside the browser itself to see how I preferred things. It felt like the old days of tinkering on MySpace again.</p>
        <p>The more I did it, the more I enjoyed the experience of designing in the browser. Now, I'm not saying you should go away from using design tools (I still heavily use Adobe XD), but I am saying that understanding how to design in code is a super power that all digital designers should aim to posess.</p>
        <p>Here are the key reasons why:</p>
        <ol class="mb-3">
          <li>You can see the direct effect of a decision, in the browser, in real time</li>
          <li>You can learn the langauge of development, allowing for better cross-communication between you and your development team</li>
          <li>You can increase your output at your company, enabling developers to focus on the heavy lifting whilst you manipulate the styling in production code</li>
          <li>You can improve your ability to work independently on client projects as a freelancer</li>
        </ol>
        <p>
          The idea of the Frontend Designer
          <a
            href="https://bradfrost.com/blog/post/frontend-design/"
            target="_blank"
            class="teal--text"
          >isn't new</a> but it certainly isn't widespread either. I strongly believe that this hybrid role is the future of design and with powerful frameworks like Vue, React and Angular enabling better component-driven design, Designers understanding code is going to be more important than ever.
        </p>
        <p>
          If you're looking to evolve beyond HTML and CSS as a designer, but find JavaScript scary as hell (like I did) then check out
          <a href="https://vuejs.org/" target="_blank" class="teal--text">Vue</a> and follow their extremely powerful and easy to follow documentation.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Frontend Designer"
};
</script>