<template>
    <b-card class="shadow bg-grey text-center">
        <h2 class="text-white content">Tawaran Nih!!</h2>
        <b-card class="btn-space">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fas fa-map-marker-alt color-orange"></i> </span>
                </div>
                <b-input disabled value="startPoint" class="form-control"> </b-input>
            </div> 
            <div class="input-group">
               <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fas fa-map-marker-alt color-blue"></i> </span>
                </div>
                <b-input disabled value="endPoint" class="form-control"> </b-input>
            </div> 
            <b-container class="bg-blue rounded text-white margin-top mini-content shadow-up">
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
        </b-card>
        <div class="icon">
            <b-progress :value="counter" :min="min" animated>
                <div v-if="counter==0">{{countdown}}</div>
            </b-progress>
            <button class="btn btn-lg btn-primary btn-block  text-uppercase " @click="makeOrder">
                pesan
            </button>
        </div>
        
        <a @click="prevStep" class="cursor-pointer color-orange">
            <h5 class="margin-top">
                batalkan pesanan
            </h5>
        </a>
        
        
    </b-card>
</template>

<script>
export default {
    data() {
        return {
        counter: 100,
        min:0,
        timer: null,
        startPlace: null,
        endPlace: null,
        }
    },
    mounted: function() {
        this.makeRoute();
        this.timer = setInterval(() => {
            this.counter = this.counter - 1
        }, 100)
    },
    beforeDestroy () {
        clearInterval(this.timer)
        this.timer = null
    }, 
    methods: {
        makeRoute: function() {
            if (this.startPlace != null && this.endPlace != null) {
                this.$nuxt.$emit('CHANGE_ROUTE');
            } else {
                return
            }
        },
        makeOrder: function() {
            if (this.startPlace == null || this.endPlace == null) {
                alert("Isi dulu tujuan destinasinya ya :)") 
            } else {
                this.$store.commit('nextStep');
            }
        },
        prevStep: function(){
            this.$store.commit('prevStep');
        },
        
        
    },
    computed: {
        countdown() {
            console.log("counternya 0")
            return this.prevStep;
        }  
    }
}
</script>

<style>

</style>
