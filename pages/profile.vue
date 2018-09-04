<template>
    <div class="main-wrapper bg-black">
        <div class="text-center content">
            <h1 class="text-white">Profile</h1>
            <b-card class="col-sm-9 col-md-7 col-lg-5 mx-auto bg-grey shadow text-white">
                <b-card-body>
                    <b-form>
                        <b-form-group>
                            <label>Nama</label>
                            <b-form-input placeholder="Masukan nama"></b-form-input>
                        </b-form-group>
                        
                        <b-form-group>
                            <label>Alamat</label>
                            <b-form-input placeholder="Masukan alamat"></b-form-input>
                        </b-form-group>
                        
                        <b-form-group>
                            <label>Email</label>
                            <b-form-input placeholder="Masukan email"></b-form-input>
                        </b-form-group>

                        <b-form-group>
                            <label>Nomor telepon</label>
                            <b-form-input placeholder="Masukan telepon"></b-form-input>
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
    layout: 'user',
//     async asyncData () {
//     let { data } = await this.$axios.get('/users/current')
//     return {name: data.name}
//   }
}
</script>

