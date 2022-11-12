<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <img src="../assets/lendsome.png" width="150" height="30" class="d-inline-block align-top" alt="">
        </li>
        <li class="nav-item">
          <a class="nav-link">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Mis Prestamos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">En Posecion</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
