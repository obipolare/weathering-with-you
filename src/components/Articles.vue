<script setup>
const { title, paragraph, img, info } = defineProps({
  title: String,
  paragraph: String,
  img: String,
  info: String,
});
</script>

<template>
  <article class="article">
    <h1>{{ title }}</h1>
    <p>{{ paragraph }}</p>
    <img class="img" :src="img" :alt="info" />
  </article>
</template>

<style lang="scss" scoped></style>
