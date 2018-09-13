<template>
    <transition name="fade" mode="out-in">
        <form id="register" @submit.prevent="validateBeforeSubmit" method="post">
            <b-alert show danger v-show="error !=null">
                {{error}}
            </b-alert>

            <div class="form-group">
                <label for="inputName">Nama Lengkap</label>
                <input name="name" v-model="name" v-validate="'required'" :class="{'input': true, 'is-invalid': errors.has('name') }" type="text" placeholder="Masukkan nama lengkap" class="form-control" data-vv-as="Nama">
                <small v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</small>   
            </div>

            <div class="form-group">
                <label for="inputAddress">Alamat</label>
                <input name="address" v-model="address" v-validate="'required'" :class="{'input': true, 'is-invalid': errors.has('address') }" type="text" placeholder="Masukkan alamat" class="form-control" data-vv-as="Alamat">
                <small v-show="errors.has('address')" class="text-danger">{{ errors.first('address') }}</small>   
            </div>

            <div class="form-group">
                <label for="inputEmail">Alamat Email</label>
                <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-invalid': errors.has('email') }" type="text" placeholder="Masukkan email" class="form-control" data-vv-as="Alamat Email">
                <small v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</small> 
            </div>

            <div class="form-group">
                <label for="inputPhone">Nomor Telepon</label>
                <input name="phone" v-model="phone" v-validate="'required|numeric'" :class="{'input': true, 'is-invalid': errors.has('phone') }" type="numeric" placeholder="Masukkan nomor telepon" class="form-control" data-vv-as="Nomor Telepon">
                <small v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</small>   
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

            <div class="text-center">
                <button class="btn btn-secondary " @click="prev">Kembali</button>
            </div>

            <div class="form-group ">
                <button class="btn btn-lg btn-primary btn-block icon text-uppercase"  @click.prevent="validateBeforeSubmit()"  type="submit">DAFTAR</button>
            </div>

            <div class="text-center">
                <small>Dengan mendaftar berarti Anda menyetujui <a href="#">Syarat dan Ketentuan</a> dan <a href="#">Kebijakan Privasi</a> kami.</small>
            </div>
        </form>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            name:null,
            role: 'driver',
            email:null,
            password:null,
            phone:null,
            address:null,
            error:null
        }
    },
    methods:{
        prev() {
            this.$store.commit('prevFirstStep')
        },
        async register() {
            try {
                await this.$axios.post('/users', {
                    user: {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        role: this.role,
                        phone: this.phone,
                        address: this.address
                    }
                    
                })
                this.$router.push('/login')
                alert('Pendaftaran berhasil!')
                } catch (e) {
                    console.log("error nih bro")
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
    }
    
}
</script>

<style>

</style>
