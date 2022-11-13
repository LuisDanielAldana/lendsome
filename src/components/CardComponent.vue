<template>
<div class="container">
  <div class="card">
    <b-row>
      <b-col>
        <h4>Mariana Gonzalez</h4>
        <p>Hoy a las 7:10 am</p>
      </b-col>
      <b-col> <button class="btn btn-outline-secondary center" type="button">Ofrecer Prestamo</button></b-col>
    </b-row>
    <div class="card-body">
      <p>Disculpen estoy buscando algo como esto solo por el dia de hoy, alguien que me lo pueda prestar? yo voy por el!! URGEEEEE!!</p>
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
  height: 50%
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
</style>
