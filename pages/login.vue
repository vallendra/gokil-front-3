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
               <button class="btn btn-lg btn-primary btn-block icon text-uppercase" type="submit" @click="this.$router.push('/dashboard')">DASHBOARD</button>
               <button class="btn btn-lg btn-secondary icon" @click="logout">KELUAR</button>
             </div>
                <div class="card-body">
                  <div v-if="$auth.$state.loggedIn">
                     <div class="text-center">Masuk sebagai <strong>{{$auth.$state.user.email}}</strong></div>
                     <button class="btn btn-lg btn-primary btn-block icon text-uppercase" type="submit" @click="logout">KELUAR</button>
                  </div>
                  <div v-else>
                    <b-alert show danger v-show="error !=null">
                        {{error}}
                    </b-alert>
                    <div class="form-group">
                        <label>Email</label>
                        <input name="email" type="text" v-model="email" class="form-control" placeholder="Masukkan email">
                    </div>
                    <div class="form-group">
                       <label>Password</label>
                      <input name="password" class="form-control"  v-model="password" placeholder="Masukkan password" type="password">
                    </div>    
                    <button class="btn btn-lg btn-primary btn-block icon text-uppercase" type="submit" @click="login">MASUK</button>
                  </div>
                </div>
            </div>
          </div>
          <div v-else>
            <div class="card shadow">
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
      driverActive:false
    }
  },
  components: {
      NavbarMain
  },
  methods: {
    login: function () {
      this.$auth.login({
        data: {
          user: {
            email: this.email,
            password: this.password
          }
        }
      }).catch(e => {this.error = e + ''})
      console.log('saya masuk')
    },

    logout: function () {
      this.$auth.logout().catch(e => {this.error = e + ''})
    }
  }
}
</script>