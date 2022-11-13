<template>
  <div>
    <div>
      <div class="row">
        <div>
          <div class="panel panel-primary">
            <div class="panel-heading">
              <div class="btn-group pull-right">
                <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                  <span class="glyphicon glyphicon-chevron-down"></span>
                </button>
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
                <li class="left clearfix"><span class="chat-img pull-left">
                            <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" class="img-circle" />
                        </span>
                  <div class="chat-body clearfix">
                    <div class="header">
                      <strong class="primary-font">Jack Sparrow</strong> <small class="pull-right text-muted">
                      <span class="glyphicon glyphicon-time"></span>12 mins ago</small>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                      dolor, quis ullamcorper ligula sodales.
                    </p>
                  </div>
                </li>
                <li class="right clearfix"><span class="chat-img pull-right">
                            <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" />
                        </span>
                  <div class="chat-body clearfix">
                    <div class="header">
                      <small class=" text-muted"><span class="glyphicon glyphicon-time"></span>13 mins ago</small>
                      <strong class="pull-right primary-font">Bhaumik Patel</strong>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                      dolor, quis ullamcorper ligula sodales.
                    </p>
                  </div>
                </li>
                <li class="left clearfix"><span class="chat-img pull-left">
                            <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" class="img-circle" />
                        </span>
                  <div class="chat-body clearfix">
                    <div class="header">
                      <strong class="primary-font">Jack Sparrow</strong> <small class="pull-right text-muted">
                      <span class="glyphicon glyphicon-time"></span>14 mins ago</small>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                      dolor, quis ullamcorper ligula sodales.
                    </p>
                  </div>
                </li>
                <li class="right clearfix"><span class="chat-img pull-right">
                            <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" />
                        </span>
                  <div class="chat-body clearfix">
                    <div class="header">
                      <small class=" text-muted"><span class="glyphicon glyphicon-time"></span>15 mins ago</small>
                      <strong class="pull-right primary-font">Bhaumik Patel</strong>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                      dolor, quis ullamcorper ligula sodales.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="panel-footer">
              <div class="input-group">
                <input id="btn-input" type="text" class="form-control input-sm" placeholder="Type your message here..." />
                <span class="input-group-btn">
                   <b-button v-b-modal.modal-1>Generar Contrato</b-button>
                            <button class="btn btn-warning btn-sm" id="btn-chat">
                                Send</button>
                        </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Button trigger modal -->

    <b-modal id="modal-1" title="Contrato" @ok="handleOk" >
      <b-container fluid>
        <b-row>
          <div class="center">Objeto a prestar</div>
        </b-row>
        <b-row >
        <b-col><b-input type="text" :placeholder=pruebas></b-input></b-col>
      </b-row>
        <b-row>
          <b-col class="center">Fecha de prestamo</b-col>
          <b-col class="center">Fecha de entrega</b-col>
        </b-row>
      <b-row>
        <b-col>
          <b-input type="text"></b-input>
        </b-col>
        <b-col>
          <b-input type="text"></b-input>
        </b-col>
      </b-row>
        <b-row>
          <b-col class="center">Direccion de entrega</b-col>
        </b-row>
        <b-row >
          <b-col xs="6"><b-input type="text"></b-input></b-col>
        </b-row>
        <b-row>
          <b-col class="center">Direccion devolucion</b-col>
        </b-row>
        <b-row >
          <b-col xs="6"><b-input type="text"></b-input></b-col>
        </b-row>
        <b-row>
          <b-col class="center">Cobro por prestamo</b-col>
          <b-col class="center">Garantia</b-col>
        </b-row>
        <b-row>
        <b-col>
          <b-input ></b-input>
        </b-col>
        <b-col>
          <b-input type="text" ></b-input>
        </b-col>
        </b-row>
      </b-container>

    </b-modal >
    <router-view></router-view>
  </div>
</template>

<script>
const Web3 = require('web3');
// Variables
let web3;
let from;

// Elements

export default {
  name: "ChatView",
  data() {
    return {
      pruebas: "hola"
    }
  },
  methods: {
    handleOk: async function (bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);

        try {
          await window.ethereum.request({method: 'eth_requestAccounts'});
          

          const accounts = await web3.eth.getAccounts();

          from = accounts[0];

          account.innerText = from;
        } catch (err) {
          alert('Please accept the request');
        }
      }
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


  .chat li .chat-body p
  {
    margin: 0;
    color: #777777;
  }

  .panel .slidedown .glyphicon, .chat .glyphicon
  {
    margin-right: 5px;
  }

  .panel-body
  {
    overflow-y: scroll;
    height:800px;
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