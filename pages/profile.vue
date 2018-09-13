<template>
    <div class="main-wrapper bg-black">
        <div class="text-center content">
            <h1 class="text-white">Profile</h1>
            <b-card class="col-sm-9 col-md-7 col-lg-5 mx-auto bg-grey shadow text-white">
                <b-card-body>
                    <b-form @submit.prevent="validateBeforeSubmit">
                        <b-form-group>
                            <label>Nama</label>
                            <b-form-input v-bind:value="this.$auth.$state.user.name" placeholder="Masukkan nama" data-vv-name="Nama" :class="{'input': true, 'is-invalid': errors.has('name') }" v-validate="'required'" v-model="name"></b-form-input>
                            <small v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</small>   
                        </b-form-group>
                        
                        <b-form-group>
                            <label>Alamat</label>
                            <b-form-input v-bind:value="this.$auth.$state.user.address" placeholder="Masukkan alamat"  data-vv-name="Alamat" :class="{'input': true, 'is-invalid': errors.has('address') }"  v-validate="'required'" v-model="address"></b-form-input>
                            <small v-show="errors.has('address')" class="text-danger">{{ errors.first('address') }}</small>   
                        </b-form-group>

                        <b-form-group>
                            <label>Nomor telepon</label>
                            <b-form-input v-bind:value="this.$auth.$state.user.phone"  placeholder="Masukkan nomor telepon" data-vv-name="Nomor telepon" :class="{'input': true, 'is-invalid': errors.has('phone') }"  v-validate="'required'" v-model="phone"></b-form-input>
                            <small v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</small>   
                        </b-form-group>
                        
                        <button class="btn btn-lg btn-primary btn-block icon text-uppercase" type="submit">UBAH</button>

                    </b-form>
                </b-card-body>
            </b-card>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            name: null,
            address: null,
            phone: null
        }
    },
    layout: 'user',
    methods: {
        async changeProfile() {
            try {
                await this.$axios.post('/users', { //GANTI API NEMBAK KE EDIT PROFILE
                    user: {
                        name: this.name,
                        address: this.address,
                        phone: this.phone
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
	          this.changeProfile();
	        }
	      });
	    },
	    
    }
}
</script>

