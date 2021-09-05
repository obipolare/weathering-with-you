<script setup>
const headerList = [
  {
    url: "index.html",
    name: "home",
  },
  {
    url: "blog.html",
    name: "blog",
  },
  {
    url: "contact.html",
    name: "contact",
  },
  {
    url: "social-media.html",
    name: "social media",
  },
];
</script>

<template>
  <header class="header">
    <nav class="nav">
      <ul class="main-menu">
        <li class="main-menu__item" v-for="header in headerList" :key="header">
          <a
            class="main-menu__link"
            :href="header.url"
            v-text="header.name"
          ></a>
        </li>
      </ul>
    </nav>
    <div class="videoMediyak">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3Hq-hUH7BEw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h2>Just Never Give up</h2>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-image: url("../views/assets/img/name.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  .nav {
    display: flex;
    justify-content: end;
  }

  .main-menu {
    display: flex;
    margin-right: 50px;
  }

  .main-menu__item {
    padding: 15px 15px;
    list-style-type: none;
  }

  .main-menu__link {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
  }

  .videoMediyak {
    margin: 100px 100px;
    position: relative;
    display: flex;

    h2 {
      font-size: 50px;
      color: white;
      align-self: center;
      margin: 80px;
    }
  }
}
</style>
