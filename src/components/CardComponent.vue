<template>
<div class="container">
  <div class="card">
    <ul class="list-unstyled mb-0">
      <li class="p-2">
        <a class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar"
                 class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
            <div class="pt-1">
              <p class="fw-bold mb-0">Ashley Olsen</p>
              <p class="small text-muted texto">Hoy 7:15am</p>
            </div>
          </div>
          <div class="pt-1">
            <button class="btn btn-outline-secondary botton-solicitud">Ofrecer Prestamo</button>
          </div>
        </a>
      </li>
    </ul>

    <div class="card-body">
      Disculpen estoy buscando algo como esto solo por el dia de hoy, alguien que me lo pueda prestar? yo voy por el!! URGEEEEE!!
    </div>

    <img class="card-img-bottom" src="../assets/juego.jpg">
  </div>
</div>
</template>

<script>
export default {
  name: "CardComponent",
};
</script>

<style scoped>
.card-img-bottom {
  max-width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 50%;
  padding-top: 15px;
  max-width: 300px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.card-body {
  font-weight: 400;
  font-size: 20px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
}
.botton-solicitud {
  background-color: #7E8DDF;
  margin-top: 4px;
  color: white;
  border-color: transparent;

}
ul {
  list-style-type: none;
}
.texto {
  text-decoration: none;
}
.description {
  text-justify: inter-character;
}
</style>
