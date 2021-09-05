<script setup>
import Articles from "../components/Articles.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { firstSection, secondSection } from "../posts/allPosts.js";
</script>

<template>
  <Header />
  <main class="main-content">
    <section class="firstSection">
      <h3>Articles</h3>
      -->
      <Articles
        v-for="{ title, paragraph, img, info } in firstSection"
        :title="title"
        :paragraph="paragraph"
        :img="img"
        :info="info"
        :key="title"
      >
      </Articles>
    </section>
    <section class="secondSection">
      <Articles
        v-for="{ title, paragraph, img, info } in secondSection"
        :title="title"
        :paragraph="paragraph"
        :img="img"
        :info="info"
        :key="title"
      >
      </Articles>
    </section>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
@import "../assets/_shared.scss";

.main-content {
  border-top: 2px solid #22d3de;
  background-color: #1e272e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%2322d3de' fill-opacity='0.17'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
.firstSection {
  padding-top: 50px;
  padding-left: 50px;
  padding-bottom: 50px;
}

.secondSection {
  padding-bottom: 50px;
  padding-left: 50px;
}

%article {
  padding: 30px;
  background-color: #1e272e;
  color: #dfe6e9;
  width: 60%;

  .img {
    width: 300px;
    margin: auto;
  }
}

.article:nth-child(1) {
  margin-bottom: 60px;
}

.article {
  @extend %article;
  border: solid 3px black;
}

.interMessage {
  border-bottom: 10px solid black;
}

// footer
</style>
