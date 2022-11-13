<template>

  <div class="home" style="background:#F8FAFC">
    <HomeComponent/>
      <div class="row">
        <div class="col">
          <div class="container py-5" style="padding-top: 10px !important;">
            <div class="row">
              <div class="col">
                <h5 class="font-weight-bold mb-3 text-center text-lg-start" style="padding: 20px 40px 0 10px">Ofrecimientos</h5>
                <div class="card" style="background:#F2F7FC">
                  <div class="card-body">
                    <ul class="list-unstyled mb-0">
                      <li class="p-2 border-bottom" style="background-color: #eee;">
                        <a class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <img src="https://media.opticauniversitaria.es/media/wysiwyg/formas-de-cara/gafas-ovaladas.jpg" alt="avatar"
                                 class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" height="60">
                            <div class="pt-1">
                              <p class="fw-bold mb-0 names-msg">John Doe</p>
                              <p class="small text-muted">Aun estas buscando?</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <router-link to="/chat" class="btn btn-outline-secondary botton-solicitud">Ver Solicitud</router-link>
                          </div>
                        </a>
                      </li>
                      <li class="p-2 border-bottom">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp" alt="avatar"
                                 class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
                            <div class="pt-1">
                              <p class="fw-bold mb-0 names-msg">Danny Smith</p>
                              <p class="small text-muted">Yo lo tengo disponible.</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <button class="btn btn-outline-secondary botton-solicitud">Ver solicitud</button>
                          </div>
                        </a>
                      </li>
                      <li class="p-2 border-bottom">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar"
                                 class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
                            <div class="pt-1">
                              <p class="fw-bold mb-0 names-msg">Alex Steward</p>
                              <p class="small text-muted">Yo tengo uno.</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <button class="btn btn-outline-secondary botton-solicitud">Ver solicitud</button>
                          </div>
                        </a>
                      </li>
                      <li class="p-2 border-bottom">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar"
                                 class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
                            <div class="pt-1">
                              <p class="fw-bold mb-0 names-msg">Ashley Olsen</p>
                              <p class="small text-muted">Suuuper!!</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <p class="small text-muted mb-1">Yesterday</p>
                          </div>
                        </a>
                      </li>
                      <li class="p-2 border-bottom">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" alt="avatar"
                                 class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
                            <div class="pt-1">
                              <p class="fw-bold mb-0 names-msg">Kate Moss</p>
                              <p class="small text-muted">el lunes lo entrego</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <p class="small text-muted mb-1">Yesterday</p>
                          </div>
                        </a>
                      </li>
                      <li class="p-2 border-bottom">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                                 class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
                            <div class="pt-1">
                              <p class="fw-bold mb-0 names-msg">Lara Croft</p>
                              <p class="small text-muted">saleee!</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <p class="small text-muted mb-1">Yesterday</p>
                          </div>
                        </a>
                      </li>
                      <li class="p-2">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                                 class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
                            <div class="pt-1">
                              <p class="fw-bold mb-0 names-msg" style="text-decoration:none">Brad Pitt</p>
                              <p class="small text-muted">Gracias por todo!</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <p class="small text-muted mb-1">5 mins ago</p>
                            <span class="text-muted float-end"><i class="fas fa-check" aria-hidden="true"></i></span>
                          </div>
                        </a>
                      </li>
                    </ul>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
        <div class="col-6">

          <div style="width: 500px; margin-left: 170px">
            <div class="input-group mb-3">

              <input type="text" class="form-control" style="border-color: #2B0649;height: 45px; -moz-border-radius: 20px;-webkit-border-radius: 20px; position: relative;" placeholder="Buscar..." aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append w-50"  style="width: fit-content !important;position: absolute;top: 6px;">
                <i class="fas fa-search" style="left: 470px;top: 7px; position: absolute; z-index: 20000px;"></i>
              </div>
            </div>
          </div>
          <card-component/>

        </div>
        <div class="col">

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
.botton-solicitud {
  background-color: #7E8DDF;
  margin-top: 15px;
  color: white;
  border-color: transparent;

}

.names-msg{
  text-align: left;
  text-decoration: none;
}

ul {
  list-style-type: none;
}

</style>
