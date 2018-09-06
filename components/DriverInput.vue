<template>
    <b-card class="shadow bg-grey text-white">
        <h2 class="text-center content">Siap Cari Duit?</h2>
        <form>
            <div class="input-group">
                <i class="fas fa-map-marker-alt fa-2x form-control-feedback"></i>
                <GmapAutocomplete @place_changed="startPoint" class="form-control"  placeholder="Tentukan titik penjemputan"> </GmapAutocomplete>
            </div>
            <div class="content">
                <h4>Auto-Bid</h4>
                <div class="row center-content">
                    <label class="switch" >
                        <input type="checkbox" v-model="bidValue" value="true">
                        <span class="slider round"></span>
                    </label>
                    <!-- <toggle-button :value="true" :labels="{checked: 'Foo', unchecked: 'Bar'}"/> -->
                    <!-- <label class="switch mid-content"> 
                        <input type="checkbox" checked>
                        <span class="slider round mid-content"></span>
                    </label>                     -->
                    <div class="center-content"> Aktif</div> 
                </div> 
                <div >
                    <small> Menerima order otomatis</small>
                </div>
            </div>         
        </form>
        <button @click="makeOrder" class="btn btn-lg btn-primary btn-block icon text-uppercase btn-space">PESAN</button>
        {{bidValue}}
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
        },
        makeOrder: function() {
        if (this.startPlace == null) {
            alert("Isi dulu tujuan destinasinya ya :)") 
        } else {
            this.$store.commit('nextStep');
        }
    }
    }
}
</script>

<style>

</style>
