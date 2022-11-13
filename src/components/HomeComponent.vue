<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light grid">
  
        <div class="grid-item-logo">
          <a href="/"><img src="../assets/lendsome.png" width="175" height="35" class="d-inline-block align-top" alt=""></a>
        </div>

        <div class="menu-items"> 
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0 grid-item" style="justify-content: right;">
            <li class="item">
              <a href="/" class="link" style="font-weight: 400; padding: 0 45px;">Inicio</a>
            </li>
            <li class="item">
              <a class="link" style="font-weight: 400; padding: 0 45px;">Mis prestamos</a>
            </li>
            <li class="item">
              <a class="link" style="font-weight: 400;padding: 0 45px;">En posesión</a>
            </li>
            <li class="item">
              <a class="link" style="font-weight: 400;padding: 0 45px;"> Soporte</a>
            </li>

          </ul>
        </div>
       <div class="grid-item-image">
        <img src="https://s.yimg.com/ny/api/res/1.2/.MQ1YM9XYAZ71GxZVIgOLg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-12/b60e4980-15f2-11ea-8ff7-66235022663d" class="imagen-chat img-circle" alt="User Avatar" />
        
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

.link:hover{
  color:grey
}
.imagen-chat{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
  }

.nav a{
  font-weight: 400;
}
.grid {
  display: grid;
  grid-template-columns: 30% 60% 10%;
  background-color: #2B0649;
  padding: 10px;
  width: 100%;
}

.menu-items{
  height: 60px;
  background: #2B0649;
  text-align: left;
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
  padding: 10px 60px;
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



