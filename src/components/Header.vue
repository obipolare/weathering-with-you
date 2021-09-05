<script setup>
const headerList = [
  {
    name: "home",
  },
  {
    name: "blog",
  },
  {
    name: "contact",
  },
  {
    name: "social media",
  },
];
</script>

<template>
  <header class="header">
    <nav class="flex justify-end">
      <ul class="uppercase font-semibold flex">
        <li class="px-4 pt-8 " v-for="{name} in headerList" :key="name">
          <a
            href="/"
          >
          {{ name }}
          </a>
        </li>
      </ul>
    </nav>
    <section class="py-24 relative grid grid-cols-1 xl:grid-cols-2 place-items-center container mx-auto">
      <iframe
        class="w-full h-96"
        src="https://www.youtube.com/embed/3Hq-hUH7BEw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h2 class="m-16 text-7xl text-center">Never Give up</h2>
    </section>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-image: url("../assets/img/name.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
