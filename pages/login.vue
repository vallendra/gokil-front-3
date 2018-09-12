<template>
    <div>
        <navbar-main />
        <!-- Text above the card -->
        <div class="container text-center">
            <img class="icon" src="../assets/images/accident.png" height="75">
            <h2 class="thick">Bersedia.. Siap.. Masuk!</h2>
            <p>Silakan masuk untuk mulai</p>
        </div>
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div v-if="$auth.$state.loggedIn">
            <div class="card shadow">
             <div class="card-body">
               <div class="text-center">Masuk sebagai <strong>{{$auth.$state.user.email}}</strong></div>
               <button class="btn btn-lg btn-primary btn-block icon text-uppercase" type="submit" @click="logout">KELUAR</button>
             </div>
            </div>
          </div>
          <div v-else>
            
            
            <div class="card shadow">
              <!-- <div class="">
                <b-form-radio-group id="selectRole" 
                                    buttons 
                                    size="lg"
                                    name="selectRole"
                                    data-vv-as="Peran"
                                    v-model="userTypeID" 
                                    v-validate="'required'"
                                    class="control"
                                    button-variant="primary"
                                    >
                  <b-form-radio value="2" class="d-inline-block">
                    Masuk Sini Sebagai Driver
                  </b-form-radio>
                  <b-form-radio value="1" class="d-inline-block">
                    Masuk Sini Sebagai Customer
                  </b-form-radio>
                </b-form-radio-group>
              </div> -->
              <div>
                  <button id="button-customer" class="btn btn-lg width-50" v-bind:class="{active:customerActive, primary:customerActive}" @click="asCustomer">Masuk Sebagai Penumpang</button>
                  <button id="button-driver" class="btn btn-lg width-50" v-bind:class="{active:driverActive, primary:driverActive}" @click="asDriver">Masuk Sebagai Pengemudi</button>
              </div>
              <!-- <b-tabs>
                <b-tab title="Masuk Sebagai Penumpang" class="primary">

                </b-tab>
                <b-tab title="Masuk Sebagai Driver" class="primary">
                  
                </b-tab>
              </b-tabs> -->
              <div class="card-body">
                <b-alert show danger v-show="error !=null">
                  {{error}}
                </b-alert>
            
                <div class="form-label-group margin-top">
                  <input name="email" type="email" id="inputEmail" class="content form-control height-100" v-model="email" placeholder="Email address" required autofocus>
                  <label for="inputEmail" class="content">Email address</label>
                </div>
                <div class="form-label-group">
                  <input name="password" type="password" id="inputPassword" class="form-control height-100" v-model="password" placeholder="Password" required>
                  <label for="inputPassword">Password</label>
                </div> 
                <button class="btn btn-lg btn-primary btn-block icon text-uppercase" type="submit" @click="login">MASUK</button>
              </div>
            </div>
          </div>
          <div class="text-center info">
            <a href="/signup"><small>Belum punya akun?</small></a>
          </div>
        </div>
    </div>
</template>

<script>
import NavbarMain from '~/components/NavbarMain'
export default {
  data () {
    return {
      email: '',
      password: '',
      userTypeID: 1,
      error: null,
      customerActive: true,
      driverActive:false, 
      customerType: 'primary',
      driverType: 'secondary'
    }
  },
  components: {
      NavbarMain
  },
  methods: {
    login: function () {
      if (this.userTypeID=='') {
        alert("Pilih dulu sebagai penumpang atau pengemudi ya");
      }else if (this.userTypeID=='1') {
        alert("Anda telah masuk sebagai penumpang");
      }else if (this.userTypeID=='2') {
        alert("Anda telah masuk sebagai Pengemudi");
      }
      this.$auth.login({
        data: {
          user: {
            email: this.email,
            password: this.password
          }
        }
      }).catch(e => {this.error = e + ''})
    },
    logout: function () {
      this.$auth.logout().catch(e => {this.error = e + ''})
    },
    asDriver: function(){
      this.userTypeID= 2;
      this.customerActive = false;
      this.driverActive = true;
    },
    asCustomer: function(){
      this.userTypeID= 1;
      this.customerActive = true;
      this.driverActive = false;
    },
  }
}
</script>