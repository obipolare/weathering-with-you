<script setup>
const headerList = [
  {
    name: "home",
  },
  {
    name: "blog",
  },
];
</script>

<template>
  <header>
    <nav class="flex justify-end">
      <ul class="flex font-semibold uppercase">
        <li class="px-4 pt-8 " v-for="{name} in headerList" :key="name">
          <a
            href="/"
          >
          {{ name }}
          </a>
        </li>
      </ul>
    </nav>
    <section class="container relative grid grid-cols-1 py-24 mx-auto xl:grid-cols-2 place-items-center">
      <iframe
        class="w-full h-64 sm:h-96"
        src="https://www.youtube.com/embed/3Hq-hUH7BEw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h2 class="m-16 text-center text-7xl">Never Give up</h2>
    </section>
  </header>
</template>

<style scoped>

</style>
