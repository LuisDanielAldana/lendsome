<template>
  <div class="home">
    <HomeComponent/>
      <div class="row">
        <div class="col">
          <h2>Chats</h2>
          <ul>
            <li @click="$router.push('chat')">
              <h6 id="chats">Alex Montes</h6>
            </li>
            <li >
              <h6 id="chats">Mariana Gonzalez</h6>
            </li>
          </ul>
        </div>
        <div class="col-6">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Buscar..." aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">Buscar</button>
            </div>
          </div>
          <card-component/>
        </div>
        <div class="col">
          3 of 3
        </div>
      </div>



  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";
import CardComponent from "@/components/CardComponent";

export default {
  name: "HomeView",
  components: {
    HomeComponent,
    CardComponent
  },
};
</script>

<style scoped>
#chats {
  font-weight: 400;
  font-size: 20px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
}
ul {
  list-style-type: none;
}
</style>
