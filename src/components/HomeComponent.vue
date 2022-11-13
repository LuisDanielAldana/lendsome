<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="grid">
        <div class="grid-item-logo">
          <img src="../assets/lendsome.png" width="175" height="35" class="d-inline-block align-top" alt="">
        </div>
        <div class="grid-item">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
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
       <div class="grid-item-image">
         <img src="../assets/avatar.png" alt="Avatar" class="avatar">
       </div>
  </div>
  </nav>

</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>

nav .navbar-nav li a{
  color: white !important;
}
.grid {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  background-color: #2B0649;
  padding: 10px;
  width: 100%;


}
.grid-item {
  /*border: 1px solid rgba(0, 0, 0, 0.8);*/
  padding: 20px;
  font-size: 25px;
  text-align: center;
  horiz-align: center;
  vertical-align: center;
}
.avatar {
  horiz-align: right;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border-color: white;
}
.grid-item-image{
  background-color: #2B0649;
  /*border: 1px solid rgba(0, 0, 0, 0.8);*/
  padding: 20px;
  font-size: 10px;
  text-align: right;
}
.grid-item-logo {
  background-color: #2B0649;
  /*border: 1px solid rgba(0, 0, 0, 0.8);*/
  padding: 20px;
  font-size: 25px;
  text-align: left;
  horiz-align: center;
  vertical-align: center;
}

</style>



