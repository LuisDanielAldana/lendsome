<template>
  <div>
    <home-component></home-component>
    <div>
      <div class="row">
        <div>
          <div class="panel panel-primary">
            <div class="panel-heading" style="height: 0px;">
              <div class="btn-group pull-right">
<!--                <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">-->
<!--                  <span class="glyphicon glyphicon-chevron-down"></span>-->
<!--                </button>-->
                <ul class="dropdown-menu slidedown">
                  <li><a href="http://www.jquery2dotnet.com"><span class="glyphicon glyphicon-refresh">
                            </span>Refresh</a></li>
                  <li><a href="http://www.jquery2dotnet.com"><span class="glyphicon glyphicon-ok-sign">
                            </span>Available</a></li>
                  <li><a href="http://www.jquery2dotnet.com"><span class="glyphicon glyphicon-remove">
                            </span>Busy</a></li>
                  <li><a href="http://www.jquery2dotnet.com"><span class="glyphicon glyphicon-time"></span>
                    Away</a></li>
                  <li class="divider"></li>
                  <li><a href="http://www.jquery2dotnet.com"><span class="glyphicon glyphicon-off"></span>
                    Sign Out</a></li>
                </ul>
              </div>
            </div>
            <div class="panel-body">
              <ul class="chat">
                <li class="left clearfix" style="display:flex;padding-left: 20px;"><span class="chat-img pull-left">
                            <img src="https://media.opticauniversitaria.es/media/wysiwyg/formas-de-cara/gafas-ovaladas.jpg" class="imagen-chat img-circle" alt="User Avatar" />
                        </span>
                  <div class="chat-ind chat-body clearfix" style="margin-left:20px">
                    <div class="header grid">
                      <strong class="primary-font">John Doe</strong> <small class="pull-right text-muted">
                      <span class="glyphicon glyphicon-time"></span>12 mins ago</small>
                    </div>
                    <p>
                      Que onda hermano yo te puedo prestar lo que necesitas!!
                    </p>
                  </div>
                </li>
                <li class="right clearfix" style="margin-right: 30px;text-align: right;"><span class="chat-img pull-right">
                            <img src="https://s.yimg.com/ny/api/res/1.2/.MQ1YM9XYAZ71GxZVIgOLg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-12/b60e4980-15f2-11ea-8ff7-66235022663d" style="float: right;" alt="User Avatar" class="imagen-chat img-circle" />
                        </span>
                  <div class="chat-body clearfix" >
                    <div class="header">
                      <small class=" text-muted"><span class="glyphicon glyphicon-time"></span>13 mins ago</small>
                      <strong class="pull-right primary-font"></strong>
                    </div>
                    <p>
                      De verdad? muchas graciaaaas!! jajaja te lo agardezco mucho, solo sera este fin de semana que voy de paso a la ciudad!!
                    </p>
                  </div>
                </li>
                <li class="left clearfix" style="display:flex; padding-left: 20px;"><span class="chat-img pull-left" >
                  <img src="https://media.opticauniversitaria.es/media/wysiwyg/formas-de-cara/gafas-ovaladas.jpg" class="imagen-chat img-circle" alt="User Avatar" />
                        </span>
                  <div class="chat-ind chat-body clearfix" style="margin-left:20px;">
                    <div class="header">
                      <strong class="primary-font">John Doe</strong> <small class="pull-right text-muted">
                      <span class="glyphicon glyphicon-time"></span>14 mins ago</small>
                    </div>
                    <p>
                      Si no te preocupes! tu me dices para alistartelo! 
                    </p>
                  </div>
                </li>
                <li class="right clearfix" style="margin-right: 30px;text-align: right;"><span class="chat-img pull-right">
                            <img src="https://s.yimg.com/ny/api/res/1.2/.MQ1YM9XYAZ71GxZVIgOLg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-12/b60e4980-15f2-11ea-8ff7-66235022663d" alt="User Avatar"  style="float: right;" class="imagen-chat img-circle" />
                        </span>
                  <div class="chat-body clearfix" >
                    <div class="header">
                      <small class=" text-muted"><span class="glyphicon glyphicon-time"></span>15 mins ago</small>
                      <strong class="pull-right primary-font"></strong>
                    </div>
                    <p>
                      Vavava deja me aviento el Contrato:)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="panel-footer">
              <div class="input-chat input-group" style="background:#ECF6F9;height: 100%;">
                <input id="btn-input" type="text" style="height: 45px; -moz-border-radius: 20px;-webkit-border-radius: 20px;" class="form-control input-sm" placeholder="Type your message here..." />
                <span class="input-group-btn">

                  <a href="/"><img src="../assets/send.svg" style="padding: 0 12px 0 14px;width: 52px;height: 41px;" class="d-inline-block align-top" alt="enviar"></a>
                  <a href="/"><img src="../assets/images.svg" style="padding: 0 14px 0 12px;width: 52px;height: 41px;" class="d-inline-block align-top" alt="imagen"></a> 

                   <b-button v-b-modal.modal-1 style="height:45px;background-color: #7E8DDF;color: #fff; border-color: transparent;" @click=validarWallet>Generar Contrato</b-button>
                        </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Button trigger modal -->


    <b-modal id="modal-1" title="Vue Js Bootstrap Modal Example" @ok="GenerarContrato">
      <b-container fluid>

        <b-row>
          <div class="center" >Objeto a prestar</div>
        </b-row>
        <b-row >
        <b-col><b-input type="text" v-model="obj"></b-input></b-col>
      </b-row>
        <b-row>
          <b-col class="center">Fecha de entrega</b-col>
          <b-col class="center">Fecha de devolucion</b-col>
        </b-row>
      <b-row>
        <b-col>
          <b-input type="date" v-model="fechaE" :value = "fechaE"></b-input>
        </b-col>
        <b-col>
          <b-input type="date" v-model="fechaD"></b-input>
        </b-col>
      </b-row>
        <b-row>
          <b-col class="center">Direccion de entrega</b-col>
        </b-row>
        <b-row >
          <b-col xs="6"><b-input type="text" v-mdoel="direccionE"></b-input></b-col>
        </b-row>
        <b-row>
          <b-col class="center">Direccion devolucion</b-col>
        </b-row>
        <b-row >
          <b-col xs="6"><b-input type="text" v-mdoel="direccionD"></b-input></b-col>
        </b-row>
        <b-row>
          <b-col class="center">Prestador</b-col>
          <b-col class="center">Garantia</b-col>
        </b-row>
        <b-row>
        <b-col>
          <b-input type="text"></b-input>
        </b-col>
        <b-col>
          <b-input type="number" v-mdoel="garantia"></b-input>
        </b-col>
        </b-row>
      </b-container>
    </b-modal>
    <router-view></router-view>
  </div>
</template>

<script>

import HomeComponent from "@/components/HomeComponent.vue";
import { ethers } from "ethers";
const Web3 = require('web3');
import abi from '@/abi.json'
// Variables

export default {
    name: "ChatView",
    components: {
      HomeComponent,
    },
  data() {
  return {
  to:"",


  transactionHash:"",
  from: "",
      obj:"",
      fechaE:"",
      fechaD:"",
      direccionE:"",
      direccionD:"",
    delegates:"",
    prestador:"",
    garantia:0
  }
},
  mounted() {
  this.fechaE = new Date().toJSON().slice(0, 10);
},
  methods: {
  validarWallet: async function () {
  // Prevent modal from closing

  // Trigger submit handler
  if (window.ethereum) {
  let web3 = new Web3(window.ethereum);


  try {
   web3 = await window.ethereum.request({method: 'eth_requestAccounts'});
  this.from = web3[0];
  window.localStorage.setItem('wallet',this.from)
  console.log(this.from)


} catch (err) {
  alert('Please accept the request');
}
}
},
  GenerarContrato: async function (bvModalEvent) {
    let address = "0xC2B9Acb048476f410aB9c9Ed75BEC902408775f0"

  bvModalEvent.preventDefault()
   const wallet = window.localStorage.getItem('wallet');
    console.log("aqui"+wallet)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
  var contract = new ethers.Contract( address , abi , provider.getSigner() )
    console.log(abi)
    await contract.setData(this.garantia,
        wallet,
        address)
    const setClient = await contract.estimateGas.setSenderData( this.obj,
        this.fechaE,
        this.fechaD,
        this.direccionE,
        this.direccionD)
    await contract.estimateGas.setReciverData(
        this.obj,
        this.fechaE,
        this.fechaD,
        this.direccionE,
        this.direccionD)
   const getter = await contract.getSenderData()
    const getter2 = await contract.populateTransaction.send()
    console.log(contract)
    console.log(getter2)
    console.log(setClient)
}
}
}

</script>


<style scoped>
  .center{
    text-align: center;
  }
  .chat
  {
    list-style: none;
    margin: 0;
    padding: 0;
    position:absolute; /*El div será ubicado con relación a la pantalla*/
    left:0px; /*A la derecha deje un espacio de 0px*/
    right:0px; /*A la izquierda deje un espacio de 0px*/
    bottom:70px;
  }

 .input-chat{
  padding: 10px 30px;
  height: 45px;
 }

  .chat li
  {
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px dotted #B3A9A9;
  }

  .chat li.left .chat-body
  {
    margin-left: 60px;
  }

  .chat li.right .chat-body
  {
    margin-right: 60px;
  }

  .chat-ind{
    text-align: left;
  }


  .chat li .chat-body p
  {
    margin: 0;
    color: #777777;
  }

  .imagen-chat{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
  }
  .panel .slidedown .glyphicon, .chat .glyphicon
  {
    margin-right: 5px;
  }

  .panel-body
  {
    overflow-y: scroll;
    height:725px;
  }

  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar
  {
    width: 12px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
</style>
