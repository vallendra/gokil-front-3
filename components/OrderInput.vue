<template>
    <b-card class="shadow bg-grey text-center">
        <h2 class="text-white content">Mau kemana sekarang?</h2>
        <form>
            <div class="input-group">
                <i class="fas fa-map-marker-alt fa-2x form-control-feedback"></i>
                <GmapAutocomplete @place_changed="startPoint" class="form-control"  placeholder="Tentukan titik penjemputan"> </GmapAutocomplete>
            </div> 
            <div class="input-group">
                <i class="fas fa-map-marker-alt fa-2x form-control-feedback"></i>
                <GmapAutocomplete @place_changed="endPoint" class="form-control"  placeholder="Tentukan titik tujuan"> </GmapAutocomplete>
            </div> 
            <b-container class="bg-blue rounded text-white btn-space shadow-up">
                <div class="d-flex justify-content-around">
                    <div>
                        <div><h5>Harga</h5></div> 
                        <div><h5>Rp. 174.000</h5></div>
                    </div>
                    <div>
                        <div><h5>Jarak</h5></div>
                        <div><h5>5.1 KM</h5></div>
                    </div>
                </div>
            </b-container>                  
        </form>
        <button class="btn btn-lg btn-primary btn-block icon text-uppercase btn-space" @click="makeOrder">PESAN</button>
    </b-card>
</template>

<script>
export default {
  data() {
    return {
      startPlace: null,
      endPlace: null,
    }
  },
  mounted: function() {
      this.makeRoute();
  },
  methods: {
    makeRoute: function() {
        if (this.startPlace != null && this.endPlace != null) {
            this.$nuxt.$emit('CHANGE_ROUTE');
        } else {
            return
        }
    },
    startPoint(place) {
      console.log('startPoint dipanggil');
        this.startPlace = place
      this.$store.commit('setStart', this.startPlace)
      this.$nuxt.$emit('ADD_START');
      this.makeRoute()
    },
    endPoint(place) {
      this.endPlace = place
      this.$store.commit('setEnd', this.endPlace)
      this.makeRoute()
    },
    makeOrder: function() {
        if (this.startPlace == null || this.endPlace == null) {
            alert("Isi dulu tujuan destinasinya ya :)") 
        } else {
            this.$store.commit('nextStep');
        }
    }
    
  }
}
</script>
