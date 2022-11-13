<template>
<div>


<div class="container">
  <div class="card">
    <ul class="list-unstyled mb-0">
      <li class="p-2">
        <a class="d-flex justify-content-between">
          <div class="d-flex flex-row" style="padding: 20px 30px">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar"
                 class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
            <div class="pt-1">
              <p class="fw-bold mb-0" style="font-size:'24px'">Ashley Olsen</p>
              <p class="small text-muted texto" style="text-align: start;">Hoy 7:15am</p>
            </div>
          </div>
          <div class="pt-1">
            <b-button v-b-modal.modal-1 class="btn btn-outline-secondary botton-solicitud" >Ofrecer Prestamo</b-button>
          </div>
        </a>
      </li>
    </ul>

    <div class="card-body" style="padding:10px 50px; text-align: start;">
      Disculpen estoy buscando algo como esto solo por el dia de hoy, alguien que me lo pueda prestar? yo voy por el!! URGEEEEE!!
    </div>

    <img class="card-img-bottom" src="../assets/juego.jpg">
  </div>
  <div class="card">
    <ul class="list-unstyled mb-0">
      <li class="p-2">
        <a class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                 class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
            <div class="pt-1">
              <p class="fw-bold mb-0">Lara Croft</p>
              <p class="small text-muted texto">Ayer 1:15pm</p>
            </div>
          </div>
          <div class="pt-1">
            <button class="btn btn-outline-secondary botton-solicitud">Ofrecer Prestamo</button>
          </div>
        </a>
      </li>
    </ul>

    <div class="card-body">
      Busco una bicicleta que me puedan prestar, para el fin de semana.
    </div>

<!--    <img class="card-img-bottom" src="../assets/juego.jpg">-->
  </div>

  <div class="card">
    <ul class="list-unstyled mb-0">
      <li class="p-2">
        <a class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar"
                 class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
            <div class="pt-1">
              <p class="fw-bold mb-0">Alex Steward</p>
              <p class="small text-muted texto">20/11/2022 3:15pm</p>
            </div>
          </div>
          <div class="pt-1">
            <button class="btn btn-outline-secondary botton-solicitud">Ofrecer Prestamo</button>
          </div>
        </a>
      </li>
    </ul>

    <div class="card-body">
      Alguien tendra una sierra como la de la imagen que me pueda prestar. Me urge!!!
    </div>

        <img class="card-img-bottom" src="../assets/sierra.png">
  </div>
</div>

<b-modal id="modal-1" title="Mandar odrecimiento de prestamo" ok-title-html="Enviar ofrecimiento">
      
      <b-container fluid >
        <b-row>
          <div class="center" style="width:296px; padding-bottom: 10px;">Agrega un mensaje a tu ofrecimiento:)</div>
        </b-row>
        <b-row >
        <b-col><b-input type="text" style="height: 100px;" placeholder="Escribe tu mensaje..."></b-input></b-col>
      </b-row>
      </b-container>
    </b-modal>
    <router-view></router-view>
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
  color: white;
  border-color: transparent;
  margin: 20px 50px;
  width: 200px;
  font-size: 17px;
  height: 50px;
  font-weight: 600;

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
