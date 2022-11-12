<template>
  <div class="hello">
    <router-link class="dropdown-item" :to="{name: 'ChatView'}">Favoritos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>



