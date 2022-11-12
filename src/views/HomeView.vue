<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="input-group rounded">
      <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
      <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HomeComponent.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
