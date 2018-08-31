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
            <div class="card shadow">
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
                        <label>Username</label>
                        <input name="username" type="text" v-model="email" class="form-control" placeholder="Masukkan username">
                    </div>
                    <div class="form-group">
                       <label>Password</label>
                      <input name="password" class="form-control"  v-model="password" placeholder="Masukkan password" type="password">
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
      error: null
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
    },
    logout: function () {
      this.$auth.logout().catch(e => {this.error = e + ''})
    }
  }
}
</script>