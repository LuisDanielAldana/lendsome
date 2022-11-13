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
        <li class="nav-item">
          <router-link class="dropdown-item" :to="{name: 'ChatView'}">Favoritos</router-link>
        </li>
      </ul>
    </div>
  </nav>
  

</template>

<script>
export default {
  name: "HomePage",
};
</script>



