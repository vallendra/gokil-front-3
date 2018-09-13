<template>
    <b-card class="shadow bg-grey text-white margin">
        <h2 class="text-center mid-content">Sudah Siap Cari Duit?</h2>
        <form>
            <div>
                Lokasi
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> 
                        <i class="fas fa-map-marker-alt color-orange"></i> 
                    </span>
                </div>
                <GmapAutocomplete @place_changed="startPoint" class="form-control"  placeholder="Tentukan lokasimu"> </GmapAutocomplete>
            </div>
            <div class="">
                <p>Auto-Bid</p>
                <div class="row center-content">
                    <div>
                        <label class="switch" >
                            <input type="checkbox" v-model="bidValue" value="true">
                            <span class="slider round "></span>
                        </label>
                    </div>
                    
                    <div class="center-content"> 
                        <h5 class="no-padding-margin" v-if="bidValue">
                            Aktif
                        </h5>
                        <h5 class="no-padding-margin" v-if="!bidValue">
                            Tidak Aktif
                        </h5>
                        <!-- <div> -->
                            <small> 
                                <p v-if="bidValue">
                                    Menerima order otomatis
                                </p>
                                <p v-if="!bidValue">
                                    Order Manual
                                </p>
                            </small>
                        <!-- </div> -->
                    </div> 
                </div> 
                
            </div>         
        </form>
        <button @click="makeOrder" class="btn btn-lg btn-primary btn-block icon text-uppercase btn-space">PESAN</button>
    </b-card>
</template>

<script>
export default {
    data(){
        return{
            startPlace: null,
            bidValue: false
        }
    },
    methods: {
        startPoint(place) {
            console.log('startPoint dipanggil');
            this.startPlace = place
            this.$store.commit('setStart', this.startPlace)
            this.$nuxt.$emit('ADD_START');
            this.$nuxt.$emit('ADD_MARKER', this.startPlace);
        },
        makeOrder: function() {
            if (this.startPlace == null) {
                alert("Isi dulu tujuan destinasinya ya :)") 
            } else {
                this.$store.commit('nextStep');
                // await this.$axios.get('')
            }
        }
    }
}
</script>

<style>

</style>
