<template>
    <b-card class="shadow bg-grey text-center">
        <h2 class="text-white content">Order Saat Ini :D</h2>
        <b-card class="btn-space">
            <div class="text-left">
                Nama Customer
            </div>
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
            <div>
                <h5 class="margin-top">Status: OTW Ke Masbroo</h5>
            </div>                
        </b-card>
        <div class="icon">
            <button class="btn btn-lg btn-primary btn-block  text-uppercase " @click="makeOrder">
                Sudah Sampai Tujuan
            </button>
        </div>
        
        <a class="cursor-pointer color-orange">
            <h5 class="margin-top">
                butuh bantuan?
            </h5>
        </a>
        
        
    </b-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
