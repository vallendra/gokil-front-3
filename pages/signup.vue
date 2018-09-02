<template>
    <div>
        <navbar-main />
        <!-- Text above the card -->
        <div class="container text-center">
            <img class="icon" src="../assets/images/accident.png" height="75">
            <h2 class="thick">Naik motor sekarang makin enak</h2>
            <p>Silakan daftar aja dulu</p>
        </div>
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card shadow">
                <div class="card-body">
                    <form id="register" @submit.prevent="validateBeforeSubmit" method="post">
                    <transition name="fade" mode="out-in">
                        <!-- Step 1 -->
                        <div v-if="firststep" class="text-center">
                            <h3 class="content"> Kamu mau jadi apa di GO-KIL? </h3>
                            <b-form-radio-group id="selectRole"
                                buttons
                                button-variant="outline-primary"
                                size="lg"
                                name="selectRole"
                                v-model="userTypeID"
                                data-vv-as="Peran"
                                v-validate="'required'" 
                                class="control"
                                >
                                <b-form-radio value="2">
                                    <i class='fas fa-motorcycle fa-5x" fa-5x'> </i> <br/>
                                        MITRA
                                </b-form-radio>
                                <b-form-radio value="1">
                                    <i class="fa fa-user fa-5x"></i><br/>
                                    PENUMPANG
                                </b-form-radio>
                            </b-form-radio-group>
                            <div class="form-group padding-top">
                                <button @click.prevent="next()" class="btn btn-lg btn-primary btn-block icon text-uppercase" :disabled="userTypeID == null" type="submit">LANJUT</button>
                            </div>
                        </div>
                    </transition>

                    <transition name="fade" mode="out-in">
                         <div v-if="!firststep">
                            <b-alert show danger v-show="error !=null">
                                {{error}}
                            </b-alert>
                         <div class="form-group">
                        <label for="inputUsername">Username</label>
                        <input name="username" v-model="username" v-validate="'required'" :class="{'input': true, 'is-invalid': errors.has('username') }" type="text" placeholder="Masukkan username" class="form-control" data-vv-as="Username">
                        <small v-show="errors.has('username')" class="text-danger">{{ errors.first('username') }}</small>   
                        </div>

                        <div class="form-group">
                        <label for="inputEmail">Alamat Email</label>
                        <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-invalid': errors.has('email') }" type="text" placeholder="Masukkan email" class="form-control" data-vv-as="Alamat Email">
                            <small v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</small> 
                        </div>

                        <div class="form-group">
                        <label for="inputPassword">Password</label>
                        <input name="password" ref="password" v-model="password" v-validate="'required'" :class="{'input': true, 'is-invalid': errors.has('password')}" type="password" placeholder="Masukkan password" class="form-control" data-vv-as=" Password" >
                            <small v-show="errors.has('password')" class=" text-danger">{{ errors.first('password') }}</small> 
                        </div>
                        
                        <div class="form-group">
                        <label for="inputConfirmPassword">Konfirmasi password</label>
                        <input name="pw_confirm" v-validate="'required|confirmed:password'" type="password" placeholder="Masukkan password lagi" :class="{'input': true, 'is-invalid': errors.has('pw_confirm')}" class="form-control" data-vv-as="Konfirmasi password" >
                        <small v-show="errors.has('pw_confirm')" class="text-danger">{{ errors.first('pw_confirm') }}</small> 
                        </div>

                        <div class="form-group padding-top">
                        <button class="btn btn-lg btn-primary btn-block icon text-uppercase" type="submit">DAFTAR</button>
                        </div>
                    
                        <div class="text-center">
                        <small>Dengan mendaftar berarti Anda menyetujui <a href="#">Syarat dan Ketentuan</a> dan <a href="#">Kebijakan Privasi</a> kami.</small>
                        </div>
                    </div>
                    </transition>                   
                    </form>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarMain from '~/components/NavbarMain'
export default {
    data() {
        return {
            firststep: true,
            username:null,
            name:null,
            userTypeID: null,
            email:null,
            password:null,
            error:null
        }
      },
      components: {
          NavbarMain
      },
	  methods: {
        prev() {
            this.firststep = true;
        },
        next() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.firststep = false;
                }
            });
        },
        async register() {
            try {
                await this.$axios.post('/users', {
                    user: {
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        userTypeID: this.userTypeID,
                    }
                    
                })
                this.$router.push('/login')
                alert('Pendaftaran berhasil!')
                } catch (e) {
                    this.error = e.response.data.message
                    alert(this.error)
                }
        },
        validateBeforeSubmit() {
	      this.$validator.validateAll().then((result) => {
	        if (result) {
	          this.register();
	        }
	      });
	    },
	    
      },
};
</script>

