<template>
    <b-card class="shadow bg-grey text-center">
        <h2 class="text-white content">Mau kemana sekarang?</h2>
        <form>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fas fa-map-marker-alt color-orange"></i> </span>
                </div>
                <GmapAutocomplete @place_changed="startPoint" class="form-control"  placeholder="Tentukan titik penjemputan"> </GmapAutocomplete>
            </div> 
            <div class="input-group">
               <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fas fa-map-marker-alt color-blue"></i> </span>
                </div>
                <GmapAutocomplete @place_changed="endPoint" class="form-control"  placeholder="Tentukan titik tujuan"> </GmapAutocomplete>
            </div> 
            <transition name="slide-fade" mode="out-in">
                <b-container class="bg-blue rounded text-white btn-space shadow-up"  v-if="this.currentDistance != null">
                        <div class="d-flex justify-content-around" key="1">
                            <div>
                                <div><h5>Harga</h5></div> 
                                <div><h5>{{this.currentFare | currency}}</h5></div>
                            </div>
                            <div>
                                <div><h5>Jarak</h5></div>
                                <div><h5>{{this.currentDistance.text}}</h5></div>
                            </div>
                        </div>
                </b-container>   
            </transition>               
        </form>
        <button class="btn btn-lg btn-primary btn-block icon text-uppercase btn-space" @click="makeOrder">PESAN</button>
     {{this.currentStartPlace}}
    </b-card>
</template>

<script>
export default {
  data() {
    return {
      startPlace: null,
      endPlace: null,
      currentDistance: null,
      currentFare: null,
      currentStartPlace: [],
      currentEndPlace: []

    }
  },
  mounted: function() {
      this.makeRoute();
      this.$nuxt.$on('GET_DISTANCE', data => {
        this.getDistance(data);
        })
  },
  methods: {
    makeRoute: function() {
        if (this.startPlace != null && this.endPlace != null) {
            this.$nuxt.$emit('CHANGE_ROUTE');
        } else {
            return
        }
    },
    getDistance: function(distance) {
        this.currentDistance = distance
        this.currentFare = 2500*distance.value/1000 //give the base km calculation here
    },
    startPoint(place) {
      this.startPlace = place
      this.$store.commit('setStart', this.startPlace)
      this.$nuxt.$emit('ADD_MARKER', this.startPlace)
      this.makeRoute()
      this.currentStartPlace.push({formatted_address:this.startPlace.formatted_address},{location:this.startPlace.geometry.location})
    },
    endPoint(place) {
      this.endPlace = place
      this.$store.commit('setEnd', this.endPlace)
      this.$nuxt.$emit('ADD_MARKER', this.endPlace)
      this.makeRoute()
      this.currentEndPlace.push({formatted_address:this.endPlace.formatted_address},{location:this.endPlace.geometry.location})

    },
    async postOrder() {
            try {
                await this.$axios.post('/orders', {
                    order: {
                        fare: this.currentFare,
                        start_location: this.currentStartPlace,
                        end_location: this.currentEndPlace,
                        status: 'pending'
                    }
                   
                })
                this.$store.commit('nextStep');
                } catch (e) {
                    this.error = e.response.data.message
                    alert(this.error)
                }
                 
        },
    makeOrder: function() {
        if (this.startPlace == null || this.endPlace == null) {
            alert("Isi dulu tujuan destinasinya ya :)") 
        } else {
            this.postOrder();
        }
    }
    
  }
}
</script>
