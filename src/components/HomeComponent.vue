<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light grid">
  
        <div class="grid-item-logo">
          <a href="/"><img src="../assets/lendsome.png" width="175" height="35" class="d-inline-block align-top" alt=""></a>
        </div>

        <div class="menu-items"> 
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0 grid-item" style="justify-content: center;">
            <li class="item">
              <a class="link" style="font-weight: 400;">Inicio</a>
            </li>
            <li class="item">
              <a class="link" style="font-weight: 400;">Mis prestamos</a>
            </li>
            <li class="item">
              <a class="link" style="font-weight: 400;">En posesión</a>
            </li>

          </ul>
        </div>
       <div class="grid-item-image">
         <img src="../assets/avatar.png" alt="Avatar" class="avatar">
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


.nav a{
  font-weight: 400;
}
.grid {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  background-color: #2B0649;
  padding: 10px;
  width: 100%;
}

.menu-items{
  height: 60px;
  background: #2B0649;
  text-align: center;
  padding-top: 15px;
  font-weight: 400;
}
.link{
  padding: 0px 25px;
  text-decoration: none;
  font-weight: 400px;
}
.grid-item {
  /*border: 1px solid rgba(0, 0, 0, 0.8);*/
  
  font-size: 16px;
  text-align: center;
  horiz-align: center;
  vertical-align: center;
}
.avatar {
  horiz-align: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-color: white;
}
.grid-item-image{
  padding: 10px 10px;
  background-color: #2B0649;
  /*border: 1px solid rgba(0, 0, 0, 0.8);*/
  height: 60px;
  font-size: 10px;
  text-align: right;
}
.grid-item-logo {
  background-color: #2B0649;
  /*border: 1px solid rgba(0, 0, 0, 0.8);*/
  padding: 10px 0 0 20px;
  height: 60px;
  font-size: 25px;
  text-align: left;
  horiz-align: center;
  vertical-align: center;
}

</style>



