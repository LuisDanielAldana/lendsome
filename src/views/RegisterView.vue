<template>
  <div class="register"  >
    <h1 class="title">Registrate</h1>
    <form action class="form" @submit.prevent="register">
      <label class="form-label" for="#userName">User Name:</label>
      <input
        v-model="userName"
        class="form-input"
        type="text"
        id="user"
        required
        placeholder="UserName"
      >
      <label class="form-label" for="#firstName">First Name:</label>
      <input
        v-model="firstName"
        class="form-input"
        type="text"
        id="nameFirst"
        placeholder="FirstName"
      >
      <label class="form-label" for="#lastName">Last Name:</label>
      <input
        v-model="lastName"
        class="form-input"
        type="text"
        id="nameLast"
        placeholder="LastName"
      >

      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      >
      <input  class="btn btn-primary btn-block mb-4" type="submit" value="Registrate">
      <div class="text-center">
        <p>¿Ya tienes cuenta? <router-link to="/">Inicia sesion</router-link></p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data: () => ({
    userName: "",
    firstName:"",
    lastName:"",
    password: "",
    error: false
  }),
  methods: {

  }
};
</script>

<style  scoped>
body{
  background-color: white;

}
.register {
  padding: 2rem;


}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background:white;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: black;
  margin-bottom: 0.5rem;

}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid black;
  color: black;

}
.form-submit {
  background: white;
  border: solid black;
  color: black;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;

}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>


